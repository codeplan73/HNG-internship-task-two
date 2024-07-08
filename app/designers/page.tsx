import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";

const desigerImages = [
  { id: 1, imgSrc: "/designer/designer-1.png" },
  { id: 2, imgSrc: "/designer/designer-2.png" },
  { id: 3, imgSrc: "/designer/designer-3.png" },
  { id: 4, imgSrc: "/designer/designer-4.png" },
  { id: 5, imgSrc: "/designer/designer-5.png" },
];

const DesignersPage = () => {
  return (
    <div className="container md:px-20 flex flex-col items-start gap-8 py-8 md:py-12">
      <Link href="/" className="">
        <FaLongArrowAltLeft />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {desigerImages.map((designer) => (
          <Image
            key={designer.id}
            src={designer.imgSrc}
            width={1000}
            height={1000}
            alt="designer"
            className="w-full h-full object-cover hover:shadow-2xl hover:drop-shadow-xl transition-all duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default DesignersPage;
