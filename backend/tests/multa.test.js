const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe("Multas API", function () {
    let motoristaId;
    let multaId;

    Before(function (done) {
        request(app)
        .post('/api/motoristas')
        .send({nome: '' , cpf: '', pontos: 1 })
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);
            motoristaId = res.body.id;
            done();
        }); 
    });

    it('Cria uma nova multa para o motorista', function (done) {
        request(app)
        .post('/api/multas')
        .send({descricao: '', valor: 100, motorista_id: motoristaId, pontos: 1})
        .expect(201)
        .end((err, res) => {
            if (err) return done (err);
            expect(res.body).to.have.property('id');
            multaId = res.body.id;
            done();
        });
    });

    it('Lista todas as multas', function (done) {
        request(app)
        .get('/api/multas')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            expect(res.body).to.be.an('array');
            done();
        });
    });
});