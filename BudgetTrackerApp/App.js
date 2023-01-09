const budgetController = new BudgetController();

const homeContainer = document.getElementById("home-container");
const addTransactionContainer = document.getElementById("add-transaction-container");

const homeScreen = new HomeScreen(homeContainer, budgetController);
const addTransactionScreen = new AddTransactionScreen(addTransactionContainer, budgetController);

budgetController.showScreen("HomeScreen");
