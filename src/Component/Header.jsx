import express from "../assets/expresJs (2).png";
import machinee from "../assets/machine (1).jpg";
import mango from "../assets/mongo (1).svg";
import nodee from "../assets/node (1).png";
import reactt from "../assets/react (1).svg";

export const Header=()=>{
    const logos=[{
        Image:mango,
        alt:"MangoDB",
        link: "https://www.mangodb.com/",

    },
    {
    Image:express,
    alt:"Express",
    link: "https://www.mangodb.com/",
    },
    {
        Image:reactt,
        alt:"react",
        link: "https://www.mangodb.com/",
        },
        {
            Image:nodee,
            alt:"node",
            link: "https://www.mangodb.com/",
            },
            {
                Image:machinee,
                alt:"ML",
                link: "https://www.mangodb.com/",
                },
]
    return(
        <>
        <div className=" fixed w-full flex items-center justify-between  px-5 bg-gray-100 h-18
        shadow-xl ">
            <div>
               <h1 className="font-bold text-3xl font-serif">Question Pairing </h1>
               <h1 className="font-bold text-3xl pl-18  font-serif"> System </h1>
            </div>
            <div className=" lg:flex hidden item-center justify-center gap-3
            ">

                {
                    logos?.map((item,index)=>{
                        return(
                            <div key={index} className=" w-16 h-16  rounded-full flex items-center justify-center">
                                <img src={item.Image} alt={item.alt} className="w-13 h-13 rounded-full "/>
                                </div>
                        );
                    })
                }
                
            </div>
        </div>
        </>
    )

}