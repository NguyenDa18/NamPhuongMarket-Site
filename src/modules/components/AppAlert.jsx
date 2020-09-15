import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppAlert = () => {
  setTimeout(() => {
    toast.error('😥 We will be closed tomorrow, 9/15.')
  }, 2000);
  setTimeout(() => {
    toast.dark('😷 Face masks are required in-store.')
  }, 1000);
  toast('🛒 We are still open during COVID-19! Please stay safe.')
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <ToastContainer />
    </>
  )
}

export default AppAlert