import { 
  Car, 
  Utensils, 
  Wifi, 
  WashingMachine, 
  Waves, 
  TreePine 
} from "lucide-react";

const amenities = [
  {
    icon: Car,
    title: "Бесплатный трансфер",
    description: "Встречаем гостей на вокзале в Лазаревском",
  },
  {
    icon: Utensils,
    title: "Общая кухня",
    description: "Полностью оборудованная кухня с посудой",
  },
  {
    icon: Wifi,
    title: "Бесплатный Wi-Fi",
    description: "Высокоскоростной интернет на всей территории",
  },
  {
    icon: WashingMachine,
    title: "Стиральная машина",
    description: "Бесплатная стирка для всех гостей",
  },
  {
    icon: Waves,
    title: "Близость к морю",
    description: "Чистое Чёрное море в нескольких минутах",
  },
  {
    icon: TreePine,
    title: "Природа",
    description: "Красивая природа и чистый горный воздух",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Удобства
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Всё для вашего <span className="gradient-text">комфорта</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Мы позаботились о каждой детали, чтобы ваш отдых был максимально приятным
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
