const GREETING = [
    "Bievenue sur mon premier site ! ",
    "Podcast.mbdiixcreations.com",
    "Welcome everyone !",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[ Math.floor(Math.random() * GREETING.length)],
    });
};
