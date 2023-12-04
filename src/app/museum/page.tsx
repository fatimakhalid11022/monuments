import React from 'react';
import Link from "next/link"
import Image from "next/image"
import muse from "@/assets/images/museum.jpg"
import muse3 from "@/assets/images/museum3.jpg"
import muse4 from "@/assets/images/museum4.jpeg"
function Museum() {
    return (
        <div className="flex min-h-screen flex-col p-16 bg-green-600">
            <h1 className='p-16 font-black '>Museum</h1>
            <Image
     className = "rounded-half "
           src={muse}
            alt= ""
            width= {500}
            height = {500}
            />
            <Link href ={"outlines"}></Link>
            Several portraits, wax sculptures of historical figures, and other historical images can be found in the heritage museum.
            <h2 className='p-4 font-bold '>{`=>representing the history`}</h2>
            <Image
     className = "rounded-half "
           src={muse3}
            alt= ""
            width= {300}
            height = {300}
            />
             It is a timeline of our history, beginning with 7000 BC and ending in 1947. 
             <h2 className='p-4 font-bold '>{`=>Islamic history`}</h2>

             <Image
     className = "rounded-half "
           src={muse4}
            alt= ""
            width= {300}
            height = {300}
            />
            It explains the origins of Islam, the Mughal period, the pre-partition history of the Pakistan movement,
             and the significant events that led to the subcontinent’s partition.
            <h2 className='p-4 font-bold '>{`=>The Library`}</h2>
          The reference library, which has an Audio-Visual Facility, is available to anyone searching for old national documents, historical speeches, books, and manuscripts.
              The museum also has a meeting room and a Panorama Hall (auditorium) seating for sixty-two people.
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

export default Museum;