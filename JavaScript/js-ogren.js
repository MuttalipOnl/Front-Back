/*
console.log("JavaScript dosyası yüklendi.");

// Değişken Türleri

var a = 5000;
var b = 5500;
var c = 6000;
var d = 7000;
var kdv = 1.2;

console.log(a * kdv);
console.log(b * kdv);
console.log(c * kdv);
console.log(d * kdv);

var urnAdi = "Kalem";
console.log(typeof urnAdi); // string

var sayi1 = 10;
var sayi2 = 20;
console.log(sayi1 + sayi2); // 30

var sayi1 = "10";
var sayi2 = "20";
console.log(sayi1 + sayi2); // 1020

var sinavNotu = 40;
var basarilimi = sinavNotu >= 50; // "Başarılı" : "Başarısız";
console.log(basarilimi); // false
*/

var og1_ad = "Ada";
var og1_soyad = "Bilgi";
var og1_dogumTarihi = 2012;
var ogr1_mat1 = 70;
var ogr1_mat2 = 70;
var ogr1_mat3 = 80;
var ogr1_yas = 2025 - og1_dogumTarihi;
var ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;

console.log(ogr1_yas);
console.log(parseInt(ogr1_ortalama));

console.log(ogr1_ortalama >= 50);

var og2_ad = "Yiğit";
var og2_soyad = "Bilgi";
var og2_dogumTarihi = 2010;
var ogr2_mat1 = 40;
var ogr2_mat2 = 40;
var ogr2_mat3 = 50;
var ogr2_yas = 2025 - og1_dogumTarihi;
var ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;

console.log(ogr2_yas);
console.log(parseFloat(ogr2_ortalama));

console.log(ogr2_ortalama >= 50);

// String
var ad = "Ali";
var soyad = "Veli";
var yas = 25;
var sehir = "İstanbul";

var mesaj =
  "Merhaba, benim adım " +
  ad +
  " " +
  soyad +
  ". " +
  "Benim yaşım " +
  yas +
  " ve " +
  sehir +
  "'de yaşıyorum.";
console.log(mesaj);

// Strings Metotları

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";
var sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Web");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];
sonuc = kursAdi.split(" ")[3];

console.log(sonuc);

// String Uygulamaları

var url = "https://www.sadikturan.com";
var kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

var sonuc;
sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor? (js string metotları)
sonuc = url.startsWith("https");

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
sonuc = kursAdi.indexOf("Eğitimi");

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replace("ş", "s").replace("ı", "i");
sonuc = `${url}/${kursAdi}`;

console.log(sonuc);

// Numbers

var sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.7");
sonuc = parseFloat("10.7");
sonuc = parseInt("105a");
sonuc = parseInt("a105");

sonuc = isNaN("a10"); // is not a number ?
sonuc = Number.isInteger(10.5);

var sayi = 10.12355;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(2);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2, 3);
sonuc = Math.min(2, 3, 5, 7, 9, 1);
sonuc = Math.max(2, 3, 5, 7, 9, 1);

sonuc = Math.floor(Math.random() * 100 + 1);

console.log(typeof sonuc);
console.log(sonuc);

// DİZİLER (Arrays)

// var urun1 = "IPhone 15";
// var urun2 = "IPhone 16";
// var urun3 = "IPhone 17";

var urunler = ["IPhone 15", "IPhone 16", "IPhone 17"];
var fiyatlar = [50000, 60000, 70000];
var renkler = ["gold", "black", "silver"];

var sonuc;

sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`;

var urun1 = ["IPhone 15", 50000, ["gold", "black", "silver"]];

var urun2 = ["IPhone 16", 60000, "black"];
var urun3 = ["IPhone 17", 70000, "silver"];

// güncelleme

urun1[0] = "IPhone 15 Pro";

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][0]}`;

console.log(sonuc);

// DİZİ METOTLARI

var ogrenciler = ["Çınar", "Yiğit", "Ada"];

var sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// eleman silme
// sonuc = ogrenciler.pop();
// sonuc = ogrenciler.shift();

// eleman ekleme
// sonuc = ogrenciler.push("Sena");
// sonuc = ogrenciler.unshift("Sena");

// eleman arama
// sonuc = ogrenciler.indexOf('Yiğit');
// sonuc = ogrenciler.lastIndexOf('Yiğit');
// sonuc = ogrenciler.includes('Yiğit');

// silme, ekleme
sonuc = ogrenciler.splice(0, 1, "Ali", "Canan");

console.log(sonuc);
console.log(ogrenciler);

// 1- "Kiraz,Karpuz,Kavun,Erik" elemanlarına sahip bir dizi oluşturunuz.
var meyveler = ["Kiraz", "Karpuz", "Kavun", "Erik", "Üzüm"];

