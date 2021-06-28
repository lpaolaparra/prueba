# prueba solución puntos 2 y 3

2. La arquitectura que se presenta en el presente proyecto es de 3 capas donde el cliente se maneja mediate la tecnologia frontend de angular el cual realiza peticiones y solicitudes al servidor el cual maneja la tecnologia de node js y este mantiene conexion constante con base de datos mysql.

3. Descargar el proyecto y ejecutarlo de manera local en la consola primero ejecute el servidor y la conexion de la base de datos
    # cd server 
    # npm run dev
    y en otro terminal ejecute
    # cd server
    # npm run build
    
    Tener en cuenta que para la conexion de la base de datos las credenciales de ingreso se encuentra en la carpeta server/src/routes/keys.ts
    
    Para correr la base de datos ingresar en la consola
    # cd server
    # mysql -u root -p 
    el sistema solicitara contraseña: la cual es vacio. Para colocar el codigo de la base de datos desde la consola y se ejecute inmediatamente
    
    Despues de tener listo el servidor y la base de datos creada. Corremos el cliente
    # cd client
    # ng serve
    la cual se aloja en la url http://localhost:4200
    
    En la aplicación en el home visualizara la lista de los empleados que se encuentran almacenados en la base de datos de igual forma podra eliminar y editar los empleados. En la     parte superior derecha podra crear empleados.
  
  
