/*
function openNav(){
    
    document.getElementById("sidenav").style.width=100+"%";
    
}

function closeNav(){
    
    document.getElementById("sidenav").style.width=0+"%";
    
}

var flag=0;

function curtain(){
    
    if(flag==0)
        {
     document.getElementById("lol1").style.height=50+"%";
     document.getElementById("lol2").style.height=50+"%";
        flag=1;
          
        }
    
    else if(flag==1)
        {
            
        
     document.getElementById("lol1").style.height=0+"%";
     document.getElementById("lol2").style.height=0+"%";
        flag=0;
        }
    
}

function curtainclose(){
    
  
            document.getElementById("sidenav1").style.width=0+"%";
     document.getElementById("sidenav2").style.width=0+"%";
  setTimeout(function(){
      document.getElementById("lol1").style.height=0+"%";
     document.getElementById("lol2").style.height=0+"%";
      
  },500)      
     
     
    
}
*/


 //document.getElementById("body").style.background="black";

setTimeout(function(){
    
 
$("#back").fadeOut(1000);
    
    
},5000)



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5932624625202434,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.945738208161363,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 192.40944730386272,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
            );


var bool=0;

function openNav(){
    
    if(bool==0)
        {
            
        
    document.getElementById("sidenav").style.width=20+"%";
            document.getElementById("particles-js").style.background="#01013e";
            
            
  /*      document.getElementById("ul").style.display="block";
  
  
  
           ("#ul").addClass("animated bounceInLeft") */
            document.getElementById("1").style.display="block";
            document.getElementById("body").style.marginLeft = 20+"%";
         $('#1').addClass('animated fadeIn');
            
            setTimeout(function(){
                  document.getElementById("2").style.display="block";
                 $('#2').addClass('animated fadeIn');
                
            },1000);
            
            setTimeout(function(){
                  document.getElementById("3").style.display="block";
                 $('#3').addClass('animated fadeIn');
                
            },1500);
            
            setTimeout(function(){
                  document.getElementById("4").style.display="block";
                 $('#4').addClass('animated fadeIn');
                
            },2000);
            
             setTimeout(function(){
                  document.getElementById("5").style.display="block";
                 $('#5').addClass('animated fadeIn');
                
            },2500);
            
            bool=1;        
                
        }
    
    else if(bool==1) {
        document.getElementById("sidenav").style.width=0+"%";
         document.getElementById("body").style.marginLeft= "0";
         document.getElementById("particles-js").style.background="black";
        
        bool=0;   
    }
    
    
}

    

$(document).ready(function(){
      $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

    });

$(document).ready(function(){
      $('.slider').slider();
    });
        
function myFunction(x) {
    x.classList.toggle("change");
}
