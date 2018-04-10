$(document).ready(function() {
	
	
		 var select = document.getElementById("converter");
						var ops ="";
						for(var i in resp.quotes){
						
							
						ops+="<option value="+ resp.quotes[i]+" >"+ i+"</option>";
						}
						$(select).append(ops);
	 });
	//alert(jsn);
	/*
			get all exchange rates from server and ad them to select
	*/
	/* $.ajax({
					 type: 'POST',
					 url: 'myjson.php',
					dataType: "json",
					success: function(res){
						var select = document.getElementById("converter");
						var ops ="";
						for(var i in res.curency){
						
							
						ops+="<option value="+ res.curency[i]+" >"+ i+"</option>";
						}
						$(select).append(ops);
					},

						}); */
	
	
	
	
	var prices= 0;
	var num = 0;
   /*
			add product to shopping list and calculate total in gbp
	*/
    $('.add').click(function(){
		var goods = $(this).parent().parent().children("td").children(".item").text();
		
		num = parseFloat($(this).closest('td').children('.price').text());
		prices += parseFloat($(this).closest('td').children('.price').text());
		var result = prices.toFixed(2);
        $('#shoppingList ul').append('<li class="list-group-item '+goods+'">' + goods + " <a href='#' data-id='"+num+"'  class='close'>  X   " + '</a></li>');

		$('#total').text(result);
              // alert(+"  "+price);

    });
	/*
			shopp link close is clicked ok remove item fro cart and deducts fromtotal
	*/
	$('#shoppingList').on("click", " a.close", function () { 
	var value=$(this).data('id');
	//alert(value);
	  prices -= parseFloat(value);
		var result = prices.toFixed(2);
        $('#total').text(result);
		
		$('#total').data('id',result);
			$(this).parent().remove();
	});
/*
			selct currencey you wish to convert and new currency is show calculating with exchange rate
	*/
 $("#converter").on('change',function(e){
	 var convert =parseFloat($('#total').text()) * parseFloat(this.value); 

	 $('#change').text(convert.toFixed(2));
 }
 )

});
