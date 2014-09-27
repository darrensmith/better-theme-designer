/*
	Better Theme Designer
	Darren Smith

	Component: Content 1 (Javascript)
*/

var Content_1_Loaded = true;

function Load_Content_1(){
	return;
}

function Get_Content_1_Form_Options(){
	return "<label>Test Content</label><input type=\"text\"/>";
}

function Get_Content_1_HTML(){
	$.get("components/content/1/component.html", function(data){
		ContentHTML = data;
		RefreshFrame();
		return;
	});
}

function Get_Content_1_CSS(){
	$.get("components/content/1/component.css", function(data){
		ContentCSS = data;
		RefreshFrame();
		return;
	});
}

SetFormOptions();