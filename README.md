# ЖКХ Проект

## Деплой на продакшн

### Предварительные требования

Для деплоя приложения необходимо:

1. Сервер с установленными Docker и Docker Compose
2. Открытый порт 3000 на сервере (или настроенный проксирующий сервер)

### Решение проблемы с ограничением запросов Docker Hub

Если при сборке возникает ошибка вида `ERROR: 429 Too Many Requests - Server message: toomanyrequests`, необходимо выполнить авторизацию в Docker Hub:

1. Создайте бесплатный аккаунт на сайте https://hub.docker.com/
2. Авторизуйтесь в Docker Hub на сервере:

```bash
docker login
# Введите свой логин и пароль от Docker Hub
```

3. После этого можно продолжить сборку контейнера.

### Инструкция по деплою

1. Клонировать репозиторий на сервер:

```bash
git clone https://github.com/Bivekich/ckezkh.git
cd ckezkh
```

2. Запустить приложение:

```bash
docker-compose up -d --build
```

3. Приложение будет доступно по адресу http://IP_СЕРВЕРА:3000

### Обновление приложения

Для обновления приложения выполните:

```bash
git pull
docker-compose up -d --build
```

### Мониторинг логов

```bash
# Логи NextJS приложения
docker-compose logs -f
```

### Структура деплоя

- **nextjs** - контейнер с Next.js приложением

### Настройка проксирования (опционально)

Если вы хотите настроить проксирование через Nginx для домена zkh.ckeproekt.ru:

1. Установите Nginx на сервер
2. Создайте конфигурационный файл /etc/nginx/sites-available/zkh.ckeproekt.ru:

```nginx
server {
    listen 80;
    server_name zkh.ckeproekt.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Создайте символическую ссылку:

```bash
ln -s /etc/nginx/sites-available/zkh.ckeproekt.ru /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

4. Настройте DNS для домена zkh.ckeproekt.ru, указав на IP-адрес вашего сервера.

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
