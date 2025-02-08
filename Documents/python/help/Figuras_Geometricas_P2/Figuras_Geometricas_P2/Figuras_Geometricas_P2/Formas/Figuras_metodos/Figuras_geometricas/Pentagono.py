from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Ponto import Ponto
from Formas.Figuras_metodos.Linha import Linha
import math

class Pentagono(Poligono):
    def __init__(self, lado):
        self._lado = lado
        pontos = [Ponto(math.cos(2 * math.pi * i / 5) * lado, math.sin(2 * math.pi * i / 5) * lado) for i in range(5)]
        linhas = [Linha(pontos[i], pontos[(i + 1) % 5]) for i in range(5)]
        super().__init__(linhas)

    @property
    def lado(self):
        return self._lado

    def area(self):
        area = (1/4) * math.sqrt(5 * (5 + 2 * math.sqrt(5))) * (self._lado ** 2)
        return area

    def contem_ponto(self, ponto):
        raio_circulo_circunscrito = self._lado / (2 * math.sin(math.pi / 5))
        return ponto.distancia_para(Ponto(0, 0)) <= raio_circulo_circunscrito
