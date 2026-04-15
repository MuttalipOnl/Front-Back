const shoppingList = document.querySelector(".shopping-list"); // Alışveriş listesi UL/OL elementini seçer
const shoppingForm = document.querySelector(".shopping-form"); // Form elementini seçer
const filterButtons = document.querySelectorAll(".filter-buttons button"); // Filtreleme butonlarını seçer
const clearBtn = document.querySelector(".clear"); // Temizle butonunu seçer

document.addEventListener("DOMContentLoaded", function (){ // Sayfa yüklendiğinde çalışacak ana fonksiyon
    loadItems(); // LocalStorage'dan kayıtlı öğeleri yükler
    updateState(); // Arayüzdeki durumu günceller

    shoppingForm.addEventListener('submit', handleDormSubmit); // Form gönderildiğinde yeni öğe ekler

    for(let button of filterButtons){
        button.addEventListener('click', handleFilterSelection); // Filtre butonlarına tıklama olayını ekler
    }

    clearBtn.addEventListener('click', clear); // Temizle butonuna tıklanınca listeyi temizler
});


function clear(){
    shoppingList.innerHTML = ""; // Listeyi temizler
    localStorage.clear("shoppingItems"); // LocalStorage'dan alışveriş listesini siler

    updateState(); // Arayüzü günceller
}

function updateState(){
    const isEmpty = shoppingList.querySelectorAll("li").length === 0; // Liste boş mu kontrolü
    const alert = document.querySelector(".alert"); // Uyarı mesajını seçer
    const filterBtns = document.querySelector(".filter-buttons"); // Filtre butonlarını seçer

    alert.classList.toggle("d-none", !isEmpty); // Liste boşsa uyarıyı gösterir
    clearBtn.classList.toggle("d-none", isEmpty); // Liste boşsa temizle butonunu gizler
    filterBtns.classList.toggle("d-none", isEmpty); // Liste boşsa filtre butonlarını gizler

}

function saveToLS(){
    const listItems = shoppingList.querySelectorAll("li"); // Listedeki tüm öğeleri seçer
    const liste = [];
    for(let li of listItems){
        const id = li.getAttribute("item-id"); // Öğenin id'sini alır
        const name = li.querySelector(".item-name").textContent; // Öğenin adını alır
        const completed = li.hasAttribute("item-completed"); // Öğenin tamamlanıp tamamlanmadığını kontrol eder

        liste.push({id, name, completed}); // Öğeyi diziye ekler
    }

    localStorage.setItem("shoppingItems", JSON.stringify(liste)); // Diziyi JSON olarak kaydeder
}

function loadItems(){
    const items = JSON.parse(localStorage.getItem("shoppingItems")) || []; // LocalStorage'dan alışveriş listesini alır
    shoppingList.innerHTML = ""; // Listeyi temizler

    for(let item of items){
       const li = createListItem(item); // Her bir öğe için li elementi oluşturur
       shoppingList.appendChild(li); // Listeye ekler
    }
}

function createListItem(item){  
    // checkbox
    const input = document.createElement('input'); // Checkbox oluşturur
    input.type = "checkbox";
    input.classList.add('form-check-input');
    input.checked = item.completed; // Tamamlanmışsa işaretli gelir
    input.addEventListener('change', toggleCompleted); // Checkbox değişince tamamlanma durumunu değiştirir

    // item
    const div = document.createElement('div'); // Öğenin adını gösterecek div
    div.textContent = item.name;
    div.classList.add('item-name');
    div.addEventListener('click', openEditMode); // Tıklanınca düzenleme moduna geçer
    div.addEventListener('blur', closeEditMode); // Odak kaybolunca düzenleme modunu kapatır
    div.addEventListener('keydown', cancelEnter); // Enter tuşuna basınca düzenlemeyi bitirir

    // delete icon
    const deleteIcon = document.createElement('i'); // Silme ikonu oluşturur
    deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener('click', removeItem) // Tıklanınca öğeyi siler

    // li
    const li = document.createElement('li'); // Liste öğesi oluşturur
    li.setAttribute("item-id", item.id); // id'sini ayarlar
    li.classList.add('border', 'rounded', 'p-2', 'mb-1'); // Stil sınıfları ekler
    li.toggleAttribute("item-completed", item.completed) // Tamamlanma durumunu ayarlar

    li.appendChild(input); // Checkbox'ı ekler
    li.appendChild(div); // İsmi ekler
    li.appendChild(deleteIcon); // Silme ikonunu ekler

    return li; // Oluşturulan li'yi döndürür
}

