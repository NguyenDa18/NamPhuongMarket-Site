import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppAlert = () => {
  setTimeout(() => {
    toast.dark('😷 Face masks are required in-store.')
  }, 1000);
  toast('🛒 We are still open during COVID-19! Please stay safe.')
  return (
    <>
    </>
  )
}

export default AppAlert