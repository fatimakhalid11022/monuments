import react from "react"
import picture from "@/assets/images/pakmon.jpg"
import Image from "next/image"
import Link from "next/link"
const FrontPage = () => {
    return(
         <div className="flex min flex-col p-24 bg-green-600 font-bold ">
    <p>Pakistan Monument</p>

    <Image
     className = "rounded-half "
           src={picture}
            alt= ""
            width= {700}
            height = {700}
            />
            <Link href ={"outlines"}>NEXT...</Link>
    </div>
    )
}
export default FrontPage