let open = false;

function openNav() {  
  if(window.matchMedia('(max-width: 1040px)').matches){
    open = true;
    document.getElementById('sidebar').style.width="100%";
    document.getElementById('menuButton').src="media/menu_remove.svg";
  }    
}

function closeNav() {
  if(window.matchMedia('(max-width: 1040px)').matches){
        open = false;
        document.getElementById('sidebar').style.width="0";
        document.getElementById('menuButton').src="media/menu_add.svg";
  }
}

document.getElementById("menuButton").addEventListener("click", function(){
  if(!open){    
    openNav();
  } 
  else {    
    closeNav();
  }     
    
});

document.getElementById("calculator").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");
  document.getElementById("calculator").classList.add("selected");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});

document.getElementById("account").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.remove("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.add("hide");
  document.getElementById("account").classList.add("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("dashboard").classList.remove("selected");
  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  } 
});

document.getElementById("dashboard").addEventListener("click",function(){
  document.getElementsByClassName("account")[0].classList.add("hide");
  document.getElementsByClassName("calculator")[0].classList.add("hide");
  document.getElementsByClassName("dashboard")[0].classList.remove("hide");
  document.getElementById("dashboard").classList.add("selected");
  document.getElementById("calculator").classList.remove("selected");
  document.getElementById("account").classList.remove("selected");

  if(window.matchMedia('(max-width: 1040px)').matches){
    console.log("match");
    closeNav()
  }
});


