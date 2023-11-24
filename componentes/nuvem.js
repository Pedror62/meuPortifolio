var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')



window.addEventListener('scroll', function(){
    var deceBaixo = window.scrollY

    onda1.style.backgroundPositionX = 400 + deceBaixo * 5 + 'px' ;
    onda2.style.backgroundPositionX = 300 + deceBaixo * 4 + 'px' ;
    onda3.style.backgroundPositionX = 185 + deceBaixo * 3 + 'px' ;
    onda4.style.backgroundPositionX = 75 + deceBaixo * 2 + 'px' ;
   

})