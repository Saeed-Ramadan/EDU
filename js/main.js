var num1 =document.getElementById("count1");
var num2 =document.getElementById("count2");
var num3 =document.getElementById("count3");
var num4=document.getElementById("count4");

//animated counter function
function animatedCounter(element, start, end, duration){
    var range = end - start;
    var current = start;
    var increment = 0;
    if(end > start){
        increment = 1;
    }else{
        increment = -1;
    }

    // to increment number in given time
    var timer = setInterval(function (){
        current += increment;
        element.textContent = current;
        if(current == end){
            clearInterval(timer);
        }
    },duration);
};

animatedCounter(num1,1,1000,120);
animatedCounter(num2,1,200,600);
animatedCounter(num3,1,50,1120);
animatedCounter(num4,1,20,1500);

/* the first slide dynamic*/
var slide_index = 0;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  



