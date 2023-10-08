import Image from 'next/image';
import React, { type PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ children, heroImage }) => {
  return (
    <div className='hero h-[30rem]'>
      <Image
        priority
        height={0}
        width={0}
        alt='Hero Image Logo'
        src={heroImage}
        sizes='100dvw'
        className='object-cover object-right-top h-[34rem] w-full'
      />
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content pr-0'>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
