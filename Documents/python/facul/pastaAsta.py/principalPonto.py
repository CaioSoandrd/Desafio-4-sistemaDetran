from ponto import Ponto

def main():
    ponto1 = Ponto(5, 7)
    ponto2 = Ponto(9, 8)

    print("Coordenadas do ponto 1:", ponto1)
    print("Coordenadas do ponto 2:", ponto2)
    print("Distancia entre os dois pontos:", ponto1.distancia_para(ponto2))

if __name__ == "__main__":
    print("O arquivo 'principalPonto.py' foi invocado como programa")
    print(f'__name__ == {__name__}')
    main()
else:
    print("O arquivo 'principalPonto.py' foi invocado como módulo")
    print(f'__name__ == {__name__}')
