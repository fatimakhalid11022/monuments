import React from 'react';
import Link from "next/link"
import Image from "next/image"
import arhitect from "@/assets/images/download.jpeg"
function History() {
    return (
        <div className="flex min-h-screen flex-col p-20 bg-green-600">
         <h1 className=' flex-col font-black p-20 f'>History and Commencement</h1> 

         <h2 className='p-4 font-bold '> {`=> Suggestion`}</h2>

        
          <p> Former Pakistani President PERVAIZ MUSHARRAF suggested building a national monument in Islamabad (Shakar Parian) in 2002.</p>
          
          <h2 className='p-4 font-bold'>{` =>Design Competition`}</h2>
           <p>President Musharraf tasked the Ministry of Culture with collaborating with the Pakistan Council of Architects and Town Planners to organize a design competition for the landmark after the FOUNDATION stone was laid in 2004. </p>
          <h2 className='p-4 font-bold'>{`=>Theme Represents`} </h2>
           <p className='font-semibold'>{`Pakistan’s resilience, unity, and commitment`}. </p>
           <h2 className='p-4 font-bold'> {`=>The Architect`}</h2>
           <p>Twenty-one different architects from all over Pakistan submitted plans, and the COUNSIL SELECTED THREE to be considered.</p>
           <Image
     className = "rounded-half "
           src={arhitect}
            alt= ""
            width= {300}
            height = {200}
            />
            <Link href ={"outlines"}></Link>

            <p> Finally, Mr. ARIF MASAOUD was entrusted with the task of creating the Pakistan Monument.</p>
           <h2 className='p-4 font-bold'> {`=>Completion`}</h2>
           <p>The magnificent Pakistan Monument was completed in 2006 under the supervision of Engineer SYED MEHMOOD.
            The INAUGURATION ceremony took place on March 23, 2007, and the Pakistan Monument was opened to the public.</p>
            <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"outlines"}>{`<= Back to Home `}
            </Link>
           </h1>
         </button>
        </div>
        </div>
        
    );
}

export default History;