const { should } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
const server = require("../app");

// Select Assertion Style
chai.should();

// Use chai-http module
chai.use(chaiHttp);

// Club Tests
describe('Club API', () => {
    describe('GET /club/:id', () => {
        it ('It should return the first Club', (done) => {
            const clubId = 1;
            chai.request(server)
                .get('/club/' + clubId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('average_age');
                    response.body.should.have.property('table_place');
                    response.body.should.have.property('wins');
                    response.body.should.have.property('draws');
                    response.body.should.have.property('loses');
                    response.body.should.have.property('goals_scored');
                    response.body.should.have.property('goals_conceded');
                    response.body.should.have.property('short');
                    response.body.should.have.property('club_name');
                    response.body.should.have.property('team_number');
                    response.body.should.have.property('id');
                });
                done();
        });

       it ('It should throw a 404 Error Message', (done) => {
            const clubId = 9999;
            chai.request(server)
                .get('/club/' + clubId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('message').eq('Did not find any Club with that ID');
                })
                done();
       });
    });

    describe('GET /club/all', () => {
        it ('It should return all Clubs', (done) => {
            chai.request(server)
                .get('/club/all')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                });
                done();
        });
    });
});
