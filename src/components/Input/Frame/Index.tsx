import React, {FC} from 'react';
import style from "./inputFrame.module.css";

interface FrameProp {
    label?: string,
    children: any,
}

const Frame: FC<FrameProp> = ({label, children}) => {
    const {inputContainer, customLabel} = style;

    return (
        <div className={inputContainer}>
            {label && <small className={customLabel}>{label}</small>}
            {children}
        </div>
    );
};

export default Frame;