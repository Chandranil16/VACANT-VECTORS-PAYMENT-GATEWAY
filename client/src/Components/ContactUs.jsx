import{ useState } from 'react';
import 'react-phone-input-2/lib/style.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, } = formData;
    if (!name || !email || !phoneNumber) {
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
      email: '',
      phoneNumber: '',
    });
  };

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-black">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
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
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-black rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                        className="w-full px-3 py-2 border border-black rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full px-3 py-2 border border-black rounded transition duration-300 ease-in-out hover:bg-gray-200"
                        required
                        style={{ resize: 'vertical', minHeight: '100px', maxHeight: '300px' }}
                    />
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

export default ContactUs;