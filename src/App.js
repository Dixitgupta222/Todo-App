import React,{useState,useEffect} from 'react';
import './App.css';
import Todos from './Todos';
import db from "./firebase";
import firebase from 'firebase/compat/app';


function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
const [edit, setEdit] = useState(false);
const [isEdit, setIsEdit] = useState();
useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
  
   console.log(snapshot.docs.map(doc => doc.data().todo));
    setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})))
  })
}, []);

const addTodo =(event) =>{
console.log('working');
event.preventDefault();

db.collection('todos').add({
  todo:input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
setTodos([...todos,input]);
setInput('');
}
const handleedit = (id)=>{
  setEdit(true);
  let newEdit = todos.find((elem) => {
    return elem.id === id
  })
   
   setInput(newEdit.todo);
   setIsEdit(id);
  
  }

  const updateTodo =(e)=>{
  e.preventDefault();
 
  setTodos(
    todos.map((elem) => {
        if (elem.id === isEdit) { 
          return{...elem,todo:input}
        }
        return elem;
        
    })
  ) 
  db.collection('todos').doc(isEdit).set({
    todo:input
},{merge:true});
   setEdit(false);
   setInput("");
  }
  
  return (
    <div className="flex font-mono h-screen w-full bg-green-100">
    <div className=" flex flex-col w-96 border-2 rounded h-5/6 p-3 m-auto bg-green-200 border-green-300">
    <h1 className=" text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-500 text-5xl font-bold uppercase py-5 text-center">Todo App</h1>
    <ul className="overflow-y-scroll h-screen-8">
      {todos.map((todo) =>(
      <Todos click={handleedit} className="animate-bounce" key={todo.id} id={todo.id} text={todo.todo} />
      ))} 
    </ul>
    <form className="grid grid-cols-12 mt-auto pt-5">
    <input type="text" className="border col-span-11 p-1" value={input} onChange={event => setInput(event.target.value)}/>
    {
      edit ? <button disabled={!input} type="submit" onClick={updateTodo} 
      className="p-1  rounded-full bg-green-400  text-white disabled:opacity-50 hover:bg-green-500 font-bold ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
      </button> :
      <button disabled={!input} type="submit" onClick={addTodo} 
      className="p-1  rounded-full bg-green-400  text-white disabled:opacity-50 hover:bg-green-500 font-bold ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
      </button>
    }
    </form>
    
    </div>
    </div>
    // <div>
    //   <div className="flex flex-row">
    //     <div className="bg-blue-900 p-5 w-full">
    //       <h2 className="text-center uppercase text-white font-semibold text-5xl">
    //         faq</h2>
    //       <p className="text-center normal-case text-white m-5 font-thin">
    //         Gain Financial insights with our carefully <br/>curated blog
    //         </p>
    //       <button className="block text-center mx-auto bg-blue-500 p-3 rounded font-medium text-white">
    //         Ask A Question
    //         </button>
    //     </div>
    //   </div>

    //   <div className="container p-10 mx-auto">
    //       <div className="grid grid-cols-12">
    //         <div className="grid col-span-3">
    //       <ul id="static">
    //         <li>
    //           <a className="text-gray-500 font-medium hover:text-blue-800 leading-7" href="#account_type">
    //             Account Type
    //             </a>
    //             </li>
    //             <li>
    //           <a className="text-gray-500 font-medium hover:text-blue-800 leading-7" href="#on_boarding">
    //             Onboarding
    //             </a>
    //             </li>
    //             <li>
    //           <a className="text-gray-500 font-medium hover:text-blue-800 leading-7" href="#global_trans">
    //             Global transactions
    //             </a>
    //             </li>
    //             <li>
    //           <a className="text-gray-500 font-medium hover:text-blue-800 leading-7" href="#integration">
    //             Integration
    //             </a>
    //             </li>
    //       </ul>
    //       </div>
    //       <div className="grid col-span-9 px-10">
    //         <div id="account_type" className="">
    //           <h2 className="font-bold capitalize text-lg">Account Type</h2>
    //           <hr className="my-3"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //         </div>
    //         <div id="on_boarding" className="">
    //           <h2 className="font-bold capitalize text-lg">Account Type</h2>
    //           <hr className="my-3"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //         </div>
    //         <div id="global_trans" className="">
    //           <h2 className="font-bold capitalize text-lg">Account Type</h2>
    //           <hr className="my-3"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //         </div>
    //         <div id="global_trans" className="">
    //           <h2 className="font-bold capitalize text-lg">Account Type</h2>
    //           <hr className="my-3"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //           <Accordian title="how do i get" info="ghjhkkghkj"/>
    //         </div>
            
    //       </div>
    //       </div>
        
        
    //   </div>
    // </div>
  
  );
}

export default App;
