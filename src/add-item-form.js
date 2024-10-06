import { checkDate } from "./date-check";
import { memorizeUpcoming, restoreUpcoming } from "./upcoming";
import { memorizeToday, restoreToday } from "./today";
import { memorizeAnytime, restoreAnytime } from "./anytime";
import { memorizeSomeday, restoreSomeday } from "./someday";


export function addForm() {
    const contents = document.getElementById('contents');
    const priority = document.querySelectorAll('.priority');
    const addItemForm = document.createElement('form');
    const labelTask = document.createElement('label');
    const inputTask = document.createElement('input');
    const labelDetails = document.createElement('label');
    const areaDetails = document.createElement('textarea');
    const labelDate = document.createElement('label');
    const inputDate = document.createElement('input');
    const labelPriority = document.createElement('label');
    const selectPriority = document.createElement('select');
    const undefinedPriority = document.createElement('option');
    const submitBtn = document.createElement('button');

    addItemForm.setAttribute('class','add-item-form');
    labelTask.setAttribute('for','task');
    labelTask.textContent = 'Task:';
    inputTask.setAttribute('type','text');
    inputTask.setAttribute('id','task');
    inputTask.setAttribute('name','task');
    inputTask.setAttribute('required','true');
    labelDetails.setAttribute('for','details');
    labelDetails.textContent = 'Details:';
    areaDetails.setAttribute('id','details');
    areaDetails.setAttribute('name','details');
    labelDate.setAttribute('for','date');
    labelDate.textContent = 'Date:';
    inputDate.setAttribute('type','date');
    inputDate.setAttribute('id','date');
    inputDate.setAttribute('name','date');
    labelPriority.setAttribute('for','priority');
    labelPriority.textContent = 'Choose Priority:';
    selectPriority.setAttribute('id','priority');
    selectPriority.setAttribute('name','priority');
    undefinedPriority.setAttribute('value','undefined');
    undefinedPriority.setAttribute('selected','true');
    undefinedPriority.textContent = 'None';
    submitBtn.setAttribute('class','submit');
    submitBtn.textContent = 'Submit';

    selectPriority.appendChild(undefinedPriority);

    if (priority) {
        priority.forEach((id) => {
            let option = document.createElement('option');
            option.setAttribute('value', `${id.innerText}`);
            option.textContent = id.innerText;
            return selectPriority.appendChild(option);
        })
    }

    labelTask.appendChild(inputTask);
    labelDetails.appendChild(areaDetails);
    labelDate.appendChild(inputDate);
    labelPriority.appendChild(selectPriority);
    addItemForm.append(labelTask,labelDetails,labelDate,labelPriority,submitBtn);
    contents.appendChild(addItemForm);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (addItemForm.checkValidity()) {
            if (checkDate(inputDate.value) === true) {
                memorizeToday(inputTask.value, areaDetails.value, inputDate.value, selectPriority.value);
                restoreToday();
                // contents.removeChild(addItemForm);  
            } else if (checkDate(inputDate.value) === 'upcoming') {
                memorizeUpcoming(inputTask.value, areaDetails.value, inputDate.value, selectPriority.value);
                restoreUpcoming();
            } else if ((checkDate(inputDate.value) === 'someday') && (inputDate.value != '')) {
                memorizeSomeday(inputTask.value, areaDetails.value, inputDate.value, selectPriority.value);
                restoreSomeday();
            } else if (inputDate.value == '') {
                memorizeAnytime(inputTask.value, areaDetails.value, inputDate.value, selectPriority.value);
                restoreAnytime();
            } else {
                contents.removeChild(addItemForm);
            }
        } else {
            alert('Lol?! Fill the task name at least XD');
        }
    });  
}