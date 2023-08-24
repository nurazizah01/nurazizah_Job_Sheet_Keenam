const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let usia,jenisflm;
rl.question('masukan usia anda :',(input) =>{
    rl.question('masukan jenis flm dewasa/anak-anak :',(input) =>{
        usia=input.toLowerCase();
        jenisflm=input.toLowerCase();
        if ('usia >= 18.'){
            console.log('harga tiket 25000');
        } if ('usia >= 14') {
            console.log('14000')
        } else{
            console.log('harga tiket:10000')
        }
        rl.close();
    })
});