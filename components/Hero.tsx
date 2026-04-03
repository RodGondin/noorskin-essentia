import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-bg-dark)]">
      <div className="flex flex-col md:min-h-155 md:grid md:grid-cols-2 xl:min-h-190">
        <div className="bg-[var(--color-bg-dark)] px-5 md:py-14.5 text-white md:flex md:items-end md:px-[clamp(48px,10vw,280px)] md:pb-[clamp(40px,9vw,64px)] min-2xl:px-60">
          <div className="md:w-full md:max-w-92.5 lg:max-w-102.5">
            <h1 className="py-8 text-5xl leading-12.5 font-normal md:text-[64px] md:leading-[1.05]">
              Renasça com nutrição
            </h1>
            <p className="pb-10 md:pb-0 text-2xl leading-6.5 md:text-[18px] md:leading-[1.15]">
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
