import FormComponent from './components/FormComponent.js';

export default () => {
  const state = {
    formState: {
      proccess: {
        errors: {},
      },
    },
    currentForm: null,
  };
  const buttons = document.querySelectorAll('.button');
  const content = document.querySelector('.choose-reg');

  [...buttons].forEach((btn) => {
    btn.addEventListener('click', (buttonEvent) => {
      content.innerHTML = '';
      if (buttonEvent.target.id === 'light') {
        state.currentForm = 'light';
        content.appendChild(FormComponent(state));
      }
      if (buttonEvent.target.id === 'full') {
        state.currentForm = 'full';
        content.appendChild(FormComponent(state));
      }
    });
  });
};
