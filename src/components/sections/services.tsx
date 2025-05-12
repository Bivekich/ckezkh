'use client';

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import {
  Gavel,
  FileText,
  UserCheck,
  Scale,
  Bookmark,
  ArrowRight,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDescription: string;
  id: string;
  onViewDetails: (id: string) => void;
}

const ServiceCard = ({
  title,
  description,
  icon,
  id,
  onViewDetails,
}: ServiceProps) => {
  return (
    <Card className="h-full transition-all hover:border-blue-400 hover:-translate-y-1 bg-white shadow-md">
      <CardHeader className="bg-white">
        <div className="mb-4 p-3 rounded-full bg-blue-100 inline-block text-blue-600">
          {icon}
        </div>
        <CardTitle className="mb-2 text-blue-800">{title}</CardTitle>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2 bg-white">
        <button
          onClick={() => onViewDetails(id)}
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 font-medium bg-transparent border-none cursor-pointer p-0"
        >
          Подробнее <ArrowRight className="h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'expertise',
      title: 'Судебная экспертиза',
      description:
        'Проведение профессиональной экспертизы документов, связанных с вопросами ЖКХ, с подготовкой заключения для суда.',
      fullDescription:
        'Наша компания предоставляет услуги по проведению профессиональной судебной экспертизы документов, связанных с вопросами ЖКХ. Наши эксперты имеют большой опыт в подготовке заключений для судебных инстанций всех уровней. Мы проводим тщательный анализ всей документации, выявляем нарушения и несоответствия действующему законодательству, что позволяет нашим клиентам успешно отстаивать свои права в суде. Все заключения соответствуют требованиям законодательства и принимаются судами в качестве доказательств.',
      icon: <Gavel className="h-6 w-6" />,
    },
    {
      id: 'representation',
      title: 'Представительство в суде',
      description:
        'Полное юридическое сопровождение дела в суде любой инстанции, защита интересов клиента.',
      fullDescription:
        'Мы предлагаем полное юридическое сопровождение вашего дела в судах любой инстанции. Наши опытные юристы специализируются на делах, связанных с ЖКХ, и имеют богатый опыт успешного представления интересов как физических лиц, так и управляющих компаний. Мы берем на себя всю работу по подготовке необходимых документов, участию в судебных заседаниях, заявлению ходатайств и обжалованию судебных решений при необходимости. Наш подход ориентирован на достижение максимально благоприятного для клиента результата.',
      icon: <Scale className="h-6 w-6" />,
    },
    {
      id: 'analysis',
      title: 'Юридический анализ',
      description:
        'Анализ документации, выявление правовых нарушений и разработка стратегии решения проблемы.',
      fullDescription:
        'Наша услуга юридического анализа включает в себя комплексную проверку всей документации, связанной с вашим делом. Мы тщательно анализируем договоры, акты, квитанции и другие документы, выявляем нарушения прав и несоответствия законодательству. На основе проведенного анализа наши специалисты разрабатывают эффективную стратегию решения вашей проблемы, которая учитывает все юридические аспекты ситуации и максимально защищает ваши интересы. Наш опыт позволяет находить оптимальные решения даже в самых сложных случаях.',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      id: 'consulting',
      title: 'Консультации по ЖКХ',
      description:
        'Консультирование по вопросам законодательства в сфере ЖКХ, тарифов, прав собственников и нанимателей.',
      fullDescription:
        'Мы предоставляем профессиональные консультации по всем вопросам, связанным с жилищно-коммунальным хозяйством. Наши юристы помогут вам разобраться в сложностях законодательства, проконсультируют по вопросам формирования тарифов, разъяснят права собственников и нанимателей жилых помещений. Мы поможем вам понять ваши права и обязанности, а также подскажем, как действовать в конкретной ситуации для защиты ваших интересов. Консультации проводятся как в офисе, так и онлайн, что делает наши услуги доступными для всех клиентов.',
      icon: <UserCheck className="h-6 w-6" />,
    },
    {
      id: 'debt',
      title: 'Взыскание задолженности',
      description:
        'Правовая помощь в взыскании задолженностей по коммунальным платежам с должников.',
      fullDescription:
        'Наша компания оказывает полный комплекс услуг по взысканию задолженностей по коммунальным платежам. Мы работаем как с управляющими компаниями и ТСЖ, так и с собственниками жилья. Наши специалисты помогут подготовить все необходимые документы для досудебного урегулирования спора, а в случае необходимости - для обращения в суд. Мы контролируем весь процесс от начала до получения результата, обеспечивая максимально эффективное взыскание задолженности с соблюдением всех законных процедур.',
      icon: <Bookmark className="h-6 w-6" />,
    },
  ];

  const handleViewDetails = (id: string) => {
    setSelectedService(id);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  return (
    <Section
      id="services"
      title="Наши услуги"
      subtitle="Мы предлагаем полный спектр юридических услуг в сфере ЖКХ, защищая интересы как физических лиц, так и управляющих компаний"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            id={service.id}
            fullDescription={service.fullDescription}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                    {selectedServiceData.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    {selectedServiceData.title}
                  </h2>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="text-gray-500 hover:text-gray-700 bg-transparent border-none cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-gray-700 mb-6 leading-relaxed">
                <p>{selectedServiceData.fullDescription}</p>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCloseDetails}>Закрыть</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
