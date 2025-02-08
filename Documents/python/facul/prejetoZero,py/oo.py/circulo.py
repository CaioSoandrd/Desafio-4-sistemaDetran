import math

class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return math.pi * (self.raio ** 2)

    def calcular_perimetro(self):
        return 2 * math.pi * self.raio

    def alterar_raio(self, novo_raio):
        self.raio = novo_raio

    def obter_raio(self):
        return self.raio
    
    