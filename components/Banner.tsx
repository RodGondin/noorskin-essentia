import Image from "next/image";

export function Banner() {
  return (
    <section aria-label="Mensagem da marca" className="w-full">
      <div className="w-full overflow-hidden min-[1420px]:max-h-[706px]">
        <Image
          src="/images/cover.png"
          alt="Sua força vem de dentro."
          width={1028}
          height={523}
          quality={100}
          className="block h-auto w-full min-[1420px]:min-h-[706px] min-[1420px]:object-cover min-[1420px]:scale-[1.08] min-[1420px]:-translate-y-[6%] min-[1420px]:transform"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
