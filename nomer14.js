const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let transportasi,waktuperjalanan;
rl.question('pilihan mode transportasi 1,2,3):',(jawabantransportasi) =>{
    rl.question('masukan waktu perjalanan (pilihan):',(jawabanwaktuperjalanan) =>{
        pengirim =jawabantransportasi.toLowerCase() === 'kereta';
        waktu =jawabanwaktuperjalanan.toLowerCase() === '1','2','3';
       if (transportasi && waktuperjalanan){
        console.log('10 jam 300.');
       } else if(transportasi && !waktuperjalanan){
        console.log('2 jam 100.');
       } else if (transportasi && waktuperjalanan){
        console.log('7 jam 250.');
       } else {
        console.log('estimasi waktu perjalanan {pilihan_str}: estimasi_waktu.')
        console.log('biaya perjalanan dengan {pilihan_str}: 300.')
       }
       rl.close();
    });
});