import { createAbout } from "./about.js"
import { createMenu } from "./menu.js"
import { createStory } from "./story.js"
import { createInfo } from "./info.js"
import "./css/main.css"
const navbar = document.querySelector('.tabs')
const textBox = document.querySelector('.text-box')
let tabs = Array.from(navbar.children).splice(0,4)
let aboutInfo = createAbout()
let menuInfo = createMenu()
let storyInfo = createStory()
let storeInfo = createInfo()
navbar.addEventListener('click', displayTabContent)

function displayTabContent(event) {
    event.preventDefault()
    tabs.forEach(tab => {
        if(tab.classList.contains('active')) {
            tab.classList.remove('active')
        }
    })
    event.target.classList.add('active')

    if(event.target.classList.contains('tab-1')) {
        while(textBox.firstChild) {
            textBox.firstChild.remove()
        }
        textBox.appendChild(aboutInfo)
    } else if(event.target.classList.contains('tab-2')) {
        while(textBox.firstChild) {
            textBox.firstChild.remove()
        }
        textBox.appendChild(menuInfo)
    } else if (event.target.classList.contains('tab-3')) {
        while(textBox.firstChild) {
            textBox.firstChild.remove()
        }
        textBox.appendChild(storyInfo)
    } else if (event.target.classList.contains('tab-4')) {
        while(textBox.firstChild) {
            textBox.firstChild.remove()
        }
        textBox.appendChild(storeInfo)
    }
}

textBox.appendChild(aboutInfo)