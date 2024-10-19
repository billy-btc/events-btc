'use client';

import React from 'react';
import {headerLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems: React.FC = () => {

    const pathname = usePathname()

    return (
        <ul className='flex flex-col md:flex-row gap-5 items-start' >
            {headerLinks.map((link) => {

                const isActive = pathname === link.route;

                return(
                <li
                    key={link.route}
                    className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap` }
                >
                    <Link href={link.route}> {link.label} </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default NavItems