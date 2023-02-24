import React from 'react';
import Link from "next/link";
import useRouterPath from "@/hooks/useRouterPath";

const FooterLink = () => {
    const {isRegistry} = useRouterPath();

    if (isRegistry) {
        return (
            <small>Уже есть аккаунт?<Link href='/login' className={'activeLink'}> Войти</Link></small>
        );
    }

    return (
        <small>
            Еще нет аккаунта?
            <Link href='/registry' className={'activeLink'}>
                Зарегестрироваться
            </Link>
        </small>
    );
};

export default FooterLink;