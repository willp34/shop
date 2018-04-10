<?php 

function getMoney(){
	
	$app = new App(); 
	return $app->getCurrency();
}
 class App
{
  private $currencyArr =array("curency"=> array("us"=>1.2, "aud"=>1.008, "eur"=>.008));
  
  public function getCurrency(){
	  echo json_encode($this->currencyArr);
  }
}

?>