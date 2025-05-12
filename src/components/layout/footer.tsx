'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ЦКЭ ЖКХ</h3>
            <p className="text-gray-300 mb-4">
              Профессиональные юридические услуги в сфере ЖКХ с гарантией
              результата
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} ЦКЭ ЖКХ. Все права защищены.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#expertise"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Судебная экспертиза
                </Link>
              </li>
              <li>
                <Link
                  href="#representation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Представительство в суде
                </Link>
              </li>
              <li>
                <Link
                  href="#analysis"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Правовой анализ документации
                </Link>
              </li>
              <li>
                <Link
                  href="#consulting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Консультации по вопросам ЖКХ
                </Link>
              </li>
              <li>
                <Link
                  href="#debt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Взыскание задолженности
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  г. Москва, ул. Ленинская Слобода, д. 19, стр. 6
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a
                  href="tel:+74952236892"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 (495) 223-68-92
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a
                  href="mailto:info@ckezkh.ru"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@ckezkh.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            Разработка сайтов:{' '}
            <a
              href="https://biveki.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              BivekiGroup biveki.ru
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
