document.addEventListener("click", (e)=>{

    

    if(e.target.id === "logo"){

        document.querySelector(".nav-slide").classList.remove("eva")
    }

    if(e.target.id === "close-svg"){

        // document.querySelector(".nav.slide").classList.add("eva")
        
        
        document.querySelector(".nav-slide").classList.add("eva")
    }
})