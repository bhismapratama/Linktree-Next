import './index.css'
import Image from "next/image"
import pic from './favicon.ico'
import Data from "./data"

export default function Home() {
  return (
    <section className="w-full h-full items-center flex flex-col">
      <div className="logo w-full h-full flex justify-center">
        <Image src={pic} alt="Hello" />
      </div>

      <div className="name">
        <h1 className="capitalize text-white p-4">your <span className="text-red-700">name</span></h1>
      </div>

      <div className="main w-1/2">
        <ul className="pt-5 pr-0 pb-16 pl-0 m-0 list-none text-center">
          {Data.map((item) => {
            return (
              <li className="button relative" data-aos="fade-up" data-aos-delay="300" key={item.id}>
                <a href={item.link} className={`mt-6 mb-6 ml-auto mr-auto 
                pt-2 pb-2 pl-12 pr-12 max-w-full text-2xl text-center flex items-center
                justify-center font-semibold ${item.class}`}>
                <i className={`text-center justify-center items-center mt-0 mr-1.5 mb-0 ml-0 top-0 bottom-0 text-2xl ${item.bx}`}>
                </i>
                {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="footer pb-8">
        <h1 className="text-xs text-white cursor-pointer">
          created with <i className="bx bxs-heart hover:cursor-pointer"></i> by <span className="transform-none hover:cursor-pointer">@yourname</span> :)
        </h1>
      </div>
    </section>
  )
}
