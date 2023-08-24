const readline =require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let nilaikinerja, karyawan, bonus;
rl.question('masukan nilai kinerjer karyawan',(input) =>{
    rl.question('masukan nilai bonus:',(input) =>{
        
        if (nilaikinerja >= 90){
            bonus ="0.05"
        } else if(nilaikinerja >= 80){
            bonus ="0.03"
        } else{
            console.log('tidak mendapetkan bonus.');
        }
        console.log('maaf anda tidak mendapetkan bonus ${bonus}');
        rl.close(); 
    });
});