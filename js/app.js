document.addEventListener("DOMContentLoaded", () => {
    // VARIABLES
    let kb = document.querySelectorAll(".text-back");
    let hbInicio = document.querySelector("#hb");
    let headerElc1 = document.querySelector(".enlaces > a:nth-child(1)");
    let headerElc2 = document.querySelector(".enlaces > a:nth-child(2)");

    kevinBacon();

    // EVENTOS
    headerElc1.addEventListener("mouseenter", () => {
        pHeaderA1.classList.add("animHover")
    });

    headerElc2.addEventListener("mouseenter", () => {
        pHeaderA2.classList.add("animHover")
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
        });
    }

    function animHoverEnlaces(){
        
    }
})