function UI(){
    this.body = document.querySelector("#quiz-box #body");

    this.quiz_box = document.querySelector("#quiz-box");
    this.button_box = document.querySelector("#button-box");
    this.score_box = document.querySelector("#score-box");

    this.correctIcon = '<i class="bi bi-check-circle"></i>';
    this.wrongIcon = '<i class="bi bi-x-circle"></i>';

    this.btnStart = document.querySelector(".btn-start");
    this.btnNext = document.querySelector(".btn-next");
    this.btnRestart = document.querySelector(".btn-restart");
    this.btnQuit = document.querySelector(".btn-quit");
    
    this.timeText = document.querySelector(".time-text");
    this.timeSecond = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");

}

UI.prototype.soruGoster = function(soru){
    this.body.innerHTML = "";
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = soru.soruMetni;

    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    for(let [key, value] of Object.entries(soru.cevap)){
        const option = document.createElement("div");
        option.classList.add("option");
        option.addEventListener("click", optionSelected);

        const span = document.createElement("span");
        span.textContent = key + ") " + value;

        option.appendChild(span);
        optionList.appendChild(option);
    }

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);
    this.body.appendChild(cardBody);

}

UI.prototype.disableAllOptions = function(){
    const options = document.querySelectorAll(".option");
    for(let option of options){
        option.classList.add("disabled");
    }
}

UI.prototype.soruSayisiGoster = function(soruSirasi, toplamSoru){
    const etiket = `<span class="badge text-bg-danger"> ${soruSirasi} / ${toplamSoru} </span>`;
    document.querySelector(".question-index").innerHTML = etiket; 
}

UI.prototype.skoruGoster = function(dogruCevapSayisi, toplamSoru){
    const etikte = `Toplam ${toplamSoru} sorudan ${dogruCevapSayisi} doğru cevap verdiniz.`;
    document.querySelector(".score-text").innerHTML = etikte;
}
 
// <h5 class="question-title">Soru Başlığı</h5>
// <div class="option-list">
//     <div class="option">
//         <span>1.Tercih</span>
//     </div>
//     <div class="option">
//         <span>2.Tercih</span>
//     </div>
//     <div class="option">
//         <span>2.Tercih</span>
//     </div>
//     <div class="option">
//         <span>4.Tercih</span>
//     </div>  
// </div>