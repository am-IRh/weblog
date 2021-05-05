const { Router } = require("express");
const router = new Router();

// root dashboard / route => dashboard/
router.get("/", (req, res) => {
    res.render("dashboard", {
        pageTitle: "پنل مدیریت| داشبورد",
        path: "css/dashboard.css",
        layout: "./layout/dashlayout.ejs"
    })
})
// login page / route => dashboard/login

module.exports = router;