import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const ContactForm = () => {
  return (
    <div className="flex">
    <div className="flex-1 p-4 bg-gray-200 text-center">
      <AccountCircleIcon fontSize="large" className="mb-2" />
      <h2 className="text-lg font-bold">Account Details</h2>
      

      {/* Username Field */}
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm text-start font-medium text-gray-600 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-300 p-2 focus:outline-none"
        />
      </div>
    </div>

    <div className="flex-1 p-4 bg-gray-300 text-center">
      <PaymentIcon fontSize="large" className="mb-2" />
      <h2 className="text-lg font-bold">Payment Details</h2>
      <div className="flex flex-row mt-8">
      <CheckCircleIcon className="text-green-500 mr-2" />
        <p className="text-sm font-medium text-start  text-green-500">Verified Account</p>
      </div>
      
    </div>
  </div>
  )
}

export default ContactForm
