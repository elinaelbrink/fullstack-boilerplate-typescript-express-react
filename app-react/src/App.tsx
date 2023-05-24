import { useEffect } from 'react';
import './App.css';
import SubmitNewTransaction from './components/SubmitNewTransaction';
import TransactionHistory from './components/TransactionHistory';

function App() {


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
