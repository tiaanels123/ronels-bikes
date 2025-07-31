import { Gauge, Users, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white font-pt-sans flex-grow flex flex-col">
      <div className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            About Ronel's Motorbikes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fueled by adrenaline, dedicated to the ride. Discover the story behind your favorite motorbike shop.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full p-4 inline-block mb-4">
              <Target size={40} />
            </div>
            <h3 className="font-poppins text-2xl font-semibold text-primary mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide riders of all levels with the highest quality motorbikes, parts, and accessories, paired with expert advice and exceptional customer service.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full p-4 inline-block mb-4">
              <Gauge size={40} />
            </div>
            <h3 className="font-poppins text-2xl font-semibold text-primary mb-2">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2023, Ronel's Motorbikes started as a small workshop fueled by a passion for the open road. Today, we've grown into a trusted online retailer for the riding community.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full p-4 inline-block mb-4">
              <Users size={40} />
            </div>
            <h3 className="font-poppins text-2xl font-semibold text-primary mb-2">Our Team</h3>
            <p className="text-gray-600">
              Our team is composed of passionate riders and expert technicians who are here to help you with all your motorbike needs, from choosing the perfect ride to keeping it in peak condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
