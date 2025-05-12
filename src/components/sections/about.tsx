'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function About() {
  const features = [
    'Более 10 лет опыта в сфере юридических услуг ЖКХ',
    'Свыше 500 успешно выигранных дел в судах',
    'Команда профессиональных юристов и экспертов',
    'Индивидуальный подход к каждому клиенту',
    'Строгое соблюдение сроков и конфиденциальности',
  ];

  return (
    <Section id="about" className="bg-gray-50" title="О компании ЦКЭ ЖКХ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center"
        >
          <div className="text-gray-500 font-bold text-xl">
            Изображение о компании
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">
            Центр Комплексной Экспертизы ЖКХ — это команда
            высококвалифицированных юристов, специализирующихся на вопросах
            жилищно-коммунального хозяйства.
          </p>
          <p className="text-gray-700 mb-6">
            Мы помогаем нашим клиентам защищать свои права и интересы в спорах с
            управляющими компаниями, ресурсоснабжающими организациями и
            государственными органами. Наш подход основан на глубоком знании
            законодательства и многолетнем опыте работы в сфере ЖКХ.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg">Связаться с нами</Button>
        </motion.div>
      </div>
    </Section>
  );
}
