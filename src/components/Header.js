import BandLogo from '../assets/BandLogo.png';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';

export default function Header({ size = 'small', className }) {
  const logoSize = {
    small: '100px',
    large: '200px',
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex items-center justify-between px-6 py-6 lg:px-14"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Four Card Set</span>
            <img
              src={BandLogo}
              height={logoSize[size]}
              width={logoSize[size]}
              alt="homepage banner"
              className="w-12 h-12 md:h-16 md:w-16"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-8 h-8 " aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Navigation />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex flex-col w-full px-6 py-6 overflow-y-auto bg-black sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Four Card Set</span>
              <img
                src={BandLogo}
                height={logoSize[size]}
                width={logoSize[size]}
                alt="homepage banner"
                className="w-12 h-12 md:h-16 md:w-16"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-8 h-8 " aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="py-6 space-y-2">
                <Navigation />
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
