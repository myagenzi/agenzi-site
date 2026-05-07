"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div data-component="faq-item">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {question}
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
}
