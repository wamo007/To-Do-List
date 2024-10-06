import { addItem } from "./add-item";

export function highPriority() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "High Priority";
    
    contents.append(header,fieldset);

    const arraysToCheck = ['today', 'upcoming', 'someday', 'anytime'];

    arraysToCheck.forEach(key => {
        let currentArray = JSON.parse(localStorage.getItem(key)) || [];
        let filteredArray = currentArray.filter(item => item.priority === "High");
        for (let i = 0; i < filteredArray.length; i++) {
            addItem(filteredArray[i].task,filteredArray[i].details,filteredArray[i].date,filteredArray[i].priority);
        }
    });
};

export function mediumPriority() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "Medium Priority";
    
    contents.append(header,fieldset);

    const arraysToCheck = ['today', 'upcoming', 'someday', 'anytime'];

    arraysToCheck.forEach(key => {
        let currentArray = JSON.parse(localStorage.getItem(key)) || [];
        let filteredArray = currentArray.filter(item => item.priority === "Medium");
        for (let i = 0; i < filteredArray.length; i++) {
            addItem(filteredArray[i].task,filteredArray[i].details,filteredArray[i].date,filteredArray[i].priority);
        }
    });
};

export function lowPriority() {
    const contents = document.getElementById('contents');
    const header = document.createElement('h1');
    const fieldset = document.createElement('fieldset');

    contents.textContent = '';
    header.textContent = "Low Priority";
    
    contents.append(header,fieldset);

    const arraysToCheck = ['today', 'upcoming', 'someday', 'anytime'];

    arraysToCheck.forEach(key => {
        let currentArray = JSON.parse(localStorage.getItem(key)) || [];
        let filteredArray = currentArray.filter(item => item.priority === "Low");
        for (let i = 0; i < filteredArray.length; i++) {
            addItem(filteredArray[i].task,filteredArray[i].details,filteredArray[i].date,filteredArray[i].priority);
        }
    });
};