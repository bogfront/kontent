import React, {FC, useCallback, useState} from 'react';
import {Input} from "@/components/Input";
import style from "./fields.module.css";

interface RegistryFieldsProps {
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeNewPassword?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeRepeatPassword?: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const RegistryFields: FC<RegistryFieldsProps> = (
    {
        onChangeEmail,
        onChangePassword,
        onChangeNewPassword,
        onChangeRepeatPassword
    }) => {

    const {question} = style;
    const [isOpenQuestion, setIsOpenQuestion] = useState(true);

    const handleOnClickQuestion = useCallback((): void => {
        setIsOpenQuestion(false);
    }, []);

    return (
        <>
            <Input label='Email' type='email' size='large' onChange={onChangeEmail}/>
            <div>
                <Input label='Заданный пароль в письме' type='password' size="large"
                       onChange={onChangePassword}/>
                {isOpenQuestion && (
                    <small className={question} onClick={handleOnClickQuestion}>
                        Хотите сразу задать новый пароль?
                    </small>
                )}
            </div>
            {!isOpenQuestion && (
                <>
                    <Input label='Новый пароль' type='password' onChange={onChangeNewPassword}/>
                    <Input label='Повторно новый пароль' type='password' onChange={onChangeRepeatPassword}/>
                </>
            )}
        </>
    );
};

export default RegistryFields;