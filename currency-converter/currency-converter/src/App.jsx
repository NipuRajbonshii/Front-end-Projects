import { useState } from "react";
import { currencyInfo } from "./utils/currencyInfo";
import { InputField } from "./components/InputField";


export default function App() {

  const [form, setForm] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState(0);
   const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyDat = currencyInfo(form);
  const options = Object.keys(currencyDat);

  const swap = () => {
    setForm(to);
    setTo(form);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyDat[to]);
  }
  return (
    <div className="w-screen flex flex-wrap  items-center justify-center h-screen bg-no-repeat bg-cover " style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2013/07/18/10/56/pile-163497_1280.jpg')`}}>
      <form 
      className="max-w-135 w-full flex flex-col items-center p-5 h-80 bg-white/35 rounded-xl mx-10 border-1"
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
      >
      <InputField 
      label="from"
      amount={amount.toFixed(2)}
      changeAmount={(money) => setAmount(money)}
      currencyOptions={options} 
      changeCurrency={(currency) => setForm(currency)}
      selectedCurrency={form}
      />
      <div className="bg-blue-500 py-1.5 px-2 rounded-lg pos" onClick={swap}>Swap</div>
       <InputField 
      label="to"
      amount={convertedAmount.toFixed(2)}
      changeAmount={(money) => setConvertedAmount(money)}
      changeCurrency={(currency) => setTo(currency)}
      currencyOptions={options} 
      selectedCurrency={to}
      amoundDisabled
      />
      <button type="submit" className="bg-blue-500 py-1.5 px-1.5 rounded-xl w-full text-lg text-white hover:bg-blue-600 transition-colors duration-150 ">Convert {form.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
    </div>
  );
}
