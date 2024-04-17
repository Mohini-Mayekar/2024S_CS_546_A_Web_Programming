//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.

// const pattern = new RegExp(/^[-_.a-zA-Z0-9]+$/);
// const upperCase = new RegExp(/^[A-Z]+/);

let checkUndefinedOrNull = (obj, variable) => {
    if (obj === undefined || obj === null) throw `All fields need to have valid values. Input for '${variable || 'provided variable'}' param is undefined or null.`;
};

let checkisValidString = (str, variable) => {
    //check input type is string
    if (typeof str !== 'string') throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a string.`;
    //empty string or has only spaces
    if ((str.replaceAll(/\s/g, '').length) === 0) throw `Input '${variable || 'provided'}' string of value '${str}' has just spaces or is an empty string.`;
    str = str.trim();
    if (variable === 'themePreference') {
        str = str.toLowerCase();
        if (!(str === 'light' || str === 'dark')) throw `Input '${variable || 'provided'}' string of value '${str}' is invalid."light" or "dark" are the valid inputs.`;
    } else if (variable === 'role') {
        str = str.toLowerCase();
        if (!(str === 'admin' || str === 'user')) throw `Input '${variable || 'provided'}' string of value '${str}' is invalid."admin" or "user" are the valid inputs.`;
    } else if (variable === 'password') {
        if (str.includes(" ")) throw `Input '${variable || 'provided'}' string of value should not have spaces.`;
        if (str.length < 8) throw `Input '${variable || 'provided'}' string of value should be at least 8 characters long.`;
        //The constraints for password will be: There needs to be at least one uppercase character, there has to be at least one number and there has to be at least one special character:  for example:  Not valid: test123, test123$, foobar, tS12$ Valid: Test123$, FooBar123*, HorsePull748*%

        //TO DO: add constraint

    } else { //firstName, lastName, username, favoriteQuote
        //string does not contain digits
        if (str.match(/\d+/g) !== null) throw `Input '${variable || 'provided'}' string of value '${str}' has numbers in the input string.`;
        let min = 2;
        let max = 25;
        if (variable === 'username') {
            min = 5;
            max = 10;
            str = str.toLowerCase();//to handle case-insensitive constraint
        } else if (variable === 'favoriteQuote') {
            min = 20;
            max = 255;
        }
        if (str.length < min || str.length > max) throw `Input '${variable || 'provided'}' string of value '${str}' should be at least '${min}' characters long with a max of '${max}' characters.`;

    }
    return str;
};

let validateNewUserInput = (
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
    favoriteQuote,
    themePreference,
    role,
    isRoute
) => {
    checkUndefinedOrNull(firstName, 'firstName');
    checkUndefinedOrNull(lastName, 'lastName');
    checkUndefinedOrNull(username, 'username');
    checkUndefinedOrNull(password, 'password');
    if (isRoute) {
        checkUndefinedOrNull(confirmPassword, 'confirmPassword');
    }
    checkUndefinedOrNull(favoriteQuote, 'favoriteQuote');
    checkUndefinedOrNull(themePreference, 'themePreference');
    checkUndefinedOrNull(role, 'role');

    firstName = checkisValidString(firstName, 'firstName');
    lastName = checkisValidString(lastName, 'lastName');
    username = checkisValidString(username, 'username');
    password = checkisValidString(password, 'password');
    if (isRoute) {
        confirmPassword = checkisValidString(confirmPassword, 'confirmPassword');
        if (!(password === confirmPassword)) throw `Value entered in Password and Confirm Password fields do not match.`;
    }
    favoriteQuote = checkisValidString(favoriteQuote, 'favoriteQuote');
    themePreference = checkisValidString(themePreference, 'themePreference');
    role = checkisValidString(role, 'role');

    let userData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        favoriteQuote: favoriteQuote,
        themePreference: themePreference,
        role: role
    };

    return userData;

}

let validateUserInput = (
    username,
    password
) => {
    checkUndefinedOrNull(username, 'username');
    checkUndefinedOrNull(password, 'password');

    username = checkisValidString(username, 'username');
    password = checkisValidString(password, 'password');

    let userData = {
        username: username,
        password: password
    };
    return userData;
}

export {
    checkUndefinedOrNull, checkisValidString, validateNewUserInput, validateUserInput
}
