'use client';

import React from 'react';
import { Section } from '@/components/ui/section';
import { Clock, Award, Shield, Users, Zap, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Advantage = ({ icon, title, description }: AdvantageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
    >
      <div className="p-3 rounded-full bg-blue-600 text-white mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export function Advantages() {
  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Опыт и экспертиза',
      description:
        'Команда опытных юристов с глубокими знаниями в области жилищного законодательства и ЖКХ',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Гарантия результата',
      description:
        'Мы берем на себя ответственность за результат и работаем до полного решения проблемы',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Оперативность',
      description:
        'Быстрое реагирование на запросы и соблюдение всех сроков по каждому делу',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Доступность 24/7',
      description:
        'Мы всегда на связи и готовы проконсультировать вас по любому вопросу',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Индивидуальный подход',
      description:
        'Разработка индивидуальной стратегии с учетом особенностей каждого случая',
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: 'Прозрачность',
      description:
        'Честное ценообразование и отсутствие скрытых платежей в нашей работе',
    },
  ];

  return (
    <Section
      id="advantages"
      title="Наши преимущества"
      subtitle="Почему сотни клиентов выбирают именно нас для решения своих юридических вопросов в сфере ЖКХ"
      className="bg-blue-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {advantages.map((advantage, index) => (
          <Advantage
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </Section>
  );
}
