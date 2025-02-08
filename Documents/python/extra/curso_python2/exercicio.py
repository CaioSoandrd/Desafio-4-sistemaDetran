nome = input('Digite seu nome: ')
idade = int(input("Digite sua idade: "))

if nome and idade:
    print(f'Seu nome é {nome}')
    nome_inv = nome[::-1]
    print(f'Seu nome invertido é: {nome_inv}')

    if ' ' in nome:
        print('Seu nome contém espaços')
    elif ' ' not in nome:
        print('Seu nome não contém espaços')
    
    numero_letras = len(nome)

    print(f'Seu nome tem {numero_letras} letras')
    print(f'a primeira letra d seu nome é: {nome[0]}')
    print(f'a ultima letra d seu nome é: {nome[-1]}')

else:
    print('Algum dos campos não foram informados')
