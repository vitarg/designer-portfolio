"use client";

import { useState } from "react";

const links = [
  { href: "#portfolio", label: "Портфолио" },
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#reviews", label: "Отзывы" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="text-lg font-semibold text-gray-900">
          Мария Иванова
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 sm:hidden"
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Меню</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gray-900">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
          >
            Связаться
          </a>
        </div>
      </div>

      <div
        className={`sm:hidden absolute left-0 right-0 top-12 origin-top rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur transition ${
          isOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="space-y-2 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-xl px-3 py-2 transition hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-4 flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
        >
          Связаться
        </a>
      </div>
    </nav>
  );
}
