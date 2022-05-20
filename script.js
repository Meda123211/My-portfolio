
const humBtn=document.getElementById('logo-hum');



let index=0
function typewriter(){

  var text=["HI! I'm Ahmad"]

  let count=0

  let currentText=''
  let letter=''

  currentText=text[count]

  letter=currentText.slice(0,++index)
  document.querySelector('.text1').textContent=letter
  if(letter.length===currentText.length){
  
    count++
    index=0
  }
  setTimeout(typewriter,300)

}
typewriter()



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
for (let i = 0; i < menulength; i++) {
  if (menuItem[i].href === currentlocation) {
    menuItem[i].className = "links-active";
  }
}
}
linksAcColor()
