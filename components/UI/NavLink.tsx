'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type PropsWithChildren, useEffect, useState } from 'react';

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathname === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, href]);

  return (
    <Link
      href={href}
      className={`btn btn-ghost normal-case text-lg ${
        isActive ? 'text-neutral' : 'text-white'
      } `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
