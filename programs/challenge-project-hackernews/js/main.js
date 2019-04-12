/*
 Challenge:
 build a simple hackernews that just shows the text 
 of each story, and goes to the link of each story.

 Here's what it looks like.
 https://news.ycombinator.com/

 Here's the API documentation.
 https://github.com/HackerNews/API
 
 This is optional.
*/

// urls
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
var hackerNewsStories = baseUrl + "topstories.json?print=pretty";

const articles = document.querySelector(".articles");

// the number is passed as an argument below is just a demo.
let hackerNewsStory = 19617578;

// fetchStory(hackerNewsStory).then(story => {
//   console.log(story);
//   buildStory(story);
// });

loadStories(hackerNewsStory, 10000);

function loadStories(startId, num) {
  for (let i = 0; i < num; i++) {
    let curStory = getStoryUrl(startId + i);
    fetchStory(curStory).then(story => buildStory(story));
  }
}
function getStoryUrl(id) {
  //sample use 19617367 as an id
  return baseUrl + "item/" + id + ".json?print=pretty";
}

function buildStory(story) {
  let { title, score, by: author, url } = story;
  if (title !== undefined) {
    console.log(story);
    let elt = document.createElement("li");

    let link = document.createElement("a");
    let heading = document.createElement("h4");
    let scoreSpan = document.createElement("span");
    let authorPar = document.createElement("p");
    let hr = document.createElement("hr");

    link.setAttribute("href", url);
    let scoreTxt = document.createTextNode(score);
    let headTxt = document.createTextNode(title);
    let authorTxt = document.createTextNode(author);

    scoreSpan.appendChild(scoreTxt);
    authorPar.appendChild(authorTxt);

    heading.appendChild(headTxt);
    link.appendChild(heading);

    elt.appendChild(scoreSpan);
    elt.appendChild(link);
    elt.appendChild(authorPar);
    elt.appendChild(hr);

    articles.appendChild(elt);
  }
}

function fetchStory(url) {
  return fetch(url)
    .then(response => response.json())
    .then(storyJson => storyJson);
}

// you might need this to parse text
function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Use either fetch or XHR.

// Using fetch example for reference
// fetch(hackerNewsStory, {method: "GET"}).then((response) => {
//   return response.json();
// }).then((body) => {
//     console.log(body);
// });

// Using XHR example for reference
// var xhr = new XMLHttpRequest();
// xhr.open('GET', hackerNewsStories, true);
// xhr.send(null);
// xhr.addEventListener("load", handleResponse);
// function handleResponse() {
//   if (xhr.status == 200) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// }
