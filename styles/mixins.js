import typography from './typography'
import breackpoints from './breackpoints'


const variables = {
    col: 100 / 24
} 


export const mediaBreackpointUp = (breackpoint) => {
    return `@media(min-width: ${breackpoints[breackpoint]})`
}

export const mediaBreackpointDown = (breackpoint) => {
    return `@media(max-width: ${breackpoints[breackpoint]}) `
} 

export const mediaBreackpointOrientation = (orientation) => {
    return `@media(orientation: ${orientation})`
}

export const cols = (value) => {
    return `${variables.col * value}vw`
}

export const fontSize = (value) => {
    return typography[`color${value}`]
} 