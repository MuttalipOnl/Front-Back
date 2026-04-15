function Soru(soruMetni, cevap, dogruCevap) { /* Sorular, Cevapla, Doğru Cevaplar*/
    this.soruMetni = soruMetni;
    this.cevap = cevap;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function(cevap){
    return cevap === this.dogruCevap;
}

