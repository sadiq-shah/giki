module.exports = (app) => {
    app.use("/api/v1/faculty", require("./faculty"));
};