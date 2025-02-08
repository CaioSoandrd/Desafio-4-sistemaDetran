class Ponto:
    def __init__(self, coordenada_x, coordenada_y):
        self.coordenada_x = coordenada_x
        self.coordenada_y = coordenada_y

    def __str__(self):
        return f'({self.coordenada_x}, {self.coordenada_y})'

    def distancia_para(self, outro_ponto):
        diferenca_x = self.coordenada_x - outro_ponto.coordenada_x
        diferenca_y = self.coordenada_y - outro_ponto.coordenada_y
        return (diferenca_x ** 2 + diferenca_y ** 2) ** 0.5
