import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div id="area"></div>
      </>
    );
  }

  componentDidMount() {
    const book = (global as any).ePub(
      'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'
    );
    const rendition = book.renderTo(document.body, {
      manager: 'continuous',
      flow: 'scrolled',
      width: '60%',
    });
    rendition.display();
  }
}

const script = document.createElement('script');
script.onload = function () {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
};
script.src = 'http://futurepress.github.io/epub.js/dist/epub.js';
document.head.appendChild(script);
