
x=500

document.addEventListener("mousedown", mousemoveHandler)

document.onclick= event => {   
  touchstartX = event.clientX;
  console.log(touchstartX2,touchstartX,)
  checkDirection()
}

function mousemoveHandler(event){
    touchstartX2 = event.clientX;
    return(touchstartX2)
}

function checkDirection() {
if(touchstartX2 - touchstartX<50 && touchstartX2 - touchstartX>0){return}

if (touchstartX2 < touchstartX ){console.log('right')
move2()}
if (touchstartX2 > touchstartX) {console.log('left')
move()}
return
}  
function move(){
    dis=document.querySelector('.ss')
    // dis.style.overflow = "hidden"
    dis.style.position="relative"
    dis.style.left= "-100% "
    console.log('move')
}
function move2(){
    dis=document.querySelector('.ss')
    dis.style.position="relative"
    // dis.style.overflow = "hidden"

    dis.style.left= "0% "
    
    console.log('move2')

}


