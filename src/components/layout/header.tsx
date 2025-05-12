'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-1 block md:inline-block"
      >
        {children}
      </Link>
    </li>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setPhone('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // В реальном проекте здесь был бы API запрос для отправки данных
      // Например:
      // await fetch('/api/callback', {
      //   method: 'POST',
      //   body: JSON.stringify({ phone }),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Имитация задержки для демонстрации
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Успешная отправка
      setIsSuccess(true);
      setPhone('');

      // Закрыть модальное окно через 3 секунды после успешной отправки
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-2xl text-blue-600">
                ЦКЭ ЖКХ
              </Link>
            </div>

            <div className="hidden md:block">
              <nav>
                <ul className="flex space-x-8">
                  <NavItem href="#services">Услуги</NavItem>
                  <NavItem href="#about">О компании</NavItem>
                  <NavItem href="#advantages">Преимущества</NavItem>
                  <NavItem href="#contacts">Контакты</NavItem>
                </ul>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+74952236892"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>+7 (495) 223-68-92</span>
              </a>
              <Button onClick={handleOpenModal}>Обратный звонок</Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-2 border-t">
              <nav>
                <ul className="space-y-1">
                  <NavItem href="#services">Услуги</NavItem>
                  <NavItem href="#about">О компании</NavItem>
                  <NavItem href="#advantages">Преимущества</NavItem>
                  <NavItem href="#contacts">Контакты</NavItem>
                </ul>
              </nav>
              <div className="mt-4 flex flex-col space-y-2 pb-4">
                <a
                  href="tel:+74952236892"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  <span>+7 (495) 223-68-92</span>
                </a>
                <Button className="w-full" onClick={handleOpenModal}>
                  Обратный звонок
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Модальное окно обратного звонка */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  Обратный звонок
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 bg-transparent border-none cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="header-phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Введите номер телефона
                    </label>
                    <input
                      type="tel"
                      id="header-phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Мы перезвоним вам в ближайшее время
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="bg-green-100 text-green-700 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Спасибо за заявку!
                  </h4>
                  <p className="text-gray-600">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
