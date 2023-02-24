import React, {FC} from 'react';
import {Input as BaseInput, InputProps} from "antd";
import {Frame} from "@/components/Input";
import style from './input.module.css';

interface props extends InputProps {
    type?: 'password' | 'email'
    label: 'Email' | 'Заданный пароль в письме' | 'Пароль' | 'Новый пароль' | 'Повторно новый пароль'
}

const Input: FC<props> = (props) => {
    const {input} = style;

    if (props.type === 'password') {
        return (
            <Frame label={props.label}>
                <BaseInput.Password {...props} rootClassName={input}/>
            </Frame>
        );
    }
    return (
        <Frame label={props.label}>
            <BaseInput {...props} rootClassName={input}/>
        </Frame>
    );
};

export default Input;