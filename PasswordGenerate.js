function greneratePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const upperCaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `1234567890`;
    const symbolChars = `!@#$%^&*():<>"?`;
    let pass = "";
    let allowedChars = "";

    allowedChars+=includeLowerCase?lowerCaseChars:"";
    allowedChars+=includeUpperCase?upperCaseChars:"";
    allowedChars+=includeNumbers?numberChars:"";
    allowedChars+=includeSymbols?symbolChars:"";

    if(passwordLength<=0){
        return (`password length should be atleast one`);
    }
    else if(allowedChars.length === 0){
        return (`Atleast one set of characters must be chosen`);
    }
    for(let i=0; i<passwordLength; i++){
        let random = Math.floor(Math.random()*allowedChars.length);
        pass+= allowedChars[random];
    }
    return pass;
}


const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


let password = greneratePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Password: ${password}`);