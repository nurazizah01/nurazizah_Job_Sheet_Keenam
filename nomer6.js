const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let angka;
rl.question('masukan total belanja anda: ',(input) =>{
    angka = parseInt(input);
    if (angka >= 1700000)
    diskon=(0.1);
console.log('selamat anda mendapetkan diskon');
rl.close();
});