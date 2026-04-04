"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Menu, PanelTopClose } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const mobileMenuId = useId();
  const navItems = [
    { label: "Produtos", href: "#produtos" },
    { label: "Nossa Essência", href: "#nossa-essencia" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contato" },
    { label: "Prescritor", href: "#prescritor" },
  ];

  return (
    <header className="w-full bg-[var(--color-bg-header)] text-[var(--color-text-header)]">
      <div className="relative h-15 w-full px-5 min-[1000px]:px-[280px]">
        <div className="flex h-full items-center justify-center min-[1033px]:justify-start min-[1033px]:gap-[40px]">
          {/* BOTÃO MOBILE */}
          <button
            type="button"
            className="focus-ring-header absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer rounded-sm text-xl min-[1033px]:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
          >
            <span className="relative block h-[27px] w-[27px]">
              <Menu
                size={27}
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-300 ${
                  open
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <PanelTopClose
                size={27}
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-300 ${
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>

          <Image
            src="/images/Noorskin.svg"
            alt="Noorskin Logo"
            width={124}
            height={24}
            priority
            className="h-auto w-[clamp(96px,44vw,124px)] min-[240px]:w-[124px]"
          />

          {/* MENU DESKTOP */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center text-[18px] min-[1033px]:flex"
          >
            <ul className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring-header block whitespace-nowrap rounded-sm px-4 py-4 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <nav
            id={mobileMenuId}
            aria-label="Navegação principal"
            className="absolute inset-x-0 top-full z-10 min-[1033px]:hidden"
          >
            <ul className="flex flex-col gap-4 bg-[var(--color-bg-header)] px-5 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring-header block rounded-sm transition hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
