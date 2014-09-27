/*
	Better Theme Designer
	Darren Smith

	Component: Header 1 (Javascript)
*/
var Header_1_Loaded = true;
var Header_1_BackgroundColour = "#333333";
var Header_1_FixedRelative = "position:fixed;\ntop:0px;\nleft:0px;\n";

function Load_Header_1(){
	return;
}

function Get_Header_1_Form_Options(){
	var Output  = "<div><label>Background Colour: </label><input id=\"Header_1_Background_Colour\" onchange=\"Header_1_Change_Properties();\" type=\"color\" value=\""+Header_1_BackgroundColour+"\"/></div>";
	if(Header_1_FixedRelative=="position:fixed;\ntop:0px;\nleft:0px;\n")
	    Output += "<div><label>Fixed/Relative: </label><select id=\"Header_1_FixedRelative\" onchange=\"Header_1_Change_Properties();\"><option selected=\"selected\" value=\"fixed\">Fixed</option><option value=\"relative\">Relative</option></select></div>"; 
	else
		Output += "<div><label>Fixed/Relative: </label><select id=\"Header_1_FixedRelative\" onchange=\"Header_1_Change_Properties();\"><option value=\"fixed\">Fixed</option><option selected=\"selected\" value=\"relative\">Relative</option></select></div>";
	return Output;
}

function Header_1_Change_Properties(){
	Header_1_BackgroundColour = document.getElementById('Header_1_Background_Colour').value;
	if(document.getElementById('Header_1_FixedRelative').value=="fixed")
		Header_1_FixedRelative = "position:fixed;\ntop:0px;\nleft:0px;\n";
	else
		Header_1_FixedRelative = "position:relative;\n";
	Get_Header_1_CSS();
	Get_Header_1_HTML();
}

function Get_Header_1_HTML(){
	$.get("components/header/1/component.html", function(data){
		HeaderHTML = data;
		RefreshFrame();
		return;
	});
}

function Get_Header_1_CSS(){
	$.get("components/header/1/component.css", function(data){
		data = data.replace("{BackgroundColor}", Header_1_BackgroundColour);
		data = data.replace("{FixedRelative}", Header_1_FixedRelative);
		console.log('background color',Header_1_BackgroundColour);
		HeaderCSS = data;
		RefreshFrame();
		return;
	});
}

SetFormOptions();