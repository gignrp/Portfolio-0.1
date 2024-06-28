const boutton = document.querySelector('button')
const span = document.querySelector('span')
const input = document.querySelector('input')

let chifres = "";

input.addEventListener('input', (e) => {
    chifres = e.target.value
})

boutton.addEventListener('click', () => {
    if (ver.checked) {
        span.textContent = Math.random() * chifres

    } else {
        span.textContent = Math.floor(Math.random() * chifres)    
    }
    
})