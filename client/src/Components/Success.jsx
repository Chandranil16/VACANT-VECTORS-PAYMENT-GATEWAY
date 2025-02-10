import { FaCheckCircle } from 'react-icons/fa';
import Confetti from 'react-confetti';
import PropTypes from 'prop-types';

const Success = ({ open, onClose, orderSummary }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
      />
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <FaCheckCircle className="w-8 h-8 text-green-500 mr-3 animate-ping" />
          <h2 className="text-xl sm:text-2xl font-bold">Payment Successful!!</h2>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${orderSummary.subtotal}</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Shipping Charges</span>
              <span>${orderSummary.shipping}</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Tax Charges</span>
              <span>${orderSummary.tax}</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>${orderSummary.total}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onClose}
            className="w-full sm:w-1/2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Dashboard
          </button>
          <button
            onClick={() => {
              const printContent = `
                <h2>Payment Successful!!</h2>
                <h3>Order Summary</h3>
                <ul>
                  <li>Subtotal: $${orderSummary.subtotal}</li>
                  <li>Shipping Charges: $${orderSummary.shipping}</li>
                  <li>Tax Charges: $${orderSummary.tax}</li>
                  <li>Total Amount: $${orderSummary.total}</li>
                </ul>
              `;
              const printWindow = window.open('', '', 'height=400,width=600');
              printWindow.document.write('<html><head><title>Receipt</title></head><body>');
              printWindow.document.write(printContent);
              printWindow.document.write('</body></html>');
              printWindow.document.close();
              printWindow.print();
            }}
            className="w-full sm:w-1/2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

Success.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderSummary: PropTypes.shape({
    subtotal: PropTypes.number.isRequired,
    shipping: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default Success;