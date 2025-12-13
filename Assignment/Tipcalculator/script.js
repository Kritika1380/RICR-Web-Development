function Calculate() {
    const bill = Number(document.getElementById('billAmount').value);
    const tipPercentage = Number(document.getElementById('tipPercentage').value);
    const persons = Number(document.getElementById('totalPerson').value);

    if (!(bill) || !(tipPercentage) || !(persons)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    const tipAmount = bill * tipPercentage / 100;
    const totalAmount = tipAmount;
    const perPerson = totalAmount / persons;

    document.getElementById('result').innerHTML =
        "Each Person Pays: ₹" + perPerson.toFixed(2);
       
}
