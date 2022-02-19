const {describe, it} = require('mocha')
const testTxtToObject = require('../index')
const assert = require('assert')

describe('Object', function() {
    describe('Type', function() {
        it('Must be of type object', function() {
            assert.equal(typeof testTxtToObject, 'object')
        })
    })    
    describe('Empty', function() {
        it('Must not be an empty object', function() {
            assert(testTxtToObject != {})
        })
    })
    describe('Entries', function() {
        const entries = Object.keys(testTxtToObject.testTxtToObject)
        describe('Minimum', function() {
            it('Must have at least two entries', function() {
                const num_entries = Object.keys(testTxtToObject.testTxtToObject).length
                assert(num_entries >= 2)
            })
        })
        describe('Days', function() {
            describe('Minimum', function() {
                it('Must have at least one day', function() {
                    
                    for(let i = 0; i < entries.length; i++){
                        const days = Object.keys(testTxtToObject.testTxtToObject[entries[i]])
                        if(days.length < 1){
                            assert(false)                       
                        }
                    }
                })
            })
            describe('Arrive & Exit', function() {
                it('Must have at least one day with an arrival and exit time', function() {
                    for(let i = 0; i < entries.length; i++){
                        const days = Object.keys(testTxtToObject.testTxtToObject[entries[i]])
                        for(let j = 0; j < days.length; j++){
                            const schedule = testTxtToObject.testTxtToObject[entries[i]][days[j]]
                            const arrive = schedule.arrival
                            const exit = schedule.exit
                            if(arrive == undefined || exit == undefined){
                                assert(false)
                            }
                        }
                    }
                })
            })
        })
    })
})