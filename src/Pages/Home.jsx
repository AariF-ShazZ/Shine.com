import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import {Default} from "../Components/SlidingImage/SlidingImage"
import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentsModals from  "../Components/ModalsPages/MainModals"
import Footer from '../Components/Footer/Footer'
import MainCompaniesHiring from '../Components/CompaniesHiring/MainCompaniesHiring'
const Home = () => {
 
  return (
    <div>
      <Default/>
      <AssessmentsModals/>
      <MainCompaniesHiring/>
      <Footer/>
    </div>
  )
}

export default Home