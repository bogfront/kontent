import React from 'react';
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import style from './header.module.css';
import useRouterPath from "@/hooks/useRouterPath";
import Arrow from '@/icons/arrowLeft.svg';

const linkListCreate = (isRegistry: boolean) => {
    return [
        {path: '/registry', name: 'Авторизация', activeLink: isRegistry},
        {path: '/login', name: 'Вход', activeLink: !isRegistry}
    ];
};

const HeaderAuth = () => {
    const {header, headerNav, mobileLInk, buttonBack} = style;
    const {isRegistry} = useRouterPath();

    return (
        <header className={header}>
            <nav className={buttonBack}>
                <Arrow/>
                <Link href='/' className={mobileLInk}>Назад</Link>
            </nav>
            <Logo/>
            <nav className={headerNav}>
                {linkListCreate(isRegistry).map(({path, name, activeLink}) => (
                    <Link
                        key={name}
                        href={path}
                        className={activeLink ? 'activeLink' : 'inActiveLink'}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default HeaderAuth;