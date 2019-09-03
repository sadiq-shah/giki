module.exports = (app) => {
    app.use("/api/v1/faculty", require("./faculty"));
    app.use("/api/v1/faculty-member", require("./faculty_member"));
    app.use("/api/v1/faculty-image", require("./faculty_image"));
};