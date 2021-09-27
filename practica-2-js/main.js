"use strict";

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

randomize.addEventListener('click', result);

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function result() {

    let copy = storyText

    if (customName.value !== '') {
        let name = customName.value;
        copy = copy.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14) + ' stone';
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        copy = copy.replace('300 pounds', weight);
        copy = copy.replace('94 fahrenheit', temperature);
    }

    let valueX = randomValueFromArray(insertX);
    let valueY = randomValueFromArray(insertY);
    let valueZ = randomValueFromArray(insertZ);

    copy = copy.replace(':insertx:', valueX);
    copy = copy.replace(':insertx:', valueX);
    copy = copy.replace(':inserty:', valueY);
    copy = copy.replace(':insertz:', valueZ);

    story.textContent = copy;
    story.style.visibility = 'visible';
}
