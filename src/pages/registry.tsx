import React, {useCallback, useState} from 'react';
import EntryLayout from "@/components/Auth/EntryLayout/EntryLayout";
import RegistryFields from "@/components/Auth/AuthForm/FormFields/RegistryFields";

const Registry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordNew, setPasswordNew] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleNewPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordNew(e.target.value);
    }, []);

    const handleRepeatPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    }, []);

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const data = {email, password, passwordNew, repeatPassword};
        console.log(data);
    }, []);

    return (
        <EntryLayout onClick={handleClick} bg='loginBg'>
            <RegistryFields
                onChangeEmail={handleEmail}
                onChangePassword={handlePassword}
                onChangeNewPassword={handleNewPassword}
                onChangeRepeatPassword={handleRepeatPassword}
            />
        </EntryLayout>
    );
};

export default Registry;