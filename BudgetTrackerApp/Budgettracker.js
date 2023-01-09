class TransactionHistoryScreen {
    constructor(container, controller) {
      this.container = container;
      this.controller = controller;
      this.transactions = controller.data.transactions;
  
      // Create the elements for the screen
      this.heading = document.createElement("h1");
      this.heading.textContent = "Transaction History";
      this.container.appendChild(this.heading);
      this.table = document.createElement("table");
      this.container.appendChild(this.table);
  
      // Add the table headings
      const headings = ["Date", "Type", "Category", "Amount"];
      const thead = document.createElement("thead");
      this.table.appendChild(thead);
      const tr = document.createElement("tr");
      thead.appendChild(tr);
      headings.forEach(heading => {
        const th = document.createElement("th");
        th.textContent = heading;
        tr.appendChild(th);
      });
  
      // Add a form for filtering the transactions
      this.form = document.createElement("form");
      this.form.addEventListener("submit", e => this.filterTransactions(e));
      this.container.appendChild(this.form);
      this.categoryLabel = document.createElement("label");
      this.categoryLabel.textContent = "Category:";
      this.form.appendChild(this.categoryLabel);
      this.categoryInput = document.createElement("input");
      this.form.appendChild(this.categoryInput);
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
      this.submitButton.textContent = "Filter Transactions";
      this.form.appendChild(this.submitButton);
      }
      
      // Method for rendering the screen
      render() {
      // Sort the transactions by date
      this.transactions.sort((a, b) => a.date - b.date);
  // Clear the table
this.table.innerHTML = "";

// Add the transactions to the table
const tbody = document.createElement("tbody");
this.table.appendChild(tbody);
this.transactions.forEach(transaction => {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  const dateTd = document.createElement("td");
  dateTd.textContent = transaction.date;
  tr.appendChild(dateTd);
  const typeTd = document.createElement("td");
  typeTd.textContent = transaction.type;
  tr.appendChild(typeTd);
  const categoryTd = document.createElement("td");
  categoryTd.textContent = transaction.category;
  tr.appendChild(categoryTd);
  const amountTd = document.createElement("td");
  amountTd.textContent = transaction.amount;
  tr.appendChild(amountTd);
});
}

// Method for filtering the transactions
filterTransactions(e) {
e.preventDefault();
// Get the filter criteria from the form
const category = this.categoryInput.value;
const from = this.fromInput.value;
const to = this.toInput.value;
// Filter the transactions
this.transactions = this.controller.data.transactions.filter(transaction => {
if (category && transaction.category !== category) {
return false;
}
if (from && transaction.date < from) {
return false;
}