const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === ""){

        alert("Please enter your username and password.");

        return;

    }

    // حفظ اسم المستخدم
    localStorage.setItem("userName", username);

    // الانتقال للصفحة الرئيسية
    window.location.href = "HOME.html";

});