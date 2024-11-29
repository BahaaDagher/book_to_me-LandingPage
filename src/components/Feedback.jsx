import React, { useState } from 'react';
import ScaleDiv from './RepetitiveComponents/ScaleDiv';
import Title from './RepetitiveComponents/Title';
import ColorsPhoto from "../assets/images/colors.svg";
import CommasIcon from "../assets/images/commas.svg";
import RightArrow from "../assets/images/RightArrow.svg";
import LeftArrow from "../assets/images/LeftArrow.svg";
import user1 from "../assets/images/users-pics/1.png";
import user2 from "../assets/images/users-pics/2.png";
import user3 from "../assets/images/users-pics/3.png";
import user4 from "../assets/images/users-pics/4.png";

const Feedback = () => {
  // Array of users data
  const users = [
    { name: 'أستاذة منال', image: user1, feedback: 'خدمة ولا أروع! شفت صور المزرعة وحجزتها بدون أي تعب، ووصلت وكانت نفس الصور بالضبط ما توقعت الموضوع يصير بهاي السهولة! التطبيق مرتب وكلش واضح، عاشت إيديهم.' },
    { name: 'أستاذ علي', image: user2, feedback: 'تجربة رائعة! التطبيق سهل الاستخدام وسمح لي بحجز المزرعة بكل يسر. الخدمة كانت مميزة، ونحن نوصي به لكل من يبحث عن أفضل المزارع.' },
    { name: 'أستاذة سارة', image: user3, feedback: 'ممتاز! حجزت مزرعة رائعة بسهولة تامة، والأجواء كانت مثالية للعائلة. أحببت الخدمة وأسعارها المناسبة!' },
    { name: 'أستاذ محمود', image: user4, feedback: 'تجربة مميزة! التطبيق كان سهل الاستخدام وعرض لي أفضل الخيارات. سأكرر التجربة بالتأكيد وأوصي به لأصدقائي.' }
  ];

  // State to track the currently displayed user
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next user
  const nextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous user
  const prevUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex bg-custom-gradient justify-center items-center pt-[20px] pb-[20px] md:pt-[50px] md:pb-[50px]">
      <ScaleDiv className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='flex justify-between items-center w-full flex-col md:flex-row'>
          <div className='mt-[50px] md:mt-0 md:w-auto hidden lg:block'>
            <img src={ColorsPhoto} alt="Colors" />
          </div>
          <div className='lg:w-[42%] flex flex-col justify-between relative '>
            <img src={CommasIcon} alt="icon" className='absolute bottom-0 left-0'/>
            <div className='md:ml-[20px] flex flex-col  mb-[20px]'>
              <Title title={"اراء المستخدمين"} />
              <div className='text-[20px] md:text-[38px] text-secondary font-[500] '>
                ماذا يقول المستخدمين عن <span className='text-main'>احجزلـــي</span>
              </div>
            </div>
            <div className='flex flex-col justify-between '>
                <div className='mb-[10px] flex items-center'>
                    <div className='w-[32px] h-[32px] rounded-full'>
                    <img src={users[currentIndex].image} alt="user pic" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className='font-[500] text-secondary md:text-[16px] text-[14px] leading-[20px] mr-[10px]'>
                    {users[currentIndex].name}
                    </div>
                </div>
                <div className='text-gray2 md:text-[14px] text-[12px] text-justify leading-[21px] mb-[35px]'>
                    {users[currentIndex].feedback}
                </div>
                <div className='flex'>
                    {/* Right Arrow */}
                    <img
                    src={RightArrow}
                    className={`cursor-pointer ${currentIndex === users.length - 1 ? 'opacity-50 cursor-default' : ''} transition-opacity duration-300`}
                    onClick={nextUser}
                    style={{ opacity: currentIndex === users.length - 1 ? 0.5 : 1 }}
                    alt="Right Arrow"
                    />
                    {/* Left Arrow */}
                    <img
                    src={LeftArrow}
                    className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50 cursor-default' : ''} transition-opacity duration-300`}
                    onClick={prevUser}
                    style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
                    alt="Left Arrow"
                    />
              </div>
            </div>
          </div>
        </div>
      </ScaleDiv>
    </div>
  );
};

export default Feedback;
