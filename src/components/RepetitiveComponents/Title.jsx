import React from 'react'
import TreeIcon from "../../assets/images/minyTree.svg"
const Title = ({title}) => {
  return (
    <div className='text-main text-[16px] relative w-fit'>
        {title}
        <div className='absolute top-[-8px] left-[-20px]'>
            <img src={TreeIcon} />
        </div>
    </div>
  )
}

export default Title
