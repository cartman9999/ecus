<h1>ECUS - Comparación de USD respecto a MXN</h1>

<i>Desarrollado por Eric Montes de Oca Juárez.<i>

Para el desarrollo de este proyecto se ocupo en Backend el Framework Laravel y en frontend React.js.
<br>
Por medio de la API: https://www.currencyconverterapi.com/ se obtiene la conversión de moneda.
<br>
Para manipular fechas se utilizó la librería Carbon incluída en Laravel.
<br>
Para desplegar la gráfica se ocupo la librería React Google Charts.

<h3><b>Prerrequisitos:</b></h3>
<ul>
  <li>Composer</li>
  <li>PHP7+</li>
  <li>Laravel 5.5</li>
  <li>Mysql</li>
  <li>Mysql Workbench</li>
  <li>Node Js</li>
  <li>React</li>
  <li>XAMPP</li> 
</ul>

<h3><b>Instalación:</b></h3>
<p>Una vez que se han instalado las herramientas necesarias, se deberán seguir los siguientes pasos:</p>
<ol>
  <li>Clonar el proyecto en la carpeta <i>/xampp/htdocs</i></li>
  <li>Acceder desde terminal a la carpeta del proyecto y ejecutar <i>composer install</i> para instalar las dependencias de Laravel en el proyecto</li>
  <li>Ejecutar desde terminal <i>npm install</i> para instalar las librerías empleadas por React Js en el proyecto.</li>
  <li>Llenar el archivo <b>.env</b> que viene dentro de la carpeta del proyecto para asignar las conexión a la Base de Datos.</li>
  <li>Desde terminal ejecutar el comando <i>composer dump-autoload</i> y posteriormente el comando <i>php artisan migrate --seed</i> lo cual generará las tablas necesarias para que la Base de Datos funcione</li>
  <li>Una vez realizados los pasos anteriores será necesario abrir XAMPP, y abrir el archivo <b>httpd.conf</b>, y ubicar la parte del documento donde menciona "DocumentRoot" posteriormente se deberán agregar estas dos líneas: <br> DocumentRoot "C:\xampp\htdocs\ecus\public"
<br> <Directory "C:\xampp\htdocs\ecus\public"></li> 
  <li>Una vez realizados estos pasos se podrá acceder al proyecto, abriendo el navegador y escribiendo <b>localhost/</b></li>
</ol>


<h3><b>Pasos para el Desarrollo:</b></h3>
    <p>A continuación enlisto brevemente los pasos para el desarrollo de este pequeño sistema: </p>
    <ol>
        <h4>Backend</h4>
        <li>El primer paso necesario para desarrollar este proyecto fue instalar React y configurarlo en el proyecto</li>
        <li>Una vez configurado todo el ambiente, se procede a generar la Base de Datos y realizar la conexión al proyecto.</li>
        <li>Posteriormente, se procede a realizar el proceso de autenticación para los usuarios.</li>
        <li>Para la parte del desarrollo de la funcionalidad principal se ocupó la librería Carbon de Laravel, la cual permite una manipulación bastante sencilla de las fechas. <br> Dentro del código de Laravel la idea a grandes pasos es obtener la fecha actual, calcular la fecha de una semana atrás y consultar la API para obtener el cambio de USD a MXN en esas fechas.</li>
        <li>Como último proceso antes de pasar al Frontend es necesario manipular los resultados de la API para darle el formato requerido por la libería React Google Charts.</li>
  <br>
  <h4>Frontend</h4>
  <li>Como primer paso en la parte de Frontend es necesario instalar Axios para permitir hacer llamadas Http a Laravel, posterior a esto se requiere instalar la librería para desplegar la gráfica.</li>
  <li>Se define el archivo Blade en el cuál se mostrará el render de React.</li>
  <li>Dentro del archivo de React, el primer paso será definir todas las dependencias. Posteriormente, se establece la llamada de Axios a Laravel para obtener los datos que se enviarán a la gráfica, dentro de esta función se empleará el state de React para enviar los valores a la gráfica.</li>
        <li>El siguiente paso será definir la estructura HTML y el componente de la gráfica.</li>
        <li>Finalmente, se procede a enviar los datos a la gráfica.</li>
</ol>
