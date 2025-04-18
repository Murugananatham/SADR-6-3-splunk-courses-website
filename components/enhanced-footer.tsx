import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Youtube } from "lucide-react"
import Link from "next/link"

export function EnhancedFooter() {
  return (
    <footer className="relative z-0 transition-colors duration-300 overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15)_0%,transparent_60%)] -z-10"></div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white"><span className="text-green-600">Soft</span> Mania</h2>
            </div>
            <p className="text-gray-400 mb-6">Expert Splunk Training Solutions for professionals and organizations.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/softmania-tech" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@SoftManiaTech" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.instagram.com/softmaniatech" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          {/* Training Programs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Training Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/SADR-6"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  One-to-One Training
                </Link>
              </li>
              <li>
                <Link
                  href="/SADR-3"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Fast-Track Program
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Certification Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/splunk-trainings/corporate"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Corporate Training
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
              <Link href="mailto:info@softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              </Link>
              <Link href="mailto:info@softmania.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="text-gray-400">info@softmania.in</span>
              </Link>
              </li>

              <li className="flex items-start">
              <Link href="https://wa.me/918317349618" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              </Link>
              <Link href="https://wa.me/918317349618" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <span className="text-gray-400">+91 8317349618</span>
              </Link>
              </li>
              
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400"> BommamPatty, Akkalampatti, Tamil Nadu 637212</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SoftMania. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="https://splunk.softmania.in/#/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="https://splunk.softmania.in/#/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Terms & conditions
            </Link>
            <Link href="https://splunk.softmania.in/#/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

