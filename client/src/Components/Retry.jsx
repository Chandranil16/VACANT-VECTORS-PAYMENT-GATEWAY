import { FaRedo } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Retry = ({ onClose, onRetry }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center w-11/12 sm:w-96 relative">
                
                <div className="flex items-center justify-center mb-4">
                    <h1 className="text-xl sm:text-2xl font-bold mr-2">Try Again!!</h1>
                    <FaRedo className="text-xl sm:text-2xl animate-spin" />
                </div>
                <p className="text-gray-700 mb-4">Your payment was not done, please retry again.</p>
                <div className="flex justify-center space-x-2 sm:space-x-4">
                    <button onClick={onRetry} className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-blue-600">
                        Retry
                    </button>
                    <button onClick={onClose} className="bg-gray-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-gray-600">
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

Retry.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRetry: PropTypes.func.isRequired,
};

export default Retry;