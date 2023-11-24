import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './single.scss';
const Single = () => {
  return (
    <div className="single font-poppins">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div class="pt-6 pb-12 ">
  <div id="card" class="">
    <h2 class="text-center font-poppins  uppercase text-4xl xl:text-5xl">Single RFP</h2>
    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
      <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
   
        <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center"
           src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <h3 class="font-semibold text-lg leading-tight truncate">tilte</h3>
          <p class="mt-2">
          excerpt
          </p>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            author  &bull; date
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
  </div>
  )
}

export default Single
