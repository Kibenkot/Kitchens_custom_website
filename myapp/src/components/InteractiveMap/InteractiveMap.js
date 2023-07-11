import React from 'react'

function InteractiveMap() {
  return (
    <div style={{width: "100%"}}>
        <iframe 
            title='googleMaps' width="100%" height="349" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.7704262781913!2d36.32682287612593!3d50.01565801857498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412709e02878f5c1%3A0x7bd5da1fd561f4be!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAxMzQvMTYsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjEwMDA!5e0!3m2!1sru!2sde!4v1688375440510!5m2!1sru!2sde" 
        ></iframe>
    </div>
  )
}

export default InteractiveMap