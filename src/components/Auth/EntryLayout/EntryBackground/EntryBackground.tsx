import React, {FC, useEffect, useState} from 'react';
import style from './entryBackground.module.css';
import {Image} from "antd";

interface AuthBackgroundProps {
    source: 'loginBg' | 'registryBg' | 'alternative'
}

const sourceImgData = {
    loginBg: import('@/assets/images/registry1.png'),
    alternative: import('@/assets/images/registry2.png'),
    registryBg: import('@/assets/images/registry3.png')
}

const EntryBackground: FC<AuthBackgroundProps> = ({source}) => {
    const {bgImg} = style
    const [bg, setBg] = useState('');

    useEffect(() => {
        sourceImgData[source].then(el => {
            setBg(el.default.src!);
        })
    }, [source]);

    return (
        <Image src={bg} alt={bg} width={'100%'} height={'100%'} preview={false} rootClassName={bgImg}/>
    );
};

export default EntryBackground;

