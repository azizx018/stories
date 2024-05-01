'use client'
import { HomeIcon, BookmarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

//Map the links to dispaly them in the sidNav

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'My Books',
        href: '/dashboard/my-books',
        icon: BookmarkIcon,
    },

];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-black-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-black-100 text gray-600': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}

