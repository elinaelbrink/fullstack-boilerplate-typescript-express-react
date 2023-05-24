import { useEffect } from 'react';
import './App.css';
import SubmitNewTransaction from './components/SubmitNewTransaction';
import TransactionHistory from './components/TransactionHistory';

function App() {

  useEffect(() => {
    fetch('https://infra.devskills.app/transaction-management/api/3.1.0/transactions')
    .then(response => response.json())
    .then(res => console.log(res))
  }, [])


  return (
   <>
    <div className='body'>
      <div className='headerTitle'>Transaction Management</div>
      <div className='contentContainer'>
        <SubmitNewTransaction />
        <TransactionHistory />
      </div>
    </div>
   </>
  );
}

export default App;
