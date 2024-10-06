import { addItem } from "./add-item";

export function memorizeUpcoming(task,details,date,priority) {
    const upcomingArray = JSON.parse(localStorage.getItem('upcoming')) || [];
    let array = {task, details, date, priority};
    if (!Array.isArray(upcomingArray)) {
        todayArray = [];  // Initialize as empty array if not already an array
    }
    upcomingArray.push(array);
    localStorage.setItem('upcoming', JSON.stringify(upcomingArray));
}

export function restoreUpcoming() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "Upcoming Things";
    
    contents.append(header,fieldset);

    let array = JSON.parse(localStorage.getItem('upcoming')) || [];
    for (let i = 0; i < array.length; i++) {
        addItem(array[i].task,array[i].details,array[i].date,array[i].priority);
    }
}