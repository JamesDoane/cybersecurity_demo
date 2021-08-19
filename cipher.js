/*
    each letter = phi(letter's position in alphabet + 19)
    a =phi(20)+a7
    b=phi(21)+b7
    c=phi(22)+c7
    etc
*/
const cipher = (str) => {
    let checkStr = str.toUpperCase()
    let newStr = ''
    for(let i = 0; i < str.length ; i++){
        
        if(checkStr.charAt(i) === 'A'){
            newStr += '015'
        }
        else if(checkStr.charAt(i) === 'B'){
            newStr += '026'
        }
        else if(checkStr.charAt(i) === 'C'){
            newStr += '031'
        }
        else if(checkStr.charAt(i) === 'D'){
            newStr += '050'
        }
        else if(checkStr.charAt(i) === 'E'){
            newStr += '043'
        }
        else if(checkStr.charAt(i) === 'F'){
            newStr += '062'
        }
        else if(checkStr.charAt(i) === 'G'){
            newStr += '061'           
        }
        else if(checkStr.charAt(i) === 'H'){
            newStr += '074'
        }
        else if(checkStr.charAt(i) === 'I'){
            newStr += '075'
        }
        else if(checkStr.charAt(i) === 'J'){
            newStr += '098'
        }
        else if(checkStr.charAt(i) === 'K'){
            newStr += '085'
        }
        else if(checkStr.charAt(i) === 'L'){
            newStr += '114'
        }
        else if(checkStr.charAt(i) === 'M'){
            newStr += '107'
        }
        else if(checkStr.charAt(i) === 'N'){
            newStr += '118'
        }
        else if(checkStr.charAt(i) === 'O'){
            newStr += '121'
        }
        else if(checkStr.charAt(i) === 'P'){
            newStr += '136'
        }
        else if(checkStr.charAt(i) === 'Q'){
            newStr += '131'
        }
        else if(checkStr.charAt(i) === 'R'){
            newStr += '162'
        }
        else if(checkStr.charAt(i) === 'S'){
            newStr += '171'
        }
        else if(checkStr.charAt(i) === 'T'){
            newStr += '164'
        }
        else if(checkStr.charAt(i) === 'U'){
            newStr += '163'
        }
        else if(checkStr.charAt(i) === 'V'){
            newStr += '194'
        }
        else if(checkStr.charAt(i) === 'W'){
            newStr += '173'
        }
        else if(checkStr.charAt(i) === 'X'){
            newStr += '210'
        }
        else if(checkStr.charAt(i) === 'Y'){
            newStr += '195'
        }
        else if(checkStr.charAt(i) === 'Z'){
            newStr += '206'
        }

    }


    // console.log(newStr)
    return newStr
}
let msg = 'congratulations'
let encoded = cipher(msg)
console.log(encoded)

const decipher = (enc) => {
    let arr = enc.match(/.{1,3}/g)
    let newStr = ''
    for(let i = 0; i < arr.length ; i++){
        // console.log(arr[i])
        if(arr[i] === '015'){
            newStr += 'a'
        }
        else if(arr[i] === '026'){
            newStr += 'b'
        }
        else if(arr[i] === '031'){
            newStr += 'c'
        }
        else if(arr[i] === '050'){
            newStr += 'd'
        }
        else if(arr[i] === '043'){
            newStr += 'e'
        }
        else if(arr[i] === '062'){
            newStr += 'f'
        }
        else if(arr[i] === '061'){
            newStr += 'g'           
        }
        else if(arr[i] === '074'){
            newStr += 'h'
        }
        else if(arr[i] === '075'){
            newStr += 'i'
        }
        else if(arr[i] === '098'){
            newStr += 'j'
        }
        else if(arr[i] === '085'){
            newStr += 'k'
        }
        else if(arr[i] === '114'){
            newStr += 'l'
        }
        else if(arr[i] === '107'){
            newStr += 'm'
        }
        else if(arr[i] === '118'){
            newStr += 'n'
        }
        else if(arr[i] === '121'){
            newStr += 'o'
        }
        else if(arr[i] === '136'){
            newStr += 'p'
        }
        else if(arr[i] === '131'){
            newStr += 'q'
        }
        else if(arr[i] === '162'){
            newStr += 'r'
        }
        else if(arr[i] === '171'){
            newStr += 's'
        }
        else if(arr[i] === '164'){
            newStr += 't'
        }
        else if(arr[i] === '163'){
            newStr += 'u'
        }
        else if(arr[i] === '194'){
            newStr += 'v'
        }
        else if(arr[i] === '173'){
            newStr += 'w'
        }
        else if(arr[i] === '210'){
            newStr += 'x'
        }
        else if(arr[i] === '195'){
            newStr += 'y'
        }
        else if(arr[i] === '206'){
            newStr += 'z'
        }
    }
    console.log(newStr)
}

decipher(encoded)