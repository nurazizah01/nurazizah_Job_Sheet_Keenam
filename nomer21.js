const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let umur;
rl.question('masukan usia anda :',(input) =>{
    umur=input.toLocaleLowerCase();
    if ('usia > 18.'){
        console.log('anda dapet mendaftar.');
    } else {
        console.log('anda belum cukup umur')
    }
    rl.close();
});