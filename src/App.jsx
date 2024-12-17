import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProductPage from './components/pages/ProductPage';
import AppContext, { useAppContext } from './Contexts/AppContext';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/Home';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import SideBar from './components/SideBar';



function App() {


  return (
    <>
      <Header />
      <SideBar />
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='product/:id' element= {<ProductPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
    </>
  )
}

export default App;
