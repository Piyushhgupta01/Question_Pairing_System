import { useState } from "react";
import toast from "react-hot-toast";

const data=["gdwhg73dhwn","xuuehxeunx","xnhxuwe"]

export const QuestionList=()=>{
    const [success,setsuccess]=useState(true);
    const[question,setquestion]=useState({
        
    });
const handleChange=(e)=>{
    setquestion({...question,[e.target.name]:e.target.value});
}

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(question);
    toast.success("Success")
  }


    return(
        
        <>
        <div className="flex items-center justify-center">
     <div className="w-[1100px] px-5 py-10 bg-white ">
        {success? <form className="flex flex-col items-start justify-center gap-5" onSubmit={handleSubmit}>
            {
                data?.map((item,index)=>(<div key={index} className="flex  items-center justify-center gap-5">
                    <input type="checkbox" value={item} name={item} onChange={handleChange}
                    />
                    <lable className="text-lg font-bold text-black">{item} </lable>
                </div>
                ))
            }
            <button type="submit" className="py-1 mx-auto px-2 border-2 bg-blue-500 w-1/8 
  rounded cursor-pointer text-white text-gray-250 font-semibold text-xl hover:bg-blue-800">Predict</button>
        </form>:<div className=" flex flex-col gap-5 items-center justify-center bg-white mx-auto mt-3 p-5  h-[250px] w-[1200px]">
  
  <div className=" mt-5 p-auto bg-gray-100 w-[1100px] items-center justify-center flex flex-col h-[200px]">
  <p className="text-red-600 font-medium "> Pick Any Two Question</p>
  <p className="text-red-400  " >Select exactly two questions</p>
  
  </div>
  </div>}
     </div>
     </div>
        </>
    )
}