const readline =require('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('apakah anda minjam buku di perpustakaan? (ya/tidak):',(jawaban) =>{
    if (jawaban.toLowerCase() === 'ya'){
        rl.question('apakah anda meminajm buku kimia? (ya/tidak):',(jawabanbukukimia) =>{
            if (jawabanbukukimia.toLocaleLowerCase() ==='tidak'){
                console.log('pesan tidak bisa meminjam.');
            } else{
                console.log('anda meminjam buku diperpustakaan,tapi anda belum mengembalikan.');
            }
            rl.close();
        });
    } else {
        console.log('anda tidak bisa meminjam.');
        rl.close();
    }
});