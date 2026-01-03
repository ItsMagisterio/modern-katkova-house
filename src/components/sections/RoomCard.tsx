import { Button } from "@/components/ui/button";
import { Check, Tv, Wind, Bath, Users, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PriceItem {
  period: string;
  price: string;
}

interface RoomCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  prices: PriceItem[];
  isLux?: boolean;
}

const RoomCard = ({
  title,
  subtitle,
  description,
  image,
  features,
  prices,
  isLux = false,
}: RoomCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayPrices = isExpanded ? prices : prices.slice(0, 3);

  return (
    <div className={`flex flex-col bg-card rounded-2xl border border-border overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-md ${isLux ? 'border-primary/30' : ''}`}>
      {/* Image */}
      <div className="relative h-64 shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Badge */}
        {isLux && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full">
            <span className="text-sm font-bold text-primary-foreground">ЛЮКС</span>
          </div>
        )}
        
        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4 flex gap-3">
          <div className="bg-card/90 rounded-lg p-2 border border-border">
            <Tv className="w-4 h-4 text-foreground/80" />
          </div>
          <div className="bg-card/90 rounded-lg p-2 border border-border">
            <Wind className="w-4 h-4 text-foreground/80" />
          </div>
          {isLux && (
            <div className="bg-card/90 rounded-lg p-2 border border-border">
              <Bath className="w-4 h-4 text-foreground/80" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-primary font-medium mb-4">{subtitle}</p>
        <p className="text-foreground/60 mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground/70 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Prices */}
        <div className="mt-auto">
          <div className="space-y-3 p-4 bg-muted/30 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">Стоимость с человека</span>
              </div>
              {prices.length > 3 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                  data-testid={`button-toggle-prices-${title}`}
                >
                  {isExpanded ? (
                    <>Свернуть <ChevronUp className="w-3 h-3" /></>
                  ) : (
                    <>Все цены <ChevronDown className="w-3 h-3" /></>
                  )}
                </button>
              )}
            </div>
            <div className="space-y-3">
              {displayPrices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm animate-in fade-in slide-in-from-top-1 duration-200"
                >
                  <span className="text-foreground/60">{item.period}</span>
                  <span className="font-bold text-foreground whitespace-nowrap ml-2 text-right">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={isLux ? "hero" : "glass"} className="w-full" size="lg">
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Забронировать номер</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-6 py-6">
                <p className="text-center text-foreground/70">
                  Свяжитесь с нами для уточнения свободных дат и бронирования:
                </p>
                <div className="grid gap-4">
                  <a
                    href="tel:+79284492349"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground/50">Телефон</span>
                      <span className="text-lg font-bold text-foreground">+7 928 449-23-49</span>
                    </div>
                  </a>
                  <a
                    href="mailto:info@katkova-house.ru"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/10 hover:bg-secondary/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground/50">Email</span>
                      <span className="text-lg font-bold text-foreground">info@katkova-house.ru</span>
                    </div>
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
