import React, {FC, ReactNode} from 'react';
import {Col, Row} from "antd";
import {AuthForm, HeaderAuth} from "@/components/Auth";
import EntryBackground from "@/components/Auth/EntryLayout/EntryBackground/EntryBackground";
import {ButtonEvent} from "@/Model/Interfaces";
import style from './entryLayout.module.css';

interface Props extends ButtonEvent {
    bg: 'loginBg' | 'registryBg'
    children: ReactNode
}

const EntryLayout: FC<Props> = ({bg, children, onClick}) => {
    const {entry, mobile, entryBoilerplate, containerForm} = style;

    return (
        <Row className={entry}>
            <Col flex='auto'>
                <div className={entryBoilerplate}>
                    <div className={containerForm}>
                        <HeaderAuth/>
                        <AuthForm onClick={onClick}>
                            {children}
                        </AuthForm>
                    </div>
                </div>
            </Col>
            <Col span={12} flex='auto' className={mobile}>
                <EntryBackground source={bg}/>
            </Col>
        </Row>
    );
};

export default EntryLayout;

