import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">Каткова</span>
              <span className="text-xl font-light text-foreground/80">Хауз</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              Уютный отель в посёлке Каткова Щель. 
              Отдых у Чёрного моря среди красивой природы.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Навигация</h4>
            <div className="space-y-2">
              <a href="#hero" className="block text-foreground/50 hover:text-foreground transition-colors text-sm">
                Начало
              </a>
              <a href="#rooms" className="block text-foreground/50 hover:text-foreground transition-colors text-sm">
                Номера
              </a>
              <a href="#amenities" className="block text-foreground/50 hover:text-foreground transition-colors text-sm">
                Удобства
              </a>
              <a href="#contact" className="block text-foreground/50 hover:text-foreground transition-colors text-sm">
                Контакты
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+79284492349"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +7 928 449-23-49
              </a>
              <a
                href="mailto:info@katkova-house.ru"
                className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@katkova-house.ru
              </a>
              <div className="flex items-start gap-2 text-foreground/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  г. Сочи, Лазаревский район,
                  <br />
                  п. Каткова щель
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/10 text-center">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Каткова Хауз. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
