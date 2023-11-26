import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContactPersonIcon from '@mui/icons-material/ContactPage';
import BusniessIcon from '@mui/icons-material/Business';
import SecuirtyIcon from '@mui/icons-material/Security';
import { GeoNews } from '../../assets';
import PencilIcon from '@mui/icons-material/PersonPinCircleRounded';
import MemberShipIcon from '@mui/icons-material/CardMembership';
const ImageUploader = ({ label, id, text }) => {
  return (
    <div className="flex flex-col mr-4">
      <label className="block text-sm font-medium text-white">Busniess logo</label>
     {text === "yes" ?  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div className="flex text-sm text-gray-600">
            <label htmlFor={`file-upload-${id}`} className="relative 
            cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span className="text-xs text-center">Drop your files here</span>
              <input id={`file-upload-${id}`} name={`file-upload-${id}`} type="file" className="sr-only" />
            </label>
          </div>
          <p className="text-xs text-white">
            PNG, JPG, GIF upto 2.5MB
          </p>
        </div>
      </div> : 
      <div className="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6
      h-full  border-2 border-gray-300 border-dashed rounded-md">
          <p className="text-xs mb-5 text-primary">
            PNG, JPG, GIF upto 2.5MB
          </p>
        <div className="flex justify-center   items-center">
         

          <div className="flex  justify-center items-center ">
            <label htmlFor={`file-upload-${id}`} className="relative 
            cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <input id={`file-upload-${id}`} name={`file-upload-${id}`} type="file" className="sr-only" />
            </label>
           <img src={GeoNews} className='h-14 w-14'></img>
           
          </div>
        
        </div>
    
      </div> 
}
    </div>
  );
};
const ContactForm = () => {
  
  return (
    <section className="max-w-4xl p-6 mx-auto bg-primary rounded-md shadow-md dark:bg-gray-800 mt-20">
       <div class="flex items-center mb-4">
       <ContactPersonIcon fontSize="small" style={{
      color :'#E7B82F',
    }} className=" mr-2 " />
        <h2 className="text-xl text-secondary-yellow dark:text-gray-200 uppercase">Contact Information</h2>
    </div>
    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" for="username">First Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Family Name</label>
                <input id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring"  />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="password">Preferred Greetings</label>
                <input id="text" type="text" className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Job Title </label>
                <input id="passwordConfirmation" type="password"
                 className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" />
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Email Address</label>
                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" />
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Mobile Number</label>
                <input id="range" type="range" className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" />
            </div>
           
          
          
          
            <div>
                <label className="block text-sm text-white">
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer
                     rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 2.5MB
                  </p>
                </div>
              </div>
            </div>
        </div>
    </form>
    <div class="flex items-center mt-8">
    <BusniessIcon fontSize="small" style={{
      color :'#E7B82F',
    }} className=" mr-2 " />
        <h2 className="text-xl  text-secondary-yellow dark:text-gray-200 uppercase">Business Information</h2>
    </div>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="username">Busniess Name</label>
                <input id="username" type="text"className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring"  />
            </div>

            <div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Country your busniess is located</label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>AUS</option>
                    <option>USA</option>
                    <option>Ireland</option>
                </select>
            </div>
            </div>

            <div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">State/Province</label>
                <select class="block w-full px-4 py-2 mt-2 text-white bg-primary border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>America</option>
                    <option>Austriallia</option>
                    <option>Ireland</option>
                </select>
            </div>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Postal code </label>
                <input id="postal Code" type="text"
                placeholder='232456'
                className="block w-full px-4 py-2 mt-2
                text-white bg-primary border border-gray-300 rounded-md
                   focus:outline-none focus:ring"  />
            </div>
            <div>
    
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Busniess Category</label>
                <select class="block w-full px-4 py-2 mt-2 text-white bg-primary border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Sub-category</label>
                <input id="range" type="range"className="block w-full px-4 py-2 mt-2
                 text-white bg-primary border border-gray-300 rounded-md
                    focus:outline-none focus:ring" placeholder='Type your subcategory' />
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Busniess description</label>
                <textarea
        id="myTextarea"
        name="myTextarea"
        rows="5"
        className="block w-full px-4 py-2 mt-1
        text-white bg-primary border border-gray-300 rounded-md
           focus:outline-none focus:ring"
        placeholder="Describe your busniess"
      ></textarea>
            </div>
           
          
          
          
            <div className="flex ">
  <div className="flex-1">
    <ImageUploader label="Image 1" id="1" text={"yes"} />
  </div>
  <div className="flex-1 w-full h-full">
    <ImageUploader id="2" text={"no"} />
  </div>
</div>
        </div>

        
    </form>
    <div className="flex mt-4  items-center mb-4">
    <SecuirtyIcon fontSize="small" style={{ color: '#E7B82F' }} className="mr-2" />
    <h2 className="text-xl text-secondary-yellow dark:text-gray-200 uppercase">Security Information</h2>
  </div>
  <form className="max-w-md ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="mb-4 md:mb-0">
      <label className="text-white dark:text-gray-200" htmlFor="securityPassword">
        Password
      </label>
      <input
        id="securityPassword"
        type="password"
        className="block w-full px-4 py-2 text-white bg-primary border border-gray-300 rounded-md focus:outline-none focus:ring mt-2"
      />
    </div>
    <div className="flex items-center md:ml-5 mt-5 md:mt-0">
      <label className="text-white dark:text-gray-200" htmlFor="changePassword">
        Change Password
      </label>
      <PencilIcon fontSize="small" style={{ color: '#E7B82F' }} className="ml-1" />
    </div>
  </div>
</form>

<div className="flex mt-4 items-center mb-4">
  <MemberShipIcon fontSize="small" style={{ color: '#E7B82F' }} className="mr-2" />
  <h2 className="text-xl text-secondary-yellow dark:text-gray-200 uppercase">Membership </h2>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="md:col-span-2 lg:col-span-2 flex flex-col">
    {/* Headings Section */}
    <div className="flex items-center mb-4">
      {/* Membership Type Heading */}
      <div className="flex items-center mr-4">
        <h3 className="text-lg text-secondary-yellow dark:text-gray-200">Membership Type</h3>
      </div>

      {/* Dotted Vertical Line */}
      <div className="border-l border-dotted border-gray-300 h-full mx-4"></div>

      {/* Additional Membership Details Heading */}
      <div className="flex items-center">
        <h3 className="text-lg text-secondary-yellow dark:text-gray-200">Additional Details</h3>
      </div>
    </div>

    <div className="flex flex-row mt-4">
      <label className="flex items-center mb-2">
        <input type="checkbox" className="form-checkbox text-primary h-4 w-4" />
        <span className="ml-2 mr-5 text-sm text-white">Bronze</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="form-checkbox text-primary h-4 w-4" />
        <span className="ml-2 mr-5 text-sm text-white">Silver</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="form-checkbox text-primary h-4 w-4" />
        <span className="ml-2 mr-5 text-sm text-white">Diamond</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="form-checkbox  text-gray-400 h-4 w-4" />
        <span className="ml-2 mr-5 text-sm text-white">Gold</span>
      </label>


    </div>
  </div>

  <div className="md:col-span-1 lg:col-span-1 flex flex-col justify-between">
    <div className="flex items-center mb-4">
      <MemberShipIcon fontSize="small" style={{ color: '#E7B82F' }} className="mr-2" />
      <h3 className="text-sm text-secondary-yellow dark:text-gray-200">Renew My Membership</h3>
    </div>
    <div className="flex items-center">
      <MemberShipIcon fontSize="small" style={{ color: '#E7B82F' }} className="mr-2" />
      <h3 className="text-sm text-secondary-yellow dark:text-gray-200">Upgrade My Membership</h3>
    </div>
  </div>
</form>


</section>

  )
}

export default ContactForm
