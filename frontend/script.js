let total = 0;

function login() {
    let name = document.getElementById("username").value;
    if (name === "") {
        alert("Enter your name");
        return;
    }
    document.getElementById("welcome").innerText = "Welcome, " + name + " 👋";
    document.getElementById("app").style.display = "block";
}

function addExpense() {
    let amount = document.getElementById("amount").value;
    if (amount === "" || amount <= 0) {
        alert("Enter valid amount");
        return;
    }
    total += parseInt(amount);
    document.getElementById("total").innerText = "₹" + total;
    document.getElementById("amount").value = "";
}
