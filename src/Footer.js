import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const AppFooter = () => {
  return (
   <Footer className="flex flex-col py-6">
    <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
       <Link to="/">
       <Footer.Brand
        href="/"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Степлер&Ластик"
        name="Степлер&Ластик"
      /></Link>
      <Footer.Copyright
      className='mt-6'
      href="#"
      by="Степлер&Ластик"
      year={2022}
    />
</Footer>
  )
}
