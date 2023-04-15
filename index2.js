// let touchstartX = 0
// let touchendX = 0
function checkDirection2() {
    if(touchendX1 - touchstartX1<50 && touchendX1 - touchstartX1>0){return}
  if (touchendX1 < touchstartX1 ) {console.log('right')
  move()}
  if (touchendX1 > touchstartX1 ) {console.log('left')
  move2()}
}

document.addEventListener('touchstart', e => {
  touchstartX1 = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX1 = e.changedTouches[0].screenX
  checkDirection2()
})

// function move(){
//     dis=document.querySelector('.ss')
//     dis.style.backgroundColor = "red"
//     console.log('move')
// }

// function move2(){
//     dis=document.querySelector('.ss')
//     dis.style.backgroundColor = "black"
//     console.log('move2')

// }