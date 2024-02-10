
// let h = document.querySelector('h1')
// let d = document.querySelector('div')

// h.onclick = (event)=>{
//     console.log(event);
//     if (event.shiftKey) {
//         h.style.color = 'red'
//     }else{
//         h.style.color = 'green'
//     }
// }
// d.onclick = (e)=> {
//     e.target.style.color = 'red'
// }

// ? ============== LISTENERS ==============
// ATRIBUTE, ONTYPE, ADDEVENTLISTENER()

// function test() {
//     console.log('On attribute');
// }

// h.onclick = () => {
//     console.log('On type');
// }
// h.onclick = () => {
//     console.log('bhedhedh3eud2eui2dehui2e');
// }

// h.addEventListener('click', ()=> {
//     console.log('Event listener');
// })
// h.addEventListener('click', ()=> {
//     console.log('Event listener');
// })



// ====================== Vazifa ===================



let a = document.querySelector('h1')
let btn = document.querySelector('button')
let b = document.querySelector('.container')

btn.addEventListener('click', ()=>{
    b.classList.toggle('dark')

    if(btn.innerText === 'NIGHT'){
        btn.innerText = 'LIGHT'
        a.innerText = 'HAYRLI TUN'
    }else{
        btn.innerText = 'NIGHT'
        a.innerText = 'HAYRLI KUN'
    }
})