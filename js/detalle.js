$(document).ready(function(){

  
    
    var getlista = function (){
        var datax = {
            "Accion":"listar"
        }
        $.ajax({
            data: datax,
            type: "GET",
            dataType: "json",
            url: "http://localhost:8090/apiphp/miappws/controllers/controllerprofesor.php",
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
	}