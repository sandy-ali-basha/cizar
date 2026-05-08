function toggleDetails(id) {
    $("#" + id).toggle();
}

function showForm() {
    $("#orderForm").removeClass("d-none");
}

function submitOrder() {

    let name = $("#fullName").val();
    let national = $("#nationalId").val();
    let birth = $("#birthDate").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();

    let nameRegex = /^[\u0600-\u06FF\s]+$/;
    let nationalRegex = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
    let birthRegex = /^\d{4}-\d{2}-\d{2}$/;
    let mobileRegex = /^(09)(3|4|5|6|8|9)\d{7}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("احرف هجائية فقط باللغ العربية - الاسم غير صالح");
        return;
    }

    if (!nationalRegex.test(national)) {
        alert("تحقق من الرقم الوطني ");
        return;
    }

    if (!birthRegex.test(birth)) {
        alert("ادخل تاريخ الميلاد");
        return;
    }

    if (!mobileRegex.test(mobile)) {
        alert("رقم الموبايل يجب ان يبدأ ب 09 ويتكون من 10 أرقام");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("الرجاء إدخال بريد إلكتروني صالح");
        return;
    }

    let meals = "";
    let total = 0;

    $(".meal-check:checked").each(function () {

        let mealName = $(this).data("name");
        let mealPrice = parseInt($(this).data("price"));

        meals += mealName + "<br>";
        total += mealPrice;

    });

    let finalPrice = total - (total * 0.05);

    localStorage.setItem("meals", meals);
    localStorage.setItem("finalPrice", finalPrice);

    window.location.href = "order.html";
}