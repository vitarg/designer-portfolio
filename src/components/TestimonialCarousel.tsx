"use client";

import { useState } from "react";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  const hasTestimonials = testimonials.length > 0;
  const current = hasTestimonials ? testimonials[index] : null;

  const handlePrev = () => {
    setIndex((prev) => {
      if (testimonials.length === 0) {
        return prev;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setIndex((prev) => {
      if (testimonials.length === 0) {
        return prev;
      }
      return prev === testimonials.length - 1 ? 0 : prev + 1;
    });
  };

  if (!current) {
    return null;
  }

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-lg shadow-gray-200/60">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handlePrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-gray-900"
          aria-label="Предыдущий отзыв"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <article className="flex-1 space-y-4 text-center sm:text-left">
          <p className="text-lg font-medium text-gray-900 sm:text-xl">
            «{current.quote}»
          </p>
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-900">{current.author}</p>
            <p>{current.role}</p>
          </div>
        </article>
        <button
          type="button"
          onClick={handleNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-gray-900"
          aria-label="Следующий отзыв"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            type="button"
            key={`${item.author}-${dotIndex}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              dotIndex === index ? "bg-emerald-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Показать отзыв номер ${dotIndex + 1}`}
            aria-current={dotIndex === index}
          />
        ))}
      </div>
    </section>
  );
}
