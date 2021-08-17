import fullForm from './components/FormComponent.js';
// import lightForm from './components/lightFrom/index.js';

export default () => {
  const state = {
    formState: {
      proccess: {
        errors: {},
        success: null,
      },
      valid: true,
      validError: null,
    },
    currentForm: null,
    formData: [],
  };
  const buttons = document.querySelectorAll('.button');
  const content = document.querySelector('.choose-reg');

  [...buttons].forEach((btn) => {
    btn.addEventListener('click', (buttonEvent) => {
      content.innerHTML = '';
      if (buttonEvent.target.id === 'light') {
        state.currentForm = 'light';
        content.appendChild(fullForm(state));
      }
      if (buttonEvent.target.id === 'full') {
        state.currentForm = 'full';
        content.appendChild(fullForm(state));
      }
      // if (state.formData) {
      //   console.log(state.formData);
      // }
    });
  });

  // document.body.innerHTML = fullForm(state);
};
