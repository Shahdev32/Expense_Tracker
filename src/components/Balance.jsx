import React, { useState } from 'react';
import TranstionMenu from './TranstionMenu';

const Balance = () => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    const onIncome = (amount) => {
        setIncome(income + amount);
        setBalance(balance + amount);
    };

    const onExpense = (amount) => {
        setExpense(expense + amount);
        setBalance(balance - amount);
    };

    return (
        <div className='flex flex-col items-center gap-2'>
            <p className='text-2xl mt-16'>Balance: <span className='font-bold'>{balance}</span></p>
            <div className='bg-green-800 p-2 rounded-xl'>
                Income: <span className='font-bold'>{income}</span>
            </div>
            <div className='bg-red-800 p-2 rounded-xl'>
                Expense: <span className='font-bold'>{expense}</span>
            </div>
            <TranstionMenu onIncome={onIncome} onExpense={onExpense} />
        </div>
    );
};

export default Balance;
