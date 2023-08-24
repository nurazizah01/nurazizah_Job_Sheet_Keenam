const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let pilihantujuanliburan;
rl.question('pilihan tujuan hiburan (1-5):',(input) =>{
    pilihantujuanliburan= parseInt(input);
    switch (pilihantujuanliburan){
        case 1:
        console.log('bali');
        console.log('500000');
        console.log('fasilitas:resort,pantai,wisata budaya');
        break;
    case 2:
        console.log('thailand');
        console.log('700000');
        console.log('fasilitas:kuil budha berbaring');
        break;
    case 3:
        console.log('yohyakarta');
        console.log('400000');
        console.log('fasilitas:candi,wisata sejarah');
        break;
    case 4:
        console.log('korea');
        console.log('980000');
        console.log('fasilitas:pusat pendidikan,taman & ruang hijau,transportasi canggih');
        break;
    case 5:
        console.log('malang');
        console.log('120000');
        console.log('fasilitas:wisata malam,pemandangan');
        break;
    default:
        console.log('pilihan tidak valid.');
    }
    rl.close();
})