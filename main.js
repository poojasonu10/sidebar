    const btn_menu = document.querySelector(".btn_menu");
    const side_bar = document.querySelector(".sidebar");

    btn_menu.addEventListener("click", function() {
        side_bar.classList.toggle("expand");
        changebtn()
    });

    function changebtn() {
        if (side_bar.classList.contains("expand")) {
            btn_menu.classList.replace("fa-bars", "fa-xmark");
        }
        else{
            btn_menu.classList.replace("fa-xmark", "fa-bars");
        }
    }

    const btn_theme = document.querySelector(".theme-btn");
    const theme_ball = document.querySelector(".theme-ball");

    const localDate = localStorage.getItem("theme");

    if (localDate == null) {
        localStorage.setItem("theme", "light");
    }

    if(localDate == "dark") {
        document.body.classList.add("dark-mode");
        theme_ball.classList.add("dark");
    }
    else if(localDate == "light") {
        document.body.classList.remove("dark");
        theme_ball.classList.remove("dark");
    }

    btn_theme.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        theme_ball.classList.toggle("dark");
        if(document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        }
        else {
            localStorage.setItem("theme", "light");
        }
    })