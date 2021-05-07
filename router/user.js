const { Router } = require("express");
const Yup = require("yup");

const router = new Router();



const schema = Yup.object().shape({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد")
        .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد"),
    email: Yup.string()
        .email("ایمیل معتبر نمی باشد")
        .required("ایمیل الزامی می باشد"),
    password: Yup.string()
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
        .max(255, "کلمه عبور نباید بیشتر از 255 کاراکتر باشد")
        .required("کلمه عبور الزامی می باشد"),
    confirmPassword: Yup.string()
        .required("تکرار کلمه عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null],"کلمه عبور یکسان نیست"),
});


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
    schema.validate(req.body)
.then(RESULT => {
    console.log(RESULT);
    res.redirect("/user/login");
}).catch((ERR) => { 
    console.log(ERR.errors)
    res.render("register", {
        pageTitle: "ثبت نام | خطا",
        path: "/css/signin.css",
        errors: ERR.errors,
    });
})

});

module.exports = router;
