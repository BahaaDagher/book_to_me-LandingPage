import React from 'react'
import ScaleDiv from './RepetitiveComponents/ScaleDiv'
import GoogleWhite from "../assets/images/googleWhite.svg"
import AppleWhite from "../assets/images/AppleWhite.svg"
import Man from "../assets/images/man.svg"

const Download = () => {
  return (
    <div className="w-full flex justify-center items-center  pt-[20px] pb-[20px] md:pt-[150px] md:pb-[150px] "
    >
        <ScaleDiv className='flex flex-col justify-center items-center'>
            <div className='lg:w-[80%] bg-secondary md:p-[30px] p-[20px] rounded-[16px] relative'>
                <div className='lg:w-[50%]'>
                    <div className='text-[20px] md:text-[24px] text-white font-[500] mb-[20px]'>
                        أنت صاحب مزرعة؟ خليها تكون جزء من تطبيقنا!                            
                    </div>
                    <div className='text-white text-[12px] md:text-[14px]  text-justify leading-[18px] md:leading-[24px] mb-[20px]'>
                        مع تطبيقنا، تقدر تضيف مزرعتك بكل سهولة وتعرضها لمجموعة واسعة من المستخدمين اللي يبحثون عن أماكن للاستمتاع بأوقاتهم كل اللي عليك تحميل تطبيق احجزلي للملاك                    
                    </div>
                    <div className='flex md:justify-start justify-center'>
                        <a href="#" className='ml-3'>
                            <img src={GoogleWhite} alt="GooglePlayIcon" className='' /> 
                        </a>
                        <a href="#">
                            <img src={AppleWhite} alt="AppStoreIcon" className='' /> 
                        </a>
                    </div>
               </div>
                <div className="hidden lg:block absolute top-[-150px] left-[-200px]">
                    <img src={Man}/>
                </div>
            </div>
        </ScaleDiv>
       
    </div>
  )
}

export default Download