const toSlug = (text) => {
    return text.toLowerCase().replace(/ /g, "-");
};

module.exports = {
    toSlug
}