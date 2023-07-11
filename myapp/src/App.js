import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ServicesSection from './components/ServicesSection/ServicesSection'
import CatalogSection from './components/CatalogSection/CatalogSection'
import {kitchens, catalogsAll, designers, services, reviews, forms, spaces} from './data'
import { Context } from "./components/context/Context";
import CatalogsAllSection from './components/CatalogsAllSection/CatalogsAllSection'
import ConsultationSection from './components/ConsultationSection/ConsultationSection'
import ServicesPlusSection from './components/ServicesPlusSection/ServicesPlusSection'
import BenefitsOurKitchensSection from './components/BenefitsOurKitchensSection/BenefitsOurKitchensSection'
import FiveStepsSection from './components/FiveStepsSection/FiveStepsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import PromotionsSection from './components/PromotionsSection/PromotionsSection'
import QuestionAnswerSection from './components/QuestionAnswerSection/QuestionAnswerSection'
import CallbackDesignerSection from './components/CallbackDesignerSection/CallbackDesignerSection'
import Footer from './components/Footer/Footer'
import {BsArrowUpCircle} from 'react-icons/bs'
import Loader from './components/Loader/Loader'





function App() {

//loader

  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setIsLoader(false)
    }, 6500);
  })

// scroll-to-top 
const [showBtn, setShowBtn] = useState(false)

  window.onscroll =() =>{
      if(window.scrollY > 700){
        setShowBtn(true)
      }else if(window.scrollY < 700){
        setShowBtn(false)
      }
  }

  function scrollToTop(){
    window.scrollTo(0, 0)
  }


//scroll-to-Item

let catalogSectionRef = useRef()
let promotionsSectionRef = useRef()
let servicesPlusSectionRef = useRef()
let fiveStepsSectionRef = useRef()
let consultationSectionRef = useRef()
let reviewsSectionRef = useRef()
let footerRef = useRef()

function scrollToCatalogSection(){
  catalogSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToPromotionsSection(){
  promotionsSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToServicesPlusSection(){
  servicesPlusSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToFiveStepsSection(){
  fiveStepsSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToConsultationSection(){
  consultationSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToReviewsSection(){
  reviewsSectionRef.current.scrollIntoView({behavior: 'smooth'})
}

function scrollToFooter(){
  footerRef.current.scrollIntoView({behavior: 'smooth'})
}

  return (
    <Context.Provider value={{kitchens, catalogsAll, designers, services, reviews, forms, spaces}}>
      {
        isLoader === true ?
        <Loader /> :
      <>
      <div>
      {/* scroll-to-top */}
       {showBtn && <div 
          onClick={scrollToTop} 
          id='scroll_top'>
            <BsArrowUpCircle />
        </div>}
          <Header 
            scrollToCatalogSection = {scrollToCatalogSection}
            scrollToPromotionsSection = {scrollToPromotionsSection}
            scrollToServicesPlusSection = {scrollToServicesPlusSection}
            scrollToFiveStepsSection = {scrollToFiveStepsSection}
            scrollToConsultationSection = {scrollToConsultationSection}
            scrollToReviewsSection = {scrollToReviewsSection}
            scrollToFooter = {scrollToFooter}
          />
          <ServicesSection/>
          <CatalogSection ref={catalogSectionRef}/>
          <CatalogsAllSection />
          <ConsultationSection ref={consultationSectionRef}/>
          <ServicesPlusSection ref={servicesPlusSectionRef}/>
          <BenefitsOurKitchensSection />
          <FiveStepsSection ref={fiveStepsSectionRef}/>
          <ReviewsSection ref={reviewsSectionRef}/>
          <PromotionsSection ref={promotionsSectionRef}/>
          <QuestionAnswerSection />
          <CallbackDesignerSection />
          <Footer ref={footerRef} />
      </div>
      </>
       }
    </Context.Provider>
  )
}

export default App