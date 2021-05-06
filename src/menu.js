function createMenuItem(name) {
    let itemWrapper = document.createElement('div')
    let itemHeader = document.createElement('h1')
    let itemDescription = document.createElement('p')
    let itemSeparator = document.createElement('hr')
    itemWrapper.classList.add('menu-item')
    itemHeader.classList.add('item-header')
    itemDescription.classList.add('item-description')
    itemSeparator.classList.add('item-separator')
    itemHeader.innerText=`${name}`
    itemDescription.innerText=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore!`
    itemWrapper.appendChild(itemHeader)
    itemWrapper.appendChild(itemDescription)
    itemWrapper.appendChild(itemSeparator)
    return itemWrapper
}

function createMenu() {
    let menu = document.createElement('div')
    let items = ['Plate 1', 'Plate 2', 'Plate 3', 'Plate 4', 'Plate 5', 'Plate 6']
    items.forEach(item => {
        let menuItem = createMenuItem(item)
        menu.appendChild(menuItem)
    })
    menu.classList.add('menu-containar')
    return menu
}

export { createMenu }