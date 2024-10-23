document.addEventListener("DOMContentLoaded", () => {
    //MENU HAMBURGUESA
    const menuHb = document.querySelector(".menuHb");
    const cerrarMenu = document.querySelector("#cerrarMenu");

    //eventos

    menuHb.addEventListener("click", () => {
        const divMen = document.createElement("div");
        document.body.style.overflow = "hidden";
        menuHb.classList.add("abrirMhb");
    })

    cerrarMenu.addEventListener("click", () =>{
        document.body.style.overflow = "auto";
        menuHb.classList.remove("abrirMhb"); //revisar esta parte del codigo
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

    
    // CARROUSEL
    let scale = 0;
    let size = 250;
    window.addEventListener("scroll", ()=> {
        const mediaPantalla = window.innerHeight/2;

        if(window.scrollY < carrousel.offsetTop - mediaPantalla){
            console.log(window.innerHeight);
            console.log(window.scrollY);

            if(mediaPantalla >= window.scrollY){
                scale = (window.scrollY*1)/mediaPantalla;
                carrousel.style.transform = `scale(${scale})`;
                size = (window.scrollY*100)/mediaPantalla;
                carrousel.style.backgroundSize = `${mediaPantalla-size}%`;
            }
        }else{
            carrousel.style.transform = `scale(1)`;
        }
    })
})