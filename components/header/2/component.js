/*
	Better Theme Designer
	Darren Smith

	Component: Header 2 (Javascript)
*/
var Header_2_Loaded = true;

function Load_Header_2(){
	return;
}

function Get_Header_2_Form_Options(){
	return "<label>Test Header 2: </label><input type=\"text\"/>";
}

function Get_Header_2_HTML(){
	$.get("components/header/2/component.html", function(data){
		HeaderHTML = data;
		RefreshFrame();
		return;
	});
}

function Get_Header_2_CSS(){
	$.get("components/header/2/component.css", function(data){
		console.log('css 2',data);
		HeaderCSS = data;
		RefreshFrame();
		return;
	});
}

SetFormOptions();