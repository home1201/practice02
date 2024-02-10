import './sass/style.scss';
import DataFetcher from './js/fetcher';
import DataProcessor from './js/processor';

const fetcher = new DataFetcher();
await fetcher.init("https://my-json-server.typicode.com/home1201/practice02-db/posts/1");
const processor = new DataProcessor(fetcher);
console.log(processor.getDayExpensesText('수'));
