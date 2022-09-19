var topics = ['HTML', 'CSS', 'Git', 'JavaScript']
var randTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (const topic of topics) {
        console.log(topic);
    }
}

function selectTopic() {
    if (randTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randTopic === "CSS") {
        console.log("Let's study CSS!");
    } else if (randTopic === "Git") {
        console.log("Let's study Git!");
    } else if (randTopic === "JavaScript") {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again");
    }
}

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic();