"use client"
import Link from "next/link"

const Outlines = () => {
    return <div className="flex min-h-screen flex-col p-20 bg-green-600 font-bold ">
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"historys"}> 1-  History
            </Link>
           </h1>
         </button>
        </div>
         </div>
    
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"location"}>2- Location 
            </Link>
           </h1>
         </button>
        </div>
         </div>
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"structure"}> 3- Structure
            </Link>
           </h1>
         </button>
        </div>
         </div>
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"pillars"}> 4- Pillar Representation
            </Link>
           </h1>
         </button>
        </div>
         </div>
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"museum"}> 5- The Art of Museum
            </Link>
           </h1>
         </button>
        </div>
         </div>
    <div className="flex gap-5=3 p-3 flex-col" >
       <div>
         <button className="bg-red-100 rounded-md p-4" >
           <h1>
            <Link href = {"culture"}> 6- The Culture of Pakistan
            </Link>
           </h1>
         </button>
        </div>
         </div>
    


    
    
    
    </div>
    }
    
    export default Outlines