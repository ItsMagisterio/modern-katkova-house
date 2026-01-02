import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-sunset.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Decorative Elements - simplified for performance */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-2xl bg-primary/10 hidden lg:block" />
      <div className="absolute bottom-1/3 right-16 w-24 h-24 rounded-2xl bg-secondary/10 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-2xl bg-accent/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/90 rounded-full px-4 py-2 mb-8 border border-border animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Отдых у Чёрного моря
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="gradient-text glow-text">Каткова</span>
            <br />
            <span className="text-foreground">Щель</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Сюда приезжают те, кому нравится проводить отпуск подальше от городского шума, среди красивой природы
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-foreground/60 mb-10 animate-fade-in-up animation-delay-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg">г. Сочи, Лазаревский район</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
            <Button variant="hero" size="xl">
              Выбрать номер
            </Button>
            <Button variant="heroOutline" size="xl">
              Узнать цены
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#rooms"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors cursor-pointer animate-bounce"
      >
        <span className="text-sm font-medium">Номера</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
