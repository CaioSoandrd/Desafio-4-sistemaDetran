from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Linha import Linha

class Triangulo(Poligono):
    def __init__(self, ponto_a, ponto_b, ponto_c):
        self._ponto_a = ponto_a
        self._ponto_b = ponto_b
        self._ponto_c = ponto_c
        linha_ab = Linha(ponto_a, ponto_b)
        linha_bc = Linha(ponto_b, ponto_c)
        linha_ca = Linha(ponto_c, ponto_a)
        super().__init__([linha_ab, linha_bc, linha_ca])

    def area(self):
        a = self._linhas[0].comprimento()
        b = self._linhas[1].comprimento()
        c = self._linhas[2].comprimento()
        s = (a + b + c) / 2
        area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
        return area

    def contem_ponto(self, ponto):
        def area_triangulo(p1, p2, p3):
            return abs(p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2

        area_abc = self.area()
        area_abp = area_triangulo(self._ponto1, self._ponto2, ponto)
        area_bcp = area_triangulo(self._ponto2, self._ponto3, ponto)
        area_cap = area_triangulo(self._ponto3, self._ponto1, ponto)
        
        area_soma = area_abp + area_bcp + area_cap
        return abs(area_abc - area_soma) < 1e-10  