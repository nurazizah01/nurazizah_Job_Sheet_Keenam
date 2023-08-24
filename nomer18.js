const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let pengirim,paket;
rl.question('masukan berat paket(kg):',(jawabanpengirim) =>{
    rl.question('masukan jenis pengiriman (eksperes,reguler,kilat) (pilihan):',(jawabanpaket) =>{
        pengirim =jawabanpengirim.toLowerCase() ==='kg';
        paket =jawabanpaket.toLowerCase() === '1','2','3';
       if (pengirim && paket){
        console.log(' eksperes.');
        console.log('tarif per kg')
        console.log('100000');
       } else if(pengirim && paket){
        console.log(' reguler.');
        console.log('tarif per kg');
        console.log('7000');
       } else if (pengirim && paket){
        console.log('kilat.');
        console.log('tarif per kg');
        console.log('18000');
       } else {
        console.log('jenis pengiriman tidak valid.')
       //} else{
        //console.log('estimasi biaya pengiriman: 100000 ')
       }
       rl.close();
    });
});