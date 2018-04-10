
let button = document.querySelectorAll(".button");
let para = [
    
    "<figure><img src=\"./img/renewable.jpg\" alt=\"Renewable Energy - Wood\"><p><b>Renewable Energy - Wood</b><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum eleifend ornare. Suspendisse semper augue at diam consequat consequat. Aenean at justo aliquet, mattis sapien sit amet, tincidunt lacus. Nulla eget elementum turpis. Vestibulum et porta ante. Vestibulum varius neque eu sodales blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper odio vitae eros ultrices, ac lobortis leo convallis. Donec vehicula sapien sed arcu commodo sagittis. Vivamus a neque laoreet, imperdiet odio et, sodales felis. Pellentesque fermentum nunc vitae lectus facilisis imperdiet. Suspendisse potenti. Pellentesque purus lacus, condimentum sit amet est non, finibus efficitur lectus.</p></figure>",
    
     "<figure><img src=\"./img/non-renewable.jpg\" alt=\"Non-Renewable Energy - Fossil Fuels\"><p><b>Non-Renewable Energy - Fossil Fuels</b><br><br>Suspendisse posuere purus massa, quis gravida tellus semper sed. Nulla id tincidunt risus. Aliquam id pharetra mi. Maecenas dui nibh, faucibus vel orci a, consequat bibendum arcu. Nam libero metus, pharetra ut lacinia condimentum, placerat non leo. In fringilla tellus et lacus tristique, a scelerisque erat interdum. Donec accumsan vel nulla eget pharetra. Pellentesque a fringilla neque. Integer scelerisque imperdiet ante et imperdiet. Duis bibendum ex accumsan neque iaculis, in mollis justo molestie.</p></figure>",
    
     "<figure><img src=\"./img/inexhaustible.jpg\" alt=\"Inexhaustible Energy - solar, wind energy\"><p><b>Inexhaustible Energy - solar, wind energy</b><br><br>Curabitur convallis sed eros in bibendum. Pellentesque scelerisque sapien nec lectus sollicitudin, at hendrerit nibh lacinia. Aenean ac euismod augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eleifend posuere velit, tempor sollicitudin ipsum hendrerit a. Sed consectetur vehicula ex ut rutrum. Quisque id porttitor velit, vehicula sagittis diam. Ut molestie aliquam gravida. Duis a ipsum leo. Integer sed leo arcu.</p></figure>"

    
];

let container = document.querySelector(".container");


    // ---------------------------------Load your images on page-load---------------
    function preloader() {
        const imagesList = [
           "./img/renewable.jpg",
           "./img/non-renewable.jpg",
           "./img/inexhaustible.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        //-------------------------Images ready to be used----------------------------
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    container.innerHTML = para[0];
    /* -------------------------------------------------------------------
                    Get all buttons in an HTMLCollection 
    ----------------------------------------------------------------------*/
    function handleClick(ev) {
        console.log(ev.target.innerHTML);

    if (ev.target.innerHTML === "Renewable Sources"){
        container.innerHTML = para[0];
    }
     if (ev.target.innerHTML === "Non-Renewable Sources"){
        container.innerHTML = para[1];
    }

     if (ev.target.innerHTML === "Inexhaustible Sources"){
        container.innerHTML = para[2];
    }


     ev.target.parentNode.setAttribute("class","active");
}

    for(let b = 0; b < button.length; b++) {
        button[b].addEventListener("click", handleClick, false);
    
   }
     //----------------------- Closing and invoking closure  -------------------------------