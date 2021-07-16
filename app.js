const hexValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const btn = document.getElementById('btn');
const istoric = document.getElementById('istoricContainer');

btn.addEventListener('click', function () {
  let array = [];
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexValues.length);
    console.log(random);
    color += `${hexValues[random]}`;
  }

  console.log(color);
  document.body.style.backgroundColor = color;
  document.getElementById('color').innerText = color;

  let historyTab = document.createElement('div');
  let square = document.createElement('div');
  let text = document.createElement('div');

  historyTab.classList.add('tab');
  square.classList.add('square');
  square.style.backgroundColor = color;
  text.classList.add('text');
  text.innerText = color;
  historyTab.appendChild(square);
  historyTab.appendChild(text);

  historyTab.addEventListener('click', function () {
    document.body.style.backgroundColor = historyTab.lastChild.textContent;
  });

  istoric.appendChild(historyTab);
});
