class SettingsScreen {
    constructor(container, controller) {
      this.container = container;
      this.controller = controller;
      this.data = controller.data;
  
      // Create the elements for the screen
      this.heading = document.createElement("h1");
      this.heading.textContent = "Settings";
      this.container.appendChild(this.heading);
      this.categoryList = document.createElement("ul");
      this.container.appendChild(this.categoryList);
      this.addCategoryForm = document.createElement("form");
      this.addCategoryForm.addEventListener("submit", e => this.addCategory(e));
      this.container.appendChild(this.addCategoryForm);
      this.addCategoryInput = document.createElement("input");
      this.addCategoryForm.appendChild(this.addCategoryInput);
      this.addCategoryButton = document.createElement("button");
      this.addCategoryButton.textContent = "Add Category";
      this.addCategoryForm.appendChild(this.addCategoryButton);
      this.reminderList = document.createElement("ul");
      this.container.appendChild(this.reminderList);
      this.addReminderForm = document.createElement("form");
      this.addReminderForm.addEventListener("submit", e => this.addReminder(e));
      this.container.appendChild(this.addReminderForm);
      this.categoryLabel = document.createElement("label");
      this.categoryLabel.textContent = "Category:";
      this.addReminderForm.appendChild(this.categoryLabel);
      this.categorySelect = document.createElement("select");
      this.addReminderForm.appendChild(this.categorySelect);
      this.amountLabel = document.createElement("label");
      this.amountLabel.textContent = "Amount:";
      this.addReminderForm.appendChild(this.amountLabel);
      this.amountInput = document.createElement("input");
      this.amountInput.type = "number";
      this.addReminderForm.appendChild(this.amountInput);
      this.dateLabel = document.createElement("label");
      this.dateLabel.textContent = "Date:";
      this.addReminderForm.appendChild(this.dateLabel);
      this.dateInput = document.createElement("input");
      this.dateInput.type = "date";
      this.addReminderForm.appendChild(this.dateInput);
      this.frequencyLabel = document.createElement("label");
      this.frequencyLabel.textContent = "Frequency:";
      this.addReminderForm.appendChild(this.frequencyLabel);
      this.frequencySelect = document.createElement("select");
      this.frequencySelect.innerHTML = `
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="annually">Annually</option>
      `;
      this.addReminderForm.appendChild(this.frequencySelect);
      this.addReminderButton = document.createElement("button");
      this.addReminderButton.textContent = "Add Reminder";
      this.addReminderForm.appendChild(this.addReminderButton);
      this.backupButton = document.createElement("button");
      this.backupButton.textContent = "Backup Data";
      this.backupButton.addEventListener("click", () => this.backupData());
      this.container.appendChild(this.backupButton);
      this.restoreButton = document.createElement("button");
      this.restoreButton.textContent = "Restore Data";
      this.restoreButton.addEventListener("click", () => this.restoreData());
      this.container.appendChild(this.restoreButton);
      this.exportButton = document.createElement("button");
      this.exportButton.textContent = "Export Data";
      this.exportButton.addEventListener("click", () => this.exportData());
      this.container.appendChild(this.exportButton);
    }
  
    // Method for adding a new budget category
    addCategory(e) {
      e.preventDefault();
      const category = this.addCategoryInput.value;
      // Add the category to the list
      this.data.categories.push(category);
      // Create a new list item for the category
      const item = document.createElement("li");
      item.textContent = category;
      this.categoryList.appendChild(item);
      // Clear the input field
      this.addCategoryInput.value = "";
    }
  
    // Method for adding a new bill reminder
    addReminder(e) {
      e.preventDefault();
      // Get the reminder details from the form
      const category = this.categorySelect.value;
      const amount = this.amountInput.value;
      const date = this.dateInput.value;
      const frequency = this.frequencySelect.value;
      // Add the reminder to the list
      this.data.reminders.push({
        category,
        amount,
        date,
        frequency
      });
      // Create a new list item for the reminder
      const item = document.createElement("li");
      item.textContent = `${category}: $${amount} ${frequency}`;
      this.reminderList.appendChild(item);
  
  
  