import ePub from 'epubjs';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>ePub.js Demo</h1>
        <div id="area"></div>
      </>
    );
  }

  componentDidMount() {
    const currentSectionIndex = 8;
    // Load the opf
    const book = ePub(
      'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'
    );
    const rendition = book.renderTo(document.body, {
      manager: 'continuous',
      flow: 'scrolled',
      width: '60%',
    });
    rendition.display();
    // const displayed = rendition.display(
    //   'epubcfi(/6/14[xchapter_001]!4/2/24/2[c001p0011]/1:799)'
    // );

    // displayed.then(renderer => {
    //   // -- do stuff
    // });

    // // Navigation loaded
    // book.loaded.navigation.then(toc => {
    //   // console.log(toc);
    // });
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
