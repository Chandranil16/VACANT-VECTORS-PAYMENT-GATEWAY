//import DetailsFilling from './Components/DetailsFilling';
//import PrivacyPolicy from './Components/PrivacyPolicy';
//import TermsConditions from './Components/TermsConditions';
//import ContactUs from "./Components/ContactUs";
//import Howitworks from "./Components/Howitworks";
import { useState } from "react";
import Success from "./Components/Success";
//import Failed from "./Components/Failed";
//import Retry from "./Components/Retry";
//import Error from "./Components/Error";
//import ViewTransaction from "./Components/ViewTransaction";
//import Dashboard from "./Components/Dashboard";
//import LandingPage from "./Components/LandingPage";
const App = () => {
  const [open, setOpen] = useState(true);

  const calculateOrderSummary = (transactions) => {
    const subtotal = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    const shipping = 10.00; // This could be calculated based on some logic
    const tax = subtotal * 0.05; // Assuming a 5% tax rate
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const transactions = [
    { id: 1, amount: 50.00 },
    { id: 2, amount: 50.00 }
  ];

  const orderSummary = calculateOrderSummary(transactions);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Success />
      {<Success open={open} onClose={handleClose} orderSummary={orderSummary}/>}
    </div>
  );
};

export default App;