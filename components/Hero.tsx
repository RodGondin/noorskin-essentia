import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-bg-dark)]">
      <div className="flex flex-col md:min-h-155 md:grid md:grid-cols-2 xl:min-h-190">
        <div className="bg-[var(--color-bg-dark)] px-[var(--page-gutter)] text-white md:py-14.5 md:flex md:items-end md:pr-[clamp(32px,5vw,120px)] md:pb-[clamp(40px,9vw,64px)]">
          <div className="min-w-0 md:w-full md:max-w-92.5 lg:max-w-102.5">
            <h1 className="py-8 text-[clamp(2.75rem,19vw,3rem)] leading-[0.95] font-normal min-[365px]:text-5xl min-[365px]:leading-12.5 md:text-[64px] md:leading-[1.05]">
              Renasça com nutrição
            </h1>
            <p className="pb-10 text-[clamp(1rem,8vw,2rem)] leading-[1.1] min-[365px]:text-2xl min-[365px]:leading-6.5 md:pb-0 md:text-[18px] md:leading-[1.15]">
              Renaissance resgata a integridade da queratina, reconstruindo a
              arquitetura de fios e unhas contra os desgastes do cotidiano. Uma
              nutrição essencial que cura a fibra profundamente, devolvendo a
              força e o brilho que nascem de dentro.
            </p>
          </div>
        </div>

        <div className="relative aspect-[375/460] w-full overflow-hidden rounded-tl-sm bg-[var(--color-bg-dark)] md:h-full md:aspect-auto">
          <Image
            src="/images/hero.jpg"
            alt="Mulher com tranças representando o cuidado e a nutricao da Noorskin"
            fill
            priority
            quality={95}
            className="object-cover object-[58%_center] md:object-[52%_center] xl:hidden"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          {/* Imagem otimizada para desktop, com melhor qualidade e sem recorte */}
          <Image
            src="/images/hero-desktop.png"
            alt="Mulher com tranças representando o cuidado e a nutricao da Noorskin"
            fill
            quality={100}
            className="hidden object-cover object-[52%_center] xl:block"
            sizes="(min-width: 1280px) 50vw"
          />
        </div>
      </div>
    </section>
  );
}
