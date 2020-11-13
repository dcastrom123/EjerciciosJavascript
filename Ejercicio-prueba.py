nombre = input("Ingrese su nombre : ")
apellido = input("Ingrese su apellido : ")
edad = int(input("ingrese su edad : "))
tiempo = int(input("Ingrese el tiempo que estara fuera en horas : "))
salvo_aceptado = ("Salvoconducto fue aprobado")
salvo_rechazado = ("Salvoconducto fue rechazado")


print("-----------------------------------------------------")

if (edad <= 65 and edad >= 18):
    print("-----------------------------------------------------")
    print(f"La Edad de {nombre} ")
    print("Es correcta")
    print("-----------------------------------------------------")

elif (edad > 65):
     print("-----------------------------------------------------")
     print(f"{nombre} pertenece a la tercera edad ")
     print(salvo_rechazado)
     print("-----------------------------------------------------")

elif (edad < 18):
    print("-----------------------------------------------------")
    print(f"{nombre} es menor de edad")
    print("Su " +salvo_rechazado)
    print("-----------------------------------------------------")

if (tiempo > 4 and tiempo <= 23):
    print("-----------------------------------------------------")
    print("Cumple con las horas permitidas")
    print("Su " +salvo_aceptado)
    print("-----------------------------------------------------")
else:
    print(f"No cumple con las horas permitidas")
    print("Su " +salvo_rechazado)
