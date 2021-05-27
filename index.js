// Code your solution here!
function printString(str) {
    console.log(str[0])
    if (str.length > 1){
        return printString(str.substring(1, str.length))}
    else {
        return true
    }
}


function reverseString(str) {
    
    if(str.length ===  0){
        return ''
    } 
    return str.substring(str.length - 1) + reverseString(str.substring(0, str.length - 1))
}



function isPalindrome(str) {
    
    if(str.length > 1) {
        isPalindrome(str.substring(1, str.length - 1))
        return str.endsWith(str[0])        
    }else {
        return true
    }
}

