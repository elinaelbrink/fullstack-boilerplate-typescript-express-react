import { useEffect, useState } from "react";

export default function useGetTransactions() {
    const [transactions, setTransactions] = useState([])
    const [isLoadingTransactions, setIsLoading] = useState(true);
    const [errorTransactions, setError] = useState(null);
    useEffect(() => {
        const fetchTransactions = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:5000/transactions')
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
                }
                const data = await response.json();
                setTransactions(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }
        fetchTransactions()
    }, [transactions])
    return { transactions, isLoadingTransactions, errorTransactions };
}