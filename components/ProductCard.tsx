import Image from "next/image";

type ProductCardProps = {
  buttonLabel: string;
  imageAlt: string;
  imageSrc: string;
  name: string;
  price: string;
};

export function ProductCard({
  buttonLabel,
  imageAlt,
  imageSrc,
  name,
  price,
}: ProductCardProps) {
  return (
    <article className="group flex h-[675px] w-[271px] flex-col items-center border border-[var(--color-details)] pt-[91.45px] pb-[91.45px] text-center transition-transform duration-300 hover:-translate-y-1 min-[1000px]:h-[680px] min-[1000px]:w-[273px] min-[1000px]:pt-[93.94px] min-[1000px]:pb-[93.94px]">
      <div className="relative mb-10 h-[330px] w-[271px] min-[1000px]:w-[273px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="scale-110 object-contain transition-transform duration-300 group-hover:scale-130"
          sizes="(min-width: 1000px) 273px, 271px"
        />
      </div>

      <div className="mt-auto flex w-full flex-col items-center px-[25.67px] min-[1000px]:px-[26.67px]">
        <h3 className="max-w-full whitespace-pre-line text-[16px] leading-[1.15] text-[var(--color-text-dark)] [font-family:var(--font-sans)]">
          {name}
        </h3>
        <p className="mt-[10px] text-[18px] leading-none text-[var(--color-text-dark)] underline underline-offset-4 [font-family:var(--font-sans)]">
          {price}
        </p>
        <button
          type="button"
          className="focus-ring-dark-button mt-5 w-full cursor-pointer bg-[var(--color-bg-dark)] px-4 py-3 text-[18px] leading-none text-[var(--color-text-light)] transition-opacity duration-300 hover:opacity-85 [font-family:var(--font-sans)]"
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
