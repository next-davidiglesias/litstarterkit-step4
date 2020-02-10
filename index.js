import {asyncReplace} from 'lit-html/directives/async-replace.js';
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
  Count: <span>${asyncReplace(countUp())}</span>.
`, document.body);

