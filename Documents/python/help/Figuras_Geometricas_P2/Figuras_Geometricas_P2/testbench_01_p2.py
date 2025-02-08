from Formas.Figuras_metodos.Ponto import Ponto
from Formas.Figuras_metodos.Linha import Linha
from Formas.Figuras_metodos.FormaGeometrica import FormaGeometrica
from Formas.Figuras_metodos.Figuras_geometricas.Circulo import Circulo
from Formas.Figuras_metodos.Figuras_geometricas.Elipse import Elipse
from Formas.Figuras_metodos.Figuras_geometricas.Hexagono import Hexagono
from Formas.Figuras_metodos.Figuras_geometricas.Losango import Losango
from Formas.Figuras_metodos.Figuras_geometricas.Paralelogramo import Paralelogramo
from Formas.Figuras_metodos.Figuras_geometricas.Pentagono import Pentagono
from Formas.Figuras_metodos.Figuras_geometricas.Quadrado import Quadrado
from Formas.Figuras_metodos.Figuras_geometricas.Retangulo import Retangulo
from Formas.Figuras_metodos.Figuras_geometricas.Semicirculo import Semicirculo
from Formas.Figuras_metodos.Figuras_geometricas.Trapezio import Trapezio
from Formas.Figuras_metodos.Figuras_geometricas.Triangulo import Triangulo

