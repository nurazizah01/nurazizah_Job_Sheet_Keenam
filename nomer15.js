const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let menu;
rl.question('pilih nomer menu (1-5)',(input) =>{
    hadiah =parseInt(input);
    switch (menu){
        case 1:
        console.log('cah kangkung');
        break;
    case 2:
        console.log('es teh manis');
        break;
    case 3:
        console.log('ikan bakar');
        break;
    case 4:
        console.log('jus melon');
        break;
    case 5:
        console.log('fruit salad');
        break;
    default:
        console.log('anda memilih: ikan bakar.');
    }
    rl.close();
});