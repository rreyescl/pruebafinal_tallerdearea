$(document).ready(function(){
    
    var getCategorias = function (){
        console.log("entro al ajax");

        var data = {
            "success": true,
            "message": "Listado correctamente",
            "datos": [
                {
                    "deporte_id": "1",
                    "deporte_nombre": "TIRO CON ARCO",
                    "deporte_descripcion": "El tiro con arco, o arquería, es el deporte, práctica o habilidad de utilizar\r\n un arco para propulsar flechas. Aunque históricamente se ha practicado el tiro\r\n con arco para la caza o la guerra, en tiempos modernos esta actividad ha pasado\r\n a tener fines principalmente recreativos o competitivos. La persona que practica\r\n la arquería es llamada arquero.",
                    "deporte_imagen_p": "",
                    "deporte_imagen_s": "",
                    "deporte_categoria_id": "0"
                },
                {
                    "deporte_id": "2",
                    "deporte_nombre": "TIRO AL PLATO",
                    "deporte_descripcion": "El tiro al plato, tiro al platillo o tiro al vuelo, es una de las dos modalidades del \r\ntiro deportivo y es considerado como uno de los deportes olímpicos contemporáneos.\r\nEl tiro al plato básicamente en cualquiera de sus modalidades consiste en disparar \r\ncon un arma y un cartucho a un plato en movimiento, dicho movimiento lo produce la \r\nmaquina lanza platos, rompiendo o derribando la mayor cantidad de platos",
                    "deporte_imagen_p": "",
                    "deporte_imagen_s": "",
                    "deporte_categoria_id": "0"
                },
                {
                    "deporte_id": "3",
                    "deporte_nombre": "ESQUI ACUATICO",
                    "deporte_descripcion": "El esquí acuático, también llamado esquí náutico, es un deporte que mezcla el surf y el esquí. \r\nFue deporte de exhibición en los Juegos Olímpicos de Múnich 1972.1?\r\nEste deporte en el que se alcanzan altas velocidades, exige buenos reflejos y equilibrio. Los \r\nparticipantes esquían sobre el agua agarrados a una cuerda tirada por una lancha de gran potencia\r\n realizando maniobras espectaculares sobre uno o dos esquís.",
                    "deporte_imagen_p": "",
                    "deporte_imagen_s": "",
                    "deporte_categoria_id": "0"
                }
            ]
        };
        
        for(var i=0; i<data.datos.length;i++){
            //$.each(data.datos[i], function(k, v) { console.log(k + ' : ' + v); });
            console.log('id: '+data.datos[i].id + ' rut: '+data.datos[i].rut);

            ///categoria comienzo
            fila = '<div class="banner-bottom-grids">';
            fila += '<div class="col-md-6 banner-bottom-left">';
            fila += '<div class="left-border">';
            fila += '<div class="left-border-info">';
            fila += '<h4> '+  data.datos[i].deporte_nombre + '</h4>';
            fila += '<p>'+  data.datos[i].deporte_descripcion +'</p>';
            fila += '</div>';
            fila += '</div>';
            fila += '<div class="clearfix"> </div>';
            ///categoria fin

            fila += '<td><button id="edita-profesor" type="button" '
            fila += 'class="btn btn-xs btn-success" data-toggle="modal" data-target="#myModal"'
            fila += ' onclick="verprofesor(\'ver\',\'' + data.datos[i].id + '\')">';
            fila += 'Ver / Editar</button>';
            fila += ' <button id="delete-language-modal" name="delete-language-modal" type="button" ';
            fila += 'class="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModalDelete" ';
            fila += 'onclick="deleteprofesor(\''+ data.datos[i].id +'\',\''
            + data.datos[i].nombre +'\')">';
            fila += 'Eliminar</button></td></tr>';
            $("#categorias").append(fila);
}


/*

        var datax = {
            "Accion":"listar"
        }
        $.ajax({
            data: datax,
            type: "GET",
            dataType: "json",
            url: parent.location+"/controllers/deporteController.php",
        })
        .done(function( data, textStatus, jqXHR ) {
            $("#categorias").html("");
            if ( console && console.log ) {
                console.log( " data success : "+ data.success
                    + " \n data msg : "+ data.message
                    + " \n textStatus : " + textStatus
                    + " \n jqXHR.status : " + jqXHR.status );
            } 
            for(var i=0; i<data.datos.length;i++){
                                //$.each(data.datos[i], function(k, v) { console.log(k + ' : ' + v); });
                                console.log('id: '+data.datos[i].id + ' rut: '+data.datos[i].rut);

                                ///categoria comienzo
                                fila = '<div class="banner-bottom-grids">';
                                fila += '<div class="col-md-6 banner-bottom-left">';
                                fila += '<div class="left-border">';
                                fila += '<div class="left-border-info">';
                                fila += '<h4>titulo</h4>';
                                fila += '<p>???</p>';
                                fila += '</div>';
                                fila += '</div>';
                                fila += '<div class="clearfix"> </div>';
                                ///categoria fin

                                fila += '<td><button id="edita-profesor" type="button" '
                                fila += 'class="btn btn-xs btn-success" data-toggle="modal" data-target="#myModal"'
                                fila += ' onclick="verprofesor(\'ver\',\'' + data.datos[i].id + '\')">';
                                fila += 'Ver / Editar</button>';
                                fila += ' <button id="delete-language-modal" name="delete-language-modal" type="button" ';
                                fila += 'class="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModalDelete" ';
                                fila += 'onclick="deleteprofesor(\''+ data.datos[i].id +'\',\''
                                + data.datos[i].nombre +'\')">';
                                fila += 'Eliminar</button></td></tr>';
                                $("#categorias").append(fila);
            }
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            
            if ( console && console.log ) {
                console.log( " La solicitud getlista ha fallado,  textStatus : " +  textStatus
                    + " \n errorThrown : "+ errorThrown
                    + " \n textStatus : " + textStatus
                    + " \n jqXHR.status : " + jqXHR.status );
            }
        });

*/

    }///end getCategorias
});

