const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Veiculos API', function () {
    let motoristaId;
    let veiculoId;

    before(function (done) {
        request(app)
        .post('/api/motoristas')
        .send({nome: '', cpf: '12312312345', pontos: 0})
        .expect(201)
        .end((err,res) => {
            if (err) return done(err);
            motoristaId = res.body.id;
            done();
        });
    });

    it('Cria um novo veiculo', function (done) {
        request(app)
        .post('/api/veiculos')
        .send({placa: '', modelo: '', motorista_id: motoristaId })
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);
            expect(res.body).to.have.property('id');
            veiculoId = res.body.id;
            done();
        });
    });

    it('Lista veículos de um motorista especifico', function(done) {
        request(app)
        .get(`/api/veiculos/motorista/${motoristaId}`)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            expect(res.body).to.be.an('array');
            done();
        });
    });
});