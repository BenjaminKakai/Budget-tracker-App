class HomeScreen {
    constructor(container, controller) {
      this.container = container;
      this.controller = controller;
  
      // Display the budget summary
      this.budgetLabel = document.createElement("h1");
      this.budgetLabel.textContent = "Budget Summary";
      this.container.appendChild(this.budgetLabel);
      this.incomeLabel = document.createElement("p");
      this.incomeLabel.textContent = `Total Income: ${this.controller.income}`;
      this.container.appendChild(this.incomeLabel);
      this.expensesLabel = document.createElement("p");
      this.expensesLabel.textContent = `Total Expenses: ${this.controller.expenses}`;
      this.container.appendChild(this.expensesLabel);
      this.balanceLabel = document.createElement("p");
      this.balanceLabel.textContent = `Net Balance: ${this.controller.balance}`;
      this.container.appendChild(this.balanceLabel);
  
      // Offer quick access to key features
      this.addButton = document.createElement("button");
      this.addButton.textContent = "Add Transaction";
      this.addButton.addEventListener("click", () => this.controller.showScreen("AddTransactionScreen"));
      this.container.appendChild(this.addButton);
      this.reportButton = document.createElement("button");
      this.reportButton.textContent = "View Reports";
      this.reportButton.addEventListener("click", () => this.controller.showScreen("ReportScreen"));
      this.container.appendChild(this.reportButton);
    }
  }
  