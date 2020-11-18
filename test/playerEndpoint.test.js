const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// Select Assertion Style
chai.should();

// Use chai-http module
chai.use(chaiHttp);

// Tests
describe('Player API', () => {
    describe('GET /player/:id', () => {
        it ('It should get the first Player', (done) => {
            const playerId = 1;
            chai.request(server)
                .get('/player/' + playerId)
                .end((err, request) => {
                    request.should.have.status(200);
                    request.body.should.have.property('id').eq(playerId);
                    request.body.should.have.property('m_id');
                    request.body.should.have.property('last_update');
                    request.body.should.have.property('first_name');
                    request.body.should.have.property('last_name');
                    request.body.should.have.property('alias');
                    request.body.should.have.property('position');
                    request.body.should.have.property('birth_date');
                    request.body.should.have.property('age');
                    request.body.should.have.property('strong_foot');
                    request.body.should.have.property('height_in_cm');
                    request.body.should.have.property('weight_in_kg');
                    request.body.should.have.property('profile_calls');
                    request.body.should.have.property('total_games');
                    request.body.should.have.property('total_goals');
                    request.body.should.have.property('total_assists');
                    request.body.should.have.property('total_penaltys_shot');
                    request.body.should.have.property('total_penaltys_scored');
                    request.body.should.have.property('total_yellow_cards');
                    request.body.should.have.property('total_yellow_red_cards');
                    request.body.should.have.property('total_red_cards');
                    request.body.should.have.property('total_sub_in');
                    request.body.should.have.property('total_sub_out');
                    request.body.should.have.property('total_min_played');
                    request.body.should.have.property('total_TOTW');
                    request.body.should.have.property('actual_season_games');
                    request.body.should.have.property('actual_season_goals');
                    request.body.should.have.property('actual_season_assists');
                    request.body.should.have.property('actual_season_penaltys_shot');
                    request.body.should.have.property('actual_season_penaltys_scored');
                    request.body.should.have.property('actual_season_yellow_cards');
                    request.body.should.have.property('actual_season_yellow_red_cards');
                    request.body.should.have.property('actual_season_red_cards');
                    request.body.should.have.property('actual_season_sub_in');
                    request.body.should.have.property('actual_season_sub_out');
                    request.body.should.have.property('actual_season_min_played');
                    request.body.should.have.property('actual_season_TOTW');
                });
                done();
        });

        it ('Should throw a 404 Error Message', (done) => {
            const playerId = 9999
            chai.request(server)
                .get('/player/' + playerId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.should.have.property('message').eq('Did not find any Player with that ID')
                });
                done();
        });
    });

    describe('GET /player/all', () => {
        it ('It should return all Playres', (done) => {
            chai.request(server)
                .get('/player/all')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body[0].should.be.a('object');
                });
                done();
        });
    });
    
});

