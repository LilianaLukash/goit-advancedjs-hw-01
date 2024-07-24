const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {email: "", message: "" };

const fillFormFields = form => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
        return;
    }

    formData = formDataFromLS;
  
    form.elements.email.value = formDataFromLS["email"] || '';
    form.elements.message.value = formDataFromLS["message"] || '';

};


fillFormFields(feedbackFormEl);

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Заповніть всі поля!');
    return;
  }

  console.log(formData);

  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
