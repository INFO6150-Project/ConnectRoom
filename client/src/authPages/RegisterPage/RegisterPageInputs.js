import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {

    const {mail, setMail, username, setUsername, password, setPassword} = props;
    return (
        <>
        <InputWithLabel
        value = {mail}
        setValue = {setMail}
        label = "Email Address"
        type="text"
        placeholder = "Enter northeastern email address"
        />
        <InputWithLabel
        value = {username}
        setValue = {setUsername}
        label = "Username"
        type="text"
        placeholder = "Enter username"
        />
        <InputWithLabel
        value = {password}
        setValue = {setPassword}
        label = "Password"
        type="password"
        placeholder = "Enter Password"
        />
        </>
    );
};

export default RegisterPageInputs;