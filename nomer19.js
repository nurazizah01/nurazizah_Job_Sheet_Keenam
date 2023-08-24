const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let daftarhadir;
rl.question('masukan jumlah kehadiran dalem sebulan:',(jawabandaftarhadir) =>{
    daftarhadir=jawabandaftarhadir.toLowerCase() ==='20';
    if ('jumlah_kehadiran 20'){
        //console.log('status kehadiran:hadir');
        if('jumlh_kehadiran 20'){
            console.log('status kehadiran:tidak hadir');
        }
    } else{
        console.log('status kehariran')
    }
    rl.close();
});