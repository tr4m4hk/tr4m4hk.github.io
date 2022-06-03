/* Pen by ArcSinDesign.com - Follow https://codepen.io/BoiseDigital/ */
window.onload=change_song('p7IDYxIX9Wo');

window.onscroll = function() {
    
   
        //For da maths
  var divHeight = document.getElementById('titleFade').clientHeight;
		 
  //Scalar allows you to extend or decrease the amount of time it takes to fade out completely. Less is more fade, more is less fade.
  var scalar = 1.0; 
       
      
      //Fade Out
   document.getElementById('titleFade').style.opacity = 1-(window.pageYOffset / (divHeight*scalar));
     document.getElementById('now_playing').style.top = 1+(window.pageYOffset / (scalar*3))+"px";
   document.getElementById('now_playing').style.opacity = 1-(window.pageYOffset / (divHeight*(scalar*2)));  
   
           
      //Parallax Down
      document.getElementById('titleFade').style.top = 60+(window.pageYOffset / 3)+"px";
 
      navigation();
                  
    }
 
//A Faux Youtube playlist API I ma
 

  
function change_song(videoName) {

var videoName;
var videoArray = new Array();
var titleArray = new Array(); 
var excerptArray = new Array(); 


videoArray[0]='iqrMFNMgVS0'; 
titleArray[0] = "Another World";
excerptArray[0] = "Gojira";

  // JFC
 //videoArray[1]='cImyoxFVrJ0';
 videoArray[1]='4TnAaobVMfw';
 titleArray[1] = "AWAKE.EXE";
 excerptArray[1] = "Link Two";

videoArray[2]='290VFNNTYko';
titleArray[2] = "Make Art Not Friends";
excerptArray[2] = "Link Three";

videoArray[3]='uCKk2_OTCOQ';
titleArray[3] = "Start Again";
excerptArray[3] = "Link Four";  
  

playlist = videoArray.join(",");

videoCount=videoArray.length;

if (document.getElementById('autogrid').innerHTML == '') {
for (i=0; i < videoCount; i++) {	 /*document.getElementById('autogrid').innerHTML += '<a href="javascript:change_song(\''+videoArray[i]+'\');smoothScroll(\'now_playing\');"><div id="'+videoArray[i]+'" style="width:25%;display:inline-block;"><div class="videoDisplay" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');"><div class="glow"></div><div class="meta"><h4>'+titleArray[i]+'</h4><p>'+excerptArray[i]+'</p></div></div></div></a>';*/
document.getElementById('autogrid').innerHTML += '<a href="javascript:change_song(\''+videoArray[i]+'\');smoothScroll(\'navigation\');"><div id="'+videoArray[i]+'" class="glitch"><div class="glitch__item" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');" ></div><div class="glitch__item" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');"></div><div class="glitch__item" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');"></div><div class="glitch__item" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');"></div><div class="glitch__item" style="background-image:url(\'https://img.youtube.com/vi/'+videoArray[i]+'/mqdefault.jpg\');"></div><div class="meta"><h4 class="glitch__title" title="'+titleArray[i]+'">'+titleArray[i]+'</h4><p>'+excerptArray[i]+'</p></div></div></a>';  
}
}
         	document.getElementById('now_playing').innerHTML = '<iframe id="videoBackground" onhover="return:false;" src="//www.youtube.com/embed/'+videoName+'?feature=player_embedded&autoplay=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&wmode=transparent&disablekb=1&enablejsapi=1&iv_load_policy=3&origin=https://codepen.io/BoiseDigital/pen/HxJvc&playlist='+playlist+'" frameborder="0" allowfullscreen="false"></iframe><div id="titleFade"><h1 class="iamtheend"><img src="http://dizin.x10.bz/images/acidwolf.png" /></h1></div></div>';

}

function navigation() {
//detached menubar
if (window.pageYOffset > 0) {
      //add class that controls detached styling
      document.getElementById('navigation').className = 'header-detached';
      } else {
      //remove class that controls detached styling
      document.getElementById('navigation').className = '';    
 }

var imgDisplay = document.getElementById('imageDisplay').clientHeight;
 //detached menubar
if (window.pageYOffset > imgDisplay-100) {
      //add class that controls detached styling
      document.getElementById('slingshot').className = 'slingshot slingshot-detached';
      } else {
      //remove class that controls detached styling
      document.getElementById('slingshot').className = 'slingshot';    
 }
}

//Smooth Scroll////////////////////////////////////////////////////////////////////////////////////////////////////////////
			function currentYPosition() {
				// Firefox, Chrome, Opera, Safari
				if (self.pageYOffset) return self.pageYOffset;
				// Internet Explorer 6 - standards mode
				if (document.documentElement && document.documentElement.scrollTop)
					return document.documentElement.scrollTop;
				// Internet Explorer 6, 7 and 8
				if (document.body.scrollTop) return document.body.scrollTop;
				return 0;
			}

			function elmYPosition(eID) {
				var elm = document.getElementById(eID);
				var y = elm.offsetTop;
				var node = elm;
				while (node.offsetParent && node.offsetParent != document.body) {
					node = node.offsetParent;
					y += node.offsetTop;
				} return y;
			}

			function smoothScroll(eID) {
				var startY = currentYPosition();
				var stopY = elmYPosition(eID);
				var distance = stopY > startY ? stopY - startY : startY - stopY;
				if (distance < 100) {
					scrollTo(0, stopY); return;
				}
				var speed = Math.round(distance / 6);
				if (speed >= 20) speed = 20;
				var step = Math.round(distance / 36);
				var leapY = stopY > startY ? startY + step : startY - step;
				var timer = 0;
				if (stopY > startY) {
					for ( var i=startY; i<stopY; i+=step ) {
						setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
						leapY += step; if (leapY > stopY) leapY = stopY; timer++;
					} return;
				}
				for ( var i=startY; i>stopY; i-=step ) {
					setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
					leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
				}
			}