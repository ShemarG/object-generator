$(document).ready(function(){

var i = 0;
var k = 1;
var propertyName = [];
var propertyValue = [];



function addProperty(){
	
	$('#parameters').append("<div id='np' class='pair'><input id='p' type='text' class='text_field'></input><input id='v' type='text' class='right text_field'></input></div>");
   	
   	var dyn_placeholderP = "Object Property Name " + (i+1);
   	var dyn_placeholderV = "Object Property Value " + (i+1);
   	var dyn_div = "Container" + i;

   	var dyn_property = "object_Property_Name_" + i;
   	var dyn_value = "object_Property_Value_" + i;


   	$('#p').attr("placeholder", dyn_placeholderP);
	$('#p').attr("id", dyn_property);
	$('#v').attr("placeholder", dyn_placeholderV);
	$('#v').attr("id", dyn_value);
	$('#np').attr("id", dyn_div);
	
	i++;
}

function removeProperty(){
	
	if(i > 2){
		
		$("#Container" + (i-1)).remove();
		i--;
	}
	else{}

}

$('#Add').click(addProperty);
$('#Remove').click(removeProperty);
$('#run').click(check);
$('#clear_parameters').click(clearAll);
$('#clear_values').click(clearValues);

addProperty();
$("#past_objects").hide();

function check(){

	$("#past_objects").show();
	$("#appear").remove();
	var pastObj = $("#result").text();
	$("#result").empty();
	var objectName = $("#object_Name").val();
	
	$("#result").append("var" + " " + objectName + " " + "=" + " " + "{");
	
	for (var j = 0; j<i; j++)
		{
			propertyName[j] = $("#object_Property_Name_" + j).val();
			propertyValue[j] = $("#object_Property_Value_" + j).val();

			if (j == i-1){
			
				$('#result').append(propertyName[j] + ":" + '"' + propertyValue[j] + '"');
			}
			else{
				$('#result').append(propertyName[j] + ":" + '"' + propertyValue[j] + '"' + "," + " ");
			}
		}
	$("#result").append("};");
	$("#past_objects").prepend("<p id=" + "obj" + k + ">" + pastObj + "</p>");

	if (k >= 10){
		$("#obj" + (k-10)).remove();
	}else{}

	k++;
}

	function clearAll(){
		for (var j = 0; j<i; j++){
			$("#object_Property_Name_" + j).val("");
			$("#object_Property_Value_" + j).val("");
		}
		$("#object_Name").val("");
		$("#result").empty();
		$("#result").append("<p id='appear'> Object Appears Here </p>");
	}

	function clearValues(){
		for (var j = 0; j<i; j++){
			$("#object_Property_Value_" + j).val("");
		}
	}

});

