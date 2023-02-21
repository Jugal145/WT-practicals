var toyocar = {
name: "Toyota Innova",
    price: "Rs. 30,00,000",
    model: "2021",
    displayToyotaDetails: function() {
    document.getElementById("toyota").innerHTML ="<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>";
    }}
    var maruticar = {
    name: "Maruti Swift",
    price: "Rs. 6,00,000",
    model: "2021",
    displayMarutiDetails: function() {
    document.getElementById("maruti").innerHTML ="<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>";
    }
    }
    var mercedescar = {
    name: "MERCEDES BENZ",
    price: "Rs. 42,00,000",
    model: "2021",
    displayMerceDetails: function() {
    document.getElementById("mercedes").innerHTML ="<table><tr><th>Name</th><th>Price</th><th>Model</th></tr><tr><td>" + this.name + "</td><td>" + this.price + "</td><td>" + this.model + "</td></tr></table>";
    }
    }
