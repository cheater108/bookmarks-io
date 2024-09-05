function validateUserLogin(user) {
    const usernameRegex = /^[A-Za-z0-9._]{4,}$/;

    const error = {
        username: false,
    };

    error.username = !usernameRegex.test(user.username);

    return { valid: !error.username, error };
}

export default validateUserLogin;
