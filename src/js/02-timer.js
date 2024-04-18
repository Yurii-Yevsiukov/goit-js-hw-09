import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose (selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      document.querySelector('#datetime-picker').value = '';
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  const endDate = new Date(document.querySelector('#datetime-picker').value);
  const timerInterval = setInterval(() => {
    const timeLeft = endDate - new Date();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }, 1000);
});

function addLeadingZero (value) {
  return String(value).padStart(2, '0');
}

function convertMs (ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timerDiv = document.querySelector('.timer');
timerDiv.style.marginTop = '20px';
timerDiv.style.display = 'flex';
const fieldDivs = timerDiv.querySelectorAll('.field');
fieldDivs.forEach(fieldDiv => {
  fieldDiv.style.marginRight = '20px';
  fieldDiv.style.fontSize = '12px';
  fieldDiv.style.textTransform = 'uppercase';
  fieldDiv.style.display = 'flex';
  fieldDiv.style.flexDirection = 'column';
  fieldDiv.style.alignItems = 'center';
});
const values = document.querySelectorAll('.value');
values.forEach(value => {
  value.style.fontSize = '30px';
});
