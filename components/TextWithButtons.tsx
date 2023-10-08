import React, { ReactElement } from 'react';

interface TextWithButtonsProps {
  text: string;
  subtext?: string;
  buttons: ReactElement[];
  containerStyles?: string;
  textWrapStyles?: string;
  buttonWrapStyles?: string;
}

const TextWithButtons: React.FC<TextWithButtonsProps> = ({
  text,
  subtext,
  buttons
}) => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='select-none text-shadow'>
        <h1 className='lg:text-6xl text-4xl text'>{text}</h1>
        {subtext && <h2 className='lg:text-4xl text-3xl text-primary'>{subtext}</h2>}
      </div>
      <div className='flex md:gap-6 justify-center'>
        {buttons}
      </div>
    </div>
  );
};

export default TextWithButtons;
