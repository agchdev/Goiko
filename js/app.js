document.addEventListener("DOMContentLoaded", () => {
    // VARIABLES
    let kb = document.querySelectorAll(".text-back");
    let hbInicio = document.querySelector("#hb");
    let headerElc1 = document.querySelector(".enlaces > a:nth-child(1)");
    let headerElc2 = document.querySelector(".enlaces > a:nth-child(2)");
    let pHeaderA1 = document.querySelectorAll(".enlaces > a:nth-child(1) > div > span");
    let pHeaderA2 = document.querySelectorAll(".enlaces > a:nth-child(2) > div > span");

    kevinBacon();

    // EVENTOS
    headerElc1.addEventListener("mouseenter", () => {
        pHeaderA1.forEach(el => {
            el.classList.add("animHover");
            setTimeout(() => {
                el.classList.remove("animHover");
            }, 399);
        });
    });

    headerElc2.addEventListener("mouseenter", () => {
        pHeaderA2.forEach(el => {
            el.classList.add("animHover");
            setTimeout(() => {
                el.classList.remove("animHover");
            }, 399);
        });
    });

    // FUNCIONES 
    function kevinBacon(){
        hbInicio.classList.add("introHB");
        setTimeout(() => {
            hbInicio.classList.remove("introHB");
        }, 800);
        
        let top = 27;

        kb.forEach(el => {
            el.style.top = top+"%";
            top+=13;
            el.classList.add("introKB");
            setTimeout(() => {
                el.classList.remove("introKB");
                el.classList.add("animKB");
            }, 2000);
        });
    }
    
    function animHoverEnlaces(){
        
    }
})