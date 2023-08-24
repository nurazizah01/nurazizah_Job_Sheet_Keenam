const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let sisiA, sisiB, sisiC;
rl.question('masukan panjang sisi A:',(input) =>{
    rl.question('masukan panjang B.',(input) =>{
        rl.question('masukan panjang sisi C.',(input)=>{
             if (sisiA,sisiB,sisiC){
                console.log(' segitiga sama sisi')
             } else if('sisi A, sisi B or, sisi A, sisi C or,sisi B'){
                console.log('segitiga sama sisi')
             } else {
                console.log('jenis segitiga:segitiga sama sisi,segitiga sama kaki,segitiga sembarang.')
             }
             rl.close();
             {
             }
        })
    })
})