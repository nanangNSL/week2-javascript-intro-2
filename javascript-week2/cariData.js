

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(nilaiAkhir< nilaiAwal){
        console.log("nilai akhir harus lebih besar dari nilai awal");
    }else if(dataArray.length < 5){
        console.log("data array harus lebih dari 5");
    }else{
        let sortArray = dataArray.sort();
        let newArray= [];
        for(let i = 0 ;i < dataArray.length;i++){
            if(sortArray[i] >= nilaiAwal && sortArray[i] <= nilaiAkhir){
                newArray.push(sortArray[i])
            }
        }
        console.log(newArray);
    }
}

seleksiNilai(10, 57,[18, 14, 60,34,56,78,17]);
