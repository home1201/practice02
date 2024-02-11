import './sass/style.scss';
import DataFetcher from './js/fetcher';
import DataProcessor from './js/processor';
import DomManager from './js/viewer';

(async () => {
  const fetcher = new DataFetcher();
  await fetcher.init("https://my-json-server.typicode.com/home1201/practice02-db/posts/1");

  const processor = new DataProcessor(fetcher);
  const domManager = new DomManager(processor);

  domManager.injectBalanceText();
  domManager.injectMonthExpenseText();
  domManager.injectMonthExpenseRatioText();
  domManager.addClassExpenseHighestDay();
  domManager.calcGraphValueHeight(fetcher);
})();
