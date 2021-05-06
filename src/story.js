import Image1 from "./images/image-1.jpg"
import Image2 from "./images/image-2.jpg"
import Image3 from "./images/image-3.jpg"

function createStoryItem(imagePath, imagePosition) {
    let wrapper = document.createElement('div')
    let imgColumn = document.createElement('div')
    let textColumn = document.createElement('div')
    let image = document.createElement('img')
    let text = document.createElement('div')
    text.innerHTML = `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus suscipit, pariatur dicta alias nostrum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus suscipit, pariatur dicta alias nostrum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus suscipit, pariatur dicta alias nostrum.</p>
    `
    image.src = imagePath
    imgColumn.appendChild(image)
    textColumn.appendChild(text)
    if (imagePosition === 'left') {
        wrapper.appendChild(imgColumn)
        wrapper.appendChild(textColumn)
    } else if (imagePosition === 'right') {
        wrapper.appendChild(textColumn)
        wrapper.appendChild(imgColumn)
    }
    imgColumn.classList.add('img-column')
    textColumn.classList.add('text-column')
    wrapper.classList.add('story-item')
    return wrapper
}

function createStory() {
    let story = document.createElement('div')
    let positions = ["left", "right", "left"]
    let images = [Image1, Image2, Image3]
    positions.forEach((pos, i) => {
        let item = createStoryItem(images[i], pos)
        story.appendChild(item)
    })
    story.classList.add('story-container')
    return story
}

export { createStory }