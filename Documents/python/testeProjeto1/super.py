# main.py
# from package.ponto import Ponto
# from package.segmento_de_reta import SegmentoDeReta
# from package.circulo import Circulo
# from package.retangulo import Retangulo
# from package.triangulo import Triangulo

# def main():
#     print("Sistema de Formas Geométricas")

# if __name__ == "__main__":
#     main()

# forma_geometrica.py

class FormaGeometrica:
    # Encapsulamento: os atributos são encapsulados dentro da classe
    def __init__(self, id, tipo):
        self.id = id
        self.tipo = tipo

    def calcular_area(self):
        raise NotImplementedError("Este método deve ser implementado pelas subclasses")
        # Polimorfismo: este método será sobrescrito pelas subclasses
        pass

    def calcular_perimetro(self):
        raise NotImplementedError("Este método deve ser implementado pelas subclasses")
    
    
    def exibir_informacoes(self):
        return f"ID: {self.id}, Tipo: {self.tipo}"

# segmento_de_reta.py
# from package.forma_geometrica import FormaGeometrica
# from package.ponto import Ponto
# import math

class SegmentoDeReta(FormaGeometrica):
    # Herança: SegmentoDeReta herda de FormaGeometrica
    def __init__(self, id, ponto_inicial, ponto_final):
        super().__init__(id, "SegmentoDeReta")
        self.ponto_inicial = ponto_inicial
        self.ponto_final = ponto_final

    def calcular_comprimento(self):
        # Associação fraca: usa pontos para calcular o comprimento
        return self.ponto_inicial.calcular_distancia(self.ponto_final)

    def exibir_informacoes(self):
        return (f"ID: {self.id}, Tipo: {self.tipo}, Ponto Inicial: ({self.ponto_inicial.x}, {self.ponto_inicial.y}), "
                f"Ponto Final: ({self.ponto_final.x}, {self.ponto_final.y})")

# # circulo.py
# from package.forma_geometrica import FormaGeometrica
# from package.ponto import Ponto
import math

class Circulo(FormaGeometrica):
    # Herança: Circulo herda de FormaGeometrica
    def __init__(self, id, centro, raio):
        super().__init__(id, "Circulo")
        # Composição forte: Circulo possui um Ponto que representa o centro
        self.centro = centro
        self.raio = raio

    def calcular_area(self):
        return math.pi * self.raio ** 2

    def verificar_pertinencia(self, ponto):
        # Associação fraca: usa Ponto para verificar pertinência
        return self.centro.calcular_distancia(ponto) <= self.raio

    def exibir_informacoes(self):
 


# triangulo.py
# from package.forma_geometrica import FormaGeometrica
# from package.ponto import Ponto

class Triangulo(FormaGeometrica):
    # Herança: Triangulo herda de FormaGeometrica
    def __init__(self, id, vertice1, vertice2, vertice3):
        super().__init__(id, "Triangulo")
        # Composição forte: Triangulo possui três Pontos que representam os vértices
        self.vertice1 = vertice1
        self.vertice2 = vertice2
        self.vertice3 = vertice3

    def calcular_area(self):
        return abs((self.vertice1.x * (self.vertice2.y - self.vertice3.y) +
                    self.vertice2.x * (self.vertice3.y - self.vertice1.y) +
                    self.vertice3.x * (self.vertice1.y - self.vertice2.y)) / 2)

    def exibir_informacoes(self):
        return (f"ID: {self.id}, Tipo: {self.tipo}, Vértice 1: ({self.vertice1.x}, {self.vertice1.y}), "
                f"Vértice 2: ({self.vertice2.x}, {self.vertice2.y}), Vértice 3: ({self.vertice3.x}, {self.vertice3.y})")


# testes 
# testbench_ponto.py
# from package.ponto import Ponto

# def test_calcular_distancia():
#     p1 = Ponto(1, 0, 0)
#     p2 = Ponto(2, 3, 4)
#     assert p1.calcular_distancia(p2) == 5.0

# test_calcular_distancia()


# testbench_segmento_de_reta.py
# from package.ponto import Ponto
# from package.segmento_de_reta import SegmentoDeReta

# def test_calcular_comprimento():
#     p1 = Ponto(1, 0, 0)
#     p2 = Ponto(2, 3, 4)
#     segmento = SegmentoDeReta(1, p1, p2)
#     assert segmento.calcular_comprimento() == 5.0

# test_calcular_comprimento()


# testbench_circulo.py
# from package.ponto import Ponto
# from package.circulo import Circulo

# def test_calcular_area():
#     centro = Ponto(1, 0, 0)
#     circulo = Circulo(1, centro, 2)
#     assert round(circulo.calcular_area(), 2) == 12.57

# def test_verificar_pertinencia():
#     centro = Ponto(1, 0, 0)
#     ponto = Ponto(2, 1, 1)
#     circulo = Circulo(1, centro, 2)
#     assert circulo.verificar_pertinencia(ponto) == True

# test_calcular_area()
# test_verificar_pertinencia()


# testbench_retangulo.py
# from package.ponto import Ponto
# from package.retangulo import Retangulo

# def test_calcular_area():
#     vertice = Ponto(1, 0, 0)
#     retangulo = Retangulo(1, vertice, 3, 4)
#     assert retangulo.calcular_area() == 12

# def test_verificar_pertinencia():
#     vertice = Ponto(1, 0, 0)
#     ponto = Ponto(2, 2, 3)
#     retangulo = Retangulo(1, vertice, 3, 4)
#     assert retangulo.verificar_pertinencia(ponto) == True

# test_calcular_area()
# test_verificar_pertinencia()



# testbench_triangulo.py
# from package.ponto import Ponto
# from package.triangulo import Triangulo

# def test_calcular_area():
#     v1 = Ponto(1, 0, 0)
#     v2 = Ponto(2, 4, 0)
#     v3 = Ponto(3, 0, 3)
#     triangulo = Triangulo(1, v1, v2, v3)
#     assert triangulo.calcular_area() == 6

# test_calcular_area()

