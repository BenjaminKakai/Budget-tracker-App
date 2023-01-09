class ReportScreen {
  constructor(container, controller) {
    this.container = container;
    this.controller = controller;
    this.data = controller.data;

    // Create the elements for the screen
    this.heading = document.createElement("h1");
    this.heading.textContent = "Reports";
    this.container.appendChild(this.heading);
    this.form = document.createElement("form");
    this.form.addEventListener("submit", e => this.generateReport(e));
    this.container.appendChild(this.form);
    this.typeLabel = document.createElement("label");
    this.typeLabel.textContent = "Type:";
    this.form.appendChild(this.typeLabel);
    this.typeSelect = document.createElement("select");
    this.typeSelect.innerHTML = `
      <option value="income">Income</option>
      <option value="expense">Expense</option>
      <option value="balance">Net Balance</option>
    `;
    this.form.appendChild(this.typeSelect);
    this.fromLabel = document.createElement("label");
    this.fromLabel.textContent = "From:";
    this.form.appendChild(this.fromLabel);
    this.fromInput = document.createElement("input");
    this.fromInput.type = "date";
    this.form.appendChild(this.fromInput);
    this.toLabel = document.createElement("label");
    this.toLabel.textContent = "To:";
    this.form.appendChild(this.toLabel);
    this.toInput = document.createElement("input");
    this.toInput.type = "date";
    this.form.appendChild(this.toInput);
    this.submitButton = document.createElement("button");
    this.submitButton.textContent = "Generate Report";
    this.form.appendChild(this.submitButton);
    this.chartContainer = document.createElement("div");
    this.container.appendChild(this.chartContainer);
  }

  // Method for generating the report
  generateReport(e) {
    e.preventDefault();
    // Get the report options from the form
    const type = this.typeSelect.value;
    const from = this.fromInput.value;
    const to = this.toInput.value;
    // Filter the transactions
    let transactions = this.data.transactions.filter(transaction => {
      if (transaction.date < from) {
        return false;
      }
      if (transaction.date > to) {
        return false;
      }
      return true;
    });
    // Sort the transactions by date
    transactions.sort((a, b) => a.date - b.date);
    // Group the transactions by month
    const groupedTransactions = {};
    transactions.forEach(transaction => {
      const month = transaction.date.substring(0, 7);
