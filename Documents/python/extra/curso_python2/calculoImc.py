nome = 'Eduarda Domingos Rodrigues'
idade = 18
peso = 57.3
altura = 1.65
imc = peso / ((altura)**2)

ta_bom = 24.9>=imc>=18.5 

if(ta_bom==True): 
    print(f'{nome} tem {idade} anos e pesa {peso} kg, tem {altura} de altura, seu imc é {imc:.2f} e tem um IMC bom')
else:
    print(nome, idade, peso, altura,imc,  "IMC ruim")
