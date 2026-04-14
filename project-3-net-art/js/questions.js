//console.log ("javascript");

// select html elements for question 1
const q1 = document.querySelector("#q1");
const q11 = document.querySelector("#q11");
const q12 = document.querySelector("#q12");
const q13 = document.querySelector("#q13");

// toggle text visibility for question 1
q1.addEventListener("click", () => {
    q11.classList.remove("hidden");
})

q11.addEventListener("click", () => {
    q12.classList.remove("hidden");
})

q12.addEventListener("click", () => {
    q13.classList.remove("hidden");
})

// select html elements for question 2
const q2 = document.querySelector("#q2");
const q21 = document.querySelector("#q21");
const q22 = document.querySelector("#q22");
const q23 = document.querySelector("#q23");

// toggle text visibility for question 2

q2.addEventListener("click", () => {
    q21.classList.remove("hidden");
})

q21.addEventListener("click", () => {
    q22.classList.remove("hidden");
})

q22.addEventListener("click", () => {
    q23.classList.remove("hidden");
})

// select html elements for question 3
const q3 = document.querySelector("#q3");
const q31 = document.querySelector("#q31");
const q32 = document.querySelector("#q32");
const q33 = document.querySelector("#q33");

// toggle text visibility for question 3

q3.addEventListener("click", () => {
    q31.classList.remove("hidden");
})

q31.addEventListener("click", () => {
    q32.classList.remove("hidden");
})

q32.addEventListener("click", () => {
    q33.classList.remove("hidden");
})

//select html elements for question 4
const q4 = document.querySelector("#q4");
const q41 = document.querySelector("#q41");
const q42 = document.querySelector("#q42");
const q43 = document.querySelector("#q43");

// toggle text visibility for question 4

q4.addEventListener("click", () => {
    q41.classList.remove("hidden");
})

q41.addEventListener("click", () => {
    q42.classList.remove("hidden");
})

q42.addEventListener("click", () => {
    q43.classList.remove("hidden");
})