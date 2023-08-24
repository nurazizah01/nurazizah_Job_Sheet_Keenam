const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let nilia,hasil;
rl.question('masukan nilai ujian:',(input) =>{
    nilai = parseFloat(input);
    hasil = nilai >= 90? 'lulus':'tidak lulus';
    console.log('anda berhak mendapetkan beasiswa.');
    rl.close();
});