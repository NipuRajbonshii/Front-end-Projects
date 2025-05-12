import { useId } from "react"



export function InputField({
    label,
    amount,
    currencyOptions = [],
    changeCurrency,
    changeAmount,
    amoundDisabled = false,
    currencyDisabled = false,
    selectedCurrency,
    className = ""
}){
    const id = useId();
 return(
       <div className={`w-full flex flex-wrap h-28 rounded-xl bg-white px-5 items-center justify-between mb-3 ${className} `}>
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input
            id={id}
            value={amount}
            onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
            disabled={amoundDisabled}
             type="number"
              />
        </div>
        <div className="flex flex-col">
            <p>Currency Type</p>
            <select 
            value={selectedCurrency}
            disabled={currencyDisabled}
            onChange={(e) => changeCurrency && changeCurrency(e.target.value)}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
 )

}
