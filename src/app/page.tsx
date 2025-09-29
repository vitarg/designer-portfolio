import Navbar from "@/components/Navbar";
import TestimonialCarousel, { type Testimonial } from "@/components/TestimonialCarousel";
import FallbackImage from "@/components/FallbackImage";

const fallbackImage = "/placeholder.svg";

const projects = [
  {
    title: "Квартира в стиле лофт",
    description: "Проект для молодой пары, сочетающий промышленные мотивы и уютные детали.",
    image: "/round-rug-4.jpg",
  },
  {
    title: "Загородный дом",
    description: "Интерьер, вдохновленный природой, с использованием натуральных материалов.",
    image: "/placeholder.svg", // Replace with actual image path
  },
  {
    title: "Студия в центре города",
    description: "Функциональное и стильное пространство для динамичной жизни.",
    image: "/placeholder.svg", // Replace with actual image path
  },
    {
    title: "Квартира в стиле лофт",
    description: "Проект для молодой пары, сочетающий промышленные мотивы и уютные детали.",
    image: "/placeholder.svg", // Replace with actual image path
  },
  {
    title: "Загородный дом",
    description: "Интерьер, вдохновленный природой, с использованием натуральных материалов.",
    image: "/placeholder.svg", // Replace with actual image path
  },
  {
    title: "Студия в центре города",
    description: "Функциональное и стильное пространство для динамичной жизни.",
    image: "/placeholder.svg", // Replace with actual image path
  },
];

const services = [
  {
    title: "Полный дизайн-проект",
    description: "От концепции до реализации, включая чертежи, 3D-визуализацию и подбор материалов.",
  },
  {
    title: "Консультация",
    description: "Рекомендации по планировке, стилю и цветовой гамме для вашего пространства.",
  },
  {
    title: "Авторский надзор",
    description: "Контроль за ходом ремонтных работ и соответствием дизайн-проекту.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Мария создала не просто красивый, а по-настоящему живой и функциональный интерьер. Каждый день радуюсь своему дому!",
    author: "Елена",
    role: "Владелица квартиры",
  },
  {
    quote: "Работать с Марией было легко и приятно. Она тонко чувствует пожелания клиента и предлагает нестандартные решения.",
    author: "Александр",
    role: "Владелец загородного дома",
  },
  {
    quote: "Благодаря Марии моя маленькая студия превратилась в стильное и удобное пространство. Результат превзошел все ожидания!",
    author: "Ольга",
    role: "Владелица студии",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-4 sm:pb-16">
          <Navbar />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                Дизайнер интерьеров
              </p>
              <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl lg:text-6xl">
                Создаю пространства, в которых хочется жить
              </h1>
              <p className="text-lg text-gray-600">
                Портфолио дизайнера интерьеров Марии Ивановой
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
                >
                  Смотреть проекты
                </a>
                 <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100"
                >
                  Связаться
                </a>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-3xl">
                 <FallbackImage
                   src="/round-rug-4.jpg"
                   fallbackSrc={fallbackImage}
                   alt="Интерьер"
                   className="h-full w-full object-cover"
                 />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-16">
        <section id="portfolio" className="space-y-10">
            <div className="max-w-2xl space-y-3">
                <h2 className="text-3xl font-semibold text-gray-900">Портфолио</h2>
                <p className="text-lg text-gray-600">
                    Каждый проект — это уникальная история, рассказанная через формы, цвета и текстуры.
                </p>
            </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                    <FallbackImage
                      src={project.image}
                      fallbackSrc={fallbackImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="p-2">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        <section id="about" className="grid gap-12 sm:grid-cols-2 items-center">
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
                <FallbackImage
                  src="/round-rug-4.jpg"
                  fallbackSrc={fallbackImage}
                  alt="Мария Иванова"
                  className="h-full w-full object-cover"
                />
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900">Обо мне</h2>
                <p className="text-lg text-gray-600">
                    Меня зовут Мария, и я верю, что дизайн — это не просто красивая картинка, а отражение личности и образа жизни. Моя задача — услышать вас и создать интерьер, который будет радовать и вдохновлять каждый день.
                </p>
                <p className="text-gray-600">
                    Я работаю с разными стилями, от минимализма до современной классики, и всегда нахожу баланс между эстетикой и функциональностью.
                </p>
            </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold text-gray-900">Услуги</h2>
            <p className="text-lg text-gray-600">
              Я предлагаю полный комплекс услуг по дизайну интерьера, чтобы воплотить вашу мечту в реальность.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold text-gray-900">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">
              Мне важно, чтобы каждый клиент остался доволен результатом нашей совместной работы.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        <section id="contact" className="rounded-3xl bg-white p-8 border border-gray-200 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900">Обсудим ваш проект?</h2>
                <p className="text-lg text-gray-600">
                  Оставьте заявку, и я свяжусь с вами, чтобы договориться о встрече и ответить на все ваши вопросы.
                </p>
                 <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">Email:</span> maria.design@example.com
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Телефон:</span> +7 (926) 123-45-67
                  </p>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
                <textarea
                  name="comment"
                  rows={4}
                  placeholder="Расскажите о вашем проекте"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
                >
                  Отправить
                </button>
              </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Мария Иванова. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Pinterest</a>
            <a href="#" className="hover:text-gray-900">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
