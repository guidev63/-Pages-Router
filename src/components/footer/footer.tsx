import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-black py-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col md:flex-row    gap-8 py items-center">
          <Link href='/' >
            <Image
              src="/Brand-Logo.png"
              alt="Logo da marca"
              width={116}
              height={32}
              
            />
          </Link>
          <nav className=" flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/termos-de-uso" className="hover:text-primary">Termos  de uso </Link>
            <Link href="/política-de-privacidade" className="hover-primary">Política de Privacidade</Link>
            <Link href="/feedback" className="hover-primary">feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};