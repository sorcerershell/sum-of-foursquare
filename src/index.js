
import foursquare from './foursquare';
import './index.scss';

// document.getElementById('root').innerHTML = sayHello();

let rows = [];
let count = 0;
for(let i=1; i<=200; i++) {
  let factor = foursquare(i);
  factor.sort((a, b) => b - a);
  if (!factor.includes(0)) {
    count++;
  }
  factor = factor.filter((val) => val !== 0);
  rows.push({ num: i, factors: factor });

}

let content = `
<h1>Table Sum of Squares</h1>
<table border="1" collapsed="collapsed">
  <thead>
    <tr>
      <th>Number</th>
      <th>Sum of Squares</th>
    </tr>
  </thead>
  <tbody>`;

rows.forEach(row => {
  let factorInString = row.factors.join(',');
  content += `
    <tr>
      <td>${row.num.toString()}</td>
      <td>${factorInString}</td>
    </tr>
  `;
});

content += `
  </tbody>
</table>
<h3>Count of Numbers that can be expressed only by sum of four squares: ${count}</h3>
`;

document.getElementById('root').innerHTML = content;

