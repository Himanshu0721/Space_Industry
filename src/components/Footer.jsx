import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Space Research</h3>
            <p className="text-gray-600">Unveiling the Universe, Shaping the Future</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {/* <li><a href="https://hrconsulting.entrepreneurshipnetwork.net/" className="text-gray-600 hover:text-blue-900">Academy</a></li> */}
              {/* <li><a href="https://jobs.entrepreneurshipnetwork.net/" className="text-gray-600 hover:text-blue-900">Jobs</a></li> */}
              <li><a href="https://ten-space-research-psi.vercel.app" className="text-gray-600 hover:text-blue-900">Ten Space Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Webinars</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">info@entrepreneurshipnetwork.net</li>
              <li className="text-gray-600">India accelerator Noida UP, India-201301</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2024 Space Research. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
