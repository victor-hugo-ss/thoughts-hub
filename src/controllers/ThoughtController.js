const { where } = require('sequelize');
const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = class ThoughtController {
    static async showThought(req, res) {
        res.render('thoughts/home');
    }
};
