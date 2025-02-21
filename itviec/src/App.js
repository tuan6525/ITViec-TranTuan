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
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://67a97c026e9548e44fc3c063.mockapi.io/itviec");
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
        <Header data={data}/>
        <Home data={data}/>
        <Footer data={data}/>
    </div>
  );
}

export default App;
