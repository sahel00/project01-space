/*
*Questo script permette lo spostamento della scrollbar news quando vengono
*premute le frecce-->
*/



/*
*Decrementa di una distanza pari alla larghezza di articles-container la
*scrollbar orizzonatle
*/

document.getElementById("scroll-left").onclick =   function leftScroll() {
  var x = document.getElementById('articles-container');
    x.scrollTo(x.scrollLeft - x.offsetWidth, 0 );
  }

/*
*Incrementa di una distanza pari alla larghezza di articles-container la
*scrollbar orizzonatle
*/
document.getElementById("scroll-right").onclick = function rightScroll() {
  var x = document.getElementById('articles-container');
  x.scrollTo(x.scrollLeft + x.offsetWidth, 0 );
}







