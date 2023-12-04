import React from 'react';
import Link from "next/link"
import Image from "next/image"
import location from "@/assets/images/museum2.jpg"
function Location() {
  
  
    return (
        <div  className="flex min-h-screen flex-col p-20 bg-green-600">
        <h1  className=' flex-col font-black p-12 '>Here is the complete location details:</h1>
        <Image
     className = "rounded-half "
           src={location}
            alt= ""
            width= {400}
            height = {300}
            />
            <Link href ={"outlines"}></Link>
         <h2 className='p-4 font-bold'> {`=>Address`}:</h2> 
         <h4>Shakarparian Hills, Islamabad, Pakistan</h4>
        <h2  className='p-4 font-bold'>{`=> Coordinates:`}</h2>
        <h4> 33.7327° N, 73.0431° E</h4>
        <h2  className='p-4 font-bold'>{`=>Distance from Islamabad city center:`}</h2>
        <h4>Approximately 12 kilometers (7.5 miles) </h4>
         <h2  className='p-4 font-bold'>{`=>Nearest public transportation:`}</h2>
         <h4>The nearest bus stop is located at Zero Point, about 1.5 kilometers (1 mile) from the monument.</h4>
        
         <h2  className='p-4 font-bold'>{`=>Parking:`}Parking:</h2>
         <h4> There is a paid parking lot available at the monument.</h4>
       The monument is open to the public from 9:00 AM to 5:00 PM daily. There is a small entrance fee.


       <div>
         <button className="bg-red-300 rounded-md p-4" >
           <h1>
            <Link href = {"outlines"}>{`<= Back to Home `}
            </Link>
           </h1>
         </button>
        </div>


        </div>
        
        
    );
}

export default  Location;