import React, {useCallback, useState} from 'react';
import {EntryLayout} from "@/components/Auth";
import LoginFields from "@/components/Auth/AuthForm/FormFields/LoginFields";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);
    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const data = {email, password};
        console.log(data);
    }, []);

    return (
        <EntryLayout onClick={handleClick} bg='loginBg'>
            <LoginFields onChangePassword={handlePassword} onChangeEmail={handleEmail}/>
        </EntryLayout>
    );
};

export default Login;