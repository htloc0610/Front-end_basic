$(document).ready(function() {
    // Initialize jQuery UI Dialog
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "OK": function() {
                $(this).dialog("close");
                // Focus on username input and clear form
                $("#username").focus();
                $("#loginForm")[0].reset();
            }
        }
    });

    // Handle Login Button Click
    $("#loginBtn").click(function() {
        const username = $("#username").val().trim();
        const password = $("#password").val().trim();

        if (!username || !password) {
            $("#dialog-message").text("Thông tin đăng nhập không chính xác!");
            $("#dialog").dialog("open");
        } else {
            $("#dialog-message").text("Đăng nhập thành công!");
            $("#dialog").dialog("open");

            // After 3 seconds, hide login form and show table
            setTimeout(function() {
                $("#login-form").addClass("d-none");
                $("#table-container").removeClass("d-none");
            }, 3000);
        }
    });

    // Handle Social Media Icon Clicks
    $(".facebook").click(function(e) {
        e.preventDefault();
        window.open("https://www.facebook.com", "_blank");
    });

    $(".twitter").click(function(e) {
        e.preventDefault();
        window.open("https://www.twitter.com", "_blank");
    });

    $(".google").click(function(e) {
        e.preventDefault();
        window.open("https://www.google.com", "_blank");
    });
});