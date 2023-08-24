const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('masukan jumlah buku yang ingin dipinjam:',(jawaban) =>{
    if (jawaban.toLowerCase() === '8 buku'){
        rl.question('berapa anda meminjam buku?(1/8)',(jawaban8buku) =>{
            if (jawaban8buku.toLocaleLowerCase() ==='8 buku'){
                console.log('anda meminjam 8 buku.');
            } else{
                console.log('buku tidak tersedia saaat ini');
            }
            rl.close();
        });
    } else {
        console.log('buku tidak tersedia saat ini.');
        rl.close();
    }
});