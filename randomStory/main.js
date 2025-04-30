const customName = document.getElementById('customname')
const ukChoose   = document.getElementById('uk')
const randomize  = document.querySelector('.randomize')
const story      = document.querySelector('.story')

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function result() {
    let newStory = storyText

    if(customName.value !== '') {
        const name = customName.value
        newStory   = newStory.replace('Bob', name)
    }

    if(ukChoose.checked) {
        const temperature = Math.round((94 - 32) * 5 / 9) + 'Cº'
        const weight      = Math.round(300 / 14) + 'stone'

        newStory = newStory.replace('94 fahrenheit', temperature)
        newStory = newStory.replace('300 pounds', weight)
    }

    const randomText1 = randomValueFromArray(insertX)
    const randomText2 = randomValueFromArray(insertY)
    const randomText3 = randomValueFromArray(insertZ)

    newStory = newStory.replace(':insertx:', randomText1)
    newStory = newStory.replace(':inserty:', randomText2)
    newStory = newStory.replace(':insertz:', randomText3)

    story.textContent      = newStory
    story.style.visibility = 'visible'
}
randomize.addEventListener('click', result)