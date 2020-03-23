
const line = (num) => {
    if(num === 1) 
    {
        return '\u{2501}'
    } 
    else
    {
        return '\u{2501}' + line(num-1)
    }
}
//console.log(line(6))


const TopBorder = (n) => 
{ return '\u{250F}' + line(n) + '\u{2513}'}

//console.log(TopBorder(6))

const MiddleBorder = (n) => 
{ return '\u{2523}' + line(n) + '\u{252B}'}

//console.log(MiddleBorder(6))

const BottomBorder = (n) => 
{ return '\u{2517}' + line(n) + '\u{251B}'}

//console.log(BottomBorder(6))


const spacesAfter = (string, maxArrLen) => 
{
     let spaces = maxArrLen - string.length
     let spacesAfter = ""
     for(let i=0; i < spaces; i++) 
     {spacesAfter += " "}
    
    
     return string + spacesAfter
}

//console.log(spacesAfter('ASDA',20))

const BarsAround = (str) => {
    
     return '\u{2503}' + str + '\u{2503}'
    }

let arr = process.argv.slice(2)

    let maxStr = 0

    if (arr.length === 0)
    {
        console.log( TopBorder(1) + `\n` + BottomBorder(1) )  

    }
    for(let i = 0; i < arr.length; i++) {
        maxStr = Math.max(maxStr, arr[i].length);
    }
    for(let i = 0; i < arr.length; i++) {
        if(i === 0) {
            console.log(TopBorder(maxStr));
        }
        console.log(BarsAround(spacesAfter(arr[i], maxStr)))
        
        if(i == arr.length-1) {
            console.log(BottomBorder(maxStr));
            break;
        }
        console.log(MiddleBorder(maxStr));
    }







