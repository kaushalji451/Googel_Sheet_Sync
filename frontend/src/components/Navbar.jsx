import React from 'react'

const Navbar = () => {
  return (
  <>
   <nav className="p-4 flex justify-between items-center bg-[#3f0808] text-white    ">
        <div>
          <img src="./iconimg.png" alt="this is dev" className="w-65" />
        </div>
        <div className="w-10/12 flex justify-center">
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Astrology </span>
          </a>
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Vastu-Shastra</span>
          </a>
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Vedic Pooja</span>
          </a>
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Yoga & Meditation</span>
          </a>
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Shraddha (Ancestral Rites)</span>
          </a>
          <a className=" py-11 ms-4">
            <span className=" pe-4  border-e border-yellow-500 font-semibold"> Prashad Corner</span>
          </a>
        </div>
        <div className="w-[14%]">
          <button className="h-14 w-[80%] border rounded-lg border-yellow-500 bg-[#3f0808]">
            Book Appointment
          </button>
        </div>
      </nav>
  </>
  )
}

export default Navbar
