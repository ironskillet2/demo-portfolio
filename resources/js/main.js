var texter = document.querySelector(".text");
var explosion = document.querySelector(".explosion");

texter.onclick = function () {
    texter.style.display = 'none';
    explosion.style.display = 'flex';
    setTimeout(function(){ 
        alert("OOPS! Don't click that!!");
        explosion.style.display = 'none';
        texter.style.display = '';
     }, 60);
}



