import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image
        src="/Brand-Logo.png"
        alt="Logo da marca"
        width={116}
        height={32}
      />
    </Link>
  );
};
