import { ProductCard } from "@/components/ProductCard";

export function Products() {
  const products = [
    {
      name: "Natural Light\nHyaluronic Serum Complex",
      price: "R$ 184,00",
      imageSrc: "/images/product.png",
      imageAlt: "Frasco do Natural Light Hyaluronic Serum Complex",
      buttonLabel: "Adicionar ao carrinho",
    },
    {
      name: "Natural Light\nHyaluronic Serum Complex",
      price: "R$ 184,00",
      imageSrc: "/images/product.png",
      imageAlt: "Frasco do Natural Light Hyaluronic Serum Complex",
      buttonLabel: "Adicionar ao carrinho",
    },
    {
      name: "Natural Light\nHyaluronic Serum Complex",
      price: "R$ 184,00",
      imageSrc: "/images/product.png",
      imageAlt: "Frasco do Natural Light Hyaluronic Serum Complex",
      buttonLabel: "Adicionar ao carrinho",
    },
  ];

  return (
    <section
      id="produtos"
      className="w-full overflow-x-hidden bg-[var(--color-bg-light)] pt-16 pb-[120px] min-[1420px]:pt-[120px]"
    >
      <div className="w-full max-w-full px-5 min-[1800px]:px-[280px]">
        <div className="mx-auto w-full max-w-[1360px] min-[1800px]:mx-0 min-[1800px]:max-w-none">
          <div className="min-w-0 flex flex-col gap-10 min-[1420px]:grid min-[1420px]:grid-cols-[819px_420px] min-[1420px]:items-center min-[1420px]:gap-[40px]">
            <ul className="flex max-w-full snap-x snap-mandatory overflow-x-auto pt-1 scroll-smooth no-scrollbar min-[1420px]:mx-0 min-[1420px]:grid min-[1420px]:w-[819px] min-[1420px]:grid-cols-[repeat(3,273px)] min-[1420px]:overflow-visible">
              {products.map((product, index) => (
                <li
                  key={`${product.name}-${index}`}
                  className="w-[271px] shrink-0 snap-start min-[1420px]:w-[273px]"
                >
                  <ProductCard
                    buttonLabel={product.buttonLabel}
                    imageAlt={product.imageAlt}
                    imageSrc={product.imageSrc}
                    name={product.name}
                    price={product.price}
                  />
                </li>
              ))}
            </ul>

            <div
              id="nossa-essencia"
              className="max-w-[420px] min-[1420px]:w-[420px]"
            >
              <h2 className="text-[clamp(1.75rem,12vw,2.625rem)] leading-[1.15] text-[var(--color-text-dark)] min-[375px]:text-[48px] min-[375px]:leading-[1.2] min-[1420px]:text-[64px]">
                Living in
                <br />
                Consciousness
              </h2>
              <p className="mt-10 text-[24px] leading-[26px] text-[var(--color-text-dark)]">
                Uma linha desenvolvida para atuar no seu dia a dia, ajudando sua
                pele a receber os nutrientes e cuidados necessários para manter
                sua saúde, equilíbrio e vitalidade.
              </p>
              <p className="mt-16 max-w-[330px] text-[16px] leading-[19px] text-[var(--color-text-dark)]">
                Nossa linha oferece uma poderosa união de ativos para contribuir
                com a sua rotina de cuidados diários com os cabelos e com as
                unhas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
