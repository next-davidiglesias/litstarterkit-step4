// Import lit-html functions
import {html, render} from 'lit-html';

const items = [['A', 'Aceyalone', 'Aesop Rock', 'Angel Haze', 'Atmosphere'],['B','Babbletron','Blackalicious','Bike For Three','Black Sheep','Blueprint'],['C','Cecil Otter','Chali 2na','Chance The Rapper','Common Market','Cool Calm Pete'],['D','Danger Doom','Darc Mind','Dem Atlas','Dessa']]


const myTemplate = ()=> html`
<div class="sticky-slide">
  <dl>
    ${items.map((item)=>html`
       ${item.map((i, index)=>html`
         ${index === 0 ? 
         html`
         <dt>${i}</dt>`:
         html `
         <dd>${i}</dd>
         `}
       `)}
    `)}
  </dl>
</div>

`;


render(myTemplate(), document.body.querySelector('section')
);

