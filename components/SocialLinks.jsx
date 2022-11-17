import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <div className='relative'>
      <div className='z-40 section__title fixed top-7 sm:top-44 left-0 sm:left-1 space-y-2 flex flex-col'>
        <a target="blank" href='https://linkedin.com/in/mohammad-saeedirad-a45593257'>
          <Image
            src='/linkedin.png'
            alt='mohammad saeedi rad linkedin'
            width={36}
            height={36}
          />
        </a>

        <a target="blank" href='https://github.com/mohammadsaeedirad'>
          <Image
            src='/github.png'
            alt='mohammad saeedi rad github'
            width={36}
            height={36}
          />
        </a>
        <a href='https://wa.me/+989203185480' className='ml-1' target='_blank'>
          <Image
            src='/whatsapp.png'
            alt='mohammad saeedi rad whatsApp'
            width={32}
            height={32}
          />
        </a>
        <a target="blank" href='https://instagram.com/mohamadsaeedi.web' className='ml-1'>
          <Image
            src='/instagram.png'
            alt='mohammad saeedi rad instagram'
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
};

export default memo(SocialLinks);