// 2- Dizi kaç elemanlıdır?
var sonuc;

sonuc = meyveler.length;

// 3- Dizinin ilk ve son elemanlarını yazdırınız.
sonuc = meyveler[0];
sonuc = meyveler[meyveler.length - 1];

// 4- Kavun dizinin bir elemanımıdır?
sonuc = meyveler.indexOf("Kavun");
sonuc = meyveler.includes("Kavun");

// 5- Çilek elemanını dizinin sonuna ekleyiniz.
// meyveler.push("Çilek");
// meyveler[meyveler.length] = "Çilek";

// 6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// meyveler.splice(meyveler.length - 2, 2);
// console.log(meyveler);

// 7- Aşağıdaki bilgileri bir dizide saklayınız ve
//    her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/*
    Öğrenci 1: Yiğit Bilgi 2010 [60,90,80]
    Öğrenci 2: Ada Bilgi 2012 [70,80,80]
    Öğrenci 3: Çınar Turan 2017 [60,50,80]
*/

var ogrenci1 = ["Yiğit", "Bilgi", 2010, [60, 90, 80]];

var ogrenci2 = ["Ada", "Bilgi", 2012, [50, 80, 80]];

var ogrenci3 = ["Çınar", "Turan", 2017, [60, 50, 80]];

var ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

// yaşlar
console.log(2025 - ogrenci1[2]);
console.log(2025 - ogrenci2[2]);
console.log(2025 - ogrenci3[2]);

// notlar
var yigit_not = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
var ada_not = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
var cinar_not = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;

console.log(yigit_not, ada_not, cinar_not);

// NESNELER (Objects)

// var kullanici = [
//     "Sadık",
//     "Turan",
//     40
// ];

// key - value

var kullanici1 = {
  ad: "Sadık",
  soyad: "Turan",
  yas: 40,
  adres: {
    sehir: "kocaeli",
    ilce: "İzmit",
  },
  hobiler: ["sinema", "spor"],
};

var kullanici2 = {
  ad: "Çınar",
  soyad: "Turan",
  yas: 7,
  adres: {
    sehir: "kocaeli",
    ilce: "İzmit",
  },
  hobiler: ["sinema", "spor"],
};

var kullanicilar = [kullanici1, kullanici2];

var sonuc;

sonuc = kullanici1;
sonuc = kullanici1["ad"];
sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"];
sonuc = kullanici1["adres"]["sehir"];
sonuc = kullanici1.adres.ilce;
sonuc = kullanici1.hobiler[0];

sonuc = kullanicilar[1].ad;

console.log(sonuc);

// Uygulama: Nesneler (Objects)

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 16 Pro
        ürün url: http://abc.com/iphone-16-pro
        ürün fiyatı: 75000

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12


    sipariş id: 102
    sipariş tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12    

*/

var siparis_1 = {
  id: 101,
  musteri_id: 12,
  tarih: "31.12.2025",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan mah",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 5,
      urun_adi: "IPhone 16 Pro",
      urun_url: "http://abc.com/iphone-16-pro",
      fiyat: 75000,
    },
    {
      urun_id: 6,
      urun_adi: "IPhone 16 Pro Max",
      urun_url: "http://abc.com/iphone-16-pro-max",
      fiyat: 85000,
    },
  ],
};

var siparis_2 = {
  id: 102,
  musteri_id: 12,
  tarih: "30.11.2025",
  odeme_sekli: "kredi kartı",
  kargo_adresi: {
    mahalle: "Yahya kaptan mah",
    ilce: "İzmit",
    sehir: "Kocaeli",
  },
  urunler: [
    {
      urun_id: 6,
      urun_adi: "IPhone 16 Pro Max",
      urun_url: "http://abc.com/iphone-16-pro-max",
      fiyat: 85000,
    },
  ],
};

var siparis1_toplam =
  (siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat) * 1.2;
var siparis2_toplam = siparis_2.urunler[0].fiyat * 1.2;

console.log(siparis1_toplam);
console.log(siparis2_toplam);

var toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("toplam sipariş: ", toplam_siparis);

var siparisler = [siparis_1, siparis_2];

// OPERATÖRLER
var sonuc;
var a = 10,
  b = 10,
  c = 20;

// 1- Aritmetik Operatörler
sonuc = a + b; // toplama
sonuc = a - b; // çıkarma
sonuc = a * b; // çarpma
sonuc = a / b; // bölme
sonuc = a % b; // mod alma
sonuc = c++; // c'nin değeri 20, sonra 1 artırılır
sonuc = ++c; // c'nin değeri 21, önce 1 artırılır

