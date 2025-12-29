import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";

const ContactSection = () => {
  // Координаты отеля Каткова Хауз
  const hotelCoords = "43.929700,39.329700";
  const yandexMapUrl = `https://yandex.ru/map-widget/v1/?pt=${hotelCoords},pm2rdm&z=15&l=map`;
  
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Забронируйте номер или получите консультацию по любым вопросам
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6 flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Телефон</h3>
                <a
                  href="tel:+79284492349"
                  className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
                >
                  +7 928 449-23-49
                </a>
                <p className="text-foreground/50 text-sm mt-1">
                  Звоните с 8:00 до 22:00
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                <p className="text-foreground/70">
                  Напишите нам и получите предложение с ценами
                </p>
                <Button variant="glass" size="sm" className="mt-3">
                  Написать в WhatsApp
                </Button>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:info@katkova-house.ru"
                  className="text-primary hover:opacity-80 transition-opacity"
                >
                  info@katkova-house.ru
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Адрес</h3>
                <p className="text-foreground/70">
                  г. Сочи, Лазаревский район,
                  <br />
                  п. Каткова щель,
                  <br />
                  ул. Магистральная, 26/8а
                </p>
                <a
                  href={`https://yandex.ru/maps/?pt=${hotelCoords}&z=15&l=map`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm mt-2 hover:opacity-80 transition-opacity"
                >
                  <Navigation className="w-4 h-4" />
                  Построить маршрут
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col gap-6">
            {/* Embedded Yandex Map */}
            <div className="glass-card overflow-hidden h-80 lg:h-96">
              <iframe
                src={yandexMapUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ display: 'block' }}
                title="Расположение отеля Каткова Хауз на карте"
              />
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-5">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Приезжайте к нам!
              </h3>
              <p className="text-foreground/60 mb-6 text-sm">
                Мы находимся в живописном посёлке Каткова Щель, 
                в Лазаревском районе Сочи. Бесплатно встретим вас на вокзале!
              </p>
              <Button variant="hero" size="lg" className="w-full">
                Забронировать номер
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
