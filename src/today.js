import { addItem } from "./add-item";

export function memorizeToday(task,details,date,priority) {
    const todayArray = JSON.parse(localStorage.getItem('today')) || [];
    let array = {task, details, date, priority};
    if (!Array.isArray(todayArray)) {
        todayArray = [];  // Initialize as empty array if not already an array
    }
    todayArray.push(array);
    localStorage.setItem('today', JSON.stringify(todayArray));
}

export function restoreToday() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "Today's Agenda";
    
    contents.append(header,fieldset);

    let array = JSON.parse(localStorage.getItem('today')) || [];
    for (let i = 0; i < array.length; i++) {
        addItem(array[i].task,array[i].details,array[i].date,array[i].priority);
    }
}