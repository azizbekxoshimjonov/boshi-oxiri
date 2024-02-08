var elTitle = document.querySelector('.title')
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var arr = ['Array']

function fn() {
var Inp1 = elInp1.value 
var Inp2 = elInp2.value

if(Inp2 == 'b'){
    arr.unshift(Inp1)
    elTitle.textContent = arr
}else if(Inp2 == 'o'){
    arr.push(Inp1)
  elTitle.textContent = arr
}


}


















