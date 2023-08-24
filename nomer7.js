const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('masukan judul buku yang ingin pinjam:',(jawaban) =>{
    if (jawaban.toLowerCase() === 'buku A'){
        rl.question('apakah buku A dipinjem? (ya/tidak)',(jawabanbukuA) =>{
            if (jawabanbukuA.toLocaleLowerCase() ==='buku A'){
                console.log('maaf,buku f sedang habis atau tidak tersedia.');
            } else{
                console.log('anda dapet meminjam buku F .');
            }
            rl.close();
        });
    } else {
        console.log('maaf,buku f sedang habis atau tidak tersedia.');
        rl.close();
    }
});