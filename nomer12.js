const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let nilai1, nilai2, nilai3, average, nilaiakhir;
rl.question('Masukkan nilai tugas:',(input) =>{
    rl.question('Masukkan nilai ujian tengah semester:',(input) =>{
        rl.question('Masukkan nilai ujian akhir semester:',(input =>{
            nilai1 =parseInt(input);
            nilai2 =parseInt(input);
            nilai3 =parseInt(input);
            average =(nilai1 + nilai2)/2;
            if (average >=0.2){
                nilaiakhir ="75"
            } else if (average >=0.3){
                nilaiakhir ="75"
            } else if(average >="0.4"){
                nilaiakhir ="83.50"
            }
            console.log('nilai akhir anda adalah 89.50');
            rl.close();

        }))
    })
})

