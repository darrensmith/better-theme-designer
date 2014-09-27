/*
	Better Theme Designer
	Darren Smith

	Component: Footer 1 (Javascript)
*/

var Footer_1_Loaded = true;

function Load_Footer_1(){
	return;
}

function Get_Footer_1_Form_Options(){
	return "<label>Test Footer</label><input type=\"text\"/>";
}

function Get_Footer_1_HTML(){
	$.get("components/footer/1/component.html", function(data){
		FooterHTML = data;
		RefreshFrame();
		return;
	});
}

function Get_Footer_1_CSS(){
	$.get("components/footer/1/component.css", function(data){
		FooterCSS = data;
		RefreshFrame();
		return;
	});
}

SetFormOptions();