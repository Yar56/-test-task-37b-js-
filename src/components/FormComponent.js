/* eslint-disable no-param-reassign */

import lightImg from '../images/light.png';
import fullImg from '../images/full.png';
import closeForm from '../images/closeForm.png';

export default (state) => {
  // console.log(state);
  const img = state.currentForm === 'light' ? lightImg : fullImg;
  const className = state.currentForm === 'light' ? 'light' : 'full';
  // const renderInputsLightForm = () => {
  //   const inputName = document.createElement('input');
  //   const inputCity = document.createElement('input');
  //   inputName.setAttribute('type', )
  // }
  const light = [
    '<div class="email phone"><input type="text" class="_req _email _phone" placeholder="Email или телефон" name="email" value=""></div>',
    '<div class="city"><input type="text" class="_req _city _сyrillic" placeholder="Город" name="city" value=""></div>',
  ];

  const full = [
    '<div class="name"><input type="text" class="_req _name _сyrillic" placeholder="Имя" name="name" value=""></div>',
    '<div class="firstName"><input type="text" class="_req _firstName _сyrillic" placeholder="Фамилия" name="firstName" value=""></div>',
    '<div class="phone"><input type="text" class="_req _phone" placeholder="Телефон" name="phone" value=""></div>',
    '<div class="email"><input type="text" class="_req _email" placeholder="Email" name="email" value=""></div>',
    '<div class="company"><input type="text" class="_req _company" placeholder="Название компании" name="company" value=""></div>',
    '<div class="region"><input type="text" class="_req _region _сyrillic" placeholder="Регион" name="region" value=""></div>',
  ];
  const elements = () => {
    const currentInputs = state.currentForm === 'light' ? light : full;
    return [
      ...currentInputs,
      '<input class="form__inputCheck" type="checkbox" id="agreement" name="agreement" value="yes">',
      '<label for="agreement">Я&nbsp;хочу получить рассылку после мероприятия</label>',
      '<button type="submit" class="button button_form">Зарегистрироваться</button>',
    ];
  };

  const formAddError = (input) => {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  };
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  };
  // const validateEmailAndPhone = (input) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   .test(input.value);
  const validateEmailAndPhone = (input) => /\+[0-9]{1,4}[0-9]{1,10}|(.*)@(.*)\.[a-z]{2,5}/.test(input.value);
  // const validatePhoneNumber = (input) => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  //   .test(input.value);
  const validateСyrillic = (input) => /[А-Яа-яЁё ]+/g.test(input.value);

  const formValidate = (stateProcessForm) => {
    // const errors = {};

    const formReq = document.querySelectorAll('._req');
    formReq.forEach((checkInput) => {
      formRemoveError(checkInput);

      if (checkInput.classList.contains('_email') || checkInput.classList.contains('_phone')) {
        if (!validateEmailAndPhone(checkInput)) {
          formAddError(checkInput);
          stateProcessForm.errors[checkInput.name] = 'Введен неправильный emal или телефон';
        }
      }
      if (checkInput.classList.contains('_сyrillic')) {
        console.log(validateСyrillic(checkInput));
        if (!validateСyrillic(checkInput)) {
          formAddError(checkInput);
          stateProcessForm.errors[checkInput.name] = 'Только русские буквы';
        }
      }

      if (checkInput.value === '') {
        formAddError(checkInput);
        stateProcessForm.errors[checkInput.name] = 'Обязательное поле';
      }
    });
  };

  const renderErrors = (errors, form) => {
    console.log(errors);

    [...form.children].forEach((child) => {
      if (child.classList.contains('_error')) {
        const div = document.createElement('div');
        div.classList.add('err-tooltip');
        div.textContent = errors[child.classList[0]];
        child.appendChild(div);
      }
    });
  };

  const renderForm = () => {
    const form = document.createElement('form');
    form.innerHTML = elements().join('');

    [...form.children].filter((el) => el.tagName === 'DIV').forEach((el) => {
      const [input] = el.children;
      input.addEventListener('input', (e) => {
        if (e.target.classList.contains('_error')) {
          e.target.nextElementSibling.innerHTML = '';
          formRemoveError(e.target);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      formValidate(state.formState.proccess);
      console.log(state);

      if (Object.keys(state.formState.proccess.errors).length !== 0) {
        renderErrors(state.formState.proccess.errors, form);
        state.formState.proccess.errors = {};
      } else {
        const data = new FormData(e.target);
        const [...iter] = data.entries();

        const res = iter.reduce((acc, item) => {
          const [name, value] = item;
          acc[name] = value;
          return acc;
        }, {});
        state.formState.proccess.errors = {};
        console.log(res);
        form.reset();
      }
      console.log(state)
    });
    return form;
  };

  const form = document.createElement('div');
  const formContainer = document.createElement('div');
  const formContent = document.createElement('div');
  const formImgSmall = document.createElement('div');
  const descr = document.createElement('div');
  const closeFormEl = document.createElement('div');

  form.classList.add('form', `form_${className}`);
  formContainer.classList.add('form__container');
  formContent.classList.add('form__content');
  formImgSmall.classList.add('form__img_small');
  descr.classList.add('descr', `descr_${className}`);
  closeFormEl.classList.add('close-form');

  closeFormEl.innerHTML = (`<img src=${closeForm} alt="close-form">`);
  descr.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam, quis nostrud exercitation ullamco laboris nisi ut&nbsp;aliquip ex&nbsp;ea&nbsp;commodo.';
  formImgSmall.innerHTML = (`<img src=${img} alt="${state.currentForm}-form">`);
  formContent.appendChild(renderForm());
  formContainer.append(formContent, formImgSmall);
  form.append(formContainer, descr, closeFormEl);
  return form;
};
