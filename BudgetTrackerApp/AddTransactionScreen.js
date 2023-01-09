class AddTransactionScreen {
    constructor(container, controller) {
      this.container = container;
      this.controller = controller;
  
      // Create the form for entering transaction details
      this.form = document.createElement("form");
      this.form.addEventListener("submit", e => this.addTransaction(e));
      this.container.appendChild(this.form);
  
      // Add a dropdown menu for selecting the transaction type (income or expense)
      this.typeLabel = document.createElement("label");
      this.typeLabel.textContent = "Type:";
      this.form.appendChild(this.typeLabel);
      this.typeSelect = document.createElement("select");
      this.typeSelect.innerHTML = `
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      `;
      this.form.appendChild(this.typeSelect);
  
      // Add a text field for entering the amount
      this.amountLabel = document.createElement("label");
      this.amountLabel.textContent = "Amount:";
      this.form.appendChild(this.amountLabel);
      this.amountInput = document.createElement("input");
      this.amountInput.type = "number";
      this.form.appendChild(this.amountInput);
  
      // Add a text field for entering the category
      this.categoryLabel = document.createElement("label");
      this.categoryLabel.textContent = "Category:";
      this.form.appendChild(this.categoryLabel);
      this.categoryInput = document.createElement("input");
      this.form.appendChild(this.categoryInput);
  
      // Add a date picker for selecting the date
      this.dateLabel = document.createElement("label");
      this.dateLabel.textContent = "Date:";
      this.form.appendChild(this.dateLabel);
      this.dateInput = document.createElement("input");
      this.dateInput.type = "date";
      this.form.appendChild(this.dateInput);
  
      // Add a submit button
      this.submitButton = document.createElement("button");
      this.submitButton.textContent = "Add Transaction";
      this.submitButton.type = "submit";
      this.form.appendChild(this.submitButton);
    }
  
    // Method for adding a new transaction
    addTransaction(e) {
      e.preventDefault();
      // Get the transaction details from the form
      const type = this.typeSelect.value;
      const amount = this.amountInput.value;
      const category = this.categoryInput.value;
      const date = this.dateInput.value;
      // Create a new transaction object
      const transaction = { type, amount, category, date };
      // Add the transaction to the budget data
      this.controller.addTransaction(transaction);
      // Go back to the home screen
      this.controller.showScreen("HomeScreen");
    }
  }
  