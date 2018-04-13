$(document).ready(function() {
	 $.getJSON("http://www.apilayer.net/api/live?access_key=e3a48d07b72fb760f7c9d1bf4a35cd26", function(resp){
		 
		// alert(JSON.stringify(resp.quotes));
		 var select = document.getElementById("converter");
						var ops ="";
						for(var i in resp.quotes){
						
							
						ops+="<option value="+ resp.quotes[i]+" >"+ i+"</option>";
						}
						$(select).append(ops);
	 });
	//alert(jsn);
	/*
			get all exchange rates fromserverver and ad them to select
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






var groups = {};
    $('.add').click(function(){
		var goods = $(this).parent().parent().children("td").children(".item").text();
		//
		num = parseFloat($(this).closest('td').children('.price').text());
		prices += parseFloat($(this).closest('td').children('.price').text());
		console.log("new  price "+prices.toFixed(2));
		var result = prices.toFixed(2);
		// 'li.'+ClassName +"  ul
	if ($('#shoppingList ul li.'+goods ).length) {
         $('#shoppingList ul li.'+goods+' ul').append('<li class="list-group-item ">' + goods +" <a href='#' data-id='"+num+"'  class='close'>  X   " + '</a></li>');
		//console.log("sub list yes");
    } else {
        $('#shoppingList ul.list').append('<li class="list-group-item '+goods+'">' + goods + '(<span class="num-items"></span>)  <a href="#" data-id="'+num+'"  class="close">  X   ' + '</a><ul></ul></li>');
		//console.log(" list yes");
    }
	
	    var num_itms = $('#shoppingList ul.list li.'+goods+' ul li').length+1;
        $('#shoppingList ul.list li.'+goods+' span.num-items').text(num_itms);	
		$('#total').text(result);
		var convert =parseFloat($('#total').text()) * parseFloat($("#converter option:selected" ).val()); 
		$('#change').text(convert.toFixed(2));
		
              // alert(+"  "+price);

    });
	/*
			shopp link close is clicked ok remove item fro cart and deducts fromtotal
	*/
	$('#shoppingList ul.list ').on("click", " a.close", function () {

					console.log("clicked");	
              if($(this).parent().children("ul").length) {
				var children_num =$(this).parent().children("ul").children().length
				//console.log(" number of children "+$(this).parent().children("ul").children().length)
				var deduct_value = parseFloat( $('#total').text());
				console.log("old  "+deduct_value);
				var val_d =0;
				$($(this).parent().children("ul").children()).each(function(index, value){
					val_d = $(this).children("a").attr("data-id");
					deduct_value-= parseFloat($(this).children("a").attr("data-id"));
		//			console.log($(this).children("a").attr("data-id")+"::"+children_num  +"   "+$('#total').text());
				});
				var total_deduct =(deduct_value- val_d).toFixed(2)
				console.log(" ::::  "+total_deduct);
				 $('#total').text(total_deduct);
				 prices =parseFloat( total_deduct);
						
			} 
			else{
			//	console.log("no children");
				var value=$(this).data('id');
				prices -= parseFloat(value);
				var result =parseFloat( prices);
				prices= result;
				$('#total').text(result);
				$('#total').data('id',result); 
			}
			console.log("price ="+prices)
	var convert =parseFloat($('#total').text()) * parseFloat($("#converter option:selected" ).val()); 
			$('#change').text(convert.toFixed(2));
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



function groping(){
		  var many =0;
				$(" #shoppingList ul li").each(function(){
					many++;	
					
					var self =$(this);
					var ClassName = self.attr("class").split(" ")[1];
					var st =""
					if(ClassName){
						 if( typeof groups[ClassName]== 'undefined'){
							groups[ClassName]  = [];
						} 
						//
						groups[ClassName].push(self);
						//console.log(self.html());
					}					
				});
				console.log("num of li's  "+many)
				
								var cnt = 0;
								for(ClassName in groups){
									cnt++;
								//	console.log(groups[ClassName]);
								
								}
								
				var ul = $(" #shoppingList ul");
				ul.empty();
				for(ClassName in groups){
					
						var arr = groups[ClassName];
						//console.log(groups);
					//console.log("class  "+ClassName+"  length  "+cnt+"  groups  " +ClassName  +"  "+arr.length);
					/* 	$(arr).each(function(key, value){
									console.log(key+ "  ::"+value.html());
						}) */
						ul.append('<li class="'+ClassName+'"> '+$(arr[0]).html()+'<a>more like this</a>('+')<ul></ul></li>');
						$(arr.splice(1)).each(function(index,value){
							//console.log("billy   "+ClassName+" :: how many   "+cnt+ "  :: "+ arr.length+"  "+ index);
							
								//	console.log( "  .replace(/['"]+/g,'')+' ul')  ::");
							ul.find('li.'+ClassName +"  ul").append(this);
						})
				}
}
