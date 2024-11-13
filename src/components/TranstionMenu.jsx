import React, { useState } from 'react';

const TranstionMenu = ({ onIncome, onExpense }) => {
    const [menu, setMenu] = useState(false);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('income');

    const toggleButton = () => {
        setMenu(!menu);
    };

    const handleAddTransaction = () => {
        if (transactionType === 'income') {
            onIncome(Number(amount));
        } else {
            onExpense(Number(amount));
        }
        setAmount(0); // Reset amount input
    };

    return (
        <div className='mt-6 flex flex-col items-center'>
            <button className='bg-black text-white p-2 rounded-lg' onClick={toggleButton}>
                Add Transaction
            </button>
            {menu && (
                <div className='flex flex-col items-center mt-4'>
                    <input
                        required
                        type='text'
                        placeholder='Enter Title'
                        className='p-2 border rounded mb-2 text-gray-700'
                    />
                    <input
                        required
                        type='number'
                        placeholder='Enter Amount'
                        className='p-2 border rounded mb-2 text-gray-700'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <select
                        className='p-2 border rounded mb-2 text-gray-700'
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <button className='bg-blue-500 text-white p-2 rounded' onClick={handleAddTransaction}>
                        Confirm Transaction
                    </button>
                </div>
            )}
        </div>
    );
};

export default TranstionMenu;
