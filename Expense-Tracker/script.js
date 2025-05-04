
document.addEventListener("DOMContentLoaded", () => {
    const expForm = document.getElementById("expense-form");
    const expName = document.getElementById("expense-name");
    const expAmount = document.getElementById("expense-amount");
    const expList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-amount');

    let nameData;
    let amountData;
    let expenses = JSON.parse(localStorage.getItem('exp')) || [];
    let total = calculateTotal();
    displayTotal();

    expenses.forEach(exp => render(exp))
    expForm.addEventListener("submit", (e) => {
        e.preventDefault();
        nameData = expName.value.trim();
        amountData = Number(expAmount.value.trim());
        expName.value="";
        expAmount.value="";

       if(nameData !== "" && !isNaN(amountData) && amountData>0){
        const expens = {
            id: Date.now(),
            name: nameData,
            amount: amountData
        }




        render(expens);
        expenses.push(expens);
        displayTotal();
        saveExpense();
       }

    })


    function render(expense){
        const li = document.createElement('li');
        li.setAttribute('data-id', expense.id);
        li.innerHTML = `
        <span>${expense.name} - $${expense.amount}</span>
        <button>Delete</delete>
        `;
        expList.appendChild(li);

        li.querySelector('button').addEventListener("click", (e) => {
            expenses = expenses.filter(ex => ex.id !== expense.id);
            li.remove();
            saveExpense();
            displayTotal();
        })

    }

    function calculateTotal(){
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
    function displayTotal(){
        total = calculateTotal();
        totalDisplay.textContent = total.toFixed(2);
    }

    function saveExpense(){
        localStorage.setItem('exp', JSON.stringify(expenses));
    }
})
