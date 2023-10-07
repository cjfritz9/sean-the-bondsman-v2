import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ children, heroImage }) => {
  return (
    <div className='hero h-[30rem] mt-[-4rem]'>
      <Image
        priority
        height={0}
        width={0}
        alt='Hero Image Logo'
        src={heroImage}
        sizes="100dvw"
        className='object-cover object-top h-[34rem] w-full'
      />
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className=''>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
