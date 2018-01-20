<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once '../config/config.php';
require_once 'entidadDeporte.php';
class ModeloDeporte{

	private $pdo;

	public function __CONSTRUCT() {
		try{
			$this->pdo=new PDO('mysql:host='.HOST.';dbname='.DB,USERDB,PASSDB);
			$this->pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		}catch(Exception $e){
			die($e->getMessage());
		}
	}

	public function listar(){
		$responsearray = array();
		try{
			$result = array();
			$stm=$this->pdo->prepare("SELECT * FROM deporte order by id asc");
			$stm->execute();
			foreach($stm->fetchALL(PDO::FETCH_OBJ) as $r){
				$_deporte = new Deporte();
				$cuerpocel->__SET('deporte_id', $r->deporte_id);
				$cuerpocel->__SET('deporte_nombre', $r->deporte_nombre);
				$cuerpocel->__SET('deporte_descripcion', utf8_encode($r->deporte_descripcion));
				$cuerpocel->__SET('deporte_urlimagenp', $r->deporte_urlimagenp);
				$cuerpocel->__SET('deporte_imagen_p', $r->deporte_imagen_p);
				$cuerpocel->__SET('deporte_imagen_s', $r->deporte_imagen_s);
                $cuerpocel->__SET('deporte_categoria_id', $r->deporte_categoria_id);
				$result[] = $cuerpocel->returnArray();
			}
			$responsearray['success']=true;
			$responsearray['message']='Listado correctamente';
			$responsearray['datos']=$result;

		}catch(Exception $e){
			echo $e;
			$responsearray['success']=false;
			$responsearray['message']='Error al listar deportes';
		}
		return $responsearray;
	}
    public function Obtener($id){
        $jsonresponse = array();
        try{
            $stm = $this->pdo->prepare("SELECT  * FROM deporte
                                		WHERE deporte_id = ? ");
            $stm->execute(array($id));
            $r = $stm->fetch(PDO::FETCH_OBJ);
				$_deporte = new Deporte();
					$_deporte->__SET('deporte_id', $r->alumno_id);
					$_deporte->__SET('deporte_nombre', $r->alumno_rut);
					$_deporte->__SET('deporte_descripcion', $r->alumno_password);
					$_deporte->__SET('deporte_imagen_s', $r->alumno_nombre);
					$_deporte->__SET('deporte_imagen_p', $r->alumno_apellido);
					$_deporte->__SET('deporte_categoria_id', $r->alumno_email);

            $jsonresponse['success'] = true;
            $jsonresponse['message'] = 'Se obtuvo el deporte correctamente';
            $jsonresponse['datos'] = $alum->returnArray();
        } catch (Exception $e){
            //die($e->getMessage());
            $jsonresponse['success'] = false;
            $jsonresponse['message'] = 'Error al Obtener deporte';
        }
        return $jsonresponse;
    }
}
?>
