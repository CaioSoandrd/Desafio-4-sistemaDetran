import math

class Ponto:
    def __init__(self, x, y):
        self._x = x
        self._y = y

    @property
    def x(self):
        return self._x
      
    @property
    def y(self):
        return self._y
    
    def distancia_para(self, outro_ponto):
        return math.sqrt((self._x - outro_ponto.x) ** 2 + (self._y - outro_ponto.y) ** 2)

    def distancia_para_origem(self):
        return self.distancia_para(Ponto(0, 0))