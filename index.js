import {asyncAppend} from 'lit-html/directives/async-append.js';
import { render, html } from "lit-html";

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));
async function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
    await wait(1000);
  }
}

render(html`
  Count: <span>${asyncAppend(countUp())}</span>.
`, document.body);

