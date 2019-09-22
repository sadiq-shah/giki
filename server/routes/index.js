module.exports = (app) => {
    app.use("/api/v1/faculty", require("./faculty"));
    app.use("/api/v1/faculty-member", require("./faculty_member"));
    app.use("/api/v1/faculty-image", require("./faculty_image"));
    app.use("/api/v1/user", require("./user"));
    app.use("/api/v1/course-pre-req", require("./course_pre_req"));
    app.use("/api/v1/course-co-req", require("./course_co_req"));
    app.use("/api/v1/page", require("./page"));
    app.use("/api/v1/page-tags", require("./page_tags"));
    app.use("/api/v1/article", require("./article"));
    app.use("/api/v1/course", require("./course"));
    app.use("/api/v1/permission", require("./permission"));
    app.use("/api/v1/role",require("./role"));
};