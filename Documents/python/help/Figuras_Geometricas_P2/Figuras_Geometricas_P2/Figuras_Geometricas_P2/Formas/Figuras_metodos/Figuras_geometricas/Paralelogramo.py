from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Ponto import Ponto
from Formas.Figuras_metodos.Linha import Linha

class Paralelogramo(Poligono):
    def __init__(self, ponto_a, ponto_b, ponto_c, ponto_d):
        self._ponto_a = ponto_a
        self._ponto_b = ponto_b
        self._ponto_c = ponto_c
        self._ponto_d = ponto_d

        linha_ab = Linha(ponto_a, ponto_b)
        linha_bc = Linha(ponto_b, ponto_c)
        linha_cd = Linha(ponto_c, ponto_d)
        linha_da = Linha(ponto_d, ponto_a)
        
        super().__init__([linha_ab, linha_bc, linha_cd, linha_da])

    def area(self):
        return 0.5 * abs(
            self._ponto_a.x * self._ponto_b.y + 
            self._ponto_b.x * self._ponto_c.y + 
            self._ponto_c.x * self._ponto_d.y + 
            self._ponto_d.x * self._ponto_a.y -
            self._ponto_b.x * self._ponto_a.y -
            self._ponto_c.x * self._ponto_b.y -
            self._ponto_d.x * self._ponto_c.y -
            self._ponto_a.x * self._ponto_d.y
        )

    def contem_ponto(self, ponto):
        area_total = self.area()
        area1 = 0.5 * abs(ponto.x * self._ponto_b.y + self._ponto_b.x * self._ponto_c.y + self._ponto_c.x * ponto.y -
                          self._ponto_b.x * ponto.y - self._ponto_c.x * self._ponto_b.y - ponto.x * self._ponto_c.y)
        area2 = 0.5 * abs(ponto.x * self._ponto_c.y + self._ponto_c.x * self._ponto_d.y + self._ponto_d.x * ponto.y -
                          self._ponto_c.x * ponto.y - self._ponto_d.x * self._ponto_c.y - ponto.x * self._ponto_d.y)
        area3 = 0.5 * abs(ponto.x * self._ponto_d.y + self._ponto_d.x * self._ponto_a.y + self._ponto_a.x * ponto.y -
                          self._ponto_d.x * ponto.y - self._ponto_a.x * self._ponto_d.y - ponto.x * self._ponto_a.y)
        area4 = 0.5 * abs(ponto.x * self._ponto_a.y + self._ponto_a.x * self._ponto_b.y + self._ponto_b.x * ponto.y -
                          self._ponto_a.x * ponto.y - self._ponto_b.x * self._ponto_a.y - ponto.x * self._ponto_b.y)
        return abs((area1 + area2 + area3 + area4) - area_total) < 1e-9