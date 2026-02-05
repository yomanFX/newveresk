import { 
  Coffee, 
  Wifi, 
  Tv, 
  BookOpen, 
  CreditCard, 
  Clock, 
  Leaf, 
  Scissors,
  Car
} from 'lucide-react';

// --- CONFIGURATION ---
// Paste your Yclients link here when you have it
export const YCLIENTS_LINK = "https://n51202.yclients.com/"; 

export const HERO_IMAGE = "/images/hero.jpg";

export const CONTACT_INFO = {
  address: "г. Владивосток, ул. Семеновская, д.23",
  phones: [
    "+7 (423) 222 05 25",
    "+7 (924) 522 05 25"
  ],
  email: "salon.veresk@yandex.ru",
  instagram: "salon.veresk",
  workingHours: "Ежедневно с 10:00 до 20:00"
};

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Марина Гребенщекова",
    role: "Топ-стилист",
    image: "/images/team-1.jpg"
  },
  {
    id: 2,
    name: "Екатерина Семенютенко",
    role: "Мастер-универсал",
    image: "/images/team-2.jpg"
  },
  {
    id: 3,
    name: "Татьяна Волошина",
    role: "Барбер-эксперт",
    image: "/images/team-3.jpg"
  }
];

export const FEATURES = [
  {
    icon: Coffee,
    title: "Напитки",
    description: "Свежезаваренный кофе, чай или прохладительные напитки бесплатно."
  },
  {
    icon: Scissors,
    title: "Опыт",
    description: "Мастера с многолетним стажем и регулярным повышением квалификации."
  },
  {
    icon: Wifi,
    title: "Связь",
    description: "Бесплатный высокоскоростной Wi-Fi для гостей."
  },
  {
    icon: Tv,
    title: "Досуг",
    description: "Кабельное TV с выбором программы и мужские журналы."
  },
  {
    icon: Car,
    title: "Парковка",
    description: "Бесплатная парковка для наших клиентов."
  },
  {
    icon: Leaf,
    title: "Экологичность",
    description: "Используем лучшую косметику и экологичные средства."
  },
  {
    icon: Clock,
    title: "Пунктуальность",
    description: "Четкая слаженная работа. Мы ценим ваше время."
  },
  {
    icon: CreditCard,
    title: "Удобство",
    description: "Прозрачные цены. Оплата картой и наличными."
  }
];

export const GALLERY_IMAGES = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg"
];