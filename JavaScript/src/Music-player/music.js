class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return `${this.singer} - ${this.title}`;
    }
}

const musicList = [
    new Music ("Neyim Var ki feat. Sagopa K", "Ceza", "ceza.jpg", "Ceza - Neyim Var ki feat. Sagopa K.mp3"),
    new Music("Yenilmez", "Hidra", "hidra.jpg", "Hidra - Yenilmez.mp3"),
    new Music("Bir Pesimistin Gözyaşları", "Sagopa Kajmer", "sagopa.jpg", "Sagopa Kajmer- Bir Pesimistin Gözyaşları.mp3"),
    new Music("Ağır Roman", "Sansar Salvo", "sansar.jpg", "Sansar Salvo - Ağır Roman.mp3")
]