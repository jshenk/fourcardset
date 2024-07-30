import { ContactForm } from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

export default function ContactUs() {
  return (
    <div className="bg-black">
      <Header />
      <div className="h-screen max-w-5xl px-5 pt-10 mx-auto">
        <h2
          className="mb-20 text-3xl font-bold tracking-tight text-white lg:text-5xl"
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
