const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}
function close(){
    mainMenu.style.top='-1000px';
}
var press=document.getElementById("unique");
var active=press.getElementsByClassName("menu");
for(var i=0;i<active.length;i++){
    active[i].addEventListener("click",function activate(){
        var current=document.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.classList.add("active") ;
    });
}

window.addEventListener("scroll",whenscroll);

function whenscroll(){
scrolltop=document.getElementById("scrolltop");
console.log(document.documentElement.scrollTop)
if(document.documentElement.scrollTop > 300){
    scrolltop.style.display="block";
  }
  else{
    scrolltop.style.display="none";
  }
}