import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

export default function ContactUs() {
  return (
    <div className="bg-black">
      <Header />
      <div className="h-screen max-w-5xl px-5 pt-10 mx-auto lg:py-20 lg:px-0">
        <h2
          className="mb-5 text-3xl font-bold tracking-tight text-white"
          id="contact"
        >
          Contact Us
        </h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
