const timer = document.querySelector(".timer")

var sec = 0;
var min = 0 ;
var hr = 0 ;

 var time = true ;

function starttime(){
    if( time == true   ){
        time = false ;
       timercycle();
    } ;
        
    
}
 function stoptime(){
if( time == false )
{ 
    time = true
}
 }
function timercycle(){
 if ( time == false ) {
     sec = parseInt(sec);
     min = parseInt(min); 
     hr = parseInt(hr);            
        sec = sec + 1 ;
 
if ( sec == 60 ){
    min = min + 1 ;
    sec = 0;

}
if ( min == 60){
    hr = hr + 1;
    min = 0;
    sec = 0;
}
if ( sec < 10){
    sec = "0" +sec;
}
if ( min < 10) {
    min = "0" + min;
}
if ( hr <10) {
    hr = "0" +hr
}
timer.innerHTML = hr + ":" + min + ":" + sec ;
 setTimeout("timercycle()", 1000);
}
}
function resettime(){
 timer.innerHTML= "00:00:00";
       time = true ;
       hr =0;
       min =0;
       sec =0;
      
    
}
