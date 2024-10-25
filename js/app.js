document.addEventListener("DOMContentLoaded", () => {
    //MENU HAMBURGUESA
    const menuHb = document.querySelector(".menuHb");
    const cerrarMenu = document.querySelector("#cerrarMenu");
    const menu = document.querySelector(".mhb");

    //eventos

    menuHb.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        menu.classList.add("abrirMhb");
        menu.classList.remove("cerrarMhb");
        setTimeout(() => {
            menu.style.height = "100vh";
        }, 1000);
    })

    cerrarMenu.addEventListener("click", () =>{
        document.body.style.overflow = "auto";
        menu.classList.remove("abrirMhb"); //revisar esta parte del codigo
        menu.classList.add("cerrarMhb"); //revisar esta parte del codigo
        setTimeout(() => {
            menu.style.height = "0";
        }, 1000);
    })

    //KEBIN BACON
    const kb = document.querySelectorAll(".text-back");
    const hbInicio = document.querySelector("#hb");
    const headerElc1 = document.querySelector(".enlaces > a:nth-child(1)");
    const headerElc2 = document.querySelector(".enlaces > a:nth-child(2)");
    const pHeaderA1 = document.querySelectorAll(".enlaces > a:nth-child(1) > div > span");
    const pHeaderA2 = document.querySelectorAll(".enlaces > a:nth-child(2) > div > span");

    //CARROUSEL
    const carrousel = document.querySelector("#carrousel");

    kevinBacon();

    // EVENTOS

    // BANNER KEBIN BACON
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

    
    // SCROLL HORIZONTAL

    // variables
    scrollHC = document.querySelector("#scrollHC > div");
    let mover = false;

    // eventos
    scrollHC.addEventListener("mousedown", (e) => {
        mover = true;
        startX = e.pageX - scrollHC.offsetLeft;
        scrollLeft = scrollHC.scrollLeft;
    })
    scrollHC.addEventListener("mouseleave", () => {
        mover = false;
    })
    scrollHC.addEventListener('mouseup', () => {
        mover = false;
    });
    scrollHC.addEventListener('mousemove', (e) => {
        if (!mover) return;
        e.preventDefault();
        const x = e.pageX - scrollHC.offsetLeft;
        const walk = (x - startX) * 1; // Ajusta la velocidad del scroll
        scrollHC.scrollLeft = scrollLeft - walk;
    });
})