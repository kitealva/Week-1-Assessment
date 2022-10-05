let password = '1v1mekyleinleague'

let alp = /[a-zA-Z]/

function stringHasTheWhiteSpaceOrNot(password){
    return password.indexOf(' ') >= 0;
 }
 var whiteSpace=stringHasTheWhiteSpaceOrNot(`${password}`);
    if(whiteSpace==true){
       console.log("The string has whitespace");
    } else {
       console.log("The string does not have whitespace");
 }
 
 if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
    upperCheck = true
}
if(password.length >= 10){
    console.log('Password has at least 10 char.')
}else if( password< 10){
    console.log('Password needs at least 10 char.')
}

if(!isNaN(password)){
    console.log('Password does meet 1 number requirement.')
}
else {
    console.log('Password meets number requirement.')
}

if(/[a-zA-Z]/.test(password)){
    console.log('Meets requirement.')
} else {
    console.log('Does not meet Alphabetical requirement')
}

if(password === 'cow'){
    console.log('Password not allowed')
}else {
    console.log('')
}