def main():
    while True:
        print("\nMenu:")
        print("1. Calcular a distância entre dois pontos.")
        print("2. Calcular a distância de um ponto à origem.")
        print("3. Verificar se um ponto está dentro de uma forma geométrica.")
        print("4. Verificar se um ponto está próximo a uma reta.")
        print("5. Calcular área e perímetro de uma forma geométrica.")
        print("0. Sair do programa.")

        try:
            opcao = int(input("Escolha uma opção: "))
        except ValueError:
            print("Por favor, digite um número válido.")
            continue

        if opcao == 0:
            print("Programa encerrado.")
            break

        elif opcao == 1:
            print("Digite as coordenadas dos dois pontos (x1 y1 x2 y2):")
            try:
                x1, y1, x2, y2 = map(float, input().split())
            except ValueError:
                print("Coordenadas inválidas. Use números separados por espaço.")
                continue
            ponto1 = Ponto(x1, y1)
            ponto2 = Ponto(x2, y2)
            distancia = ponto1.distancia_para(ponto2)
            print(f"A distância entre os dois pontos é: {distancia:.2f}")

        elif opcao == 2:
            print("Digite as coordenadas do ponto (x y):")
            try:
                x, y = map(float, input().split())
            except ValueError:
                print("Coordenadas inválidas. Use números separados por espaço.")
                continue
            ponto = Ponto(x, y)
            distancia = ponto.distancia_para_origem()
            print(f"A distância do ponto à origem é: {distancia:.2f}")

        elif opcao == 3:
            print("Escolha a forma geométrica:")
            formas = FormaGeometrica.listar_formas()
            for i, forma in enumerate(formas, start=1):
                print(f"{i}. {forma}")
            try:
                forma_opcao = int(input("Escolha uma opção: "))
            except ValueError:
                print("Opção inválida. Por favor, escolha um número válido.")
                continue

            if forma_opcao < 1 or forma_opcao > len(formas):
                print("Opção inválida.")
                continue

            if forma_opcao == 1:
                print("Digite o raio do círculo:")
                try:
                    raio = float(input())
                    if raio <= 0:
                        raise ValueError("Forma impossível. Digite um novo valor para o raio.")
                except ValueError:
                    print("Valor inválido. Digite um número para o raio.")
                    continue
                forma = Circulo(raio)

            elif forma_opcao == 2:
                print("Digite a largura e a altura do retângulo:")
                try:
                    largura, altura = map(float, input().split())
                    if largura <= 0 or altura <= 0:
                        raise ValueError ("Valores inválidos. Digite dois novos números para largura e altura.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para largura e altura.")
                    continue
                forma = Retangulo(largura, altura)

            elif forma_opcao == 3:
                print("Digite o lado do quadrado:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o lado do quadrado.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do quadrado.")
                    continue
                forma = Quadrado(lado)

            elif forma_opcao == 4:
                print("Digite as coordenadas dos três pontos do triângulo (x1 y1, x2 y2, x3 y3):")
                try:
                    x1, y1, x2, y2, x3, y3 = map(float, input().split())
                    if x1 < 0 or x2 < 0 or x3 < 0 or y1 < 0 or y2 < 0 or y3 < 0:
                        raise ValueError("Coordenadas inválidas. Digite seis novos números para os pontos do triângulo.")
                except ValueError:
                    print("Coordenadas inválidas. Digite seis números para os pontos do triângulo.")
                    continue
                ponto1 = Ponto(x1, y1)
                ponto2 = Ponto(x2, y2)
                ponto3 = Ponto(x3, y3)
                forma = Triangulo(ponto1, ponto2, ponto3)

            elif forma_opcao == 5:
                print("Digite o lado do pentágono:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o lado do pentágono.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do pentágono.")
                    continue
                forma = Pentagono(lado)

            elif forma_opcao == 6:
                print("Digite o lado do hexágono:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o lado do hexágono.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do hexágono.")
                    continue
                forma = Hexagono(lado)

            elif forma_opcao == 7:
                print("Digite o semieixo maior e o semieixo menor da elipse:")
                try:
                    semi_eixo_maior, semi_eixo_menor = map(float, input().split())
                    if semi_eixo_maior <= 0 or semi_eixo_menor <= 0 or semi_eixo_menor > semi_eixo_maior:
                        raise ValueError("Valores inválidos. Digite dois novos números para os semieixos da elipse.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para os semieixos da elipse.")
                    continue
                forma = Elipse(semi_eixo_maior, semi_eixo_menor)

            elif forma_opcao == 8:
                print("Digite a base maior, base menor e altura do trapézio:")
                try:
                    base_maior, base_menor, altura = map(float, input().split())
                    if base_maior <= 0 or base_menor <= 0 or altura <= 0 or base_menor >= base_maior:
                        raise ValueError("Valores inválidos. Digite três novos números para as dimensões do trapézio.")
                except ValueError:
                    print("Valores inválidos. Digite três números para as dimensões do trapézio.")
                    continue
                forma = Trapezio(base_maior, base_menor, altura)

            elif forma_opcao == 9:
                print("Digite as coordenadas dos quatro pontos do paralelogramo (x1 y1 x2 y2 x3 y3 x4 y4):")
                try:
                    x1, y1, x2, y2, x3, y3, x4, y4 = map(float, input().split())
                    if x1 < 0 or x2 < 0 or x3 < 0 or x4 < 0 or y1 < 0 or y2 < 0 or y3 < 0 or y4 < 0:
                        raise ValueError("Valores inválidos. Digite oito novos números para os quatro pontos.")
                except ValueError:
                    print("Valores inválidos. Digite oito números para os quatro pontos.")
                    continue
                ponto_a = Ponto(x1, y1)
                ponto_b = Ponto(x2, y2)
                ponto_c = Ponto(x3, y3)
                ponto_d = Ponto(x4, y4)
                forma = Paralelogramo(ponto_a, ponto_b, ponto_c, ponto_d)
                
            elif forma_opcao == 10:
                print("Digite as diagonais maior e menor do losango:")
                try:
                    diagonal_maior, diagonal_menor = map(float, input().split())
                    if diagonal_maior <= 0 or diagonal_menor <= 0 or diagonal_menor > diagonal_maior:
                        raise ValueError("Valores inválidos. Digite dois novos números para as diagonais do losango.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para as diagonais do losango.")
                    continue
                forma = Losango(diagonal_maior, diagonal_menor)

            elif forma_opcao == 11:
                print("Digite o raio do semicírculo:")
                try:
                    raio = float(input())
                    if raio <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o raio do semicírculo.")
                except ValueError:
                    print("Valor inválido. Digite um número para o raio do semicírculo.")
                    continue
                forma = Semicirculo(raio)
            else:
                print("Opção inválida.")
                continue

            print("Digite as coordenadas do ponto a ser verificado (x y):")
            try:
                x, y = map(float, input().split())
            except ValueError:
                print("Coordenadas inválidas. Digite dois números para as coordenadas do ponto.")
                continue
            ponto = Ponto(x, y)
            if forma.contem_ponto(ponto):
                print("O ponto está dentro da forma.")
            else:
                print("O ponto não está dentro da forma.")

        elif opcao == 4:
            print("Digite as coordenadas do ponto inicial e final da reta (x1 y1 x2 y2):")
            try:
                x1, y1, x2, y2 = map(float, input().split())
            except ValueError:
                print("Coordenadas inválidas. Digite quatro números para os pontos da reta.")
                continue
            ponto_inicio = Ponto(x1, y1)
            ponto_fim = Ponto(x2, y2)
            reta = Linha(ponto_inicio, ponto_fim)
            print("Digite as coordenadas do ponto a ser verificado (x y):")
            try:
                x, y = map(float, input().split())
            except ValueError:
                print("Coordenadas inválidas. Digite dois números para as coordenadas do ponto.")
                continue
            ponto = Ponto(x, y)
            if reta.ponto_proximo(ponto):
                print("O ponto está próximo à reta.")
            else:
                print("O ponto não está próximo à reta.")

        elif opcao == 5:
            print("Escolha a forma geométrica:")
            formas = FormaGeometrica.listar_formas()
            for i, forma in enumerate(formas, start=1):
                print(f"{i}. {forma}")
            try:
                forma_opcao = int(input("Escolha uma opção: "))
            except ValueError:
                print("Opção inválida. Por favor, escolha um número válido.")
                continue

            if forma_opcao < 1 or forma_opcao > len(formas):
                print("Opção inválida.")
                continue

            if forma_opcao == 1:
                print("Digite o raio do círculo:")
                try:
                    raio = float(input())
                    if raio <= 0:
                        raise ValueError("Forma impossível. Digite um novo número para o raio")
                except ValueError:
                    print("Valor inválido. Digite um número para o raio.")
                    continue
                forma = Circulo(raio)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 2:
                print("Digite a largura e a altura do retângulo:")
                try:
                    largura, altura = map(float, input().split())
                    if largura <= 0 or altura <= 0:
                        raise ValueError("Valores inválidos. Digite dois novos números para largura e altura.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para largura e altura.")
                    continue
                forma = Retangulo(largura, altura)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 3:
                print("Digite o lado do quadrado:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um número para o lado do quadrado.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do quadrado.")
                    continue
                forma = Quadrado(lado)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 4:
                print("Digite as coordenadas dos três pontos do triângulo (x1 y1 x2 y2 x3 y3):")
                try:
                    x1, y1, x2, y2, x3, y3 = map(float, input().split())
                    if x1< 0 or x2< 0 or x3< 0 or y1< 0 or y2< 0 or y3< 0:
                        raise ValueError("Coordenadas inválidas. Digite seis novos números para os pontos do triângulo.")
                except ValueError:
                    print("Coordenadas inválidas. Digite seis números para os pontos do triângulo.")
                    continue
                ponto1 = Ponto(x1, y1)
                ponto2 = Ponto(x2, y2)
                ponto3 = Ponto(x3, y3)
                forma = Triangulo(ponto1, ponto2, ponto3)
                if forma.area() > 0:
                    print(f"Área: {forma.area():.2f}")
                    print(f"Perímetro: {forma.perimetro():.2f}")
                else:
                    print(f"Triângulo impossível, por favor escolha novos valores!")

            elif forma_opcao == 5:
                print("Digite o lado do pentágono:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o lado do pentágono.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do pentágono.")
                    continue
                forma = Pentagono(lado)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 6:
                print("Digite o lado do hexágono:")
                try:
                    lado = float(input())
                    if lado <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o lado do hexágono.")
                except ValueError:
                    print("Valor inválido. Digite um número para o lado do hexágono.")
                    continue
                forma = Hexagono(lado)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 7:
                print("Digite o semieixo maior e o semieixo menor da elipse:")
                try:
                    semi_eixo_maior, semi_eixo_menor = map(float, input().split())
                    if semi_eixo_maior <= 0 or semi_eixo_menor <= 0 or semi_eixo_menor > semi_eixo_maior:
                        raise ValueError("Valores inválidos. Digite dois novos números para os eixos da elipse.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para os eixos da elipse.")
                    continue
                forma = Elipse(semi_eixo_maior, semi_eixo_menor)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 8:
                print("Digite a base maior, base menor e altura do trapézio:")
                try:
                    base_maior, base_menor, altura = map(float, input().split())
                    if base_maior <= 0 or base_menor <= 0 or altura <= 0 or base_menor >= base_maior:
                        raise ValueError("Valores inválidos. Digite três novos números para as dimensões do trapézio.") 
                except ValueError:
                    print("Valores inválidos. Digite três números para as dimensões do trapézio.")
                    continue
                forma = Trapezio(base_maior, base_menor, altura)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")


            elif forma_opcao == 9:
                print("Digite as coordenadas dos quatro pontos do paralelogramo (x1 y1 x2 y2 x3 y3 x4 y4):")
                try:
                    x1, y1, x2, y2, x3, y3, x4, y4 = map(float, input().split())
                    if x1 < 0 or x2 < 0 or x3 < 0 or x4 < 0 or y1 < 0 or y2 < 0 or y3 < 0 or y4 < 0:
                        raise ValueError("Valores inválidos. Digite oito novos números para os quatro pontos.")
                except ValueError:
                    print("Valores inválidos. Digite oito números para os quatro pontos.")
                    continue
                ponto_a = Ponto(x1, y1)
                ponto_b = Ponto(x2, y2)
                ponto_c = Ponto(x3, y3)
                ponto_d = Ponto(x4, y4)
                forma = Paralelogramo(ponto_a, ponto_b, ponto_c, ponto_d)
                if forma.area() > 0:
                    print(f"Área: {forma.area():.2f}")
                    print(f"Perímetro: {forma.perimetro():.2f}")
                else:
                    print(f"Forma impossível. Digite oito novos números para os quatro pontos.")

            elif forma_opcao == 10:
                print("Digite as diagonais maior e menor do losango:")
                try:
                    diagonal_maior, diagonal_menor = map(float, input().split())
                    if diagonal_maior <= 0 or diagonal_menor <= 0 or diagonal_menor > diagonal_maior:
                        raise ValueError("Valores inválidos. Digite dois novos números para as diagonais do losango.")
                except ValueError:
                    print("Valores inválidos. Digite dois números para as diagonais do losango.")
                    continue
                forma = Losango(diagonal_maior, diagonal_menor)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            elif forma_opcao == 11:
                print("Digite o raio do semicírculo:")
                try:
                    raio = float(input())
                    if raio <= 0:
                        raise ValueError("Valor inválido. Digite um novo número para o raio do semicírculo.")
                except ValueError:
                    print("Valor inválido. Digite um número para o raio do semicírculo.")
                    continue
                forma = Semicirculo(raio)
                print(f"Área: {forma.area():.2f}")
                print(f"Perímetro: {forma.perimetro():.2f}")

            else:
                print("Opção inválida.")
        else:
            print("Opção inválida. Por favor, escolha uma opção válida.")

if __name__ == "__main__":
    main()