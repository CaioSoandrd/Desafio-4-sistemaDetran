class Ponto:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f'({self.x}, {self.y})'

    def distancia_para(self, outro_ponto):
        dx = self.x - outro_ponto.x
        dy = self.y - outro_ponto.y
        return (dx ** 2 + dy ** 2) ** 0.5


