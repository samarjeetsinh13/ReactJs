import { useState } from 'react';
import Input from './components/Input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import currencies from './assets/currencies.jpg';

function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo[from] ?? {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[from][to])
  }

  return (
    <>
      <div className='relative bg-slate-900 w-screen h-screen flex justify-center items-center'
          style={{ backgroundImage: `url(${currencies})` , backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className='relative z-10  w-screen h-screen flex justify-center items-center' 
              >

          <div className='bg-white/10 backdrop-blur-[1px] h-110 w-140 rounded-4xl flex flex-col gap-8 items-center justify-center ' >

            <div className="flex flex-col items-center justify-center gap-2">
              <Input
                amount={amount}
                selectCurrency={from}
                label={'From'}
                onCurrencyChange={setFrom}
                onAmountChange={setAmount}
                // onAmountChange = {(currency)=> {setFrom(currency)}}
                currencyOptions={currencyOptions}
                amountDisable
              />
              <button onClick={swap} 
                      className='absolute bg-blue-700/90 hover:bg-blue-800 cursor-pointer w-18 h-10 rounded-xl text-md font-bold text-white text-center'>swap</button>
              <Input 
                amount={convertedAmount}
                label={'To'}
                selectCurrency={to}
                onCurrencyChange={setTo}
                onAmountChange={setConvertedAmount}
                currencyOptions={currencyOptions}
                amountDisable
              />
            </div>

            <div >
              <button 
                className='bg-blue-700/80 hover:bg-blue-800 cursor-pointer h-14 w-64 rounded-2xl font-bold text-white text-lg'
                onClick={convert}>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>

          </div>

        </div>

      </div>
      
    </>
  )
}

export default App
