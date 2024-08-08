import React from 'react'
interface Props {
    headingMini:string
    headingPrimary:string
}

const SectionHeading = ({headingMini,headingPrimary}:Props) => {
  return (
    <div className='text-center p-2'>
        <div className="text-gray-600 md:text-[16px] text-[15px]">{headingMini}</div>
        <div className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-indigo-900">{headingPrimary}</div>
    </div>
  )
}

export default SectionHeading