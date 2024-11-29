import React from 'react'
import ScaleDiv from './RepetitiveComponents/ScaleDiv'
import ReservationPhone from "../assets/images/reservationPhone.svg"
import Title from './RepetitiveComponents/Title'
import GooglePlayIcon from "../assets/images/googlePlay.svg"
import AppStoreIcon from "../assets/images/appStore.svg"

const Features1 = () => {
  return (
    <div id="Features" className="w-full flex bg-gray1 justify-center items-center  pt-[20px] pb-[20px] md:pt-[150px] md:pb-0">
    <ScaleDiv className='flex flex-col-reverse md:flex-row   justify-between items-center '>
        <div className='flex justify-around items-center w-full flex-col md:flex-row'>
            <div className='md:w-[45%] md:ml-[20px] flex flex-col items-center md:items-start'>
                <Title title={"مايميزنا"}/>
                <div className='text-[20px] md:text-[38px] text-secondary font-[500] font-[500] text-center md:text-start'>
                    حجز سريع وآمن... أمانك أولويتنا!
                </div>
                <div className='text-gray2 md:text-[16px] text-[12px] md:leading-[26px] leading-[18px] md:text-justify text-center md:mt-[30px] mt-[15px] md:mb-[30px] mb-[15px]'>
                    في تطبيقنا، حجز المزرعة صار أسهل من أي وقت مضى. بمجرد ما تختار المكان اللي يناسبك، تقدر تحجز بكل سلاسة وأنت مطمئن. الأمان هنا مو بس في الدفع، لكن كمان في حماية بياناتك، حتى تقدر ترتاح وأنت تستخدم التطبيق.                
                </div>
                <div className='flex md:justify-start justify-center'>
                  <a href="#" className='ml-3'>
                    <img src={GooglePlayIcon} alt="GooglePlayIcon" className='' /> 
                  </a>
                  <a href="#">
                    <img src={AppStoreIcon} alt="AppStoreIcon" className='' /> 
                  </a>
                </div>
            </div>
            <div className='mt-[50px] md:mt-0 w-[70%] md:w-auto'>
                <img src={ReservationPhone} alt="SMS Icon"  /> 
            </div>
        </div>
    </ScaleDiv>
</div>
  )
}

export default Features1