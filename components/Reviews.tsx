"use client";

import { useEffect, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { ReviewCard } from "@/components/ReviewCard";

export function Reviews() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animationPhase, setAnimationPhase] = useState<"done" | "out" | "in">(
    "done",
  );

  const reviews = [
    {
      author: "Maria",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Fernanda",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Aline",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Juliana",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Camila",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Patrícia",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Bianca",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
    {
      author: "Larissa",
      content:
        "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.",
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const currentStart = page * itemsPerPage;
  const visibleReviews = reviews.slice(
    currentStart,
    currentStart + itemsPerPage,
  );
  const isPreviousDisabled = page === 0 || animationPhase !== "done";
  const isNextDisabled = page === totalPages - 1 || animationPhase !== "done";

  useEffect(() => {
    if (animationPhase !== "out") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setPage((current) =>
        direction === "next"
          ? Math.min(current + 1, totalPages - 1)
          : Math.max(current - 1, 0),
      );
      setAnimationPhase("in");
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [animationPhase, direction, totalPages]);

  useEffect(() => {
    if (animationPhase !== "in") {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      setAnimationPhase("done");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [animationPhase]);

  function handlePrevious() {
    if (isPreviousDisabled) {
      return;
    }

    setDirection("prev");
    setAnimationPhase("out");
  }

  function handleNext() {
    if (isNextDisabled) {
      return;
    }

    setDirection("next");
    setAnimationPhase("out");
  }

  function handleDotNavigation(targetPage: number) {
    if (targetPage === page || animationPhase !== "done") {
      return;
    }

    setDirection(targetPage > page ? "next" : "prev");
    setPage(targetPage);
    setAnimationPhase("in");
  }

  return (
    <section
      id="depoimentos"
      className="w-full overflow-x-hidden bg-[var(--color-bg-light)] pt-[120px] pb-[40px]"
    >
      <div className="w-full px-[var(--page-gutter)]">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2 min-[1420px]:gap-x-5">
            <h2 className="text-[48px] leading-[1.05] text-[var(--color-text-dark)] min-[1420px]:text-[64px]">
              Avaliações
            </h2>
            <p className="basis-full text-[36px] leading-none text-[var(--color-text-dark)] font-light min-[350px]:basis-auto min-[350px]:pb-1 min-[1420px]:pb-2">
              5/5
            </p>
          </div>

          <div className="mt-4 border-t border-[var(--color-details)]" />

          <div
            className={`mt-10 grid gap-16 transition-all duration-300 min-[1420px]:grid-cols-2 min-[1420px]:gap-[72px] ${
              animationPhase === "done"
                ? "translate-x-0 opacity-100"
                : animationPhase === "out"
                  ? direction === "next"
                    ? "-translate-x-10 opacity-0"
                    : "translate-x-10 opacity-0"
                  : direction === "next"
                    ? "translate-x-10 opacity-0"
                    : "-translate-x-10 opacity-0"
            }`}
          >
            {visibleReviews.map((review, index) => (
              <ReviewCard
                key={`${review.author}-${currentStart + index}`}
                author={review.author}
                content={review.content}
              />
            ))}
          </div>

          <div className="mt-16 border-t border-[var(--color-details)]" />

          <div className="mt-6 flex items-center justify-center gap-2 text-[var(--color-text-dark)]">
            <button
              type="button"
              aria-label="Ver avaliações anteriores"
              onClick={handlePrevious}
              disabled={isPreviousDisabled}
              className="focus-ring-dark-button cursor-pointer rounded-sm transition-opacity duration-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <MoveLeft size={36} strokeWidth={1.5} />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir para página ${index + 1} das avaliações`}
                onClick={() => handleDotNavigation(index)}
                className="focus-ring-dark-button rounded-full"
                disabled={animationPhase !== "done"}
              >
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 rounded-full cursor-pointer ${
                    index === page
                      ? "block bg-[var(--color-text-dark)]"
                      : "block border-2 border-[var(--color-text-dark)]"
                  }`}
                />
              </button>
            ))}

            <button
              type="button"
              aria-label="Ver próximas avaliações"
              onClick={handleNext}
              disabled={isNextDisabled}
              className="focus-ring-dark-button cursor-pointer rounded-sm transition-opacity duration-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <MoveRight size={36} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
