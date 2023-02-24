import React from 'react';
import {Typography} from "antd";
import style from './logo.module.css'
import LogoSvg from '@/icons/logo.svg'

const Logo = () => {
    const {logo, text, textMobile} = style

    return (
        <div className={logo}>
            <LogoSvg/>
            <Typography.Text className={text}>Music Manage</Typography.Text>
            <Typography.Text className={textMobile}>Music-Manage</Typography.Text>
        </div>
    );
};

export default Logo;