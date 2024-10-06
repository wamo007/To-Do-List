import './styles.css';
import { addForm } from './add-item-form';
import { restoreToday } from './today';
import { restoreUpcoming } from './upcoming';
import { restoreAnytime } from './anytime';
import { restoreSomeday } from './someday';
import { highPriority, mediumPriority, lowPriority } from './priority';

// restoreToday();

const addItemBtn = document.querySelector('.add-item');
const todayBtn = document.querySelector('.today');
const upcomingBtn = document.querySelector('.upcoming');
const anytimeBtn = document.querySelector('.anytime');
const somedayBtn = document.querySelector('.someday');
const highPriorityBtn = document.querySelector('.high-priority');
const mediumPriorityBtn = document.querySelector('.medium-priority');
const lowPriorityBtn = document.querySelector('.low-priority');

addItemBtn.addEventListener('click',addForm);

todayBtn.addEventListener('click', () => {
    restoreToday()});

upcomingBtn.addEventListener('click', () => {
    restoreUpcoming()});

somedayBtn.addEventListener('click', () => {
    restoreSomeday()});

anytimeBtn.addEventListener('click', () => {
    restoreAnytime()});

highPriorityBtn.addEventListener('click', () => {
    highPriority()});

mediumPriorityBtn.addEventListener('click', () => {
    mediumPriority()});

lowPriorityBtn.addEventListener('click', () => {
    lowPriority()});