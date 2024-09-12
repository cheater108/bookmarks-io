function validateUserRegistration(user) {
    const usernameRegex = /^[A-Za-z0-9._]{4,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-z][a-zA-Z\d._]+@[a-zA-Z]+.[a-zA-Z]{2,}$/;

    const error = {
        username: false,
        password: false,
        email: false,
    };

    error.username = !usernameRegex.test(user.username);
    error.password = !passwordRegex.test(user.password);
    error.email = !emailRegex.test(user.email);

    return { valid: !error.username && !error.password && !error.email, error };
}

export default validateUserRegistration;
