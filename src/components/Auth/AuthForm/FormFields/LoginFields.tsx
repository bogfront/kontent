import React, {FC} from 'react';
import Link from "next/link";
import {Input} from "@/components/Input";
import style from './fields.module.css';

interface LoginFieldsProps {
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginFields: FC<LoginFieldsProps> = ({onChangeEmail, onChangePassword}) => {
    const {forgetPass, forgetBlock} = style;

    return (
        <>
            <Input label='Email' type='email' size='large' onChange={onChangeEmail}/>
            <div>
                <Input label='Пароль' type='password' size="large" onChange={onChangePassword}/>
                <small className={forgetBlock}>
                    <Link className={forgetPass} href='#'>Забыли пароль?</Link>
                </small>
            </div>
        </>
    );
};

export default LoginFields;