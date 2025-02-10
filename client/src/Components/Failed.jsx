import { FaTimesCircle } from 'react-icons/fa';

const Failed = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <FaTimesCircle className="text-red-600 animate-ping mr-2 sm:mr-4" size={24} sm:size={28} />
          <h2 className="text-2xl sm:text-3xl font-bold">Payment Failed</h2>
        </div>
        <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">There was a problem with your payment processing.</p>
        <div className="mb-4 sm:mb-6 text-center">
          <h3 className="text-lg sm:text-xl font-medium mb-2">Need help? Try this..</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base text-left">
            <li>Make sure you have entered correct details</li>
            <li>Check your network bandwidth</li>
            <li>Ensure your card has sufficient balance</li>
            <li>Contact your bank for more information</li>
            <li>Try using a different payment method</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-blue-600">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failed;