function addItem(input){
    const newItem = createListItem({
        id: generateId(), // Yeni id oluşturur
        name: input.value, // Input'tan ismi alır
        completed: false // Yeni öğe tamamlanmamış olur
    });

    shoppingList.appendChild(newItem); // Listeye ekler
    input.value = ""; // Input'u temizler

    uptadeFilterItems() // Filtrelenmiş öğeleri günceller

    saveToLS(); // LocalStorage'a kaydeder

    updateState(); // Arayüzü günceller
}

function generateId(){
    return Date.now().toString(); // Zaman damgası ile benzersiz id üretir
}

function handleDormSubmit(e){
    e.preventDefault(); // Formun varsayılan gönderimini engeller

    const input = document.getElementById('item-name'); // Input'u seçer

    if(input.value.trim().length === 0){ // Boşsa uyarı verir
        alert("Yeni değer giriniz.");
        return;
    }

    addItem(input); // Yeni öğe ekler
}

function toggleCompleted(e){
    const li = e.target.parentElement; // Checkbox'ın bağlı olduğu li'yi bulur
    li.toggleAttribute("item-completed", e.target.checked); // Tamamlanma durumunu değiştirir

    uptadeFilterItems(); // Filtrelenmiş öğeleri günceller

    saveToLS(); // LocalStorage'a kaydeder
}

function removeItem(e){
    // console.log(e.target.parentElement);
    const li = e.target.parentElement; // Silinecek li'yi bulur
    shoppingList.removeChild(li); // Listeden siler

    saveToLS(); // LocalStorage'a kaydeder

    updateState(); // Arayüzü günceller

}

function openEditMode(e){
    const li = e.target.parentElement; // Düzenlenecek li'yi bulur
    if(li.hasAttribute("item-completed") == false){ // Tamamlanmamışsa düzenlemeye izin verir
        e.target.contentEditable = true; // İçeriği düzenlenebilir yapar
    }
}

function closeEditMode(e){
    e.target.contentEditable = false; // Düzenlemeyi kapatır

    saveToLS(); // LocalStorage'a kaydeder
}

function cancelEnter(e){
    if(e.key == "Enter"){ // Enter tuşuna basılırsa
        e.preventDefault(); // Satır atlamayı engeller
        closeEditMode(e); // Düzenlemeyi kapatır
    }
}

function handleFilterSelection(e){
    const filterBtn = e.target; // Tıklanan filtre butonunu bulur
    for(let button of filterButtons){
        button.classList.add("btn-secondary"); // Tüm butonları pasif yapar
        button.classList.remove("btn-primary");

    }
    filterBtn.classList.add("btn-primary"); // Seçili butonu aktif yapar
    filterBtn.classList.remove("btn-secondary");

    filterItems(filterBtn.getAttribute("item-filter")); // Filtre tipine göre öğeleri filtreler
}

function filterItems(filterType){
    const li_items = shoppingList.querySelectorAll("li"); // Tüm li'leri seçer
    for(let li of li_items){
        li.classList.remove("d-none"); // Önce tümünü görünür yapar
        li.classList.remove("d-flex");

        const item_completed = li.hasAttribute("item-completed"); // Tamamlanma durumunu kontrol eder

        if(filterType == "completed"){
            // tamamlanmış
            li.classList.toggle(item_completed ? "d-flex" : "d-none"); // Tamamlanmışları gösterir
        }else if(filterType == "incomplete"){
            // tamamlanmamış
            li.classList.toggle(item_completed ? "d-none" : "d-flex"); // Tamamlanmamışları gösterir
        }else{
            // hepsi
            li.classList.add("d-flex"); // Tümünü gösterir
        }
    }
}

function uptadeFilterItems(){
    const activeFilter = document.querySelector(".filter-buttons .btn-primary"); // Aktif filtre butonunu bulur
    filterItems(activeFilter.getAttribute("item-filter")); // Aktif filtreye göre öğeleri filtreler
}







