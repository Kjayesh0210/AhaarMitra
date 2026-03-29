import React from 'react'
import NavBar from './pages/NavBar.jsx'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import ConfigurePlan4 from './pages/ConfigurePlan4.jsx'
import AhaarMitraMultiAddress10 from './pages/AhaarMitraMultiAddress10.jsx'
import TiffinSeeker9 from './pages/TiffinSeeker9.jsx';
import SecureCheckout5 from './pages/SecureCheckout5.jsx';
import AhaarMitraOnboarding11 from './pages/AhaarMitraOnboarding11.jsx';
import CheckoutConfirmation3 from './pages/CheckoutConfirmation3.jsx';
import DeliveryAddress14 from './pages/DeliveryAddress14.jsx';
import TiffinTrial2 from './pages/TiffinTrial2.jsx';
import VendorDetails1 from './pages/VendorDetails1.jsx';
import TiffinSeekerRegistration13 from './pages/TiffinSeekerRegistration13.jsx';
import AhaarMitraOrders15 from './pages/AhaarMitraOrders15.jsx';
const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <div className='my-10'>
        <Routes>
          < Route path="/1" element={<VendorDetails1 />} />
          < Route path="/2" element={<TiffinTrial2 />} />
          < Route path="/3" element={<CheckoutConfirmation3 />} />
          < Route path="/4" element={<ConfigurePlan4 />} />
          < Route path="/5" element={<SecureCheckout5 />} />
          < Route path="/9" element={<TiffinSeeker9 />} />
          < Route path="/10" element={<AhaarMitraMultiAddress10 />} />
          < Route path="/11" element={<AhaarMitraOnboarding11 />} />
          < Route path="/13" element={<TiffinSeekerRegistration13 />} />
          < Route path="/14" element={<DeliveryAddress14 />} />
          < Route path="/15" element={<AhaarMitraOrders15 />} />
          < Route path="/ConfigurePlan" element={<ConfigurePlan4 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App