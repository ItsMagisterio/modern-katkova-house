import { Button } from "@/components/ui/button";
import { Check, Tv, Wind, Bath, Users } from "lucide-react";

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
  return (
    <div className={`glass-card overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_hsl(25_95%_55%_/_0.3)] ${isLux ? 'border-primary/30' : ''}`}>
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
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
          <div className="glass-card p-2">
            <Tv className="w-4 h-4 text-foreground/80" />
          </div>
          <div className="glass-card p-2">
            <Wind className="w-4 h-4 text-foreground/80" />
          </div>
          {isLux && (
            <div className="glass-card p-2">
              <Bath className="w-4 h-4 text-foreground/80" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
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
        <div className="space-y-3 mb-6 p-4 bg-muted/30 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Стоимость с человека</span>
          </div>
          {prices.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-foreground/60">{item.period}</span>
              <span className="font-bold text-foreground">{item.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button variant={isLux ? "hero" : "glass"} className="w-full" size="lg">
          Забронировать
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;
