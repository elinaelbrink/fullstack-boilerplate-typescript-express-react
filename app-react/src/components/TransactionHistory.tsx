import useGetTransactions from "../hooks/Transactions";

export default function TransactionHistory() {

    const { transactions } = useGetTransactions();
    
    return (
        <>
            <div className="transactionHistoryContainer">
                <h3 className="transactionHistoryHeader">Transaction history</h3>
                {transactions.map((item) => {
                    if (item === "transaction") {
                        return (
                            <div 
                            data-type="transaction"
                            data-account-id="${transaction-account-id}"
                            data-amount="${transaction-amount}"
                            data-balance="${current-account-balance}">
                        </div>
                        )
                    }
                })}
            </div>
        </>
    )
}