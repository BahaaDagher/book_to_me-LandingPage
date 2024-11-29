import React from 'react'
import Title from './RepetitiveComponents/Title'
import FarmIcon from "../assets/images/FarmIcon.svg"
import ReservationIcon from "../assets/images/reservationIcon.svg"
import StarIcon from "../assets/images/starIcon.svg"
import SupportIcon from "../assets/images/supportIcon.svg"
import ScaleDiv from './RepetitiveComponents/ScaleDiv'

const WhoAreWe = () => {
  return (
    <div id ="about" className="w-full flex justify-center items-center  pt-[20px] pb-[20px] md:pt-[50px] md:pb-[50px] "
    >
        <ScaleDiv className='flex flex-col justify-center items-center'>
               <div className='w-[340px] md:w-[650px] md:h-[180px]  p-[20px]  flex flex-col justify-between items-center '>
                    <div className='flex flex-col justify-center items-center'>
                            <Title title={"من نحن"}/>
                            <div className='text-[20px] md:text-[38px] text-secondary font-[500] text-center'>
                                شنو اللي يميز تطبيقنا
                            </div>
                    </div>
                    <div className='text-gray2 text-[12px] md:text-[14px]  text-center leading-[18px] md:leading-[24px] '>
                        تطبيقنا يسهل عليك كلشي! من أول ما تدور لحد ما تحجز، كلشي مرتب وسريع. تختار المزرعة اللي تعجبك حسب ذوقك وبأفضل الأسعار، وبأي وقت تحتاج مساعدة، احنا وياك. جربه وشوف شلون يفرق
                    </div>
               </div>
               <div className='flex items-center justify-between  w-full mt-[20px] overflow-auto gap-[20px] lg:gap-0'>
                    <div className='flex flex-col  flex-none lg:flex basis-[225px] lg:flex lg:basis-auto  lg:w-[24%] min-h-[280px] p-[20px] bg-main border border-main rounded-[12px] '>
                        <div className=''>
                            <img src ={FarmIcon} alt = "FarmIcon"/>
                        </div>
                        <div className='text-white lg:text-[18px] text-[14px] font-[500] mb-[20px]'>
                            أحدث المزارع
                        </div>
                        <div className='text-white leading-[21px] text-justify  lg:text-[14px] text-[12px]'>
                            دور واختار من أجمل المزارع اللي تناسب طلعتك أو مناسبتك. إذا تدور مزرعة بيها مسبح، حدائق واسعة، أو مكان مثالي للچمعة ويا العائلة، كلشي تلگاه بسرعة وبدون دوخة
                        </div>
                    </div>
                    <div className='flex flex-col  flex-none  basis-[225px] lg:flex lg:basis-auto lg:w-[24%] min-h-[280px] p-[20px] border  border-gray3 rounded-[12px]'>
                        <div className=''>
                            <img src ={ReservationIcon} alt = "FarmIcon"/>
                        </div>
                        <div className='text-secondary lg:text-[18px] text-[14px] font-[500] mb-[20px]'>
                            حجز سريع وآمن
                        </div>
                        <div className='text-gray2 leading-[21px] text-justify opacity-[80%] text-[14px]'>
                            بضغطة زر تگدر تحجز المزرعة اللي تعجبك بكل سهولة. عدنا خيارات دفع مرنة وآمنة تناسبك، حتى تحجز وانت مرتاح البال                        </div>
                        </div>
                    <div className='flex flex-col  flex-none  basis-[225px] lg:flex lg:basis-auto lg:w-[24%] min-h-[280px] p-[20px] border  border-gray3 rounded-[12px]'>
                        <div className=''>
                            <img src ={StarIcon} alt = "FarmIcon"/>
                        </div>
                        <div className='text-secondary lg:text-[18px] text-[14px] font-[500] mb-[20px]'>
                            احجز وگمّع نقاط  
                        </div>
                        <div className='text-gray2 leading-[21px] text-justify opacity-[80%] text-[14px]'>
                            كل مرة تحجز مزرعة عبر تطبيقنا، تجمع نقاط تقدر تستفاد منها بخصومات أو عروض خاصة بالمستقبل. كل ما تحجز أكثر، تستفاد أكثر! خليك ويا تطبيقنا واستمتع بالمزايا الإضافية                          </div>
                        </div>
                    <div className='flex flex-col flex-none lg:flex lg:basis-auto basis-[225px] lg:w-[24%] min-h-[280px] p-[20px] border border-gray3 rounded-[12px]'>
                        <div className=''>
                            <img src ={SupportIcon} alt = "FarmIcon"/>
                        </div>
                        <div className='text-secondary lg:text-[18px] text-[14px] font-[500] mb-[20px]'>
                            دعم متواصل وياك 
                        </div>
                        <div className='text-gray2 leading-[21px] text-justify opacity-[80%] text-[14px]'>
                            فريقنا دوم جاهز يجاوب على كل أسئلتك ويساعدك بكل خطوة. احنا وياك من أول ما تختار لحد ما تستمتع بمزرعتك.
                        </div>
                    </div>
               </div>
                
        </ScaleDiv>
       
    </div>
  )
}

export default WhoAreWe