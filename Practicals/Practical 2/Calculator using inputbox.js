"use script";
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans = document.getElementById("result");
document.getElementById("add").addEventListener("click", function ()
 { ans.value = parseInt(num1.value) + parseInt(num2.value);
}
);
document.getElementById("sub").addEventListener("click", function () { ans.value = parseInt(num1.value) - parseInt(num2.value);
});
document.getElementById("mul").addEventListener("click", function () { ans.value = parseInt(num1.value) * parseInt(num2.value);
});
document.getElementById("div").addEventListener("click", function () { ans.value = parseInt(num1.value) / parseInt(num2.value);
});
