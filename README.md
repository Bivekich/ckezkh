# ЖКХ Проект

## Деплой на продакшн

### Предварительные требования

Для деплоя приложения необходимо:

1. Сервер с установленными Docker и Docker Compose
2. Доступ к управлению DNS для домена ckeproekt.ru
3. Открытые порты 80 и 443 на сервере

### Настройка DNS

Создайте A-запись для поддомена zkh.ckeproekt.ru, указывающую на IP-адрес вашего сервера.

### Инструкция по деплою

1. Клонировать репозиторий на сервер:

```bash
git clone <url-репозитория> /path/to/app
cd /path/to/app
```

2. Настроить SSL-сертификаты с помощью Let's Encrypt:

```bash
chmod +x init-letsencrypt.sh
./init-letsencrypt.sh
```

3. Запустить приложение:

```bash
docker-compose up -d
```

4. Приложение будет доступно по адресу https://zkh.ckeproekt.ru

### Обновление приложения

Для обновления приложения выполните:

```bash
git pull
docker-compose build nextjs
docker-compose up -d
```

### Мониторинг логов

```bash
# Логи NextJS приложения
docker-compose logs -f nextjs

# Логи Nginx
docker-compose logs -f nginx
```

### Структура деплоя

- **nextjs** - контейнер с Next.js приложением
- **nginx** - веб-сервер для проксирования запросов и SSL
- **certbot** - сервис для автоматического обновления SSL-сертификатов

### Резервное копирование

Для создания резервной копии SSL-сертификатов выполните:

```bash
tar -czvf backup-ssl-$(date +%Y%m%d).tar.gz ./nginx/certbot/conf
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# ckezkh
