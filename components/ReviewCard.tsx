import { Star } from "lucide-react";

type ReviewCardProps = {
  author: string;
  content: string;
};

export function ReviewCard({ author, content }: ReviewCardProps) {
  return (
    <article className="max-w-[650px]">
      <header className="flex items-center gap-3">
        <div
          aria-label="5 de 5 estrelas"
          className="flex items-center gap-2 text-[var(--color-text-dark)]"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={26} strokeWidth={1.7} fill="currentColor" />
          ))}
        </div>
        <p className="text-[18px] leading-none text-[var(--color-text-dark)] underline underline-offset-4 self-start font-light">
          {author}
        </p>
      </header>

      <p className="mt-4 text-[18px] leading-[1.22] text-[var(--color-text-dark)]">
        {content}
      </p>
    </article>
  );
}
