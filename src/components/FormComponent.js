import lightImg from '../images/light.png';
import fullImg from '../images/full.png';

export default (state) => {
  console.log(state);
  const img = state.currentForm === 'light' ? lightImg : fullImg;

  const light = `
    <input type="text" placeholder="Email или телефон">
    <input type="text" placeholder="Город">
  `;
  const full = `
    <input type="text" placeholder="Имя">
    <input type="text" placeholder="Фамилия">
    <input type="text" placeholder="Телефон">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Название компании">
    <input type="text" placeholder="Регион">
  `;

  const form = `
    <form>
      ${state.currentForm === 'light' ? light : full}
      <input class="form__inputCheck" type="checkbox" id="agreement" name="agreement" value="yes">
      <label for="agreement">Я&nbsp;хочу получить рассылку после мероприятия</label>
      <button type="submit" class="button button_form">Зарегистрироваться</button>
    </form>

  `;
  return `<div class="form form_${state.currentForm === 'light' ? 'light' : 'full'}">
    <div class="form__container">
      <div class="form__content">
        ${form}
      </div>
      <div class="form__img_small">
        <img src=${img} alt="${state.currentForm}-form">
      </div>
    </div>
    <div class="descr descr_${state.currentForm === 'light' ? 'light' : 'full'}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam, quis nostrud exercitation ullamco laboris nisi ut&nbsp;aliquip ex&nbsp;ea&nbsp;commodo.
    </div>
  </div>`;
};
