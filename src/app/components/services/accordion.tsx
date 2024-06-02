'use client'

import { useState, useEffect } from 'react';

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
  onToggle,
  isFirst,
  isLast,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  const borderClasses = isFirst
  ? 'border-t-0 border-b-2'
  : isLast
  ? 'border-b-0'
      : 'border-b-2';
  
      
  return (
    <>
    <div className={`border-indigo-500 ${borderClasses} group hover:bg-indigo-500 hover:text-white`}>
        <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-8 px-16"
          onClick={(e) => { e.preventDefault(); onToggle(); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className={'text-[5em]'}>{title}</span>
          <svg className="fill-indigo-500 shrink-0 ml-8 transition-colors duration-200 group-hover:fill-white" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-3 px-16 text-lg">
            {children}
          </p>
        </div>
      </div>
      </div>
    </>
  );
}