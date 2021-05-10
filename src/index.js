import { holder } from "./handlers.js"

const navbar = document.querySelector('.tabs')
const textBox = document.querySelector('.text-box')
let tabs = Array.from(navbar.children).splice(0, navbar.children.length-1)

function selectHandler(tab) {
    let index = tab.dataset.index
    let selectedHandler = holder.filter(item => item.index == index)[0].handler
    return selectedHandler
}

function displayTabContent(event) {
    event.preventDefault()
    tabs.forEach(tab => {
        if(tab.classList.contains('active')) {
            tab.classList.remove('active')
        }
    })
    event.target.classList.add('active')

    while(textBox.firstChild) {
        textBox.firstChild.remove()
    }
    let handler = selectHandler(event.target)
    let content = handler()
    textBox.appendChild(content)
}

navbar.addEventListener('click', displayTabContent)
window.addEventListener('load', ()=> {
    let handler = holder[0].handler
    textBox.appendChild(handler())
})