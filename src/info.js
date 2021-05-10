function createInfo() {
    let element = document.createElement('div')
    let wrapper = document.createElement('div')
    let firstColumn = document.createElement('div')
    let secondColumn = document.createElement('div')

    let hero = document.createElement('h1')
    let service = document.createElement('h2')
    let schedule = document.createElement('h2')

    let serviceText = document.createElement('ul')
    let scheduleText = document.createElement('p')

    let location = document.createElement('p')
    let phone = document.createElement('p')
    let email = document.createElement('p')

    hero.innerText = `See You Soon`
    service.innerText = `Our Services`
    schedule.innerText = `Our Hours`
    serviceText.innerHTML = `
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
    `
    scheduleText.innerText = `Work from hh:mm to hh:mm` 
    hero.style.width = `90%`
    hero.style.margin = `20px auto`
    service.style.marginBottom = `0`
    schedule.style.marginBottom = `0`
    
    location.innerText = `
        Location
    `
    phone.innerText = `
        Phone number
    `
    email.innerText = `
        Email address
    `
    
    element.classList.add('info-container')
    wrapper.classList.add('info-wrapper')
    firstColumn.classList.add('info-item')
    secondColumn.classList.add('info-item')
    secondColumn.classList.add('contact')

    firstColumn.appendChild(service)
    firstColumn.appendChild(serviceText)
    firstColumn.appendChild(schedule)
    firstColumn.appendChild(scheduleText)

    secondColumn.appendChild(location)
    secondColumn.appendChild(phone)
    secondColumn.appendChild(email)

    wrapper.appendChild(firstColumn)
    wrapper.appendChild(secondColumn)
    element.appendChild(hero)
    element.appendChild(wrapper)
    
    return element
}

export { createInfo }