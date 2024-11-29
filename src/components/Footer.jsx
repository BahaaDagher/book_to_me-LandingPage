import React from 'react'
import SmsIcon from '../assets/images/sms.svg';  
import CallIcon from '../assets/images/call.svg';  
import ScaleDiv from './RepetitiveComponents/ScaleDiv';
import WhiteLogoIcon from '../assets/images/WhiteLogo.svg';  
// social media icons 
import InstagramIcon from '../assets/images/instagram.svg';  
import TwitterIcon from '../assets/images/twitter.svg';  
import LinkedInIcon from '../assets/images/linkedIn.svg';  
import FacebookIcon from '../assets/images/facebook.svg';  


const Footer = () => {
  return (
    <>
    <div className='w-full bg-secondary p-[10px] flex flex-col items-center justify-center '>
        <ScaleDiv className='flex lg:justify-between flex-col lg:flex-row items-center'>
            <div className='w-[300px] flex justify-between p-[10px] lg:p-0'>
                <div className='text-white text-[16px]'>الشروط والأحكام</div>
                <div className='text-white text-[16px]'>الخصوصية</div>
                <div className='text-white text-[16px]'>تعريق الارتباط</div>
            </div>
            <div className="flex items-center p-[10px] lg:p-0">
                <img src={WhiteLogoIcon} alt="Logo" />
                <span className="text-white font-[700] text-[18px] mr-2">احجزلــــــــــي</span>
            </div>
            <div className='flex justify-between w-[150px] p-[10px] lg:p-0'>
                <a href=''>
                    <img src={InstagramIcon} alt="InstagramIcon" />
                </a>
                <a href=''>
                    <img src={TwitterIcon} alt="TwitterIcon" /> 
                </a>
                <a href=''>
                    <img src={LinkedInIcon} alt="LinkedInIcon" /> 
                </a>
                <a href=''>
                    <img src={FacebookIcon} alt="FacebookIcon" /> 
                </a>
            </div>
        </ScaleDiv>
    </div>
    <div className='flex justify-center items-center bg-white w-full p-[10px]'>
            جميع الحقوق محفوظة ©  لدي تطبيق احجزلي 
    </div>
    </>
    
  )
}

export default Footer