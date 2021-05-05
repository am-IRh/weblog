const { Router } = require("express");

const router = new Router();
// weblog Index page
router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "وبلاگ",
        path: "css/styles.css"
    });
})

module.exports = router;