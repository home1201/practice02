export default class DataFetcher {
  #jsonData = null;

  async init(url) {
    const res = await fetch(url);
    this.#jsonData = await res.json();
  }

  getDayAmount(day) {
    return this.#jsonData['weekExpense'].find((el) => el.day === day).amount;
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

}
