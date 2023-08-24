const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let angka;
rl.question('masukan jumlah total pesan makan: ',(input) =>{
    angka = parseInt(input);
    if (angka >= 200)
    diskon=(0.1);
    console.log('total bayar setelah diskon:total_bayar:95.')
console.log('selamat anda tidak dapetet diskon.');
rl.close();
});