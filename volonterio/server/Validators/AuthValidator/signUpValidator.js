function signUpValidation(request) {
    let name = request.body.name;
    let surname = request.body.surname;
    let email = request.body.email;
    let password = request.body.password;
    let confirmPassword = request.body.confirmedPassword;
    
    let errors = [];

    if (!name) {
        errors.push("Поле 'ім'я' не може бути пустим!");
    }
    if (!surname) {
        errors.push("Поле 'прізвище' не може бути пустим!");
    }
    if (password !== confirmPassword) {
        errors.push("Паролі не збігаються!");
    }

    return errors;
}

module.exports = signUpValidation;
