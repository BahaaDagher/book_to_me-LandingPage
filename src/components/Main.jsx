import React from 'react'
import PhoneHello from "../assets/images/phoneHello.svg"
import TreeIcon from "../assets/images/tree.svg"
import GooglePlayIcon from "../assets/images/googlePlay.svg"
import AppStoreIcon from "../assets/images/appStore.svg"
import CurveLineIcon from "../assets/images/curveLine.svg"
import ScaleDiv from './RepetitiveComponents/ScaleDiv'
const Main = () => {
  return (
    <div id="main" className="w-full bg-custom-gradient flex items-center justify-center relative mt-[131px] pt-10  lg:p-0 lg:h-screen">
        <ScaleDiv className='flex flex-col-reverse lg:flex-row   justify-between items-center '>
            <div className='lg:w-[45%]'>
                <img src={PhoneHello} alt="SMS Icon"  /> 
            </div>
            <div className='lg:w-[48%] flex flex-col justify-between h-[300px] lg:h-[400px] relative '>
                <img src={TreeIcon} alt="treeIcon" className='hidden lg:block absolute top-[-25px] left-[-40px] ' />  
                <div className='text-[22px] lg:text-[48px] font-[500] text-secondary lg:text-justify text-center'>
                   عيش أروع اللحظات في 
                  <span className='text-main'>  مزرعتك المفضلة   </span> 
                  .. احجز الآن <span class="relative">بسهولة 
                  <img src={CurveLineIcon} alt="CurveLineIcon" className='absolute bottom-[-20px] right-0' />
                  </span> تامة !
                </div>
                <div className='text-gray2 text-[16px] lg:text-justify text-center'>
                  لا تفوت الفرصة! اكتشف أحلى المزارع بالعراق للاستئجار يومي أو أسبوعي. إذا تخطط تسوي طلعة حلوة ويا العائلة أو عندك مناسبة خاصة، تطبيقنا يقدم لك أحسن الخيارات وبأسعار تنافسية
                </div>
                <div className='flex lg:justify-start justify-center'>
                  <a href="#" className='ml-3'>
                    <img src={GooglePlayIcon} alt="GooglePlayIcon" className='' /> 
                  </a>
                  <a href="#">
                    <img src={AppStoreIcon} alt="AppStoreIcon" className='' /> 
                  </a>
                </div>
            </div>
        </ScaleDiv>
    </div>
  )
}

export default Main