import { useEffect, useState } from "react";

const Transaction = ({ transaction }) => {
  const [filteredTransaction, setFilteredTransaction] = useState(transaction);
  const [searchText, setSearchText] = useState("");

  const filterData = () => {
    if (!searchText || !searchText.trim().length) {
      // If there is no search text, reset to the original transaction array
      setFilteredTransaction(transaction);
      return;
    }

    let tnx = [...transaction];
    tnx = tnx.filter((payload) =>
      payload.descrip.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setFilteredTransaction(tnx);
  };

  useEffect(() => {
    filterData();
  }, [transaction, searchText]);

  return (
    <>
      <h4>Transactions</h4>
      <input
        placeholder="search"
        className="transactionSearch"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          filterData();
        }}
      />
      {filteredTransaction?.length ? (
        filteredTransaction.map((payload, i) => (
          <div
            key={i}
            className={`transaction-item ${
              payload.type === "EXPENSE" ? "expense" : "income"
            }`}
          >
            <span>{payload.descrip}</span>
            <span>${payload.amount}</span>
          </div>
        ))
      ) : (
        <p>No transactions available</p>
      )}
    </>
  );
};

export default Transaction;


