// ========================fill()================================#1
// Metode fill()mengisi elemen tertentu dalam array dengan nilai.
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    console.log(fruits.fill("Kiwi")); //output: [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

// ========================pop()=================================#2
// metode pop() menghapus element terakhir dari array
    const buah = ["pisang", "jeruk", "apel", "mangga"];
    buah.pop();

    console.log(buah); //output: [ 'pisang', 'jeruk', 'apel' ]

// =======================push()=================================#3
// Metode push()ini menambahkan elemen baru ke array (di akhir):
    const car = ["ford", "ferari", "honda", "toyota"];
    car.push("nisan");

    console.log(car); // output: [ 'ford', 'ferari', 'honda', 'toyota', 'nisan' ]

// ======================shift()=================================#4
// Metode shift()ini menghapus elemen larik pertama dan "menggeser" semua elemen lainnya ke indeks yang lebih rendah.
    const warna = ["biru", "pink", "merah", "hitam"];
    warna.shift();

    console.log(warna); // output: [ 'pink', 'merah', 'hitam' ]

// =======================unshift()==============================#5
// Metode unshift()ini menambahkan elemen baru ke array (di awal), dan "membatalkan" elemen lama
    const color = ["blue", "pink", "red", "black"];
    color.unshift("maron");

    console.log(color); // Output: [ 'maron', 'blue', 'pink', 'red', 'black' ]

// =========================sort()===============================#6
// Mengurutkan sort()elemen sebagai string dalam urutan abjad dan menaik.
    const daftarNama = ["acep", "fernando", "brian", "serly"];
    daftarNama.sort();

    console.log(daftarNama); // Output: [ 'acep', 'brian', 'fernando', 'serly' ] 

// ==========================keys()===============================#7
// Metode keys()mengembalikan objek Array Iterator dengan kunci array.
// dan iterator adalah objek yang berisi jumlah nilai yang dapat dihitung
    const clubBola = ["real madrid", "barcelona", "tottenham", "pulham"];
    const keys = Object.keys(clubBola);

    let text = "";
    for (let x of keys) {
    text += x + "\n";
    }
    console.log(text); 
    //Output :
            // 0
            // 1
            // 2
            // 3

        
// =======================indexOf()================================#8
// indexOf () metode mengembalikan posisi nilai string dari kejadian pertama dari string yang ditentukan
    const motor = ["piagio", "ducati", "Aprilia", "bajaj"];
    const cariMotor = motor.indexOf("ducati");

    console.log(cariMotor); // Output 1

// =======================isNaN()================================#9
// metode Number yang digunakan untuk mengembalikan nilai Boolean yang menunjukkan apakah suatu nilai bertipe Number dengan nilai NaN  (Not-A-Number)
    let cekNan = "pijarcamp";
    let cekNan2 = "pijarcamp";
    
    console.log(isNaN(cekNan)); // output: true || global isNaN()
    console.log(Number.isNaN(cekNan2)); // output: false

// =======================isFinite()================================#10
// Fungsi global isFinite()menentukan apakah nilai yang diteruskan adalah bilangan berhingga
    let cekFinite = "123";
    let cekFinite2 = "pijarcamp";

    console.log(isFinite(cekFinite));  // output: true || global isFinite
    console.log(isFinite(cekFinite2));  // output: false