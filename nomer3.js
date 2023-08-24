const apakahprima =(angka) =>{
    let pembagi =0;
    for(let i=1; i <=angka;i++){
        if(angka%i == 0){
            pembagi++
        }
    }
    if(pembagi == 2){
        console.log('prima');
    } else {
        console.log('bukan prima');
    }
}

// test cases
apakahprima(2);//prima
apakahprima(3);//prima
apakahprima(4);//bukan prima
apakahprima(9);//bukan prima