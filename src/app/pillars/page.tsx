import React from 'react';
import Link from  "next/link"
import Image from 'next/image';
import pillars from "@/assets/images/4_Pillars.jpg"
function Pillars() {
    return (
        <div className="flex min-h-full flex-col p-20 bg-green-600">
          <h1 className='font-black p-2'>Pillars</h1>
          <Image
     className = "rounded-half "
           src={pillars}
            alt= ""
            width= {700}
            height = {700}
            />
            <Link href ={"outlines"}></Link>
          <p>These four pillars, standing tall amidst the monuments petals, represent the fundamental principles that guide Pakistan: </p>

<h2 className='p-4 font-bold '>1- Unity:</h2> 
The first pillar, inscribed with the Urdu word {`"Etehad"`} (Unity), embodies the spirit of cohesion and solidarity among the diverse people of Pakistan. It emphasizes the importance of standing together as a nation, overcoming differences and embracing shared values.

<h2 className='p-4 font-bold '>2- Faith:</h2>
 The second pillar, engraved with the Urdu word {`"Imaan"` }(Faith), signifies the deep-rooted religious beliefs that permeate Pakistani society. It highlights the role of faith in shaping the {`nation's`} identity and guiding its moral compass.

<h2 className='p-4 font-bold '>3- Discipline:</h2> 
The third pillar, etched with the Urdu word{`"Nizam"`}  (Discipline), underscores the importance of order, organization, and adherence to rules. It emphasizes the need for self-discipline and civic responsibility in building a strong and prosperous nation.

<h2 className='p-4 font-bold '>4- Strength:</h2>
 The fourth pillar, bearing the Urdu word {`"Taqat"`} (Strength), symbolizes the resilience and fortitude of the Pakistani people. It represents the {`nation's`} ability to overcome challenges and persevere in the face of adversity.

<h5>These four pillars, collectively known as {`"Etehad, Imaan, Nizam, Taqat," `}serve as the cornerstones of {`Pakistan's`} national identity. They remind the nation of its core values and inspire its citizens to strive for unity, faith, discipline, and strength.</h5>
       
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

export default  Pillars;