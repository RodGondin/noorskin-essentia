"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/AccordionItem";

const nutritionTableRows = [
  ["Valor energético", "13 kcal = 55 kJ"],
  ["Gorduras totais", "1,3 g"],
  ["Gorduras saturadas", "0 g"],
  ["Gorduras trans", "0 g"],
  ["Gorduras monoinsaturadas", "0,2 g"],
  ["Ácido oleico (ômega-9)", "0,2 g"],
  ["Gorduras poli-insaturadas", "0,9 g"],
  ["Ácido linoleico (ômega-6)", "0,9 g"],
  ["Colesterol", "0 mg"],
  ["Vitamina B1", "2,0 mg"],
  ["Vitamina B2", "2,7 mg"],
  ["Niacina", "25 mg"],
  ["Ácido pantotênico", "5,6 mg"],
  ["Vitamina B6", "15 mg"],
  ["Vitamina C", "200 mg"],
  ["Vitamina E", "30 mg"],
  ["Biotina", "45 mcg"],
  ["Cobre", "135 mcg"],
  ["Molibdênio", "45 mcg"],
  ["Selênio", "50 mcg"],
  ["Zinco", "7,0 mg"],
  ["Cisteína", "200 mg"],
  ["Metionina", "160 mg"],
  ["Ácido ortosilícico*", "100 mg"],
  ["Licopeno", "8,0 mg"],
  ["Luteína", "8,0 mg"],
  ["Metilsulfonilmetano (MSM)", "300 mg"],
] as const;

const nutritionTableGridClass =
  "grid grid-cols-1 gap-y-1 text-[16px] leading-[1.1] [&>div]:min-w-0 [&>div]:break-words min-[300px]:grid-cols-[minmax(0,1fr)_auto] min-[300px]:gap-x-4 min-[430px]:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)_minmax(60px,0.5fr)] min-[1420px]:text-[18px]";

const nutritionTableValueClass = "min-[300px]:text-right min-[430px]:text-left";

const nutritionTableSpacerClass = "hidden min-[430px]:block";

const nutritionItems = [
  {
    id: "tabela-nutricional",
    title: "Tabela nutricional",
    content: (
      <div className="space-y-4">
        <div className={nutritionTableGridClass}>
          <div className="min-[300px]:col-span-1">
            Porção: 4,0g (4 cápsulas)
          </div>
          <div className="hidden min-[300px]:block">Quantidade</div>
          <div className="text-left min-[300px]:col-span-2 min-[300px]:text-left min-[430px]:col-span-1 min-[430px]:text-left">
            %V.D.
          </div>
          {nutritionTableRows.flatMap(([label, value]) => [
            <div key={`${label}-label`}>{label}</div>,
            <div key={`${label}-value`} className={nutritionTableValueClass}>
              {value}
            </div>,
            <div
              key={`${label}-spacer`}
              className={nutritionTableSpacerClass}
            />,
          ])}
        </div>
      </div>
    ),
  },
  {
    id: "vitaminas",
    title: "Vitaminas",
    content: (
      <div className="space-y-1 text-[16px] leading-[1.2] min-[1420px]:text-[18px]">
        <p>Complexo B: auxilia no metabolismo e na saúde da pele.</p>
        <p>Biotina: contribui para cabelo e pele.</p>
        <p>Vitamina C: auxilia na formação de colágeno.</p>
        <p>Vitamina E: ação antioxidante.</p>
      </div>
    ),
  },
  {
    id: "minerais",
    title: "Minerais",
    content: (
      <div className="space-y-1 text-[16px] leading-[1.2] min-[1420px]:text-[18px]">
        <p>Cobre: contribui para a pigmentação do cabelo.</p>
        <p>Molibdênio: participa do metabolismo.</p>
        <p>Selênio: ação antioxidante.</p>
        <p>Zinco: auxilia na manutenção de cabelo, pele e unhas.</p>
      </div>
    ),
  },
  {
    id: "aminoacidos",
    title: "Aminoácidos",
    content: (
      <div className="space-y-1 text-[16px] leading-[1.2] min-[1420px]:text-[18px]">
        <p>Cisteína: componente da queratina e precursora da glutationa.</p>
        <p>Metionina: aminoácido essencial e precursor da cisteína.</p>
      </div>
    ),
  },
  {
    id: "ativos-especiais",
    title: "Ativos especiais",
    content: (
      <div className="space-y-1 text-[16px] leading-[1.2] min-[1420px]:text-[18px]">
        <p>MSM: fonte de enxofre importante para queratina e colágeno.</p>
        <p>Ácido ortosilícico: fonte de silício com alta biodisponibilidade.</p>
        <p>
          Óleo de semente de uva: rico em vitamina E e ácidos graxos essenciais.
        </p>
        <p>Licopeno e luteína: carotenoides com ação antioxidante.</p>
      </div>
    ),
  },
];

export function Nutrition() {
  const [openItems, setOpenItems] = useState<string[]>([""]);

  function toggleItem(itemId: string) {
    setOpenItems((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId],
    );
  }

  return (
    <section
      id="informacao-nutricional"
      className="w-full overflow-x-hidden bg-[var(--color-bg-dark)] py-[120px] text-[var(--color-text-light)]"
    >
      <div className="w-full px-5 min-[1800px]:px-[280px]">
        <div className="mx-auto w-full max-w-[1360px] min-[1800px]:mx-0 min-[1800px]:max-w-none">
          <div className="flex justify-end">
            <div className="w-full min-w-0 max-w-[640px]">
              <h2 className="max-w-full text-[clamp(2rem,16vw,3rem)] leading-[1.05] min-[1420px]:text-[64px]">
                Informação
                <br />
                Nutricional
              </h2>

              <p className="mt-7.25 max-w-full text-[clamp(1.25rem,10vw,1.5rem)] leading-[1.15] min-[430px]:text-[24px]">
                Porções por embalagem: 30 (120 cápsulas)
              </p>

              <div className="mt-10 border-b border-[var(--color-details)]">
                {nutritionItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    isOpen={openItems.includes(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
