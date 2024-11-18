export const validateLoginForm = ({mail, password}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({mail, password, username}) => {
   
    return (
        validateMail(mail) && validatePassword(password) && validateUsername(username)
    );
}

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
};

const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
    return emailPattern.test(mail);
};

const validateUsername = (username) => {
    return username.length > 2 && username.length < 12;
}