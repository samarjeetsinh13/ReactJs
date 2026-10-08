import {useId} from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}){

    const amountId = useId();
    // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    // !!! Don't use to generate keys
    return(
        <>
            <div 
                className="bg-white/80 w-125 h-30 flex items-center justify-center gap-13 rounded-4xl">
                <div 
                    className="flex flex-col gap-2">
                    <label 
                        htmlFor={amountId} 
                        // for bind input and label
                        className="ml-1 font-bold text-slate-600">
                            {label}</label>
                    <input 
                        id={amountId}
                        type="text" 
                        placeholder="0" 
                        name="amount" 
                        value={amount} 
                        disabled={amountDisable} 
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        // if onAmountChange exist then call it. (Base condition), most of the time it can take values in string format
                        className=
                            "font-bold bg-white shadow-lg/50 shadow-slate-600 w-75 h-12 rounded-2xl outline-none text-left p-2 text-slate-600 text-lg"
                        />
                </div>
                <div 
                    className="flex flex-col items-center justify-center gap-2">
                    <label 
                        htmlFor="currencyType" 
                        className="font-bold text-slate-600">
                            Currency Type</label>
                    <select 
                        name='currencyType' 
                        className="h-10 w-22 rounded-2xl cursor-pointer bg-white hover:bg-slate-200 shadow-slate-600 shadow-lg/50 text-left text-slate-600 text-transform: uppercase font-bold p-2 outline-none" 
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}>
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>{currency}</option>
                            // To maximize performance in JSX loops, keys must be unique, 
                            // stable, and persistent. React uses the key prop as a distinct 
                            // identifier to track which items in a virtual DOM list have changed, 
                            // been added, or been removed
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Input