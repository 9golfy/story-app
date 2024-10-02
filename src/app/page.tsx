import Link from 'next/link';
import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/images/city-lights-through-rain-window.jpg')] bg-cover"
      style={{ width: '430px', height: '932px', maxWidth: '100vw', maxHeight: '100vh', margin: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      {/* Graphic Button with Main Button */}
      <div className="relative mb-6">
        <Link href="/pages/page-1" className="transition-transform transform hover:scale-105">
          <Image
            src="/images/catcard.DGuxTNAl.webp"
            alt="Cat card"
            width={250}
            height={150}
            className="rounded-lg"
          />
        </Link>

        {/* Main Button placed at the center-bottom of the image */}
        <Link href="/pages/page-1">
          <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 px-4 py-2 bg-red-500 text-white rounded-lg text-lg w-60">
            เริ่มออกเดินทาง
          </button>
        </Link>
      </div>

      {/* Two Column Images */}
      <div className="grid grid-cols-2 gap-6">
        <Link href="https://www.instagram.com/chulaintaniashop" className="transition-transform transform hover:scale-105">
          <Image
            src="/images/intaniashop.Cf02xB8A.webp"
            alt="Intania Shop"
            width={171}
            height={171}
            className="rounded-lg"
          />
        </Link>
        <Link href="#" className="transition-transform transform hover:scale-105">
          <Image
            src="/images/comingsoon.Luco1coc.webp"
            alt="Coming Soon"
            width={171}
            height={171}
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
