import React from 'react'
import NavBar from './pages/NavBar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import VendorDetails from './pages/VendorDetails.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import PlanPage from './pages/PlanPage.jsx'

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <LandingPage />
      {/* <PlanPage /> */}
      <VendorDetails />
      {/* <CheckoutPage /> */}
    </div>
  )
}

export default App