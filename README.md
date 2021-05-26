# Ejemplo de uso de initializer

Con Initializer podemos cargar archivos de configuarción del servidor cuando cargamos nuestra aplicación para ello solo debemos crear un servicio con una función que devuelva una promesa o un valor, este servicio se encargará de utilizando httpclient conectarse a la api o al archivo que le suministre esos datos, después en el appmodule.ts tendremos que añadir en providers este servicio y además añadir provide: APP_INITIALIZER, userFactory: LoadConfiguration, deps: [ ConfigService ] , multi:true.
LoadConfiguration será una función que o bien definimos en el appmodule.ts o en el propio servicio fuera de la clase, en ella indicamos cual es la función del servicio encargada de devolver y cargar el archivo. 
Para su uso solo debemos añadir en el constructor el servicio y llamar a su función, así en la vista podemos hacer _config.datos.titulo
