const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldInput = event => {
  // const {
  //   target: { value: fieldValue },
  // } = event;

  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
            
        const children = feedbackFormEl.children
        
        for (const input of children) {
            if (input.value.trim() === '') {  
            alert('Заповніть всі поля!');
            return;  
            }
            }
        event.target.reset();
        localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);