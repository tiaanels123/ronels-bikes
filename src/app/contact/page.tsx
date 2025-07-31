import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  return (
    <div className="bg-white font-pt-sans flex-grow flex flex-col">
      <div className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-poppins text-3xl font-semibold text-primary mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="font-pt-sans" />
              <Input type="email" placeholder="Your Email" className="font-pt-sans" />
              <Textarea placeholder="Your Message" className="font-pt-sans" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-poppins">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="font-poppins text-3xl font-semibold text-primary mb-6">Our Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-primary" />
                <span className="text-gray-700">info@ronelsbikes.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-primary" />
                <span className="text-gray-700">(012) 030 1196</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-primary" />
                <span className="text-gray-700">1006 Ewald Rd, Eldoraigne, Centurion, 0157</span>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.660270332968!2d28.1579997!3d-25.8477377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95648a9160f61b%3A0x400be44b27fced60!2s1006%20Ewald%20Rd%2C%20Eldoraigne%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1754001249922!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location of Cycle City, CA 90210"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
