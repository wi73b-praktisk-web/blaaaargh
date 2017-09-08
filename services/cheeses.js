const cheeses = require('../data/cheeses');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Returnerer et JSON objekt med alle oste
     * @returns {Object}
     */
    'getAll': () => cheeses,

    /**
     * getOne
     * Returnerer et JSON objekt med en enkelt ost
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });
        if (currentCheese !== null) {
            return currentCheese;
        } else {
            return {
                "code": "resourceNotFound",
                "message": varenr + " does not exist"
            };
        }
    }
};