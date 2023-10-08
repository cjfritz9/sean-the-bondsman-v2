import Link from 'next/link';
import React from 'react';
import NavLink from '../UI/NavLink';
import Image from 'next/image';
import smLogo from '@/assets/images/logo-sm.webp';
import { navLinks } from '@/lib/variables';

const Header: React.FC = () => {
  return (
    <div className='navbar bg-primary w-[100dvw] flex justify-between lg:px-28 2xl:px-40'>
      <div className='navbar-start flex justify-start xl:justify-start'>
        <div className='drawer'>
          <input id='nav-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <label
              htmlFor='nav-drawer'
              tabIndex={0}
              className='btn btn-ghost drawer-button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 stroke-neutral-100'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
          </div>
          <div className='drawer-side z-10'>
            <label
              htmlFor='nav-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 sm:w-80 w-64 min-h-full text-base-content bg-primary'>
              {navLinks.map((link) => (
                <li key={link.slug}>
                  <NavLink href={link.slug}>{link.textContent}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='navbar-center'>
        <Link
          href='/'
          className='btn btn-ghost normal-case text-xl lg:text-3xl text-neutral-content'
        >
          Sean The Bondsman
        </Link>
      </div>
      <div className='navbar-end hidden 2xl:inline-flex'>
        <Image src={smLogo} alt='Phoenix Logo Image' height='60' />
      </div>
    </div>
  );
};

export default Header;
