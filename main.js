prevpercentage = 0;
down = 0;
up = 0;
dif = 0;
rel = 0;
percentage = 0;

let body = document.querySelector('body');
let imgsrc = document.querySelector('#imgsrc');

body.addEventListener('mousemove',(e) =>{

    if (down == 0) return;
    rel = e.clientX - down;
    percentage = (rel/(innerWidth/2))*100 + prevpercentage;
                
    if(percentage<-100){
        percentage = -100;
    }
    if(percentage>0){
        percentage = 0;
    }

    imgsrc.style.transform = `translate(${percentage}%, -50%)`;

    const img = document.querySelectorAll('img');
    
    const images = Array.from(img);

    images.forEach((image) => {
        image.style.objectPosition = `${100+percentage}% 50%`;       
    });
});

body.addEventListener('mousedown',(md) => {
    down = md.clientX;
});

body.addEventListener('mouseup',(mu) =>{
    down = 0;
    prevpercentage = percentage;
});

// ----------------------------------

$("#img1").click(function(){
    window.open("./subs/rb.html", "_self");
})

$("#img2").click(function(){
    window.open("./subs/merc.html", "_self");
})

$("#img3").click(function(){
    window.open("./subs/mc.html", "_self");
})

$("#img4").click(function(){
    window.open("./subs/am.html", "_self");
})

$("#img5").click(function(){
    window.open("./subs/fer.html", "_self");
})