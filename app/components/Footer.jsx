import Link from "next/link"

export const Footer = () => {
  return (
    <footer
  className="text-center  lg:text-left mt-11 bg-navbar">
  {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Tailwind Elements section --> */}
      <div>
        <h6
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-4 w-4 text-white">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          Blessed Solutions Pumbling
        </h6>
        <p className="text-white">
        Reliable plumbing solutions for your home or business. Professional repairs, installations, and maintenance services. Contact us today.
        </p>
      </div>
      {/* <!-- Products section --> */}
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
          Pages
        </h6>
        <p className="mb-4 text-white">
          <Link href="#!"
            >Home</Link>
        </p>
        <p className="mb-4 text-white">
          <Link href="#!" 
            >Services</Link>
        </p>
        <p className="mb-4 text-white">
          <Link href="#!" 
            >Contact</Link>
        </p>
        <p className="text-white">
          <Link href="#!" 
            >About Us</Link>
        </p>
      </div>
      {/* <!-- Useful links section --> */}
      <div className="">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
          Useful links
        </h6>
        <p className="mb-4 text-white">
          <Link href="https://wa.link/t65qda" target="_blank"
            >WhatsApp</Link>
        </p>
        <p className="mb-4 text-white">
          <Link href="#!" 
            >Contact Form</Link>
        </p>
        <p className="mb-4 text-white">
          <Link href="#!" 
            >Privacy Policy</Link>
        </p>
        <p className="text-white">
          <Link href="#!" 
            >Help</Link>
        </p>
      </div>
      {/* <!-- Contact section --> */}
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 text-white">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          info@example.com
        </p>
      </div>
    </div>
  </div>

  {/* <!--Copyright section--> */}
  <div
    className="flex items-center justify-center p-6 lg:justify-between">
    <div className="mr-12 hidden lg:block">
      <span className="text-white"><span>©</span> 2023 Copyright: Blessed Solutions Pumbling</span>
    </div>
    {/* <!-- Social network icons container --> */}
    <div className="flex justify-center">
      <Link href="#!" className="mr-6" aria-label="Facebook Link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </Link>
      <Link href="#!" className="mr-6" aria-label="Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </Link>
      <Link href="#!" className="mr-6" aria-label="Instagram Link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </Link>
    </div>
  </div>
</footer>
  )
}