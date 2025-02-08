from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Linha import Linha
from Formas.Figuras_metodos.Ponto import Ponto

class Retangulo(Poligono):
    def __init__(self, largura, altura):
    
        ponto_a = Ponto(0, 0)
        ponto_b = Ponto(largura, 0)
        ponto_c = Ponto(largura, altura)
        ponto_d = Ponto(0, altura)
        
        linha_ab = Linha(ponto_a, ponto_b)
        linha_bc = Linha(ponto_b, ponto_c)
        linha_cd = Linha(ponto_c, ponto_d)
        linha_da = Linha(ponto_d, ponto_a)
        
        super().__init__([linha_ab, linha_bc, linha_cd, linha_da])
        
        self._largura = largura
        self._altura = altura
    
    @property
    def largura(self):
        return self._largura

    @property
    def altura(self):
        return self._altura

    def area(self):
        area = self._largura * self._altura
        return area

    def contem_ponto(self, ponto):
        return 0 <= ponto.x <= self._largura and 0 <= ponto.y <= self._altura