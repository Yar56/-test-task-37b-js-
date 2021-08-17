import lightImg from '../images/light.png';
import fullImg from '../images/full.png';
import closeForm from '../images/closeForm.png';

export default (state) => {
  console.log(state);
  const img = state.currentForm === 'light' ? lightImg : fullImg;
  const className = state.currentForm === 'light' ? 'light' : 'full';
  // const renderInputsLightForm = () => {
  //   const inputName = document.createElement('input');
  //   const inputCity = document.createElement('input');
  //   inputName.setAttribute('type', )
  // }
  const light = [
    '<input type="text" placeholder="Email или телефон">',
    '<input type="text" placeholder="Город">',
  ];

  const full = `
    <input type="text" placeholder="Имя">
    <input type="text" placeholder="Фамилия">
    <input type="text" placeholder="Телефон">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Название компании">
    <input type="text" placeholder="Регион">
  `;
  const elements = () => {
    const currentInputs = state.currentForm === 'light' ? light : full;
    return [
      ...currentInputs,
      '<input class="form__inputCheck" type="checkbox" id="agreement" name="agreement" value="yes">',
      '<label for="agreement">Я&nbsp;хочу получить рассылку после мероприятия</label>',
      '<button type="submit" class="button button_form">Зарегистрироваться</button>'
    ];
  };

  const renderForm = () => {
    const form = document.createElement('form');
    form.innerHTML = elements().join('');
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(e)
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
