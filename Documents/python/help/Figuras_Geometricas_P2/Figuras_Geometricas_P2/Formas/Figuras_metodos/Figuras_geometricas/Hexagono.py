from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Ponto import Ponto
from Formas.Figuras_metodos.Linha import Linha
import math

class Hexagono(Poligono):
    def __init__(self, lado):
        
        self._lado = lado
        pontos = [Ponto(math.cos(2 * math.pi * i / 6) * lado, math.sin(2 * math.pi * i / 6) * lado) for i in range(6)]
        linhas = [Linha(pontos[i], pontos[(i + 1) % 6]) for i in range(6)]
        super().__init__(linhas)

    @property
    def lado(self):
        return self._lado

    def area(self):
        area = (3 * math.sqrt(3) * (self._lado ** 2)) / 2
        return area

    def contem_ponto(self, ponto):
        raio_circulo_circunscrito = self._lado
        return ponto.distancia_para(Ponto(0, 0)) <= raio_circulo_circunscrito

