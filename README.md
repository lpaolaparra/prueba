# prueba solución puntos 2 y 3

2. La arquitectura que se presenta en el presente proyecto es de 3 capas donde el cliente se maneja mediante la tecnologia frontend de angular el cual realiza peticiones y solicitudes al servidor el cual maneja la tecnologia de node js y este mantiene conexion constante con base de datos mysql. el server realiza las consultas correspondientes a la base de datos y el servidor se encarga de devolverlas y renderizarlas en el cliente.

3. Descargar el proyecto y ejecutarlo de manera local en la consola primero ejecute el servidor y la conexion de la base de datos.
    # cd server 
    # npm install
    # npm run dev
    y en otro terminal ejecute
    # cd server
    # npm run build
    
    Tener en cuenta que para la conexion de la base de datos las credenciales de ingreso se encuentra en la carpeta server/src/routes/keys.ts
    
    la aplicaciónn en local se corrio el mysql con wampp server
    
    Para correr la base de datos mysql ingresar en la consola
    # cd server
    # mysql -u root -p 
    el sistema solicitara contraseña: la cual es vacio. coloque el codigo de la base de datos archivo database/database.sql desde la consola y se ejecuta
    
    Despues de tener listo el servidor y la base de datos creada. Corremos el cliente
    # cd client
    # npm install
    # ng serve
    la cual se aloja en la url http://localhost:4200
    
    En la aplicación en el home visualizara la lista de los empleados que se encuentran almacenados en la base de datos de igual forma podra eliminar y editar los empleados. En la     parte superior derecha podra crear empleados.
  
  
