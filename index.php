<?php

include 'app.php';

$app = new App(); 
$products = array(
   0 => array("item"=>"Peas", "price"=>0.95),
   1 =>  array("item"=>"Eggs", "price"=>2.10),
   2 => array("item"=>"Milk", "price"=>1.3),
   3=>  array("item"=>"Beans", "price"=>0.73)
);
?>

<html>
<head>

    <script src="http://code.jquery.com/jquery.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shopping demo</title>
	
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="Shopping.js"></script>
</head>
<body>
			<div class="container col-md-12 ">
			<div><h1> My Shopping Cart Example</h1></div>
			<div  class="col-md-4 col-md-4-offset-2 ">
		
			 <div class="table-responsive">
					 <table id="products" class="table table-striped table-bordered table-hover">
					  <thead>
					  <tr>
						<th>Goods</th>
						<th>Price</th>
					  </tr>
					  </thead>
					  <tbody>
					  
							  <?php  
							   foreach($products as  $key=>$val){
							  ?><tr>
									<td><span class="item"><?php echo $val["item"];  ?></span></td>
									<td><span class="price"><?php echo $val["price"]; ?></span> <a href="#" class=" btn btn-primary add">Add</s></td>
							  </tr>
							  <?php  
							  }
							  ?>
							  </tbody>
					</table> 
			 </div>
			 
			
			</div>
			<div class="col-md-4 col-md-4-offset-1" >
			<div id="shoppingList">
			  <h1>Shopping List</h1>
							<ul class="list-group">
								
							</ul>
						</div>
		<div class="col-md-4">
			 <select id="converter"  class="form-control  ">
			  
			</select></div>
			<div class="col-md-12">
					<p>Total :<span id="total" >0</span></p>
					<p>Conversion :<span id="change" >0</span></p>
			</div>
			</div>
	</div>
</body>
</html>