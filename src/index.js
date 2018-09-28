import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAK5BG6YjfjoUXQEVC5M8SDlJcqnW_mBww';

const App = () => <div><SearchBar/></div>;

ReactDOM.render(<App />, document.querySelector('.container'));