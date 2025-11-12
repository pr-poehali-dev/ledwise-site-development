import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 2 часов.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Lightbulb" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">LEDWISE</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" onClick={(e) => scrollToSection(e, 'catalog')} className="text-foreground hover:text-primary transition-colors cursor-pointer">Каталог</a>
            <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="text-foreground hover:text-primary transition-colors cursor-pointer">Новости</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-foreground hover:text-primary transition-colors cursor-pointer">Услуги</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-foreground hover:text-primary transition-colors cursor-pointer">Проекты</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-foreground hover:text-primary transition-colors cursor-pointer">О Компании</a>
            <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="text-foreground hover:text-primary transition-colors cursor-pointer">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+78123456789" className="hidden lg:block text-foreground font-semibold hover:text-primary transition-colors">
              +7 (812) 345-67-89
            </a>
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Профессиональное светодиодное освещение для бизнеса и производства
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Полный цикл услуг: от бесплатного аудита и проекта до монтажа и сервисного обслуживания. Снижаем ваши расходы на электроэнергию!
            </p>
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Получить бесплатный расчет экономии
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Вы теряете деньги на устаревшем освещении?
              </h2>
              <ul className="space-y-4">
                {[
                  'Растущие счета за электричество',
                  'Частая замена перегоревших ламп',
                  'Недостаточная освещенность, ведущая к ошибкам и травмам',
                  'Шум и мерцание, снижающие продуктивность сотрудников',
                  'Риск штрафов за несоблюдение норм'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Комплексное решение от LedWise — это выгодная инвестиция
              </h2>
              <ul className="space-y-4">
                {[
                  'Снижение затрат на электроэнергию до 70%',
                  'Гарантия на оборудование и работы до 5 лет',
                  'Полное соответствие ГОСТ, СанПиН и ТР ТС',
                  'Повышение безопасности и производительности труда',
                  'Бесплатный светотехнический расчет и проект'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Новости</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Новая линейка промышленных светильников',
                date: '15 октября 2024',
                description: 'Представляем серию IP67 для экстремальных условий эксплуатации'
              },
              {
                title: 'Завершен проект для логистического центра 50 000 м²',
                date: '8 октября 2024',
                description: 'Снижение энергопотребления на 68% при повышении освещенности на 40%'
              },
              {
                title: 'Получен сертификат соответствия новым стандартам',
                date: '1 октября 2024',
                description: 'Все наше оборудование соответствует обновленным требованиям безопасности'
              }
            ].map((news, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Warehouse',
                title: 'Освещение складов и производств',
                description: 'Рассчитаем и смонтируем систему освещения для любого объекта: от высоких пролетов складов до конвейерных линий. Обеспечим нормируемую освещенность, отсутствие теней и слепящего эффекта.',
                cta: 'Рассчитать стоимость для склада'
              },
              {
                icon: 'Building2',
                title: 'Освещение офисных помещений',
                description: 'Внедряем современные энергоэффективные решения, соответствующие СанПиН. Подбираем комфортную цветовую температуру, исключаем мерцание и блики. Создаем здоровую световую среду.',
                cta: 'Подобрать офисные светильники'
              },
              {
                icon: 'Trees',
                title: 'Архитектурное и парковое освещение',
                description: 'Разрабатываем и реализуем проекты наружного освещения: фасадная подсветка, освещение пешеходных зон, парковок и прилегающих территорий. Сочетаем эстетику и функциональность.',
                cta: 'Обсудить проект освещения территории'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Button className="w-full" variant="outline" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Реализованные проекты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Логистический центр "Северный"',
                area: '45 000 м²',
                savings: '72% экономии энергии',
                description: 'Комплексное освещение складских помещений с высотой потолков до 12 метров'
              },
              {
                title: 'Производственный комплекс "Балтика"',
                area: '28 000 м²',
                savings: '65% экономии энергии',
                description: 'Освещение цехов с повышенными требованиями к цветопередаче'
              },
              {
                title: 'Бизнес-центр "Невский"',
                area: '15 000 м²',
                savings: '58% экономии энергии',
                description: 'Офисные помещения класса А+ с системой управления освещением'
              },
              {
                title: 'Торговый центр "Галерея"',
                area: '32 000 м²',
                savings: '61% экономии энергии',
                description: 'Торговые залы и паркинг с архитектурной подсветкой фасадов'
              }
            ].map((project, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Ruler" size={16} />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      <Icon name="TrendingDown" size={16} />
                      {project.savings}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы снизить эксплуатационные расходы уже в этом месяце?
              </h2>
              <p className="text-lg text-gray-100">
                Оставьте заявку и получите коммерческое предложение с расчетом стоимости и точной экономии для вашего объекта в течение 2 часов.
              </p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя *</label>
                    <Input
                      required
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон / WhatsApp *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Ваш вопрос (например, площадь объекта или текущие затраты на свет)
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем объекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                    Получить КП с расчетом экономии
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Бесплатно. Без спама. Рассчитаем за 2 часа.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">О компании</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Наша экспертиза</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  LEDWISE — профессиональная компания, специализирующаяся на комплексных решениях в области промышленного и коммерческого освещения. Мы работаем на рынке Санкт-Петербурга и Северо-Западного региона.
                </p>
                <div className="space-y-3">
                  {[
                    'Более 200 реализованных проектов',
                    'Собственная инженерная служба',
                    'Аккредитованная лаборатория',
                    'Сертифицированные специалисты'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Award" size={20} className="text-primary" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Сертификаты</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'ISO 9001:2015',
                    'СРО проектирование',
                    'СРО монтаж',
                    'Сертификат ТР ТС'
                  ].map((cert, idx) => (
                    <Card key={idx} className="text-center py-6">
                      <Icon name="Award" size={40} className="mx-auto mb-2 text-primary" />
                      <p className="font-semibold text-sm">{cert}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Lightbulb" size={32} className="text-primary" />
                <span className="text-xl font-bold">LEDWISE</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Эффективное промышленное и коммерческое освещение в Санкт-Петербурге
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <nav className="space-y-2 text-sm">
                <a href="#catalog" className="block text-gray-400 hover:text-primary transition-colors">Каталог</a>
                <a href="#services" className="block text-gray-400 hover:text-primary transition-colors">Услуги</a>
                <a href="#projects" className="block text-gray-400 hover:text-primary transition-colors">Проекты</a>
                <a href="#about" className="block text-gray-400 hover:text-primary transition-colors">О компании</a>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78123456789" className="hover:text-primary transition-colors">+7 (812) 345-67-89</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@ledwise.ru" className="hover:text-primary transition-colors">info@ledwise.ru</a>
                </p>
                <p className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>Санкт-Петербург,<br />ул. Балтийская, 51</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© ООО «ЛедВайс», 2024. Все права защищены.</p>
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;