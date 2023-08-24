const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let menu;
rl.question('masukan nomer menu yang dipilih (1-5)',(input) =>{
    hadiah =parseInt(input);
    switch (menu){
        case 1:
        console.log('ayam bakar');
        break;
    case 2:
        console.log('es teh manis');
        break;
    case 3:
        console.log('nasi goreng');
        break;
    case 4:
        console.log('es jeruk');
        break;
    case 5:
        console.log('ikan bakar');
        break;
    default:
        console.log('input tidak valid,masukan angka antara 1-7.');
    }
    rl.close();
});