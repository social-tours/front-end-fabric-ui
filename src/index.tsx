import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from 'office-ui-fabric-react';
import { BrowserRouter as Router} from 'react-router-dom';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
