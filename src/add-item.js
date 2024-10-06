import removeCross from './images/xmark-circle-solid.svg';

export function addItem(task, details, date, priority) {
    const fieldset = document.querySelector('fieldset');
    const newDiv = document.createElement('div');
    const newCheck = document.createElement('input');
    const newLabel = document.createElement('label');
    const newDetails = document.createElement('p');
    const newPriority = document.createElement('div');
    const newDateLabel = document.createElement('label');
    const removeBtn = document.createElement('button');
    const removeImg = document.createElement('img');
    
    newDiv.setAttribute('class','checkbox');
    newCheck.setAttribute('type','checkbox');
    newCheck.setAttribute('name',task);
    newCheck.setAttribute('id',task);
    newLabel.setAttribute('for',task);
    newLabel.textContent = task;
    newDetails.textContent = details;
    newPriority.setAttribute('class',priority);
    newPriority.textContent = priority;
    newDateLabel.setAttribute('class','date');
    newDateLabel.setAttribute('for',task);
    newDateLabel.textContent = date;
    removeBtn.setAttribute('class','remove-item');
    removeBtn.setAttribute('id',`${task}k`);
    removeImg.src = removeCross;
    removeImg.setAttribute('alt','remove item');
    removeBtn.appendChild(removeImg);
    newDiv.append(newCheck,newLabel,newDetails,newPriority,newDateLabel,removeBtn);
    fieldset.appendChild(newDiv);

    document.getElementById(`${task}k`).addEventListener('click', function() {
        let parentElement = this.parentElement;
        parentElement.remove();
        
        const arraysToCheck = ['today', 'upcoming', 'someday', 'anytime'];

        arraysToCheck.forEach(key => {
            let currentArray = JSON.parse(localStorage.getItem(key)) || [];
            let filteredArray = currentArray.filter(item => item.task !== task);
            if (filteredArray.length !== currentArray.length) {
                localStorage.setItem(key, JSON.stringify(filteredArray));
            }
        })
    })
}   