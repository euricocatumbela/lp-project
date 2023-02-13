import React, { createContext, useState, useEffect, useContext, } from "react"
import { toast } from "react-hot-toast"

interface ContextData {
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
    showCart: boolean;
    setshowCart: React.Dispatch<React.SetStateAction<boolean>>
    increaseQty: () => void;
    decreaseQty: () => void;
    qty: number;
    setQty: React.Dispatch<React.SetStateAction<number>>
}

export const DataContext = createContext<ContextData>({
    data: "",
    setData: () => { },
    showCart: true,
    setshowCart: () => { },
    increaseQty: () => { },
    decreaseQty: () => { },
    qty: 1,
    setQty: () => { }

});

interface DataContextProviderProps {
    children: React.ReactNode;
}


export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const [data, setData] = useState<string>("Hello Eurico");
    const [showCart, setshowCart] = useState<boolean>(false)
    const [cart, setcart] = useState<[]>()
    const [cartItems, setcartItems] = useState<number>(0)
    const [qty, setQty] = useState<number>(0)
    const [totalPrice, settotalPrice] = useState<number>(0)
    const [totalQuantities, settotalQuantities] = useState<number>(0)

    const increaseQty = () => {
        setQty((previous) => previous + 1)
    }
    const decreaseQty = () => {
        setQty((previous) => previous - 1)
    }
    return (
        <DataContext.Provider value={{ data, setData, showCart, setshowCart, increaseQty, decreaseQty, qty, setQty }}>
            {children}
        </DataContext.Provider>
    );
};






