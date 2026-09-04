import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ label, title, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {children ? <div className="mt-4 max-w-2xl text-base leading-7 text-smoke">{children}</div> : null}
    </div>
  );
}

