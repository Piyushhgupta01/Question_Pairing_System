import { Toaster } from 'react-hot-toast';

import { Form } from "./Component/form";
import { Header } from "./Component/Header";
export const App=()=>{
  return(
    <>
  <Header/>
  <div className=" bg-black h-[100vh] py-48">
  
  <Form/>
  <div className="">
  <h1 className="text-3xl pt-5 font-bold flex font-sans items-center justify-center text-gray-500 my-4"></h1>
  
  </div>
  
  <Toaster />
  
  </div>
    </>
  )
}
