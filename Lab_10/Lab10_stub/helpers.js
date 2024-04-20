//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.

const regex = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/);

let checkUndefinedOrNull = (obj, variable) => {
    if (obj === undefined || obj === null) throw `All fields need to have valid values. Input for '${variable || 'provided variable'}' param is undefined or null.`;
};

let checkisValidString = (str, variable) => {
    //check input type is string
    if (typeof str !== 'string') throw `Input '${variable || 'provided'}' of value '${str || 'provided variable'}' is not a string.`;
    //empty string or has only spaces
    if ((str.replaceAll(/\s/g, '').length) === 0) throw `Input '${variable || 'provided'}' string of value '${str}' has just spaces or is an empty string.`;
    str = str.trim();
    if (variable === 'Theme Preference') {
        str = str.toLowerCase();
        if (!(str === 'light' || str === 'dark')) throw `Input '${variable || 'provided'}' string of value '${str}' is invalid."light" or "dark" are the valid inputs.`;
    } else if (variable === 'Role') {
        str = str.toLowerCase();
        if (!(str === 'admin' || str === 'user')) throw `Input '${variable || 'provided'}' string of value '${str}' is invalid."admin" or "user" are the valid inputs.`;
    } else if (variable === 'Password' || variable === 'Confirm Password') {
        if (str.includes(" ")) throw `Input '${variable || 'provided'}' should not have spaces.`;
        //The constraints for password will be: There needs to be at least one uppercase character, there has to be at least one number and there has to be at least one special character:  for example:  Not valid: test123, test123$, foobar, tS12$ Valid: Test123$, FooBar123*, HorsePull748*%

        //TO DO: add constraint        
        if (!(regex.test(str))) throw `Input '${variable || 'provided'}' needs to have at least one uppercase character, at least one number, at least one special character and should be at least 8 characters long.`;

    } else { //firstName, lastName, username, favoriteQuote
        //string does not contain digits
        if (str.match(/\d+/g) !== null) throw `Input '${variable || 'provided'}' string of value '${str}' has numbers in the input string.`;
        let min = 2;
        let max = 25;
        if (variable === 'Username') {
            min = 5;
            max = 10;
            str = str.toLowerCase();//to handle case-insensitive constraint
        } else if (variable === 'Favorite Quote') {
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
    checkUndefinedOrNull(firstName, 'First Name');
    checkUndefinedOrNull(lastName, 'Last Name');
    checkUndefinedOrNull(username, 'Username');
    checkUndefinedOrNull(password, 'Password');
    if (isRoute) {
        checkUndefinedOrNull(confirmPassword, 'Confirm Password');
    }
    checkUndefinedOrNull(favoriteQuote, 'Favorite Quote');
    checkUndefinedOrNull(themePreference, 'Theme Preference');
    checkUndefinedOrNull(role, 'Role');

    firstName = checkisValidString(firstName, 'First Name');
    lastName = checkisValidString(lastName, 'Last Name');
    username = checkisValidString(username, 'Username');
    password = checkisValidString(password, 'Password');
    if (isRoute) {
        confirmPassword = checkisValidString(confirmPassword, 'Confirm Password');
        if (!(password === confirmPassword)) throw `Value entered in Password and Confirm Password fields do not match.`;
    }
    favoriteQuote = checkisValidString(favoriteQuote, 'Favorite Quote');
    themePreference = checkisValidString(themePreference, 'Theme Preference');
    role = checkisValidString(role, 'Role');

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

    username = checkisValidString(username, 'Username');
    password = checkisValidString(password, 'Password');

    let userData = {
        username: username,
        password: password
    };
    return userData;
}

export {
    checkUndefinedOrNull, checkisValidString, validateNewUserInput, validateUserInput
}