/*
<div class="banner-bottom-grids">
				<div class="col-md-6 banner-bottom-left">
					<div class="left-border">
						<div class="left-border-info">
							<h4>Duis dapibus lacinia libero at aliquam</h4>
							<p>Nulla imperdiet fermentum ipsum condimentum condimentum. Sed feugiat neque in sapien mollis malesuada. Vivamus semper massa sed tincidunt venenatis.</p>
						</div>
					</div>
				</div>				
				<div class="clearfix"> </div>
*/




/*
$(document).ready(function(){
    
    var getCategorias = function (){
        var datax = {
            "Accion":"listar"
        }
        $.ajax({
            data: datax,
            type: "GET",
            dataType: "json",
            url: parent.location+"/controllers/deporteController.php",
        })
        .done(function( data, textStatus, jqXHR ) {
            $("#listaprofesores").html("");
            if ( console && console.log ) {
                console.log( " data success : "+ data.success
                    + " \n data msg : "+ data.message
                    + " \n textStatus : " + textStatus
                    + " \n jqXHR.status : " + jqXHR.status );
            }
            for(var i=0; i<data.datos.length;i++){
                                //$.each(data.datos[i], function(k, v) { console.log(k + ' : ' + v); });
                                console.log('id: '+data.datos[i].id + ' rut: '+data.datos[i].rut);
                                fila = '<tr><td>'+ data.datos[i].rut +'</td>';
                                fila += '<td>'+ data.datos[i].nombre +' '+ data.datos[i].apellido +'</td>';
                                fila += '<td>'+ data.datos[i].email +'</td>';
                                fila += '<td>'+ data.datos[i].telefono +'</td>';
                                fila += '<td><button id="edita-profesor" type="button" '
                                fila += 'class="btn btn-xs btn-success" data-toggle="modal" data-target="#myModal"'
                                fila += ' onclick="verprofesor(\'ver\',\'' + data.datos[i].id + '\')">';
                                fila += 'Ver / Editar</button>';
                                fila += ' <button id="delete-language-modal" name="delete-language-modal" type="button" ';
                                fila += 'class="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModalDelete" ';
                                fila += 'onclick="deleteprofesor(\''+ data.datos[i].id +'\',\''
                                + data.datos[i].nombre +'\')">';
                                fila += 'Eliminar</button></td></tr>';
                                $("#listaprofesores").append(fila);
                            }
                        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( " La solicitud getlista ha fallado,  textStatus : " +  textStatus
                    + " \n errorThrown : "+ errorThrown
                    + " \n textStatus : " + textStatus
                    + " \n jqXHR.status : " + jqXHR.status );
            }
        });
    }
});

*/