import React from 'react';
import Link from "next/link"
import Image from "next/image"
import walls from "@/assets/images/download (1).jpeg"

function Structure() {
    return (
        <div className="flex min-h-screen flex-col p-20 bg-green-600">
          
         <h1 className='font-black p-4'>Main Structure</h1> 

  <h2 className='p-4 font-bold'> 1- petals</h2>

<p>Each petal is made of granite and is designed to represent the distinct culture and heritage of its respective province.
The petals are designed with Islamic architectural influences, featuring intricate patterns and designs.</p>

<h2  className='p-4 font-bold'>2- Central Platform:</h2>

<p>The petals converge at a central platform, symbolizing the unity of the diverse regions coming together to form one nation.</p>
 <h2  className='p-4 font-bold'>3- Inner Walls:</h2>
<Image
 className = "rounded-half "
           src={walls}
            alt= ""
            width= {300}
            height = {200}
            />

The inner walls of the petals are adorned with murals that depict important events in the history of Pakistan, showcasing the struggle for independence and the cultural heritage of the nation.

<h2  className='p-4 font-bold'>4- Minar-e-Pakistan Replica:</h2>

<p>At the center of the central platform, there is a smaller replica of the Minar-e-Pakistan, an important historical monument located in Lahore.
   The Minar-e-Pakistan symbolizes the site where the Lahore Resolution was passed on March 23, 1940 , leading to the creation of Pakistan .</p>

<h2  className='p-4 font-bold'>5- Reflecting Pool:</h2>

Surrounding the central platform is a reflecting pool, adding to the aesthetic appeal of the monument. 
The pool also serves as a symbolic representation of unity and harmony.

<h2 className='p-4 font-bold'>6-Location and Surroundings:</h2>

The Pakistan Monument is strategically located at the western end of the Shakarparian Hills, providing a picturesque view of Islamabad.
 The surrounding area includes a well-maintained garden and greenery, making it a popular spot for locals and tourists alike.
      

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

export default   Structure;