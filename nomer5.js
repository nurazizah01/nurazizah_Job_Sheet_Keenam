const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let umur;
rl.question('masukan usia anda :',(input) =>{
    umur=input.toLocaleLowerCase();
    if ('usia > batas_usia.'){
        console.log('selamat!anda bisa mendapetkan hadiah.');
    } else {
        console.log('maaf anda belum cukup usia mendapetkan hadiah')
    }
    rl.close();
});