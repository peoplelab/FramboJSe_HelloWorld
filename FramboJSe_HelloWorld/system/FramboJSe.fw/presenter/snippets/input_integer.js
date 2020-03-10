﻿// input_integer.js -> "input_integer" snippet management file
// target:  <snp_input_integer/>
// funct.:  
// output:  campo input testo generico
define (['./input_kernel.js'], function(kernel) {

    var _ITEMNAME = 'input_integer';                         // Item's name
    var _ITEMTAG  = 'snp_';                                  // Item's tag prefix

    return {
        itemName: _ITEMNAME,
        itemTag: _ITEMTAG,
        BuildHtml: buildHtml 
    }


    // FUNCTION: buildHtml
    //  builds the snippet's HTML code 
    // PARAMS:
    //  tagPars : tag's custom parameters (in JSON format)
    //  pbAttrs : the "public" attributes to be applied to the most external element of the snippet
    //              pbAttrs[0] : extension of "class" attribute,
    //              pbAttrs[1] : all others attributes 
    // RETURN:
    //  myHtnml : HTML formatted code as simple text (syncronous mode) or promise (asyncronous mode)
    function buildHtml(tagPars, pbAttrs) {

        var customAttrs = pbAttrs[1]+ ' checksFor="integer" ';

        var kPars = {
            Input: 'text',
            Class: _ITEMNAME + pbAttrs[0],
            Attrs: customAttrs
        }
        var myHtml = kernel.Build(kPars, tagPars);

        // Defines field's type symbol (if requested)
        if (pbAttrs[1].toLowerCase().indexOf('hasicon') > -1 ) {

            var htmlWrap, closeWrap;

            htmlWrap  = '<div class="input-group">';
            htmlWrap += '<span class="input-group-addon text"';
            htmlWrap += 'title="Campo numerico intero">';           // Tooltip text shown on mouseover
            htmlWrap += 'Nr';                                       // Symbol/text displayed 
            htmlWrap += '</span>';

            closeWrap = '</div>';

            myHtml = htmlWrap + myHtml + closeWrap;
        }

        // Return value
        return new Promise((resolve, reject) => { resolve(myHtml) });

    }

});