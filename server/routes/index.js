module.exports = (app) => {
    app.use("/api/v1/faculty", require("./faculty"));
    app.use("/api/v1/faculty-member", require("./faculty_member"));
    app.use("/api/v1/faculty-image", require("./faculty_image"));
    app.use("/api/v1/user", require("./user"));
    app.use("/api/v1/page", require("./page"));
};