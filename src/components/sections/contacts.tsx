'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const ContactItem = ({ icon, title, description }: ContactItemProps) => {
  return (
    <div className="flex items-start">
      <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-gray-800">{title}</h3>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export function Contacts() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
  };

  return (
    <Section
      id="contacts"
      title="Контакты"
      subtitle="Свяжитесь с нами любым удобным способом или оставьте заявку, и мы перезвоним вам в ближайшее время"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactItem
            icon={<MapPin className="h-6 w-6" />}
            title="Адрес"
            description={
              <div>
                <p>г. Москва, ул. Ленинская Слобода, д. 19, стр. 6</p>
                <p className="text-sm text-gray-500 mt-1">
                  Офис 215, БЦ &ldquo;Слободской&rdquo;
                </p>
              </div>
            }
          />

          <ContactItem
            icon={<Phone className="h-6 w-6" />}
            title="Телефон"
            description={
              <div>
                <a
                  href="tel:+74952236892"
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  +7 (495) 223-68-92
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Ежедневно с 9:00 до 20:00
                </p>
              </div>
            }
          />

          <ContactItem
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            description={
              <a
                href="mailto:info@ckezkh.ru"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                info@ckezkh.ru
              </a>
            }
          />

          <ContactItem
            icon={<Clock className="h-6 w-6" />}
            title="Режим работы"
            description={
              <div>
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб: 10:00 - 17:00</p>
                <p>Вс: выходной</p>
              </div>
            }
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Оставьте заявку
          </h3>
          <p className="text-gray-600 mb-6">
            Заполните форму, и наш специалист свяжется с вами в ближайшее время
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-semibold text-gray-700 mb-2"
              >
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-base font-semibold text-gray-700 mb-2"
              >
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-semibold text-gray-700 mb-2"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="privacy"
                type="checkbox"
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="privacy"
                className="ml-2 block text-sm text-gray-600"
              >
                Я согласен на обработку персональных данных
              </label>
            </div>

            <Button type="submit" className="w-full py-3 text-base">
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
