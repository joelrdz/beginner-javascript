/* eslint-disable */
const name = 'Albus';
const middle = "Severus";
const last = `Potter`;

const sentence = "she's so \"cool\"";
const sentence2 = `she's so "cool"`;

const song = `Ohhh

ya

I like
pizza`;

// const hello = 'hello my name is ' + name + ". Nice to meet you";

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 99} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;