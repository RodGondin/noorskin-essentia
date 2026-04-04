"use client";

import type { ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { useId } from "react";

type AccordionItemProps = {
  content: ReactNode;
  isOpen: boolean;
  title: string;
  onToggle: () => void;
};

export function AccordionItem({
  content,
  isOpen,
  title,
  onToggle,
}: AccordionItemProps) {
  const contentId = useId();

  return (
    <div className="border-t border-[var(--color-details-light)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="focus-ring-header flex w-full min-w-0 cursor-pointer items-center justify-between gap-4 py-4 text-left text-[18px] leading-none text-[var(--color-text-light)] transition-opacity duration-300 hover:opacity-80"
      >
        <span className="block min-w-0 flex-1 break-words text-[24px]">
          {title}
        </span>
        <span className="relative block h-6 w-6 shrink-0 text-[var(--color-details-light)]">
          <Plus
            aria-hidden="true"
            size={24}
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen
                ? "rotate-90 scale-75 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <Minus
            aria-hidden="true"
            size={24}
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-75 opacity-0"
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="pb-4 text-[16px] leading-[18px] text-[var(--color-text-light)]"
        >
          {content}
        </div>
      )}
    </div>
  );
}