// 2- Atama Operatörleri
sonuc = a; // atama
sonuc += b; // a = a + b

// 3- Karşılaştırma Operatörleri
sonuc = a == b; // eşit mi?
sonuc = a != b; // eşit değil mi?
sonuc = a === b; // değer ve tip eşitliği

// 4- Mantıksal Operatörler
sonuc = a > b && c > a; // ve
sonuc = a < b || c > a; // veya
sonuc = !(a == b); // değil

// IF/ELSE KOŞULLARI
var username = "sadikturan";
var password = "12345";
var kosul = username == "sadikturan";
if (kosul) {
  if (password == "12345") {
    console.log("Giriş başarılı.");
  } else {
    console.log("Parola hatalı.");
  }
} else {
  console.log("Kullanıcı adı hatalı.");
}

if (false) {
  console.log("Merhaba 3");
}

// yas >= 18
// mezuniyet == "lise" yada mezuniyet == "universite"

var yas = 20;
var mezuniyet = "ilkokul";

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
  console.log("ehliyet alabilirsiniz.");
} else {
  console.log("ehliyet alamazsınız.");
}

// and (&&)
// true, true => true
// false, true => false
// false, false => false

// veya (||)
// true, true => true
// false, true => true
// false, false => false

// If/Else Uygulamaları

// 1- Bir sayının 50-100 arasında olup olmadığını kontrol ediniz.

// var sayi = 30;

// if(sayi > 50 && sayi < 100)
// {
//     console.log("sayı 50-100 arasındadır.");
// }

// 2- Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz.

// var sayi = 10;

// if(sayi % 2 == 0 && sayi > 0)
// {
//     console.log("sayı pozitif çift sayıdır.")
// }

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (ödev: else if kullanımı)

// var x = 60, y = 50, z = 30;

// if(x > y && x > z) {
//     console.log("x en büyük");
// }
// else if (y > x && y > z) {
//     console.log("y en büyük");
// }
// else if (z > x && z > y) {
//     console.log("z en büyük");
// }
// else {
//     console.log("hatalı bilgi");
// }

// 4- 2 vize (40%) ve 1 final (%60) noyuna göre ortalama hesaplayınız.

var vize1 = 10;
var vize2 = 10;
var final = 70;

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
var ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;

console.log(ortalama);

// if(ortalama >= 50) {
//     console.log("geçti");
// }
// else {
//     console.log("kaldı");
// }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

// if(ortalama >= 50 && final >=50 ) {
//     console.log("geçti");
// }
// else {
//     console.log("kaldı");
// }

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile geçmiş sayılsın.

if (ortalama >= 50 || final >= 70) {
  console.log("geçti");
} else {
  console.log("kaldı");
}

// FOR DÖNGÜSÜ

// console.log(1);
// console.log(2);
// console.log(3);

// // ...

// console.log(100);

// for(var i = 1; i <= 100; i++)
// {
//     // kodlar
//     console.log(i);
// }

var sayilar = [1, 2, 3, 5, 6, 8, 9, 0, 12, 45, 13, 25, 67];
var toplam = 0;

for (var index = 0; index < sayilar.length; index++) {
  console.log(sayilar[index]);

  toplam += sayilar[index];
}

console.log(toplam);

// WHILE DÖNGÜSÜ

// for(var i = 1; i <= 10; i++)
// {
//     console.log(i);
// }

// break, continue

// var i = 1;

// while(i <= 10)
// {
//     i++;

//     if(i % 2 == 1)
//     {
//         break;
//     }

//     console.log(i);

// }

// console.log("döngü bitti");

var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// UYGULAMA : DÖNGÜLER
var sayilar = [3, 5, 7, 8, 12, 23, 45, 65];

// 1- sayilar dizisindeki her bir sayının karesini yazdırınız.

// for(var i = 0; i < sayilar.length; i++)
// {
//     console.log(sayilar[i] * sayilar[i]);
// }

// 2- sayilar listesindeki hangi sayılar 5'in katıdır?

// for(var i = 0; i < sayilar.length; i++)
// {
//     if(sayilar[i] % 5 == 0) {
//         console.log(sayilar[i]);
//     }
// }

// var i = 0;
// while(i < sayilar.length)
// {
//     if(sayilar[i] % 5 == 0) {
//         console.log(sayilar[i]);
//     }
//     i++;
// }
// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.

// for(var i = 100; i >= 50; i--)
// {
//     console.log(i);
// }

var urunler = [
  "iphone 16",
  "samsung s25",
  "iphone 17",
  "samsung s26",
  "samsung s23",
];

// 4- urunler listesindeki tüm ürünleri büyük harfe çeviriniz.

