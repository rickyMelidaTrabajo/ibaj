Algoritmo sin_titulo
	Definir primerArticulo Como Entero
	Definir ultimoArticulo Como Entero
	
	Repetir
		
		articulosAMostrar<-3
	
	
		Escribir "Cuantos articulos tienes?"
		Leer cantidadArticulos
		
		Escribir "Qué pagina estas?"
		Leer paginaActual
		
		paginaSolicitada <- paginaActual
		
		Escribir "Se va a mostrar los articulos de "
		
		primerArticulo <- ( paginaActual * articulosAMostrar ) + 1
		
		ultimoArticulo <- articulosAMostrar * paginaSolicitada
		
		Escribir "Se va a mostrar los articulos desde ", primerArticulo , " hasta ", ultimoArticulo
		
	Hasta Que Falso
	
	
FinAlgoritmo
