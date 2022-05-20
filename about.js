
const humBtn=document.getElementById('logo-hum');
humBtn.addEventListener('click',HumBtnn)

 function HumBtnn(){
    const hum= document.getElementById('humburger-handle');
    
    if(hum.classList.contains('hum-active')){
      hum.classList.remove('hum-active')
      hum.classList.add('humburger-handle')
    }else{
      hum.classList.remove('humburger-handle')
      hum.classList.add('hum-active')
    }
    
   
   }
   
   //scrolling function



window.onscroll=()=>{
  const downIcon =document.getElementById('icon-godown')
 const textH3=document.getElementById('h3-scrolldown')
 const hum= document.getElementById('humburger-handle');
const textScrol=document.querySelectorAll('.icon-text');
const spanAnimation=document.querySelectorAll('#spancloneChild')
const iconIcon=document.getElementById("downicon")
var top=window.scrollY
console.log(top)
textScrol.forEach((e)=>{

  

if(top>8){

  hum.classList.remove('hum-active')
  hum.classList.add('humburger-handle')
  downIcon.classList.remove('icon-godown')
  downIcon.classList.add('icon-godown-active')
 
  textH3.classList.remove('h3-scrolldown')
  textH3.classList.add('h3active')
  e.classList.add('icon-text2')
   iconIcon.style.opacity=0




}else if(top==0){
  e.classList.remove('icon-text2')
  downIcon.classList.add('icon-godown')
  downIcon.classList.remove('icon-godown-active')
  textH3.classList.add('h3-scrolldown')
  textH3.classList.remove('h3active')
  iconIcon.style.opacity=1


}



})
 spanAnimation.forEach((e)=>{
   let screen=window.screen.width


  
  if (screen>=550 && screen<=1019 &&top>0){
    e.classList.add('dynamic-animation')
    console.log('sssssss')
  
  }
   
    else if(screen>1020 &&top>1289){
e.classList.add('dynamic-animation')
  }
  else if (screen<550 && top>=550 ){
    console.log(top)
    e.classList.add('dynamic-animation')
  }

  else{
    e.classList.remove('dynamic-animation')
  }
 })

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
  