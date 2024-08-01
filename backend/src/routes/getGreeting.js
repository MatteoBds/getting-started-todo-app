const GREETING = 'Bienvenue sur ma première application conteneur !';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
