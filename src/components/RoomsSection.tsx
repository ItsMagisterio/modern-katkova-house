import RoomCard from "./RoomCard";
import roomLuxImage from "@/assets/room-lux.jpg";
import roomEconomyImage from "@/assets/room-economy.jpg";

const RoomsSection = () => {
  const luxRoom = {
    title: "Номера ЛЮКС",
    subtitle: "Максимальный комфорт",
    description:
      "В каждой комнате есть кондиционер, телевизор, душ, туалет, умывальник. Мы всегда встречаем гостей бесплатно!",
    image: roomLuxImage,
    features: [
      "Кондиционер в каждой комнате",
      "Телевизор и Wi-Fi",
      "Собственный душ и туалет",
      "Стиральная машина общего пользования",
      "Общая кухня с посудой",
    ],
    prices: [
      { period: "Май, Сентябрь", price: "700 ₽" },
      { period: "Июнь", price: "800 ₽" },
      { period: "Июль, Август", price: "1000 ₽" },
    ],
  };

  const economyRoom = {
    title: "Номера ЭКОНОМ",
    subtitle: "Доступный отдых",
    description:
      "В комнате есть телевизор и вентилятор. Два душа и два туалета на этаже. Идеально для бюджетного отдыха!",
    image: roomEconomyImage,
    features: [
      "Телевизор в комнате",
      "Вентилятор",
      "Душ и туалет на этаже",
      "Стиральная машина общего пользования",
      "Двойная общая кухня с посудой",
    ],
    prices: [
      { period: "Май, Сентябрь", price: "600 ₽" },
      { period: "Июнь", price: "700 ₽" },
      { period: "Июль, Август", price: "800 ₽" },
    ],
  };

  return (
    <section id="rooms" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Размещение
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Выберите <span className="gradient-text">номер</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Мы предлагаем комфортные номера на любой бюджет. Бесплатный трансфер с вокзала в Лазаревском!
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <RoomCard {...luxRoom} isLux />
          <RoomCard {...economyRoom} />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
