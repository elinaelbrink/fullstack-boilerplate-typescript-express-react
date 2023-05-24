export default function SubmitNewTransaction() {

    return (
        <>
            <div className="newTransactionContainer">
                <h3 className="newTransactionHeader">Submit new transaction</h3>
                <form className='form' action="">
                    <p className="paragraph">Account ID:</p>
                    <input data-type="account-id" />
                    <p className="paragraph">Amount:</p>
                    <input data-type="amount" />
                    <input className="submit" data-type="transaction-submit" type="submit" />
                </form>
            </div>
        </>
    )
      
      
}