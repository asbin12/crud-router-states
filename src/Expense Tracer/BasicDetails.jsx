import { useState } from "react"

const BasicDetails = ({transactionsAdd,income,expense}) => {
  const [isAddTrasnVisible, toggleAddTrans] = useState(false)
  const [amount,setAmount]=useState()
  const [descrip,setDescrip]=useState()
  const [type,setType]=useState("INCOME")


  const handleClick = () => {
    toggleAddTrans(!isAddTrasnVisible);
  };
  const addTransaction = () => {
    transactionsAdd({amount:Number(amount),descrip, type,id:Date.now()})
    toggleAddTrans()
    setDescrip('')
    setAmount('')
  }
  return (
    <>
      <div className="detailsContents">
      <div className="balanceBtnWrapper">
          <span className="balance"><span className="balanceInNumber">Rs.{ income-expense}</span>Balance</span>
        <button className="btn" onClick={handleClick}>
            {isAddTrasnVisible ? "Cancel" : "Add"}
    </button>
        </div>
        {isAddTrasnVisible &&    <form className="inpField">
          <input  placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
          <input type="text" placeholder="Description" value={descrip} onChange={(e)=>setDescrip(e.target.value)} />

          <span className="radioInput">
          <span className="radioInputCenter">
              <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"}
            onChange={(e)=>setType(e.target.value)}  />
            <label htmlFor="income">Income</label>
           </span>
            <span className="radioInputCenter">
            <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
            <label htmlFor="income">Expense</label>
            </span>
           
          </span>
          <button className="btn" onClick={addTransaction}>Add Transaction</button>
       </form>}
        <div className="expenseIncomeBox">
          <span>Income<span className="incomeGreen"> Rs.{income}</span></span>
          <span className="expenseBox">Expense<span className="expenseRed"> Rs.{expense}</span></span>
        
     </div>

        </div>
    </>
  )
}

export default BasicDetails



















