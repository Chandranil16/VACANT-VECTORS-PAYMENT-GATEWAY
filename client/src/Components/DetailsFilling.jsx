import{ useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const DetailsFilling = () => {
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    email: '',
    phoneNumber: '',
    amount: '',
    countryCode: '+1', // Default country code
    currency: 'USD', // Default currency
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value, country) => {
    setFormData({
      ...formData,
      phoneNumber: value,
      countryCode: `+${country.dialCode}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, userId, email, phoneNumber, amount } = formData;
    if (!name || !userId || !email || !phoneNumber || !amount) {
      alert('This field is mandatory');
      return;
    }
    // Handle form submission
    console.log(formData);
  };

  const handleCancel = () => {
    // Handle cancel action
    setFormData({
      name: '',
      userId: '',
      email: '',
      phoneNumber: '',
      amount: '',
      countryCode: '+1',
      currency: 'USD',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-black rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              User ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your user id"
              className="w-full px-3 py-2 border border-black rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-black rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputStyle={{ width: '100%', border: '1px solid black', borderRadius: '9999px', transition: 'background-color 0.3s ease-in-out' }}
              containerStyle={{ width: '100%' }}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                placeholder: 'Enter your phone number',
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Amount <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="px-3 py-2 border border-black rounded-l-full transition duration-300 ease-in-out hover:bg-gray-200"
                required
              >
                <option value="USD">$ (USD)</option>
                <option value="EUR">€ (EUR)</option>
                <option value="GBP">£ (GBP)</option>
                <option value="INR">₹ (INR)</option>
                {/* Add more currencies as needed */}
              </select>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter the amount"
                className="w-full px-3 py-2 border border-black rounded-r-full transition duration-300 ease-in-out hover:bg-gray-200"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="w-1/2 bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out mx-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out mx-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsFilling;