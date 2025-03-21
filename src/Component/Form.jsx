import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const Form =()=> {
    const [question,setquestion]=useState({
    q1:"",
    q2:"",

});




const handlechange=(e)=>{
    setquestion(pre=>{
    return{...pre,[e.target.name]:e.target.value};
   });
}

const sendQuestion= async()=>{
     try {
        const res = await axios.post("https://question-pairing-system-backend.onrender.com/api/compare",{
         question
        });
        console.log(res);
        
        if (!res) {
            toast.error("Error to compared Question")
            
        }
        console.log(res);
           toast.success(res.data.message);
        
    } catch (error) {
          toast.error(error);
    }
}

const handleSubmit=(e)=>{
    e.preventDefault();
    sendQuestion();  
}
    return(
        <>
        <div className="pt-15">
        <div className="flex items-center  w-4/5 justify-center mx-auto bg-white
        p-10 shadow-lg ">

<form className="flex flex-col w-full gap-1 " onSubmit={handleSubmit}>

    <input type="text" 
    className="py-3 px-10 border-2 w-full rounded-sm"
    placeholder="Question 1*"
    name="q1"
    onChange={handlechange}/>
    <p className="text-center">{question.q1.length}/500</p>

    <input type="text" 
    className="py-3 px-10 border-2 w-full rounded-sm"
    placeholder="Question 2*"
    name="q2"
    onChange={handlechange}/>
    <p className="text-center">{question.q2.length}/500</p>

    <button 
    type="submit"
    className="py-2 px-3 border-2 bg-amber-600 w-2/9
    rounded-xl cursor-pointer text-gray-950 font-semibold text-xl text-white hover:bg-amber-500">Predict</button>
</form>

   
            
        </div>
        </div>
        
        </>
    );
};