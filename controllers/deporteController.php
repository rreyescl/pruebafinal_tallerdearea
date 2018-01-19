<?php
require_once '../modelos/entidadDeporte.php';
require_once '../modelos/modeloDeporte.php';

$_modeldeporte = new ModeloDeporte();

if (isset($_REQUEST['Accion'])) {
    switch ($_REQUEST['Accion']) {

        case 'listar':
            $jsondata = $_modeldeporte->listar();
            //var_dump($jsondata);
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($jsondata);
            break;
        case 'obtener':
            $id = $_REQUEST['deporte_id'];
            $jsondata = $_modeldeporte->Obtener($id);
            //var_dump($jsondata);
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($jsondata);            
            break;
    }
}

?>