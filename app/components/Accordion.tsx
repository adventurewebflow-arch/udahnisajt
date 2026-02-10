"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  defaultOpenIndex,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    defaultOpenIndex !== undefined ? new Set([defaultOpenIndex]) : new Set()
  );

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="ua-accordion space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        const itemId = `accordion-item-${index}`;
        const contentId = `accordion-content-${index}`;

        return (
          <div
            key={index}
            className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
          >
            <button
              type="button"
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-750 transition-colors"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={itemId}
            >
              <span className="text-lg font-semibold text-white pr-4">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={itemId}
                className="px-6 pb-4 text-gray-300 leading-relaxed"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
