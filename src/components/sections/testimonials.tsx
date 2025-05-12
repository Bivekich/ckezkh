'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
}

const Testimonial = ({ content, author, position }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative hover:shadow-lg transition-shadow"
    >
      <Quote className="absolute text-blue-100 h-12 w-12 top-4 right-4" />
      <p className="text-gray-700 mb-8 relative z-10 text-lg italic">
        {content}
      </p>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className="h-14 w-14 rounded-full overflow-hidden relative bg-blue-100 flex items-center justify-center">
            <User className="h-7 w-7 text-blue-600" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{author}</h4>
          <p className="text-sm text-blue-600">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      content:
        'Обратился в ЦКЭ ЖКХ с проблемой необоснованного повышения тарифов на коммунальные услуги. Юристы компании провели полный анализ документации и помогли добиться перерасчета. Очень благодарен за профессиональный подход!',
      author: 'Александр Иванов',
      position: 'Собственник квартиры, г. Москва',
    },
    {
      content:
        'Наше ТСЖ столкнулось с серьезными проблемами при взыскании задолженности с собственников. Специалисты ЦКЭ ЖКХ разработали эффективную стратегию и представляли наши интересы в суде. Результат превзошел все ожидания!',
      author: 'Елена Петрова',
      position: 'Председатель ТСЖ',
    },
    {
      content:
        'Выражаю огромную благодарность команде юристов ЦКЭ ЖКХ за помощь в решении длительного спора с управляющей компанией. Профессионализм, ответственность и внимание к деталям - именно то, что отличает эту компанию от других.',
      author: 'Михаил Сидоров',
      position: 'Руководитель УК',
    },
  ];

  return (
    <Section
      title="Отзывы наших клиентов"
      subtitle="Мнения людей, которые уже воспользовались нашими услугами и смогли решить свои проблемы"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            content={testimonial.content}
            author={testimonial.author}
            position={testimonial.position}
          />
        ))}
      </div>
    </Section>
  );
}
