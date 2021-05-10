import { createAbout } from "./about.js"
import { createMenu } from "./menu.js"
import { createStory } from "./story.js"
import { createInfo } from "./info.js"

let about = {
    "index": 1,
    "handler": createAbout
}

let menu = {
    "index": 2,
    "handler": createMenu
}

let story = {
    "index": 3,
    "handler": createStory
}

let info = {
    "index": 4,
    "handler": createInfo
}

const holder = [about, menu, story, info]

export { holder }