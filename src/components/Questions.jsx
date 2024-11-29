import React, { useState } from 'react'
import ScaleDiv from './RepetitiveComponents/ScaleDiv'
import Title from './RepetitiveComponents/Title'
import AddIcon from '../assets/images/addIcon.svg'
import MinusIcon from '../assets/images/minusIcon.svg'

const Questions = () => {
    const faqData = [
        {
            question: "شلون أقدر أحجز مزرعة؟",
            answer:
                "تقدر تختار المزرعة المناسبة لك من خلال التطبيق، وبعدها تضغط على خيار 'حجز'. قم بتحديد التاريخ والوقت اللي يناسبك، وأكمل بيانات الحجز والدفع بكل سهولة.",
        },
        {
            question: "هل الدفع في التطبيق آمن؟",
            answer:
                "نعم، الدفع في التطبيق يتم باستخدام تقنيات أمان حديثة. كل بيانات الدفع مشفرة لضمان أعلى مستوى من الأمان والثقة.",
        },
        {
            question: "كيف أقدر أستفيد من نظام النقاط؟",
            answer:
                "عند كل عملية حجز تقوم بها، تحصل على نقاط مكافأة. تقدر تستخدم النقاط للحصول على خصومات أو عروض خاصة مستقبلاً.",
        },
        {
            question: "هل أقدر أغير أو ألغي الحجز بعد ما أكمله؟",
            answer:
                "نعم، تقدر تغير أو تلغي الحجز من خلال التطبيق حسب سياسة الإلغاء الخاصة بالمزرعة. راح يتم إعلامك بكل التفاصيل قبل الإلغاء.",
        },
        {
            question: "هل التطبيق يشتغل في كل مناطق العراق؟",
            answer:
                "نعم، التطبيق يغطي معظم مناطق العراق، ويمكنك البحث عن المزارع المتوفرة في المنطقة التي تريدها بكل سهولة.",
        },
    ];
    // State to track the active question
    const [openIndices, setOpenIndices] = useState([]);

    // Toggle the visibility of the answer
    const toggleAnswer = (index) => {
      if (openIndices.includes(index)) {
        // Remove the index if it's already open
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        // Add the index to the list of open questions
        setOpenIndices([...openIndices, index]);
      }
    };
  return (
    <div id="questions" className="w-full flex justify-center items-center  pt-[20px] pb-[20px] md:pt-[50px] md:pb-[50px] "
    >
        <ScaleDiv className='flex flex-col justify-center items-center'>
            <div className='w-[340px] md:w-[80%]  flex flex-col items-center justify-center mb-[50px]'>
                <div className='w-[340px] md:w-[70%] md:h-[180px]  p-[20px]  flex flex-col justify-between items-center '>
                    <div className='flex flex-col justify-center items-center'>
                            <Title title={"ما يدور ببالك"}/>
                            <div className='text-[20px] md:text-[38px] text-secondary font-[500] text-center'>
                                الأسئلة الشائعة 
                            </div>
                    </div>
                    <div className='text-gray2 text-[12px] md:text-[14px]  text-center leading-[18px] md:leading-[24px] '>
                        اعثر على إجابات للأسئلة الأكثر شيوعًا، والتي تغطي كل شيء بدءًا من الإعداد وحتى الميزات المتقدمة، لمساعدتك في تحقيق أقصى استفادة من النظام الأساسي.
                    </div>
               </div>
                {/* loop here */}
                <div className="w-full">
                {faqData.map((item, index) => (
                    <div key={index} className="mb-5">
                    {/* Question */}
                    <div
                        className="bg-gray1 p-5 rounded-[12px] flex justify-between items-center "
                    >
                        <div className="text-[18px] text-secondary font-[500]">
                        {item.question}
                        </div>
                        <div
                        onClick={() => toggleAnswer(index)}
                        className={`cursor-pointer transition-transform duration-500 ease-in-out ${
                            openIndices.includes(index) ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        >
                        <img
                            src={openIndices.includes(index) ? MinusIcon : AddIcon}
                            alt="Toggle Icon"
                            className="w-[24px] h-[24px]"
                        />
                        </div>
                    </div>

                    {/* Answer with smooth transition */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndices.includes(index) ? 'max-h-[300px]' : 'max-h-0'
                        }`}
                    >
                        <div className="pt-5 pl-10 pb-10 pr-6 leading-[24px] text-secondary text-[16px]">
                        {item.answer}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </ScaleDiv>
       
    </div>
  )
}

export default Questions