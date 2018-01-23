<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once '../config/config.php';
require_once 'entidadDeporte.php';
class ModeloDeporte
{

    private $pdo;

    public function __CONSTRUCT()
    {
        try {
            $this->pdo = new PDO('mysql:host=' . HOST . ';dbname=' . DB, USERDB, PASSDB);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (exception $e) {
            die($e->getMessage());
        }
    }

    public function listar()
    {
        $responsearray = array();
        try {
            $result = array();
            $stm = $this->pdo->prepare("SELECT * FROM deporte order by deporte_id asc");
            $stm->execute();
            foreach ($stm->fetchALL(PDO::FETCH_OBJ) as $r) {
                $_deporte = new Deporte();
                $_deporte->__SET('deporte_id', $r->deporte_id);
                $_deporte->__SET('deporte_nombre', $r->deporte_nombre);
                $_deporte->__SET('deporte_descripcion', utf8_encode($r->deporte_descripcion));
                $_deporte->__SET('deporte_imagen_p', $r->deporte_imagen_p);
                $_deporte->__SET('deporte_imagen_s', $r->deporte_imagen_s);
                $_deporte->__SET('deporte_categoria_id', $r->deporte_categoria_id);
                $result[] = $_deporte->returnArray();
            }
            $responsearray['success'] = true;
            $responsearray['message'] = 'Listado correctamente';
            $responsearray['datos'] = $result;

        }
        catch (exception $e) {
            echo $e;
            $responsearray['success'] = false;
            $responsearray['message'] = 'Error al listar deportes';
        }
        return $responsearray;
    }
    public function Obtener($id)
    {
        $jsonresponse = array();
        try {
            $stm = $this->pdo->prepare("SELECT  * FROM deporte
                                		WHERE deporte_id = ? ");

            $stm->execute(array($id));
            $r = $stm->fetch(PDO::FETCH_OBJ);
            
            $_deporte = new Deporte();
            $descripcion = $r->deporte_descripcion;
            $descripcion = $this->sanear_string($descripcion);
            
            $_deporte->__SET('deporte_id', $r->deporte_id);
            $_deporte->__SET('deporte_nombre', $r->deporte_nombre);
            $_deporte->__SET('deporte_descripcion', $descripcion);
            $_deporte->__SET('deporte_imagen_s', $r->deporte_imagen_s);
            $_deporte->__SET('deporte_imagen_p', $r->deporte_imagen_p);
            $_deporte->__SET('deporte_categoria_id', $r->deporte_categoria_id);

            $jsonresponse['success'] = true;
            $jsonresponse['message'] = 'Se obtuvo el deporte correctamente';
            $jsonresponse['datos'] = $_deporte->returnArray();
        }
        catch (exception $e) {
            //die($e->getMessage());
            $jsonresponse['success'] = false;
            $jsonresponse['message'] = 'Error al Obtener deporte';
        }
        return $jsonresponse;
    }
    function sanear_string($string)
{
 
    $string = trim($string);
 
    $string = str_replace(
        array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
        array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
        $string
    );
 
    $string = str_replace(
        array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
        array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
        $string
    );
 
    $string = str_replace(
        array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
        array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
        $string
    );
 
    $string = str_replace(
        array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
        array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
        $string
    );
 
    $string = str_replace(
        array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
        array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
        $string
    );
 
    $string = str_replace(
        array('ñ', 'Ñ', 'ç', 'Ç'),
        array('n', 'N', 'c', 'C',),
        $string
    );
 
    //Esta parte se encarga de eliminar cualquier caracter extraño
    /*$string = str_replace(array("\", "¨", "º", "-", "~",
             "#", "@", "|", "!", """,
             "·", "$", "%", "&", "/",
             "(", ")", "?", "'", "¡",
             "¿", "[", "^", "<code>", "]",
             "+", "}", "{", "¨", "´",
             ">", "< ", ";", ",", ":",
             ".", " "),
        '',
        $string
    );*/
 
 
    return $string;
}
}
?>
