//funkcija se poziva kada korisnik klikne da promeni jezik

function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#rusTranslator").css('color', '#212529');
      $("#srbTranslator").css('color', '#212529');
    } 
    if(lng == 'rus'){
      $("#rusTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
      $("#srbTranslator").css('color', '#212529');
    }
    if(lng == 'srb'){
      $("#srbTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
      $("#rusTranslator").css('color', '#212529');
    }
}

$(document).ready(function(){

    $("#enTranslator").click(function(){
        translate('en','lng-tag');
    });

    $("#rusTranslator").click(function(){
        translate('rus','lng-tag');
    });

    $("#srbTranslator").click(function(){
        translate('srb','lng-tag');
    });

});