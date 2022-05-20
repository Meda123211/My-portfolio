const humBtn=document.getElementById('logo-hum');


humBtn.addEventListener('click',HumBtn)
  
function HumBtn(){
const hum= document.getElementById('humburger-handle');

if(hum.classList.contains('hum-active')){
  hum.classList.remove('hum-active')
  hum.classList.add('humburger-handle')
}else{
  hum.classList.remove('humburger-handle')
  hum.classList.add('hum-active')
}


}

function linksAcColor(){


  const currentlocation = location.href;
  const menuItem = document.querySelectorAll(".links");
  const menulength = menuItem.length;
  console.log(menulength)
  for (let i = 0; i < menulength; i++) {
    if (menuItem[i].href === currentlocation) {
      menuItem[i].className = "links-active";
    }
  }
  }
  linksAcColor()
  