print(type(-11))#para ver o tipo do dado
print(10==10)#boolean, True ou False, nesse caso true
print(210==11)#no caso falso
print(type(-11==10))#tipo de dado

#conversão de tipos: 

print(1+3) #4
print('a'+'b')#ab, polimoefismo, mesmo operador para dois comandos
#não da pra concatenat str com int, somente str com str e int com int/float
print(int('1')+1)#2
#float e int = float
print(float('1')+1)#2.0
print(int('1')+float('1.2'))#2.2
print(type(int('1')+float('1.2'))) #class float
print(bool(''))#false
print(bool('1'))#true
print(str(11)+'b')#11b

#Váriaveis são usadas para salvar coisas na memoria do pc 
#PEP8: inicie variaveis com letras minuscula, pode usar numero e underline
#ex: nume_variavel

nome_completo = 'Eduarda Domingos Rodrgues'
print(nome_completo)#Eduarda DOmingos ROdrigues

idade = 30
maior_de_idade = idade >= 18
if(maior_de_idade == True):
    print('Maior de idade')
else:
    print("Menor de idade")

#maior de idade 

print("Atenção")
