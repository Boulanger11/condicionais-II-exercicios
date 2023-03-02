// 1.
const num = Number(prompt(`Digite um número:`))

if (num % 2 === 0) {
    if (num % 3 === 0){
        console.log(`${num} é divisivel por 2 e 3`)
    }else {
        console.log(`${num} não é divisivel`)
    }
}

// 2.
if (num % 2 === 0 && num % 3 === 0){
    console.log(`${num} é divisivel por 2 e 3`)
}else {
    console.log(`${num} não é divisivel`)
}