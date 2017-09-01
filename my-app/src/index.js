  
  import './css/index.scss';
  import { wordsToSentence } from './utils/utils';
  let el = document.createElement('div'),
    text = document.createTextNode(
      wordsToSentence('Welcome', 'to', 'my', 'app!')
    );
  el.appendChild(text); document.body.appendChild(el);
  el.appendChild(text);
  document.body.appendChild(el);