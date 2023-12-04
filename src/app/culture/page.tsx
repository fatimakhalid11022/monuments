import React from 'react';
import Link from "next/link"
import Image from "next/image"
import culture from "@/assets/images/download (2).jpeg"
function Museum() {
    return (
        <div className="flex min-h-screen flex-col p-20 bg-green-600">
            <h1 className='font-black p-4'>Diverse Culture</h1>


            The Pakistan Monument, standing tall on the Shakarparian Hills in Islamabad, serves as a poignant symbol of the nations rich cultural heritage. Its design, inspired by the architectural grandeur of the Mughal era, seamlessly blends with intricate motifs and symbols that embody the diverse cultural tapestry of Pakistan.
             

            <Image
     className = "rounded-half "
           src={culture}
            alt= ""
            width= {300}
            height = {300}
            />
            <Link href ={"outlines"}></Link>
 <h2 className='p-4 font-bold '>1- Petals Representing Diverse Cultures:</h2> 

 The monument seven petals, resembling a blooming flower, represent the {`country's `}seven provinces and territories, each with its unique cultural identity. The four larger petals symbolize the provinces of Punjab, Sindh, Balochistan, and Khyber Pakhtunkhwa, while the three smaller petals represent the territories of Gilgit-Baltistan, Azad Jammu and Kashmir, and the Federally Administered Tribal Areas.

 <h2 className='p-4 font-bold '>2- Mughal Architectural Influence:</h2>
 
  The architecture draws heavily from the Mughal era, a period marked by exquisite craftsmanship and intricate designs. The use of granite, marble, and sandstone, along with the delicate carvings and geometric patterns, reflects the grandeur and elegance of Mughal architecture.

 <h2 className='p-4 font-bold '>3- Islamic Calligraphy and Motifs:</h2>
 
  The walls and domes are adorned with exquisite Islamic calligraphy, adding a touch of spirituality and reverence. The calligraphy features verses from the Quran, the holy book of Islam, and other Islamic texts, reflecting the deep-rooted faith of the Pakistani people.

 <h2 className='p-4 font-bold '>4- Cultural Symbolism:</h2> 
 
 The  design incorporates various cultural symbols that hold significance for the people of Pakistan. The star and crescent moon, embedded in the central structure, represent the {`nation's`} Islamic identity. The flower-like petals symbolize unity and diversity, while the intricate carvings depict traditional motifs and patterns from various cultures.

 <h2 className='p-4 font-bold '>5- Representation of Unity and Heritage: </h2>
 
 The Pakistan Monument stands as a testament to the {`nation's`} unifying spirit and its rich cultural heritage. It serves as a reminder of the diverse traditions, languages, and customs that make up the fabric of Pakistani society, fostering a sense of pride and belonging among its citizens.

In essence, the Pakistan Monument is a cultural masterpiece that encapsulates the essence of {`Pakistan's`} diverse heritage. It serves as a beacon of identity, reminding the nation of its shared history, traditions, and values.
<div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"outlines"}>{`<= Back to Home `}
            </Link>
           </h1>
         </button>
        </div></div>
    );
}

export default Museum;