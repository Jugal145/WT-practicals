function Age() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    
    var days = today.getDate() - birthdate.getDate();
    var months = today.getMonth() - birthdate.getMonth();
    
    var years = today.getFullYear() - birthdate.getFullYear();


    if (days < 0) {
        days += 30;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    if (months === 0 && days === 0 && today.getDate() < birthdate.getDate()) {
        years--;
    }
    document.getElementById("output").innerHTML = "Your age is: " + years + " Yrs, " + months + " Months, " + days + " Days.";
}
