let rowEl = document.getElementById("row");
let bodyEl = document.querySelector("body");
let layerEl = document.querySelector(".layer");
let closeBtnEl = document.getElementById("closeBtn");
let titleEl = document.querySelector(".layer .title");
let imgEl = document.querySelector(".layer img");

layerEl.style.display = "none"
bodyEl.style.overflow = "auto"


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response => {
    // let cardGenerata;
    console.log(response);
    response.data.forEach(element => {
        let urlImg = element.url;
        let imgDesc = element.title
        rowEl.innerHTML += `<div class="p-3">
                    <div class="col bg-white p-3 card d-flex flex-column align-items-center">
                        <div class="pin">
                            <img src="./assets/img/pin.svg" width="80%" height="80%" alt="">
                        </div>
                        <div class="col-12">
                            <img src="${urlImg}" width="100%"  class="generatedImg">
                        </div>
                        <div class="mt-3 generatedDesc">"${imgDesc}"</div>
                    </div>
                </div>`
    });
    
    let openImg = document.querySelectorAll(".generatedImg");
    openImg.forEach(img => {
        img.addEventListener("click" , function() {
            imgEl.src = this.src;
            let title = document.querySelector(".generatedDesc").textContent
            titleEl.textContent = title
            layerEl.style.display = "flex";
            bodyEl.style.overflow = "hidden"
        })
    })
})


layerEl.addEventListener("click" , close);
closeBtnEl.addEventListener("click" , close)

function close() {
    layerEl.style.display = "none"
    bodyEl.style.overflow = "auto"
}
