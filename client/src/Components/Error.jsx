const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-2xl text-center w-full max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4 transition duration-300 transform hover:scale-110">OOPS!!</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 transition duration-300 transform hover:scale-110">Error 404</h2>
        <p className="text-gray-700 mb-8">Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          Please check the URL for errors or try the following:
        </p>
        <ul className="text-gray-600 mb-8 list-disc list-inside">
          <li>Go back to the previous page</li>
          <li>Contact our support team if the problem persists</li>
        </ul>
        <button 
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
          onClick={() => window.location.href = '/'}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default Error;
