import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from '@/node_modules/next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image  src={"/edu.png"}       
      width={1000}
      height={760}
      alt="logo"
      />
      <p className="text-[44px]">Web1</p>
    </div>
  );
}
