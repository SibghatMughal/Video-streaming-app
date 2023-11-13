import React from 'react'
import ChooseCard from './ChooseCard'
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';


function ChooseSection() {

    const cardData = [
        {
            image:`${card1}`,
            title:'Live Session, Interactive Demos & Real-time Q&A',
            description:'With Str3mly, you re not just browsing products; you re engaging with them. Experience live, interactive product demonstrations where you can ask questions in real-time. This feature ensures you make informed decisions, enhancing your confidence in each purchase.'
        },
        {
            image:`${card2}`,
            title:'Analytics & Feedback',
            description:'Str3mly values your input. Share feedback and help shape the platforms future while enjoying a more tailored shopping experience.'
        },
        {
            image:`${card3}`,
            title:'Str3mly Shop',
            description:'Access a vast marketplace with a wide range of products and brands. Str3mly is your one-stop-shop for all your shopping needs.'
        }

    ]
  return (
    <div className='choose'>
        <div className="headings">
            <div className="feature">Feature</div>
            <div className="main-heading">Why choose Us?</div>
            <div className="sub-heading">Elevate your revenue and experiece is our job</div>
        </div>

        <ChooseCard cardData ={cardData} />
      
    </div>
  )
}

export default ChooseSection