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
        document.body.style.overflowX = "hidden";
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
    articles = document.querySelectorAll("#scrollHC > div > div > article");
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
        articles.forEach(el => { 
            el.addEventListener("mouseover", () => {
                console.log(el);
                el.style.cursor = "pointer";
            })
        })
    });

    // CONTADOR

    const imgs = document.querySelectorAll("#contador > div > img");

    imgsNew = ["img/numeros/0.svg","img/numeros/1.svg","img/numeros/2.svg","img/numeros/3.svg","img/numeros/7.svg","img/numeros/9.svg"];
    let cont= 0;
    
    if (scrollY < 2308) {
        imgs.forEach(img => {
            setTimeout(() => {
                img.target.src = imgsNew[cont];
            }, 500);
            cont++;
        })
    }
    

    // ANIMACION DE BOTON
    const botonCatalan = document.querySelector("#catalan");
    const botonEspañol = document.querySelector("#español");
    const botonCatalanH = document.querySelector("#catalanH");
    const botonEspañolH = document.querySelector("#españolH");
    const flechita = document.querySelector("#español > svg");
    const flechitaH = document.querySelector("#españolH > svg");

    let bajado = true;
    let bajadoH = true;
    botonEspañol.addEventListener("click", () => {
        if(bajado) {
            flechita.classList.add("noRotar");
            flechita.classList.remove("rotar");
            botonCatalan.classList.remove("baja");
            botonCatalan.classList.add("sube");
            bajado = false;
        }else{
            flechita.classList.add("rotar");
            flechita.classList.remove("noRotar");
            botonCatalan.classList.remove("sube");
            botonCatalan.classList.add("baja");
            bajado = true;
        }
    })

    botonEspañolH.addEventListener("click", () => {
        if(bajadoH) {
            flechitaH.classList.add("noRotar");
            flechitaH.classList.remove("rotar");
            botonCatalanH.classList.remove("baja");
            botonCatalanH.classList.add("sube");
            bajadoH = false;
        }else{
            flechitaH.classList.add("rotar");
            flechitaH.classList.remove("noRotar");
            botonCatalanH.classList.remove("sube");
            botonCatalanH.classList.add("baja");
            bajadoH = true;
        }
    })
});