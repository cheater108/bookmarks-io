function validateUserLogin(user) {
    const usernameRegex = /^[A-Za-z0-9._]{4,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const error = {
        username: false,
        password: false,
    };

    error.username = !usernameRegex.test(user.username);
    error.password = !passwordRegex.test(user.password);

    return { valid: error.username && error.password, error };
}

export default validateUserLogin;
