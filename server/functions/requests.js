const methodNotAllowed = (req, res) => {
    res.status(405).send({
        success: false,
        message: 'Method Not Allowed',
    });
};

module.exports = {
    methodNotAllowed
}