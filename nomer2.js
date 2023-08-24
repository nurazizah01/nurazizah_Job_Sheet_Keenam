const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let jawabn;
rl.question('apakah angka 7 genap? (ya/tidak);',(input) =>{
    jawaban=input.toLowerCase();
    if (jawabn ==='ya'){
        console.log('angka adalah angka genap,');
    } else {
    console.log('angka bukan angka genap.');
}
rl.close();
});