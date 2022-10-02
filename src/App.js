import logo from './logo.svg';
import './App.css';
import AllRoutes from './MainRoutes/Routes';
import Navbar from "../src/Components/HomeNavbar/Navbar"
import { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../src/Context/DataContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../src/Components/Footer/Footer'
function App() {
  const [data, setData] = useState("")
  const navigate = useNavigate()
  const { getData } = useContext(DataContext)
  const handleSubmit = async () => {
    if (data) {
      await getData(data)
      navigate("/job")
      setData("")
    }
  }
  return (
    <div className="App">
      <Navbar data={data} setData={setData} handleSubmit={handleSubmit} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
