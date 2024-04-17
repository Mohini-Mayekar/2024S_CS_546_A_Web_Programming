// In this file, you must perform all client-side validation for every single form input (and the role dropdown) on your pages. The constraints for those fields are the same as they are for the data functions and routes. Using client-side JS, you will intercept the form's submit event when the form is submitted and If there is an error in the user's input or they are missing fields, you will not allow the form to submit to the server and will display an error on the page to the user informing them of what was incorrect or missing.  You must do this for ALL fields for the register form as well as the login form. If the form being submitted has all valid data, then you will allow it to submit to the server for processing. Don't forget to check that password and confirm password match on the registration form!
(function () {
    let signInForm = document.getElementById('signin-form');
    let signUpForm = document.getElementById('signup-form');

    if (signInForm) {
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        let errorDiv = document.getElementById('error_div');

        signInForm.addEventListener('submit', (event) => {
            console.log('Sign-In Form submission fired');
            let errors = [];
            event.preventDefault();
            console.log('Has a form');
            if (errorDiv) errorDiv.hidden = true;
            let inputFieldsArr = [username, password];
            let inputFieldNamesArr = ['username', 'password'];

            for (let i = 0; i < inputFieldsArr.length; i++) {
                try {
                    checkUndefinedOrNull(inputFieldsArr[i], inputFieldNamesArr[i]);
                    inputFieldNamesArr[i] = checkisValidString(inputFieldsArr[i], inputFieldNamesArr[i]);
                } catch (e) {
                    errors.push(e);
                }
            }

            if (errors.length > 0) {
                let myUL = document.createElement('ul');

                event.preventDefault();
                for (let i = 0; i < errors.length; i++) {
                    let myLi = document.createElement('li');
                    myLi.classList.add('error');
                    myLi.innerHTML = errors[i];
                    myUL.appendChild(myLi);
                }
                signInForm.appendChild(myUL);
            }
        });
    }

    if (signUpForm) {

        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let favoriteQuote = document.getElementById('favoriteQuote');
        let themePreference = document.getElementById('themePreference');
        let role = document.getElementById('role');

        let errorDiv = document.getElementById('error_div');
        signInForm.addEventListener('submit', (event) => {
            console.log('Sign-Up Form submission fired');
            let errors = [];
            if (errorDiv) errorDiv.hidden = true;
            event.preventDefault();
            console.log('Has a form');
            let inputFieldsArr = [firstName, lastName, username, password, confirmPassword, favoriteQuote, themePreference, role];
            let inputFieldNamesArr = ['firstName', 'lastName', 'username', 'password', 'confirmPassword', 'favoriteQuote', 'themePreference', 'role'];

            for (let i = 0; i < inputFieldsArr.length; i++) {
                try {
                    checkUndefinedOrNull(inputFieldsArr[i], inputFieldNamesArr[i]);
                    inputFieldNamesArr[i] = checkisValidString(inputFieldsArr[i], inputFieldNamesArr[i]);
                } catch (e) {
                    errors.push(e);
                }
            }

            if (!(password === confirmPassword)) errors.push(`Value entered in Password and Confirm Password fields do not match.`);
            if (errors.length > 0) {
                let myUL = document.createElement('ul');

                event.preventDefault();
                for (let i = 0; i < errors.length; i++) {
                    let myLi = document.createElement('li');
                    myLi.classList.add('error');
                    myLi.innerHTML = errors[i];
                    myUL.appendChild(myLi);
                }
                signUpForm.appendChild(myUL);
            }
        });
    }

    const checkUndefinedOrNull = (obj, variable) => {
        if (obj === undefined || obj === null) throw `All fields need to have valid values. Input for '${variable || 'provided variable'}' param is undefined or null.`;
    };

    const checkisValidString = (str, variable) => {
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
}
)