// import { useEffect, useState } from 'react'
// import BasicDetails from './BasicDetails'
// import Transaction from './Transaction'
// import './expense.css'
// const ExpenseTracer = () => {
//   const [transaction, setTransaction] = useState([])
//   const [expense, setExpense] = useState(0)
//   const [income, setIncome] = useState(0)
//   const transactionsAdd= (payload) => {
//     const transactionArray = [...transaction]
//     transactionArray.push(payload)
//     setTransaction(transactionArray)
//   }
  
//   const calculateBalance = () => {
//     let exp = 0;
//     let inc = 0;
//     transaction.map((payload) => {
//       payload.type === 'EXPENSE' ? (exp = exp + payload.amount) : (inc = inc + payload.amount)
//     });
//     setExpense(exp)
//     setIncome(inc)
//   }

//   useEffect(()=>{calculateBalance()},[transaction])
//   return (
    
//     <>
//       <section>
//         <div className="container">
//           <h1>Expense Tracer</h1>
       
//           <BasicDetails transactionsAdd={transactionsAdd} expense={expense} income={income} />
//           <Transaction transaction={transaction} />

//         </div>
        
//     </section>
//     </>
//   )
// }

// export default ExpenseTracer

import { useEffect, useState } from 'react';
import BasicDetails from './BasicDetails';
import Transaction from './Transaction';
import './expense.css';

const ExpenseTracer = () => {
  const [transaction, setTransaction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedTransaction = localStorage.getItem('transaction');
    if (storedTransaction) {
      setTransaction(JSON.parse(storedTransaction));
    }
    const storedExpense = localStorage.getItem('expense');
    if (storedExpense) {
      setExpense(Number(storedExpense));
    }
    const storedIncome = localStorage.getItem('income');
    if (storedIncome) {
      setIncome(Number(storedIncome));
    }
  }, []);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Update local storage on state change
  useEffect(() => {
    saveToLocalStorage('transaction', transaction);
    saveToLocalStorage('expense', expense);
    saveToLocalStorage('income', income);
  }, [transaction, expense, income]);

  const transactionsAdd = (payload) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    setTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((payload) => {
      payload.type === 'EXPENSE' ? (exp += payload.amount) : (inc += payload.amount);
    });
    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
  }, [transaction]);

  return (
    <>
      <section>
        <div className="container">
          <h1 className='mainHeading'>Expense Tracer</h1>
          <BasicDetails transactionsAdd={transactionsAdd} expense={expense} income={income} />
          <Transaction transaction={transaction} />
        </div>
      </section>
    </>
  );
};

export default ExpenseTracer;