// for(var i = 0; i < urunler.length; i++) {
//     console.log(urunler[i].toUpperCase());
// }

// 5- urunler listesinde içinde samsung kelimesi geçen kaç kelime vardır?

// var adet = 0;

// for(var i = 0; i < urunler.length; i++) {
//     if(urunler[i].includes("samsung")) {
//         adet++;
//     }
// }
// console.log(adet + " tane kelime bulundu.");

var ogrenciler = [
  { ad: "Yiğit", soyad: "Bilgi", notlar: [60, 70, 80, 90] },
  { ad: "Ada", soyad: "Bilgi", notlar: [80, 50, 75] },
  { ad: "Çınar", soyad: "Turan", notlar: [70, 70, 80] },
];

var toplam_sinif = 0;
for (var i = 0; i < ogrenciler.length; i++) {
  var not_toplam = 0;
  var adet = 0;
  var ortalama = 0;
  var basari = "";

  for (var x = 0; x < ogrenciler[i].notlar.length; x++) {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }

  ortalama = not_toplam / adet;

  toplam_sinif += ortalama;

  if (ortalama >= 50) {
    basari = "Başarılı";
  } else {
    basari = "Başarısız";
  }

  console.log(
    `${basari}: ${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortalaması ${ortalama}.`
  );
}

console.log("sınıf ortalaması: " + toplam_sinif / ogrenciler.length);

// 6-  ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumu yazdırınız.

// 7- Tüm öğrencilerin not ortalaması nedir?

// Fonksiyonlar

function selamlama(mesaj) {
    console.log(mesaj);
}

selamlama("merhaba");
selamlama("selam");

function yasHesapla(dogumYili) {
    var simdi = new Date().getFullYear();
    return simdi - dogumYili;
}

console.log(yasHesapla(2000));
console.log(yasHesapla(1983));

function emekliligeKacYilKaldi(dogumYili, isim) {
    var yas = yasHesapla(dogumYili);

    var kalan_sene = 65 - yas;

    if(kalan_sene > 0) {
        console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı.`);
    }
    else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(2000, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");
emekliligeKacYilKaldi(1980, "Can");

// Uygulama:Fonksiyonlar

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

// function kelimeYazdir(kelime, adet) {
//     for(var i = 0; i < adet; i++) {
//         console.log(kelime);
//     }
// }

// kelimeYazdir("merhaba",3);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

// function alanCevreHesapla(kisa,uzun) {
//     var alan = kisa * uzun;
//     var cevre = (kisa + uzun) * 2;

//     return `alan: ${alan}, çevre: ${cevre}`;
// }

// console.log(alanCevreHesapla(3, 5));

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

// function yaziTuraAt() {
//     var random = Math.random(); // 0-1

//     if(random < 0.5) {
//         console.log("yazı");
//     } else {
//         console.log("tura");
//     }
// }

// for (var i = 0; i < 10; i++) {
//     yaziTuraAt();
// }

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

// function tamBolenleriBul(sayi) {
//     var sayilar = [];
//     for(var i = 2; i < sayi; i++) {
//         if(sayi % i == 0) {
//             sayilar.push(i);
//         }
//     }
//     return sayilar;
// }

// console.log(tamBolenleriBul(20));    // 2,3,4,5,6,7..19
// console.log(tamBolenleriBul(45));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
    var sonuc = 0;
    for(var i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    return sonuc;
}

var sonuc;
sonuc = toplam(10,20);
sonuc = toplam(10,20,30);
sonuc = toplam(10,20,30,40);

console.log(sonuc);

// Dates ve Times

var simdi = new Date();

// get methods
sonuc = simdi;
sonuc = simdi.getDate();    // gün
sonuc = simdi.getDay();     // 0-6 => 0: pazar 6: cumartesi
sonuc = simdi.getFullYear();     // yıl

// set methods
simdi.setFullYear(2026);
simdi.setMonth(7);
simdi.setDate(20);

var dogumTarihi = new Date(1990, 5, 15);

sonuc = dogumTarihi;

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

var milisecond = simdi - dogumTarihi;

var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

sonuc = gun;

console.log(sonuc);

// Scopes => var, const: sabit tanımlama

// global scope

var isim = "Ahmet";
const tc = "1234556666";

function yazdir() { // function scope
    var isim = "Can";
    var yas = 18;
    console.log(isim);
    console.log(yas);
}

if(true) {
    var isim = "Canan";     // var ile block scope oluşturmuş oldum.
    var cinsiyet = "Kadın";
    console.log(isim);
    console.log(cinsiyet);
}

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (var,const)

// yazdir();
console.log(isim);

// console.log(cinsiyet);