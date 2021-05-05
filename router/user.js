const { Router } = require("express");

const router = new Router();

router.get("/register", (req, res) => {
    res.render("register", {
        pageTitle: "ثبت نام",
        path: "/css/signin.css"
    });
});

router.get("/login", (req, res) => {
    res.render("login", {
        pageTitle: "ورود به حساب کاربری",
        path: "/css/signin.css"
    })
})

router.post("/register", (req, res) => {
    console.log(req.body);
});

module.exports = router;
