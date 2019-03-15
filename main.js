$(document).ready(function() {

  /* game */


  /* au clic sur start */
  $(".start_btn").click(function() {
    /* ajoute une meteor */
    $( ".game_background" ).append('<div class="meteor meteor_move"></div>'); 
    /* trouve la height du game_background */
    var backgroundHeight = $(".game_background").height();    
    /* produis un nombre aléatoire compris entre un min et un max */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /* donne ce nombre aléatoire en margin top au meteor, avec un max égal à la hauteur de game_background */
    $('.meteor').each(function(){
      $(this).css({'marginTop' : getRandomInt(1,backgroundHeight), 'marginLeft': '1vw'});
    });
    /* stop displaying start button */
    $('.start_btn').hide(); 
    
    /* send a meteor every 3 seconds 

    setInterval(function(){ 
        
      $( ".game_background" ).append('<div class="meteor meteor_move"></div>'); 
      $('.meteor').each(function(){
        $(this).css({'marginTop' : getRandomInt(1,backgroundHeight)});
      });
    }, 3000);   */

    function sendMeteors(){
      var sendOne = function(){
        var r = $.Deferred();
      
      /* create and style meteor */
      $( ".game_background" ).append('<div class="meteor meteor_move"></div>'); 
      $('.meteor').css({'marginTop' : getRandomInt(1,backgroundHeight)});

      /* show meteor offset left every second */
      setInterval(function(){ 
        var offset = $('.meteor').offset();
        var offsetLeft = offset.left;
        var offsetTop = offset.top;
        
        var rocket = $(".rocket_container");
        var rocketOffset = $('.rocket_container').offset();
        var rocketOffsetLeft = rocketOffset.left;
        var rocketOffsetTop = rocketOffset.top; /* 918 */
        var rocketOffsetBottom = rocketOffsetTop + rocket.outerHeight(); /* 968 */       

        if (offsetTop > rocketOffsetTop && offsetTop < rocketOffsetBottom && offsetLeft < rocketOffsetLeft) {
          console.log('GAME OVER');
        }    
        
      }, 1000); 

      return r; 
      }

      var destroyOne = function() {
        setTimeout(function(){       
          $('.meteor').remove();
          console.log('meteor one is removed');      
        }, 5000);
      }

      sendOne().done( destroyOne() );   

      x = setTimeout(function(){sendMeteors()}, 5000);
    }

    sendMeteors();   
  

    var functionOne = function() {
 
      var r = $.Deferred();

      setTimeout(function(){         
        
        setInterval(function(){ 
        
          $( ".game_background" ).append('<div class="meteor meteor_move"></div>'); 

          var offset = $('.meteor').offset();
          var offsetLeft = offset.left;
          var offsetTop = offset.top; 


          $('.meteor').each(function(){
            $(this).css({'marginTop' : getRandomInt(1,backgroundHeight)});
            console.log('Function One' + offsetLeft);
          });

         
        }, 3000); 
      }, 1000);   
    
      return r; 
    };
 
    var functionTwo = function() {
      setTimeout(function(){         
        console.log('Function Two');
        $('.meteor').each(function(){
          $(this).remove();
        });
      }, 3000);     
    };
 
  // Now call the functions one after the other using the done method
  /* functionOne().done( functionTwo() ); */ 

    /* make rocket playable */
    $(document).keydown(function(event) {  
      event.preventDefault();
      var key = (event.keyCode ? event.keyCode : event.which); 

      var container = $('.game_container');
      var rocket = $('.rocket_container');
      var bullet = $('.bullet');
      var meteor = $('.meteor');

      var containerOffset = $('.game_container').offset();
      var containerOffsetTop = containerOffset.top;
      var containerOffsetBottom = containerOffsetTop + container.outerHeight();

      var rocketOffset = $('.rocket_container').offset();
      var rocketOffsetTop = rocketOffset.top;
      var rocketOffsetLeft = rocketOffset.left;
      var rocketOffsetBottom = rocketOffsetTop + rocket.outerHeight();

      var bulletOffset = $('.bullet').offset();
      var bulletOffsetTop = bulletOffset.top;
      var bulletOffsetBottom = bulletOffsetTop + bullet.outerHeight();

      var meteorOffset = $('.meteor').offset();
      var meteorOffsetTop = meteorOffset.top;
      var meteorOffsetLeft = meteorOffset.left;
      var meteorOffsetBottom = meteorOffsetTop + meteor.outerHeight();

      /* up key */
      if (key == '38') {
          $('.rocket_container').css("margin-top", "-=15");
        }   
        /* down key */
        else if (key == '40') {
          $('.rocket_container').css("margin-top", "+=15");
        } 
        /* spacebar */
        else if (key == '32') {
          $( ".rocket_container" ).append('<div class="bullet"></div>'); 
          $('.bullet').each(function(){
            $(this).addClass('fire');
          });
        } 

        if (rocketOffsetTop < containerOffsetTop) {
          console.log('put game over here TOP');
        }

        if (rocketOffsetTop > containerOffsetBottom) {
          console.log('put game over here BOTTOM');
        }
    
      });      
      
      /*

      setInterval(function(){
        var rocket = $('.rocket_container');
        var rocketOffset = $('.rocket_container').offset();
        var rocketOffsetLeft = rocketOffset.left;
        var rocketOffsetTop = rocketOffset.top;   

        var topOfZone = rocketOffsetTop - 30; 
        var bottomOfZone = rocketOffsetTop + 30;   

        var meteorOffset = $('.meteor').offset();
        var meteorOffsetTop = meteorOffset.top;
        
        
        }, 1000);

        */

      
        
   
  }); 





  /* cards */

    $(".parent1").click(function() {
        $( ".parent1" ).addClass("turnTopCard");
        $( ".card_content1" ).addClass("turnBottomCard");
      });

      $(".parent2").click(function() {
        $( ".parent2" ).addClass("turnTopCard");
        $( ".card_content2" ).addClass("turnBottomCard");
      });

      $(".parent3").click(function() {
        $( ".parent3" ).addClass("turnTopCard");
        $( ".card_content3" ).addClass("turnBottomCard");
      });

      $(".parent4").click(function() {
        $( ".parent4" ).addClass("turnTopCard");
        $( ".card_content4" ).addClass("turnBottomCard");
      });

      $(".parent5").click(function() {
        $( ".parent5" ).addClass("turnTopCard");
        $( ".card_content5" ).addClass("turnBottomCard");
      });

      $(".parent6").click(function() {
        $( ".parent6" ).addClass("turnTopCard");
        $( ".card_content6" ).addClass("turnBottomCard");
      });

      $(".parent7").click(function() {
        $( ".parent7" ).addClass("turnTopCard");
        $( ".card_content7" ).addClass("turnBottomCard");
      });

      $(".parent8").click(function() {
        $( ".parent8" ).addClass("turnTopCard");
        $( ".card_content8" ).addClass("turnBottomCard");
      });

      $(".parent9").click(function() {
        $( ".parent9" ).addClass("turnTopCard");
        $( ".card_content9" ).addClass("turnBottomCard");
      });

      $(".parent10").click(function() {
        $( ".parent10" ).addClass("turnTopCard");
        $( ".card_content10" ).addClass("turnBottomCard");
      });

      $(".parent11").click(function() {
        $( ".parent11" ).addClass("turnTopCard");
        $( ".card_content11" ).addClass("turnBottomCard");
      });

      $(".parent12").click(function() {
        $( ".parent12" ).addClass("turnTopCard");
        $( ".card_content12" ).addClass("turnBottomCard");
      });

      $(".parent13").click(function() {
        $( ".parent13" ).addClass("turnTopCard");
        $( ".card_content13" ).addClass("turnBottomCard");
      });

      $(".parent14").click(function() {
        $( ".parent14" ).addClass("turnTopCard");
        $( ".card_content14" ).addClass("turnBottomCard");
      });

      $(".parent15").click(function() {
        $( ".parent15" ).addClass("turnTopCard");
        $( ".card_content15" ).addClass("turnBottomCard");
      });

      $(".parent16").click(function() {
        $( ".parent16" ).addClass("turnTopCard");
        $( ".card_content16" ).addClass("turnBottomCard");
      });

      $(".parent17").click(function() {
        $( ".parent17" ).addClass("turnTopCard");
        $( ".card_content17" ).addClass("turnBottomCard");
      });

      $(".parent18").click(function() {
        $( ".parent18" ).addClass("turnTopCard");
        $( ".card_content18" ).addClass("turnBottomCard");
      });

      $(".parent19").click(function() {
        $( ".parent19" ).addClass("turnTopCard");
        $( ".card_content19" ).addClass("turnBottomCard");
      });

      $(".card_content1").click(function() {
        $( ".parent1" ).removeClass("turnTopCard");
        $( ".card_content1" ).removeClass("turnBottomCard");
      });

      $(".card_content2").click(function() {
        $( ".parent2" ).removeClass("turnTopCard");
        $( ".card_content2" ).removeClass("turnBottomCard");
      });

      $(".card_content3").click(function() {
        $( ".parent3" ).removeClass("turnTopCard");
        $( ".card_content3" ).removeClass("turnBottomCard");
      });

      $(".card_content4").click(function() {
        $( ".parent4" ).removeClass("turnTopCard");
        $( ".card_content4" ).removeClass("turnBottomCard");
      });

      $(".card_content5").click(function() {
        $( ".parent5" ).removeClass("turnTopCard");
        $( ".card_content5" ).removeClass("turnBottomCard");
      });

      $(".card_content6").click(function() {
        $( ".parent6" ).removeClass("turnTopCard");
        $( ".card_content6" ).removeClass("turnBottomCard");
      });

      $(".card_content7").click(function() {
        $( ".parent7" ).removeClass("turnTopCard");
        $( ".card_content7" ).removeClass("turnBottomCard");
      });

      $(".card_content8").click(function() {
        $( ".parent8" ).removeClass("turnTopCard");
        $( ".card_content8" ).removeClass("turnBottomCard");
      });

      $(".card_content9").click(function() {
        $( ".parent9" ).removeClass("turnTopCard");
        $( ".card_content9" ).removeClass("turnBottomCard");
      });

      $(".card_content10").click(function() {
        $( ".parent10" ).removeClass("turnTopCard");
        $( ".card_content10" ).removeClass("turnBottomCard");
      });

      $(".card_content11").click(function() {
        $( ".parent11" ).removeClass("turnTopCard");
        $( ".card_content11" ).removeClass("turnBottomCard");
      });

      $(".card_content12").click(function() {
        $( ".parent12" ).removeClass("turnTopCard");
        $( ".card_content12" ).removeClass("turnBottomCard");
      });

      $(".card_content13").click(function() {
        $( ".parent13" ).removeClass("turnTopCard");
        $( ".card_content13" ).removeClass("turnBottomCard");
      });

      $(".card_content14").click(function() {
        $( ".parent14" ).removeClass("turnTopCard");
        $( ".card_content14" ).removeClass("turnBottomCard");
      });

      $(".card_content15").click(function() {
        $( ".parent15" ).removeClass("turnTopCard");
        $( ".card_content15" ).removeClass("turnBottomCard");
      });

      $(".card_content16").click(function() {
        $( ".parent16" ).removeClass("turnTopCard");
        $( ".card_content16" ).removeClass("turnBottomCard");
      });

      $(".card_content17").click(function() {
        $( ".parent17" ).removeClass("turnTopCard");
        $( ".card_content17" ).removeClass("turnBottomCard");
      });

      $(".card_content18").click(function() {
        $( ".parent18" ).removeClass("turnTopCard");
        $( ".card_content18" ).removeClass("turnBottomCard");
      });

      $(".card_content19").click(function() {
        $( ".parent19" ).removeClass("turnTopCard");
        $( ".card_content19" ).removeClass("turnBottomCard");
      });

});