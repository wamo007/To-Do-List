import { addItem } from "./add-item";

export function memorizeAnytime(task,details,date,priority) {
    const anytimeArray = JSON.parse(localStorage.getItem('anytime')) || [];
    let array = {task, details, date, priority};
    if (!Array.isArray(anytimeArray)) {
        anytimeArray = [];  // Initialize as empty array if not already an array
    }
    anytimeArray.push(array);
    localStorage.setItem('anytime', JSON.stringify(anytimeArray));
}

export function restoreAnytime() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "No Time Constraints";
    
    contents.append(header,fieldset);

    let array = JSON.parse(localStorage.getItem('anytime')) || [];
    for (let i = 0; i < array.length; i++) {
        addItem(array[i].task,array[i].details,array[i].date,array[i].priority);
    }
}