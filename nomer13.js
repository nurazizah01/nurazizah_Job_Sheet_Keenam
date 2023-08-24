const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let umur;
rl.question('masukan usia anda :',(input) =>{
    rl.question('masukan destinasi tujuan :',(input) =>{
        destinasi=input.toLowerCase() =="bandung";
        if ('usia < 15.'){
            console.log('45000');

            //destinasi=input.toLowerCase() =="thailand";
            if ('usia <24.'){
                //console.log('26 baht');
            } else{
                console.log('harga tiket untuk tujuan thailand adaah: 26 baht');
                rl.close();
            }
        }
    });
});