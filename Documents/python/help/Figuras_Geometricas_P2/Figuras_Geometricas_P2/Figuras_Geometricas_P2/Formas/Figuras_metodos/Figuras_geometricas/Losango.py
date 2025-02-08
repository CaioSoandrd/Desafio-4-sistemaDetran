from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Linha import Linha
from Formas.Figuras_metodos.Ponto import Ponto

class Losango(Poligono):
    def __init__(self, diagonal_maior, diagonal_menor):
        ponto_a = Ponto(-diagonal_maior / 2, 0)
        ponto_b = Ponto(0, diagonal_menor / 2)
        ponto_c = Ponto(diagonal_maior / 2, 0)
        ponto_d = Ponto(0, -diagonal_menor / 2)
        linha_ab = Linha(ponto_a, ponto_b)
        linha_bc = Linha(ponto_b, ponto_c)
        linha_cd = Linha(ponto_c, ponto_d)
        linha_da = Linha(ponto_d, ponto_a)
        
        super().__init__([linha_ab, linha_bc, linha_cd, linha_da])
        
        self._diagonal_maior = diagonal_maior
        self._diagonal_menor = diagonal_menor

    @property
    def diagonal_maior(self):
        return self._diagonal_maior

    @property
    def diagonal_menor(self):
        return self._diagonal_menor

    def area(self):
        area = (self._diagonal_maior * self._diagonal_menor) / 2
        return area

    def contem_ponto(self, ponto):
        return (abs(ponto.x) / self._diagonal_maior) + (abs(ponto.y) / self._diagonal_menor) <= 1
