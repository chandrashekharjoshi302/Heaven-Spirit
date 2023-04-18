import React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Beer from '../Pages/Beer'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Rum from '../Pages/Rum'
import Whicky from '../Pages/Whicky'
import Wishlist from '../Pages/Wishlist'

function AllRouts() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/user-profile" element={<UserProfile />} /> */}
        <Route path="/whisky" element={<Whicky />} />
        <Route path="/rum" element={<Rum />} />
        <Route path="/beer" element={<Beer />} />      
      </Routes>
    </div>
  )
}

export default AllRouts