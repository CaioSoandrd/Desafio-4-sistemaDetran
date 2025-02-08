from Formas.Figuras_metodos.Figuras_geometricas.Circulo import Circulo
from Formas.Figuras_metodos.Ponto import Ponto
import math

class Semicirculo(Circulo):
    def __init__(self, raio):
        super().__init__(raio)

    def area(self):
        area = (math.pi * self._raio ** 2) / 2
        return area

    def perimetro(self):
        perimetro = math.pi * self._raio + 2 * self._raio
        return perimetro

    def contem_ponto(self, ponto):
        return ponto.distancia_para(Ponto(0, 0)) <= self._raio and ponto.y >= 0
