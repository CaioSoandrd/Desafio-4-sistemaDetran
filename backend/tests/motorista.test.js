const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

describe('Motoristas API', function (){
    let motoristaId;

    It('Deve criar um novo motorista', function (done) {
        request(app)
        .post('/api/motoristas')
        .send({nome: '', cpf: '', pontos: 1 })
        .expect(201)
        .end((err, res) => {
            if (err) return done (err);
            expect(res.body).to.have.property('id');
            motoristaId = res.body.id;
            done();
        });
    });

    it('Deve retornar todos os motoristas', function (done) {
        request(app)
        .get('/api/motoristas')
        .expect(200)
        .end((err, res) => {
            if (err) return done (err);
            expect(res.body).to.be.an('array');
            done();
        });
    });

    it('Retorna motoristas com 10 ou mais pontos', function (done) {
        request(app)
        .post('/api/motoristas')
        .send({nome: 'Maria Alves', cpf: '00987654321', pontos: 12 })
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);
            request(app)
            .get('/api/motoristas/pontos')
            .expect(200)
            end((err, res) => {
                if (err) return done(err);
                const motoristasFiltrados = res.body.filter(m => m.pontos >= 10);
                expect(motoristasFiltrados.length).to.be.greaterThan(0);
                done();
            });
        });
    });
});