export const UserData = [
    {
      id: 1,
      year: 'J',
      userGain: 7,
      userLost: 823,
    },
    {
      id: 2,
      year: 'K',
      userGain: 6,
      userLost: 345,
    },
    {
      id: 3,
      year: 'L',
      userGain: 6,
      userLost: 555,
    },
    {
      id: 4,
      year: 'M',
      userGain: 6,
      userLost: 4555,
    },
    {
      id: 5,
      year: 'N',
      userGain: 6,
      userLost: 234,
    },
  ];



  export const UserDataLine = [
    {
      id: 1,
      year: 'MON',
      userGain: 8,
      userLost: 823,
    },
    {
      id: 2,
      year: 'TUE',
      userGain: 3,
      userLost: 345,
    },
    {
      id: 3,
      year: 'WED',
      userGain: 5,
      userLost: 555,
    },
    {
      id: 4,
      year: 'THU',
      userGain: 5,
      userLost: 4555,
    },
    {
      id: 5,
      year: 'FRI',
      userGain: 5,
      userLost: 234,
    },
  ];

  export const UserDataLine2 = [
    {
      id: 1,
      year: 'MON',
      userGain: 8,
      userLost: 823,
    },
    {
      id: 2,
      year: 'TUE',
      userGain: 3,
      userLost: 345,
    },
    {
      id: 3,
      year: 'WED',
      userGain: 5,
      userLost: 555,
    },
    {
      id: 4,
      year: 'THU',
      userGain: 5,
      userLost: 4555,
    },
    {
      id: 5,
      year: 'FRI',
      userGain: 5,
      userLost: 234,
    },
  ];

  export const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidMobileNumber = (mobileNumber) => {
    // Basic mobile number format validation
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };
  
  export const isValidPostalCode = (postalCode) => {
    // Basic postal code format validation
    const postalCodeRegex = /^\d{5}$/;
    return postalCodeRegex.test(postalCode);
  };
  