import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  FaClock,
  FaShieldAlt,
  FaWallet,
  FaChartLine,
  FaUndo,
  FaUserShield,
} from "react-icons/fa";

const LandingPage = () => {
  const images = ["./src/assets/Picture1.png"];
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "transform 0.5s ease";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.transition = "transform 0.5s ease";
  };
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const faqs = [
    {
      question: "How do I set up a payment gateway?",
      answer:
        "To set up a payment gateway, you need to sign up with a provider, integrate their API into your website, and configure your account settings.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "Most payment gateways support credit cards, debit cards, and various online payment methods like PayPal, Apple Pay, and Google Pay.",
    },
    {
      question: "Is there a setup fee for the payment gateway?",
      answer:
        "Some payment gateways charge a setup fee, while others offer free setup. It depends on the provider you choose.",
    },
    {
      question: "How long does it take to process a payment?",
      answer:
        "Payment processing times vary by provider, but most transactions are processed within a few seconds to a few minutes.",
    },
    {
      question: "How long will it take for the team to contact you?",
      answer:
        "Upon successfully filling up the form, our team will contact withing seven days",
    },
    {
      question: "How do I handle refunds?",
      answer:
        "Refunds can be processed through the payment gateway's dashboard or API. The process and time frame for refunds vary by provider.",
    },
    {
      question: "Is the payment gateway secure?",
      answer:
        "Reputable payment gateways use advanced security measures, such as encryption and tokenization, to protect sensitive information.",
    },
    {
      question: "Can I accept international payments?",
      answer:
        "Yes, many payment gateways support international payments, but you may need to enable this feature and comply with additional regulations.",
    },
    {
      question: "What currencies are supported?",
      answer:
        "Supported currencies vary by payment gateway. Check with your provider to see which currencies they support.",
    },
    {
      question: "How do I get support for my payment gateway?",
      answer:
        "Most payment gateways offer customer support through various channels, such as email, phone, and live chat.",
    },
  ];

  const currentImageIndex = 0;

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <section className="flex flex-col md:flex-row p-8 h-auto md:h-96">
        <div className="md:w-1/2 p-4">
          <h2
            className="text-3xl font-bold mb-4 transition duration-300 transform hover:scale-105 text-purple-600"
            style={{ fontFamily: "Cursive, sans-serif" }}
          >
            VACANT VECTORS PAYMENT GATEWAY
          </h2>
          <p
            className="mb-4 text-black-900"
            style={{ fontFamily: "Cursive, sans-serif" }}
          >
            Vacant Vectors is committed to providing the best services and
            products to our customers. Our mission is to innovate and lead the
            industry with our cutting-edge solutions.
          </p>
          <p
            className="text-black-900"
            style={{ fontFamily: "Cursive, sans-serif" }}
          >
            We believe in quality, integrity, and customer satisfaction. Join us
            on our journey to make the world a better place with our exceptional
            offerings.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#get-started"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-black transition duration-300 transform hover:scale-105"
            >
              Login
            </a>
            <a
              href="#learn-more"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-black transition duration-300 transform hover:scale-105"
            >
              Make payment
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4 relative flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={images[currentImageIndex]}
              alt="Brand"
              className="w-full h-full object-cover rounded-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section id="features" className="bg-gray-100 py-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2
            className="text-3xl font-bold mb-4 transition duration-300 transform hover:scale-105 text-purple-600"
            style={{ fontFamily: "Cursive, sans-serif" }}
          >
            Our Features
          </h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaClock className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24x7 Available</h3>
              <p className="text-sm">We are available 24x7 all time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% secure</h3>
              <p className="text-sm">We offer full security to users.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaWallet className="text-4xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Accept all payment methods
              </h3>
              <p className="text-sm">We accept all types of payment methods.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaChartLine className="text-4xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
              <p className="text-sm">Get insights on your transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaUndo className="text-4xl text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Refunds & Chargebacks</h3>
              <p className="text-sm">Support for refunds and chargebacks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-200 m-4 w-64">
              <div className="flex justify-center mb-4">
                <FaUserShield className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">User Authentication</h3>
              <p className="text-sm">Secure user authentication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-100 py-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl font-bold mb-4 transition duration-300 transform hover:scale-105 text-purple-600"
            style={{ fontFamily: "Cursive, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAnswerVisibility(index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none flex justify-between items-center"
              >
                <span className="font-bold">{faq.question}</span>
                {visibleAnswers[index] ? <FaMinus /> : <FaPlus />}
              </button>
              {visibleAnswers[index] && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Vacant Vectors</h2>
              <p className="text-gray-400">Innovating the Future</p>
            </div>
            <div className="flex space-x-4">
              <a href="#terms" className="hover:text-gray-400">
                Terms and Conditions
              </a>
              <a href="#privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Vacant Vectors. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
