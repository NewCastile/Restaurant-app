function createInfo() {
    let element = document.createElement('div')
    let container = document.createElement('div')
    let firstColumn = document.createElement('div')
    let secondColumn = document.createElement('div')

    let hero = document.createElement('h1')
    let service = document.createElement('h2')
    let schedule = document.createElement('h2')

    let serviceText = document.createElement('ul')
    let scheduleText = document.createElement('p')

    let location = document.createElement('div')
    let phone = document.createElement('div')
    let email = document.createElement('div')

    let locationIcon = document.createElement('div')
    let phoneIcon = document.createElement('div')
    let emailIcon = document.createElement('div')

    let locationText = document.createElement('p')
    let phoneText = document.createElement('p')
    let emailText = document.createElement('p')

    locationIcon.classList.add('location-icon')
    phoneIcon.classList.add('phone-icon')
    emailIcon.classList.add('email-icon')

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
    
    locationText.innerText = `
        Location
    `
    phoneText.innerText = `
        Phone number
    `
    emailText.innerText = `
        Email address
    `
    
    container.classList.add('info-container')
    firstColumn.classList.add('info-item')
    secondColumn.classList.add('info-item')
    secondColumn.classList.add('contact')

    firstColumn.appendChild(service)
    firstColumn.appendChild(serviceText)
    firstColumn.appendChild(schedule)
    firstColumn.appendChild(scheduleText)

    location.appendChild(locationIcon)
    location.appendChild(locationText)
    phone.appendChild(phoneIcon)
    phone.appendChild(phoneText)
    email.appendChild(emailIcon)
    email.appendChild(emailText)

    secondColumn.appendChild(location)
    secondColumn.appendChild(phone)
    secondColumn.appendChild(email)

    container.appendChild(firstColumn)
    container.appendChild(secondColumn)
    element.appendChild(hero)
    element.appendChild(container)
    
    return element
}

export { createInfo }