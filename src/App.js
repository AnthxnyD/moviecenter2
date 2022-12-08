import 'swiper/swiper.min.css';
import './Assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Routes from './config/Routes';


function App() {
  return (
    <BrowserRouter>
      <Route render={props => (

        <>
          <header {...props} />
          <Routes />
          <Footer />
        </>
      )} />
    </BrowserRouter>
  );
}

export default App;
