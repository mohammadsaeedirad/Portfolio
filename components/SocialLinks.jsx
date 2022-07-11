import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
const SocialLinks = () => {
  
  return (
    <div className="relative">
      <div className='z-40 section__title fixed top-44 left-0 sm:left-1 space-y-2 flex flex-col'>
            <a href="https://www.linkedin.com/in/mohammad-saeedi-rad-54b2341b7/">
             <Image src="/linkedin.svg" alt="mohammad saeedi rad linkedin" width={40} height={40} />
            </a>

            <a href="https://github.com/mohammadsaeedirad">
             <Image src="/github.svg"  alt="mohammad saeedi rad github"  width={40} height={40} />
            </a>
            <a href="https://wa.me/+989203185480" target="_blank" >
             <Image src="/whatsApp.png"  alt="mohammad saeedi rad whatsApp"  width={40} height={40} />
            </a>
            <a href="https://instagram.com/mohamadsaeedi.web" >
             <Image src="/instagram.svg"  alt="mohammad saeedi rad instagram"  width={40} height={40} />
            </a>
      </div>
    </div>
  );
};

export default memo(SocialLinks);
