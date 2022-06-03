const data =[
    "Abigail", "Alexandra", "Alison","Amanda","Anggela",
    "Bella", "Carol", "Caroline", "Carolyn", "Deidre",
    "Diana", "Elizabeth", "Ella", "Faith", "Olivie",
    "Alfredo", "Nimah", "Taufik", "Reza"," Kevin",
    "Wahid", "Jafar", "Nanang", "Adi", "Apryanto",
    "Irfandi", "Ayi", "Ilham", "Ikhsan"
];

const callback = (nilai1, nilai2) => 
    {
        let regex = new RegExp(`${nilai1}`, 'i'); 
        let filterReg = data.filter(item => regex.test(item));
        let hasil =[];
            for(nilai2;  0 < nilai2; nilai2--)
            {
                hasil += filterReg[nilai2] + " ";

            }
    return hasil;
    }
const  searchName = (nilai1, nilai2, cariData) => {
    return `Pencarian dari karakter  ==> ${nilai1}, Dan jumlah yang ditampilkan ${nilai2} = ${cariData(nilai1, nilai2)}`;
}
console.log(searchName("an", 4, callback))




