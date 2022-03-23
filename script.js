let b1 = document.querySelector('.one')
let b2 = document.querySelector('.two')

b1.onclick = () => {
    b2.style.color = "blue" 
}
b2.onclick = () => {
    b1.style.border = "5px solid black" 
}