import { useEffect, useState } from "react";



export function currencyInfo(currency){

    const [data, setData] = useState({});

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) =>  res.json())
        .then((dat) => setData(dat[currency]))
        .catch((error) => {
            console.error("Error fetching data", error);
        })

    }, [currency]);


    return data;
}