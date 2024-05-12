function signUpValidation(request) {
    let password = request.body.newPassword;
    let confirmPassword = request.body.confirmedPassword;
    
    let errors = [];

    if (password.length < 8) {
        errors.push("Пароль має містити 8 або більше символів!");
        console.log(password.length)
    }
    if (password !== confirmPassword) {
        errors.push("Паролі не збігаються!");
    }

    return errors;
}

module.exports = signUpValidation;
