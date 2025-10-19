
const container = document.createElement('div');
container.textContent = 'Här händer det saker'
container.style.backgroundColor = '#fbbf24'
document.body.appendChild(container);

const header = document.createElement('h1');
header.textContent = 'Välkommen till workshop';
header.style.background = '#4b5563';
container.appendChild(header);

const paragraph = document.createElement('p');
paragraph.textContent = '2025-10-19';
container.appendChild(paragraph);

const btn1 = document.createElement('button');
btn1.textContent = 'Uppdatera datum';
document.body.appendChild(btn1);

btn1.addEventListener('click', () => {
    paragraph.textContent = '2025-10-20';


}
)


