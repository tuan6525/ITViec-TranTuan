import './public/css/header.css'
import './public/css/home.css'
import './public/css/footer.css'
import './public/css/filter.css'
import './public/css/company.css'
import './public/css/detailCompany.css'
import './public/css/filterPopup.css'
import Header from './components/layout/header'
import Home from './components/pages/home'
import Footer from './components/layout/footer'

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
