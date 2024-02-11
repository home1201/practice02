export default class DataFetcher {
  #jsonData = null;
  #weekExpenses = null;

  async init(url) {
    const res = await fetch(url);
    this.#jsonData = await res.json();

    this.#weekExpenses = new Map();
    this.#jsonData['weekExpense'].forEach(el => {
      this.#weekExpenses.set(el.day, el.amount);
    })
  }

  getDayAmount(day) {
    return this.#weekExpenses.get(day);
  }

  getBalance() {
    return this.#jsonData['balance'];
  }

  getMonthExpense() {
    return this.#jsonData['monthExpense'];
  }

  getPreMonthExpense() {
    return this.#jsonData['preMonthExpense'];
  }

  getWeekExpenses() {
    return this.#jsonData['weekExpense'];
  }

}
