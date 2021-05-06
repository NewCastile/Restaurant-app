function createAbout() {
    let element = document.createElement('div')
    let prev = document.createElement('h3')
    let header = document.createElement('h1')
    let content = document.createElement('div')
    let slogan = document.createElement('h3')
    element.classList.add('home-container')
    header.classList.add('home-header')
    content.classList.add('home-content')
    header.innerText = `Restaurant Name`
    prev.innerText = `Welcome To`
    content.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus suscipit, pariatur dicta alias nostrum.</p>
    `
    slogan.innerText = `"Lorem ipsum dolor sit amet consectetur"`
    slogan.classList.add('slogan')
    element.appendChild(prev)
    element.appendChild(header)
    element.appendChild(content)
    element.appendChild(slogan)
    return element
}

export { createAbout }