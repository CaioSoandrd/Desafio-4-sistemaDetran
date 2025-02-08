class Linha:
    def __init__(self, ponto_inicio, ponto_fim):
        self._ponto_inicio = ponto_inicio
        self._ponto_fim = ponto_fim

    def comprimento(self):
        return self._ponto_inicio.distancia_para(self._ponto_fim)
           
    def ponto_proximo(self, ponto):
        distancia = abs((self._ponto_fim.y - self._ponto_inicio.y) * ponto.x - (self._ponto_fim.x - self._ponto_inicio.x) * ponto.y +self._ponto_fim.x * self._ponto_inicio.y -
                        self._ponto_fim.y * self._ponto_inicio.x) / self.comprimento()
        return distancia < 1e-9