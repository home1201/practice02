export default class DomManager {
  #processor = null;
  #balanceEl = null;
  #monthExpenseEl = null;
  #graphValueElMap = null;
  #ratioEl = null;
  #graphValueMaxBase = null;

  constructor(processor) {
    this.#processor = processor;
    this.#balanceEl = document.querySelector('[data-balance]');
    this.#monthExpenseEl = document.querySelector('[data-month-expense]');
    this.#ratioEl = document.querySelector('[data-ratio]');
    this.#graphValueMaxBase = Number(document.querySelector('[data-max-height]').dataset.maxHeight);

    this.#graphValueElMap = new Map();
    const graphDayElArr = [...document.querySelectorAll('[data-day]')];
    const graphValueElArr = [...document.querySelectorAll('[data-value]')];
    graphDayElArr.forEach((el, index) => {
      this.#graphValueElMap.set(el.textContent, graphValueElArr[index]);
    });
  }

  injectBalanceText() {
    this.#balanceEl.textContent = this.#processor.getBalanceText();
  }

  injectMonthExpenseText() {
    this.#monthExpenseEl.textContent = this.#processor.getMonthExpenseText();
  }

  injectMonthExpenseRatioText() {
    this.#ratioEl.textContent = this.#processor.getMonthExpenseRatioText();
  }

  addClassExpenseHighestDay() {
    const highestExpenseDay = this.#processor.getHighestExpenseDay();
    this.#graphValueElMap.get(highestExpenseDay).classList.add('graph__value--highest');
  }

  calcGraphValueHeight(fetcher) {
    const highestExpenseDay = this.#processor.getHighestExpenseDay();
    const highestExpenseValue = fetcher.getDayAmount(highestExpenseDay);
    this.#graphValueElMap.forEach((value, key, _) => {
      const expenseValue = fetcher.getDayAmount(key);
      const moneyText = this.#processor.getDayExpensesText(key);
      const graphHeight = (expenseValue / highestExpenseValue) * this.#graphValueMaxBase;
      value.style.height = `${graphHeight}rem`;
      value.textContent = moneyText;
      value.dataset.value = moneyText;
    })
  }
}
