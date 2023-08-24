const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let pengirim,waktu;
rl.question('apakah anda menganterbarang?(eksperes,reguler,kilat):',(jawabanpengirim) =>{
    rl.question('apakah anda memiliki waktu? (pilihan):',(jawabanwaktu) =>{
        pengirim =jawabanpengirim.toLowerCase() ==='ya';
        waktu =jawabanwaktu.toLowerCase() === '1','2','3';
       if (pengirim && waktu){
        console.log('1-10 hari eksperes.');
       } else if(pengirim && waktu){
        console.log('3-7 hari reguler.');
       } else if (pengirim && !waktu){
        console.log('24 jam kilat.');
       } else {
        console.log('estimasi waktu pengirimann {pilihan_str}: estimasi_waktu.')
       }
       rl.close();
    });
});