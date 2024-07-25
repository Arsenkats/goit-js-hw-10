// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.querySelector('.input');

const options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(".input", options);