from circulo import Circulo


def workspace():
    


    circulo_obj = Circulo(3)  
    print("Raio do circulo:", f"{circulo_obj.obter_raio():.2f}")
    print("Area do circulo:", f"{circulo_obj.calcular_area():.2f}")
    print("Perimetro do circulo:", f"{circulo_obj.calcular_perimetro():.2f}")


if __name__ == "__main__":

    print("O arquivo 'principal.py' foi invocado como programa")
    print(f'__name__ == {__name__}')
    workspace()

else:

    print("O arquivo 'principal.py' foi invocado como módulo")
    print(f'__name__ == {__name__}')
