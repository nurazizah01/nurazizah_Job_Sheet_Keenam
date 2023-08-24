const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let totalbelanja;
rl.question('masukan total belanja:',(input) =>{
    totalbelanja =parseInt(input);
    if (totalbelanja > 500000){
    } else{
        console.log('total belnja:150000 setelah di diskon');
    }
    rl.close();
})