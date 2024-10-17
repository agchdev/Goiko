document.addEventListener("DOMContentLoaded", () => {
    // VARIABLES
    let kb = document.querySelectorAll(".text-back");
    let hbInicio = document.querySelector("#hb");

    kevinBacon();

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
})