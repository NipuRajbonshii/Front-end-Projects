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
       <div className={`w-full  flex flex-wrap flex-col-reverse justify-center items-center sm:flex sm:flex-row sm:flex-wrap h-29 pb-1 rounded-xl bg-white px-5 sm:items-center sm:justify-between mb-2 ${className}  `}>
        <div className=" flex flex-row space-x-2  w-20  sm:flex-col">
            <label className="text-sm" htmlFor={id}>{label}</label>
            <input
            className="text-sm"
            id={id}
            value={amount}
            onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
            disabled={amoundDisabled}
             type="number"
              />
        </div>
        <div className="flex flex-col my-2">
            <p className="text-sm pb-1 sm:p-0">Currency Type</p>
            <select 
            className="text-sm w-full sm:w-full"
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
