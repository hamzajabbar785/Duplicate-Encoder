// The goal of this exercise is to convert a string to a new string where each character in the new 
// string is "(" if that character appears only once in the original string, or ")" if that character
//  appears more than once in the original string. Ignore capitalization when determining if a character
//   is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It
//  Should encode XXX", the "XXX" is the expected result, not the input!

const duplicateEncode = (str) => {
    let obj = {}
    let words = str.toLowerCase().split("")
    for(let el of words){
        if(obj[el]){
            obj[el]++
        }else{
            obj[el] = 1
        }
    }

    return words.map((w) => {
        if(obj[w] && obj[w] > 1){
            return ")"
        } else{
            return "("
        }
    }).join("")
}

duplicateEncode("Success")

//Solution 2
const duplicateEncode = (str) => {
    return word
    .toLowerCase()
    .split('')
    .map( function (el, ind, arr) {
      return arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'
    })
    .join('');
}