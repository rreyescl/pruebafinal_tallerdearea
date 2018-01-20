<?php

class Deporte{
	private $deporte_id;
	private $deporte_nombre;
	private $deporte_descripcion;
	private $deporte_imagen_p;
	private $deporte_imagen_s;
	private $deporte_categoria_id;
	
	
	public function __GET ($k){
		return $this->$k;
	}
	public function __SET($k,$v){
		$this->$k=$v;
	}
	public function returnArray(){
		return get_object_vars($this);
	}
}

?>