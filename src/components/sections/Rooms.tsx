import RoomCard from "./RoomCard";
import roomLuxImage from "@/assets/room-lux.jpg";
import roomEconomyImage from "@/assets/room-economy.jpg";

const RoomsSection = () => {
  const luxRoom = {
    title: "Номера ЛЮКС",
    subtitle: "Максимальный комфорт",
    description:
      "В каждой комнате есть кондиционер, телевизор, душ, туалет, умывальник. Мы всегда встречаем гостей БЕСПЛАТНО на машине с вокзала в Лазаревском!",
    image: roomLuxImage,
    features: [
      "Кондиционер, ТВ, душ, туалет в номере",
      "Бесплатный трансфер с вокзала",
      "Стиральная машина общего пользования",
      "Общая кухня, посуда общего пользования",
    ],
    prices: [
      { period: "Май, Сентябрь с человека", price: "700 ₽" },
      { period: "Июнь с человека", price: "800 ₽" },
      { period: "Июль, Август с человека", price: "1000 ₽" },
      { period: "Комнаты: Май, Сентябрь 2х местный", price: "1400 ₽" },
      { period: "Комнаты: Май, Сентябрь 3х местный", price: "2100 ₽" },
      { period: "Комнаты: Май, Сентябрь 4х местный", price: "2800 ₽" },
      { period: "Комнаты: Июнь 2х местный", price: "1600 ₽" },
      { period: "Комнаты: Июнь 3х местный", price: "2400 ₽" },
      { period: "Комнаты: Июнь 4х местный", price: "3200 ₽" },
      { period: "Комнаты: Июль, Август 2х местный", price: "2000 ₽" },
      { period: "Комнаты: Июль, Август 3х местный", price: "3000 ₽" },
      { period: "Комнаты: Июль, Август 4х местный", price: "4000 ₽" },
    ],
  };

  const economyRoom = {
    title: "Номера ЭКОНОМ",
    subtitle: "Доступный отдых",
    description:
      "В комнате есть телевизор и вентилятор. Два душа и два туалета на этаже. Мы всегда встречаем гостей БЕСПЛАТНО на машине с вокзала в Лазаревском!",
    image: roomEconomyImage,
    features: [
      "Телевизор и вентилятор в комнате",
      "Два душа и два туалета на этаже",
      "Бесплатный трансфер с вокзала",
      "Стиральная машина общего пользования",
      "Общая двойная кухня, посуда",
    ],
    prices: [
      { period: "Май, Сентябрь с человека", price: "600 ₽" },
      { period: "Июнь с человека", price: "700 ₽" },
      { period: "Июль, Август с человека", price: "800 ₽" },
      { period: "Комнаты: Май, Сентябрь 2-х местный", price: "1200 ₽" },
      { period: "Комнаты: Май, Сентябрь 3-х местный", price: "1800 ₽" },
      { period: "Комнаты: Май, Сентябрь 4-х местный", price: "2400 ₽" },
      { period: "Комнаты: Май, Сентябрь 5-и местный", price: "3000 ₽" },
      { period: "Комнаты: Июнь 2-х местный", price: "1400 ₽" },
      { period: "Комнаты: Июнь 3-х местный", price: "2100 ₽" },
      { period: "Комнаты: Июнь 4-х местный", price: "2800 ₽" },
      { period: "Комнаты: Июнь 5-и местный", price: "3500 ₽" },
      { period: "Комнаты: Июль, Август 2-х местный", price: "1600 ₽" },
      { period: "Комнаты: Июль, Август 3-х местный", price: "2400 ₽" },
      { period: "Комнаты: Июль, Август 4-х местный", price: "3200 ₽" },
      { period: "Комнаты: Июль, Август 5-и местный", price: "4000 ₽" },
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <RoomCard {...luxRoom} isLux />
          <RoomCard {...economyRoom} />
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
