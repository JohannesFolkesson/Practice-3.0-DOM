const list = document.createElement('ul');
document.body.appendChild(list);

const btn1 = document.createElement('button');
document.body.appendChild(btn1);
btn1.textContent = 'Lägg till aktivitet';


const aktivitetList = document.createElement('ul');
document.body.appendChild(aktivitetList);
btn1.addEventListener('click', () => {
const aktivitet = prompt('Lägg till aktivitet');
  if (aktivitet) {
    const li = document.createElement('li');
    li.textContent = aktivitet;
    aktivitetList.appendChild(li);
  }
});


const btn2 = document.createElement('button');
document.body.appendChild(btn2);
btn2.textContent = 'Ta bort första aktivitet';


btn2.addEventListener('click', () => {
    btn2.textContent = 'Ta bort första aktivitet';
    aktivitetList.firstElementChild.remove()
})

const btn3 = document.createElement('button');
document.body.appendChild(btn3);
btn3.textContent = 'Färga listan';


btn3.addEventListener('click', () => {
aktivitetList.style.backgroundColor = '#DC143C'    
})