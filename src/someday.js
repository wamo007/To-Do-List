import { addItem } from "./add-item";

export function memorizeSomeday(task,details,date,priority) {
    const somedayArray = JSON.parse(localStorage.getItem('someday')) || [];
    let array = {task, details, date, priority};
    if (!Array.isArray(somedayArray)) {
        somedayArray = [];  // Initialize as empty array if not already an array
    }
    somedayArray.push(array);
    localStorage.setItem('someday', JSON.stringify(somedayArray));
}

export function restoreSomeday() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "Expired tasks";
    
    contents.append(header,fieldset);

    let array = JSON.parse(localStorage.getItem('someday')) || [];
    for (let i = 0; i < array.length; i++) {
        addItem(array[i].task,array[i].details,array[i].date,array[i].priority);
    }
}