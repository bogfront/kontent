import React, {FC, ReactNode, useMemo} from 'react';
import {Button} from "@/components/Button";
import useRouterPath from "@/hooks/useRouterPath";
import FooterLink from "@/components/Auth/AuthForm/FooterLink";
import {ButtonEvent} from "@/Model/Interfaces";
import style from "./form.module.css";

interface AuthFormProps extends ButtonEvent {
    children?: ReactNode,
}

const AuthForm: FC<AuthFormProps> = ({children, onClick}) => {
    const {form, formTitle, title, subTitle, formBody, formFooter} = style;

    const {isRegistry} = useRouterPath();

    const currentTitle = useMemo((): string => {
        return isRegistry ? 'Авторизация' : 'Вход';
    }, [isRegistry]);

    const buttonValue = useMemo((): string => {
        return isRegistry ? 'Зарегистрироваться' : 'Войти в систему';
    }, [isRegistry]);

    return (
        <>
            <div>
                <form action="" className={form}>
                    <div className={formTitle}>
                        <h1 className={title}>{currentTitle}</h1>
                        <small className={subTitle}>Пожалуйста, введите свои данные</small>
                    </div>
                    <div className={formBody}>
                        {children}
                    </div>
                </form>
            </div>
            <div className={formFooter}>
                <FooterLink/>
                <Button
                    htmlType='button'
                    type='primary'
                    size='large'
                    value={buttonValue}
                    shape='round'
                    onClick={onClick}
                />
            </div>
        </>

    );
};

export default AuthForm;