import Link from 'next/link';
import React from 'react';

const ContactButton: React.FC = () => {
  return (
    <Link href='/contact'>
      <button className='btn btn-primary h-16 w-40 text-lg hidden md:inline-flex'>contact me</button>
    </Link>
  );
};

export default ContactButton;
