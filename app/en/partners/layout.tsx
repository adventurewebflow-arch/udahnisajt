import { bricolage, inter } from "./fonts";

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bricolage.variable} ${inter.variable} ua-partners bg-slate-950 text-slate-100`}>
      {children}
    </div>
  );
}
