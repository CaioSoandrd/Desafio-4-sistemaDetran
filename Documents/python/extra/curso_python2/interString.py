nome = 'Luiz'
preco = 1000.92884924
variavel = '%s o preço é %.2f' %(nome ,preco)
print(variavel)

#formatação de string 

variave2= 'ABC'
print(f'{variave2}')
print(f'{variave2:>10}')#esquerda
print(f'{variave2:<10}.')#direita
print(f'{variave2:^10}')#centro
print(f'{50909.45545:.2f}')#numero/ casa decimal
print(f'{50909.45545:,.2f}') #numero/ casa decimal(com virgula e ponto)

#fatiamento de srings

variavel3 = 'Ola mundo'
print(variavel3[4:8]) #pega da posição 4 ate a 8
print(variavel3[4:]) #pega da posição 4 ate o final
#funão len (conta caracteres )
print(len(variavel3))#exibe a quantidade de caracteres na variave