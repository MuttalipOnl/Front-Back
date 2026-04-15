const soruListesi = [
    new Soru("1-Hnagisi Javascript paket yönetim uygulamasıdır?", {A: "Node.js", B: "Npm", C: "C++", D: "Java"}, "B"),
    new Soru("2-Hangisi Frontend kapsamında değerlendirilmez?", {A: "HTML", B: "CSS", C: "JavaScript", D: "Python"}, "D"),
    new Soru("3-Hangisi Backend kapsamında değerlendirilmez?", {A: "Node.js", B: "Python", C: "JavaScript", D: "Java"}, "C"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", {A: "React", B: "Angular", C: "Vue", D: "Django"}, "D"),
    new Soru("5-Hangisi javascript paket yönetim uygulamasıdır?", {A: "Node.js", B: "Npm", C: "C++", D: "Java"}, "B"),
    new Soru("6-Hangisi Frontend kapsamında değerlendirilmez?", {A: "HTML", B: "CSS", C: "JavaScript", D: "Python"}, "D"),
    new Soru("7-Hangisi Backend kapsamında değerlendirilmez?", {A: "Node.js", B: "Python", C: "JavaScript", D: "Java"}, "C"),
    new Soru("8-Hangisi javascript programlama dilini kullanmaz?", {A: "React", B: "Angular", C: "Vue", D: "Django"}, "D"),
    new Soru("9-Hangisi javascript paket yönetim uygulamasıdır?", {A: "Node.js", B: "Npm", C: "C++", D: "Java"}, "B"),
    new Soru("10-Hangisi Frontend kapsamında değerlendirilmez?", {A: "HTML", B: "CSS", C: "JavaScript", D: "Python"}, "D")
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnStart.addEventListener("click", function(){
    ui.btnNext.classList.remove("show");
    startTimer(9);
    startTimerLine();

    ui.quiz_box.classList.add("active");
    ui.button_box.classList.remove("active");

    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
});

ui.btnNext.addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex){
        startTimer(10);
        startTimerLine();

        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);

        ui.btnNext.classList.remove("show");
    }else{
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    }

});

function optionSelected(e){
    // console.log(e.target);
    // console.log(e);
    clearInterval(counter);
    clearInterval(counterLine);

    let selectedElement = e.target;
     console.log(selectedElement);
    if(selectedElement.nodeName == "SPAN"){
        selectedElement = selectedElement.parentElement;
    }

    const cevap = selectedElement.textContent[0];
    const soru = quiz.soruGetir();

    if(soru.cevapKontrol(cevap)){
        quiz.dogruCevapSayisi += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else{
        selectedElement.classList.add("wrong");
        selectedElement.insertAdjacentHTML("beforeend", ui.wrongIcon);
    }

    quiz.soruIndex += 1;
    ui.disableAllOptions();
    ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click", function(){
    window.location.reload();
});

ui.btnRestart.addEventListener("click", function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    // Start butonu
    ui.btnStart.click();
    ui.score_box.classList.remove("active");
});

let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        // console.log(time);
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0){
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";

            ui.disableAllOptions();
            quiz.soruIndex += 1;
            ui.btnNext.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine(){
    let lineWidth = 0;
    counterLine = setInterval(timer, 20);

    function timer(){
        lineWidth += 1;
        ui.timeLine.style.width = lineWidth + "px";
        if(lineWidth > 498){
            clearInterval(counterLine);
        }
    }
}