export default class DataProcessor {
  #fetcher = null;

  constructor(fetcher) {
    this.#fetcher = fetcher;
  }

  #getMonthExpenseRatio() {
    return (this.#fetcher.getMonthExpense() - this.#fetcher.getPreMonthExpense()) / this.#fetcher.getMonthExpense() * 100;
  }

  getMonthExpenseRatioText() {
    const ratio = this.#getMonthExpenseRatio().toFixed(2);
    const incDec = ratio >= 0 ? '더' : "덜";
    return `${Math.abs(ratio)}% ${incDec}`;
  }

  #getMoneyText(value) {
    const regexp = /(?<=[0-9])(?=([0-9]{3})+$)/g;
    // return value.toString().replaceAll(regexp, ',$&');
    return value.toString().replaceAll(regexp, ",$&") + '원';
  }

  getDayExpensesText(day) {
    return this.#getMoneyText(this.#fetcher.getDayAmount(day));
  }

  getBalanceText() {
    return this.#getMoneyText(this.#fetcher.getBalance());
  }

  getMonthExpenseText() {
    return this.#getMoneyText(this.#fetcher.getMonthExpense());
  }
}
