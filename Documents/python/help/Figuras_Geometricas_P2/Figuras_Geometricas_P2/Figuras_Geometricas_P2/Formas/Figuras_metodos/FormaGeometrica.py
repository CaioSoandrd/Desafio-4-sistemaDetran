class FormaGeometrica:
    def __init__(self, linhas):
        self._linhas = linhas

    @property
    def linhas(self):
        return self._linhas

    def perimetro(self):
        return sum(linha.comprimento() for linha in self._linhas)
    
    @staticmethod
    def listar_formas():
        return ["Círculo", "Retângulo", "Quadrado", "Triângulo", "Pentágono", "Hexágono", "Elipse", "Trapézio", "Paralelogramo", "Losango", "Semicírculo"]