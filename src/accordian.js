import React, { useState } from 'react'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Accordian = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='my-3'>
      <header onClick={() => setExpanded(!expanded)}
      className="bg-gray-200 rounded flex p-3">
        <h4 className=' font-semibold text-base'>
          {title}
        </h4>
        <button className=" ml-auto" onClick={() => setExpanded(!expanded)}>
          {expanded ? '-' : '+'}
        </button>
      </header>
      <div className={expanded ? 'block  px-3 bg-gray-200' : 'hidden'}>
          <hr className="block mx-auto w-12/12 h-0.5 bg-gray-300"/>
      <p className="py-3 text-gray-500 text-left text-sm">{info}</p>
      </div>
    </article>
  )
}

export default Accordian