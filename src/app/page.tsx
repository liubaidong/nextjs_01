
import Image from "next/image";


export default function Home() {
  return (
    <div className=" h-screen relative">
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900  -z-10">

            <Image src={"/home.png"} fill style={{objectFit: "cover"}} alt="" /> 

        </div>
          <div className="flex  justify-center  pt-48">
              <h1 className="text-blue-500 text-6xl">Professional Cloud Hosting</h1>
          </div>
        </div>
    
    </div>
  );
}
