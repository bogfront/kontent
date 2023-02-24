import React, {FC} from 'react';
import {Button as ButtonBase, ButtonProps} from "antd";
import styles from './Button.module.css';

const Button: FC<ButtonProps> = (props) => {
    const {button} = styles

    return (
        <ButtonBase {...props} className={button}>
            {props.value}
        </ButtonBase>
    );
};

export default Button;