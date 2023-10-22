const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thougtsRoutes = require("./thougtsRoutes");

router.use("/users", userRoutes);
router.use("/thougts", thougtsRoutes);

module.exports = router;
