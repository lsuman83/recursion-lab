// Code your solution here!
function printString(str) {
    console.log(str[0])
    if (str.length > 1){
        return printString(str.substr(1, str.length))}
    else {
        return true
    }
}

