import math
from Formas.Figuras_metodos.FormaGeometrica import FormaGeometrica
from Formas.Figuras_metodos.Ponto import Ponto

class Circulo(FormaGeometrica):
    def __init__(self, raio):
        self._raio = raio
        super().__init__(linhas=[])

    @property
    def raio(self):
        return self._raio
    
    def area(self):
        area = math.pi * self._raio ** 2
        return area

    def perimetro(self):
        perimetro = 2 * math.pi * self._raio
        return perimetro

    def contem_ponto(self, ponto):
        return ponto.distancia_para(Ponto(0, 0)) <= self._raio