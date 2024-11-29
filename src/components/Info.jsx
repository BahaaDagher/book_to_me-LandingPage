import React from 'react'
import SmsIcon from '../assets/images/sms.svg';  
import CallIcon from '../assets/images/call.svg';  
import ScaleDiv from './RepetitiveComponents/ScaleDiv';
// social media icons 
import InstagramIcon from '../assets/images/instagram.svg';  
import TwitterIcon from '../assets/images/twitter.svg';  
import LinkedInIcon from '../assets/images/linkedIn.svg';  
import FacebookIcon from '../assets/images/facebook.svg';  

const Info = () => {
  return (
    <div className='w-full bg-secondary h-[56px] flex items-center justify-center fixed top-0 left-0 right-0 z-20'>
        <ScaleDiv className='flex justify-between'>
            <div className='flex w-full justify-between lg:w-auto lg:justify-start'>
                <div className='flex items-center justify-center'>
                    <img src={SmsIcon} alt="SMS Icon" /> 
                    <span className='text-white font-normal text-[12px] md:text-[14px] mr-2'>info@example.com</span>
                </div>
                <div className='flex items-center justify-center mr-10'>
                    <img src={CallIcon} alt="CallIcon" /> 
                    <span className='text-white font-normal text-[12px] md:text-[14px] mr-2'>+000 -123 - 456789</span>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <div>
                    <span className='text-white font-normal text-[12px] md:text-[14px] ml-3'>تابعنا على : </span>
                </div>
                <div className='flex justify-between w-[150px]'>
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
            </div>
        </ScaleDiv>
    </div>
  )
}

export default Info
