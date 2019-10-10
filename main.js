
      //   File: /~lcalmeid/main.js
      //   91.461 Assignment: Styling Your First Web Page With CSS
      //   Ludmyla Almeida, student at UML , ludmyla_almeida@student.uml.edu
      //   Copyright (c) 2019 by Ludmyla C. Almeida. All rights reserved. May be
      //   freely copied or excerpted for educational purposes with credit to the
      //   author.
      //   updated by Ludmyla on October 9, 2019 


// this is necessary for using the Animation on Scroll Library
AOS.init();


//this functionality adds the class header-scrolled to the navbar when the user scrolls over 50px
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#navbar').addClass('header-scrolled');
     } else{
        $('#navbar').removeClass('header-scrolled');
     }
});