import React,{} from 'react'
import db from './firebase'
import { motion } from "framer-motion";

export default function Todos(props) {
    // const [input, setInput] = useState(props.text);
    // const [open, setOpen] = useState(false);
    // const handleopen = ()=>{
    //     setOpen(true);
    // }
    // const handleclose = ()=>{
    //     setOpen(false);
    // }
//    const edit = (event)=>{
//    event.preventDefault();
// //    setInput(props.text);
//     db.collection('todos').doc(props.id).set({
//         todo:input
//     },{merge:true})
//    setOpen(false)
//    }
const tagVariants = {
    show: {
      opacity: 1,
      transition: {
       
        duration: .5,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
    return (
    <>
    
        <motion.div whileHover={{ scale: .99 }}
                    transition={{duration:.2}}
                    variants={tagVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex text-left bg-green-300 px-2 py-2 my-1 text-green-800 text-md capitalize font-medium">
           <li id={props.id} className="w-10/12 break-all p-1">{props.text}</li> 
           <div className="flex justify-end items-center gap-2 text-green-700 text-sm">
           <svg onClick={()=>{
               props.click(props.id);
           }} xmlns="http://www.w3.org/2000/svg" className=" w-4 h-4 transform hover:text-green-600 cursor-pointer hover:scale-125 transition duration-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
           
           <svg onClick={()=> db.collection('todos').doc(props.id).delete()} xmlns="http://www.w3.org/2000/svg" className=" w-4 h-4 transform hover:text-green-600 cursor-pointer hover:scale-125 transition duration-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
           </div>
        </motion.div>

        {/* <div className={`absolute  bg-gray-900 bg-opacity-90 p-5 inset-0 justify-center ${open ? "flex" :"hidden" }`}>
        <div className="bg-white w-6/12 p-5 my-auto">
        <form className="grid grid-cols-12">
        <input type="text" className="border col-span-11 p-1" value={input} onChange={event => setInput(event.target.value)}/>
        <button disabled={!input} type="submit" onClick={props.update}
        className="p-1  rounded-full bg-green-400  text-white disabled:opacity-50 hover:bg-green-500 font-bold ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        </button>
        </form>
        </div>
        </div> */}
        </>
    )
}
