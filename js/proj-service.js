'use strict'
var gCounter = 1
var gProjects = [
    createProject('Mine-Sweeper', 'Mine-Sweeper', 'Space Themes Mine-Sweeper.', 'First project i made from 0.Using JacaScript, HTML and CSS.this project came in after almost 3 weeks of studying', 'https://idangez.github.io/Idan-Gez---MineSweeper-/', 1637951400000, ['Basic Coding'],gCounter),
    createProject('Akinator', 'Akinator', 'A basic level of a developing in-game Akinator.', 'Self made version of the Akinator! starting with a basic question and keeps on getting new questions and new characters from the user', 'none', 1638811800000, ['Basic Coding', 'BootStrap', 'JQuery'], 'Games, Bootstrap, JQuery',gCounter),
    createProject('Numbers-Game', 'Numbers-Game', 'How fast can you click the numbers?', 'A Classic mobile-like numbers-clicking game', 'https://idangez.github.io/numbers-game-/', 1637335800000, 'Basic Coding', ['Games', 'JavaScript', 'CSS'],gCounter),

]


function createProject(id, name, title, desc, url, publishedAt, labels,modalID) {
    return {
        id: name.toLowerCase(),
        name: name,
        title: title,
        description: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels,
        modalID: gCounter++,
    }
}

function getProjects(){
    return gProjects;
}

