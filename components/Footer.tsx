import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">SleepTracker</h2>
            <p className="text-sm">Track your sleep, improve your health.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className=" hover:text-purple-600 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-purple-600 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className=" hover:text-purple-600 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} SleepTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
