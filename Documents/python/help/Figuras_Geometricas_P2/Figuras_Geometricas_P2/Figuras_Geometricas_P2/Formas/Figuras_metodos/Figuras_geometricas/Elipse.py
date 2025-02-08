from Formas.Figuras_metodos.FormaGeometrica import FormaGeometrica
import math

class Elipse(FormaGeometrica):
    def __init__(self, semi_eixo_maior, semi_eixo_menor):
        super().__init__(linhas=[])
        self._semi_eixo_maior = semi_eixo_maior
        self._semi_eixo_menor = semi_eixo_menor

    @property
    def semi_eixo_maior(self):
        return self._semi_eixo_maior

    @property
    def semi_eixo_menor(self):
        return self._semi_eixo_menor

    def area(self):
        area = math.pi * self._semi_eixo_maior * self._semi_eixo_menor
        return area

    def perimetro(self):
        h = ((self._semi_eixo_maior - self._semi_eixo_menor) ** 2) / ((self._semi_eixo_maior + self._semi_eixo_menor) ** 2)
        perimetro = math.pi * (self._semi_eixo_maior + self._semi_eixo_menor) * (1 + (3 * h) / (10 + (4 - 3 * h) ** 0.5))
        return perimetro

    def contem_ponto(self, ponto):
        return (ponto.x ** 2) / (self._semi_eixo_maior ** 2) + (ponto.y ** 2) / (self._semi_eixo_menor ** 2) <= 1

