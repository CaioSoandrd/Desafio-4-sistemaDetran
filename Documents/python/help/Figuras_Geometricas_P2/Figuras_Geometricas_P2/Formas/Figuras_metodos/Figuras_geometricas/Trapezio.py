from Formas.Figuras_metodos.Poligono import Poligono
from Formas.Figuras_metodos.Ponto import Ponto
from Formas.Figuras_metodos.Linha import Linha

class Trapezio(Poligono):
    def __init__(self, base_maior, base_menor, altura):
    
        ponto_a = Ponto(0, 0)
        ponto_b = Ponto(base_maior, 0)
        ponto_c = Ponto((base_maior - base_menor) / 2 + base_menor, altura)
        ponto_d = Ponto((base_maior - base_menor) / 2, altura)
        
        linha_ab = Linha(ponto_a, ponto_b)
        linha_bc = Linha(ponto_b, ponto_c)
        linha_cd = Linha(ponto_c, ponto_d)
        linha_da = Linha(ponto_d, ponto_a)
        
        super().__init__([linha_ab, linha_bc, linha_cd, linha_da])
        
        self._base_maior = base_maior
        self._base_menor = base_menor
        self._altura = altura
    
    @property
    def base_maior(self):
        return self._base_maior

    @property
    def base_menor(self):
        return self._base_menor

    @property
    def altura(self):
        return self._altura
    
    def area(self):
        area = ((self._base_maior + self._base_menor) * self._altura) / 2
        return area

    def contem_ponto(self, ponto):
        largura_superior = self._base_maior
        largura_inferior = self._base_menor + (self._base_maior - self._base_menor) * ponto.y / self._altura
        
        return (0 <= ponto.y <= self._altura and
                largura_inferior <= ponto.x <= largura_superior)

