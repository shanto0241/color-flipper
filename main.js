// color flipper functions

const body = document.getElementsByTagName("body")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}

// pallindrome functions
const inputed = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const Value = inputed.value;
  const reverse = reverseString(Value);

  if (Value === reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("Try Again!");
  }

  inputed.value = "";
}

// quote generator functions

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "In the middle of every difficulty lies opportunity.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The purpose of our lives is to be happy.",
  "You miss 100% of the shots you don’t take.",
  "It does not matter how slowly you go as long as you do not stop.",
];
const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
function generate() {
  // quoteElement.innerHTML = "hello World!"
  const randomIDx = Math.round(Math.random() * quotes.length);
  const quote = quotes[randomIDx];
  quoteElement.innerHTML = quote;
}

// stop watch

let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}


// to do list
let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)
        
        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}


function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)