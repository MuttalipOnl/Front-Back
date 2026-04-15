// // Objects

// // Person, Product, Cooment

// const product = {
//     // prperties
//     title:"Samsung S25",
//     description:"güzel telefon",
//     price: 50000,
//     stock: 100,

//     // method
//     display: function(){
//         return "Ürün başlığı:" + this.title + "ürün açıklaması:" + this.description + "ürün fiyatı:" + this.price;
//     },
//     is_active: function(){
//         return (this.stock > 0) ? "Ürün stokta var" : "Ürün stokta yok";
//     }
// };
// const product2 = {   
//      // prperties
//     title:"Samsung S20",
//     description:"güzel telefon",
//     price: 70000,
//     stock: 0,

//     // method
//     display: function(){
//         return "Ürün başlığı:" + this.title + "ürün açıklaması:" + this.description + "ürün fiyatı:" + this.price;
    // },
    // is_active: function(){
    //     return (this.stock > 0) ? "Ürün stokta var" : "Ürün stokta yok";
    // }
// };

// console.log(product.title);

// **************************************************************************************

// function Product(title, description, price, stock){
//     // properties
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.stock = stock;
//     // methods
//     this.display = function(){
//         return "Ürün başlığı: " + this.title + " - ürün açıklaması: " + this.description + " - ürün fiyatı: " + this.price + " - ürün stok durumu: " + this.is_active();

//     },
//     this.is_active = function(){
//         return (this.stock > 0) ? "Ürün satışta" : "Ürün stokta yok";
//     };

// }

// const product1 =  new Product("Samsung S25", "güzel telefon", 50000, 100);
// const product2 =  new Product("Samsung S20", "iyi telefon", 70000, 0);
// const product3 =  new Product("Samsung S30", "çok iyi telefon", 90000, 50);

// console.log(product1.title, product1.description, product1.price, product1.stock );
// console.log(product2.title, product2.description, product2.price, product2.stock );
// console.log(product3.title, product3.description, product3.price, product3.stock );

// console.log(product1.display());
// console.log(product2.display());
// console.log(product3.display());

// **************************************************************************************

// function Player(username, score){
//     this.username = username;
//     this.score = 0;
//     this.start = function(){
//         return this.username + " oyuna başladı";
//     },
//     this.quit = function(){
//         return this.username + " oyundan ayrıldı";
//     },
//     this.pause = function(){
//         return this.username + " oyunu duraklattı";
//     },
//     this.add_scorre = function(points){
//         this.score += points;
//     },
//     this.show_score = function(){
//         return `${this.username} skor: ${this.score}`;
//     }
// }

// const player1 = new Player("Muti1");
// const player2 = new Player("Muti2");
// const player3 = new Player("Muti3");

// console.log(player1.start());
// console.log(player2.quit());
// console.log(player3.pause());

// console.log(player1.add_scorre(10))
// console.log(player2.add_scorre(20))
// console.log(player3.add_scorre(30))

// console.log(player1.show_score());
// console.log(player2.show_score());
// console.log(player3.show_score());

// **************************************************************************************

