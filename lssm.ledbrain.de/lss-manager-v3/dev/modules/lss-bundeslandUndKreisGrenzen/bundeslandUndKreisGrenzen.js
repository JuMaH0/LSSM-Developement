(function() {
    'use strict';
    const STORAGE = 'LSS_KREISGRENZEN';

    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.rawgit.com/patosai/tree-multiselect/v2.4.1/dist/jquery.tree-multiselect.min.css') );

    var myStyle = {
        "weight": 2,
        "fillOpacity": 0.05
    };

    let openBtn = '<div id="kreise-openBtn" class="leaflet-bar leaflet-control leaflet-control-custom map-expand-button" style="background-image: url(https://raw.githubusercontent.com/jalibu/LSHeat/master/icons8-germany-map-50.png); background-color: white; width: 26px; height: 26px;"></div>';
    $('.leaflet-bottom.leaflet-left').append(openBtn);

    $('#kreise-openBtn').click(function(){
        $('#kreise-modal').show();
    });

    $.getJSON("https://raw.githubusercontent.com/jalibu/LSHeat/master/kreise.json", function( data ) {
        let response = [];
        let state;
        let bezirk;
        let kreis;

        let selected = JSON.parse(localStorage.getItem(STORAGE));

        let markup = '<div id="kreise-modal" style="display: none; z-index: 99999; background: #fff; top: 20px; position: absolute; width: 50%; left: 25%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
        markup += '<div class="modal-header">';
        markup += '<button type="button" class="close kreise-close" data-dismiss="modal" aria-hidden="true">×</button>';
        markup += '<h3>Angezeigte Kreise<s> und Bundesländer</s></h3>';
        markup += '<s>Bundesländer über den Haken rechts (de-)aktivieren</s>';
        markup += '</div>';
        markup += '<div class="modal-body" style="overflow: scroll;">';
        markup += '<div id="kreise-div">';
        markup += '<select id="kreise-selection" multiple="multiple">';
        for(let feature of data.features){
            if(!state || state !== feature.properties.NAME_1){
                state = feature.properties.NAME_1;
            }
            if(!bezirk || bezirk !== feature.properties.NAME_2){
                bezirk = feature.properties.NAME_2;
            }

            if(!kreis || kreis !== feature.properties.NAME_3){
                kreis = feature.properties.NAME_3;
            }
            if(selected && selected.indexOf('' + feature.id) >= 0){
                L.geoJSON(feature, {style: myStyle}).addTo(map);
                markup += '<option value="' + feature.id + '" selected="selected" data-section="' + state + '/' + bezirk + '">' + kreis + '</option>';
            } else {
                markup += '<option value="' + feature.id + '" data-section="' + state + '/' + bezirk + '">' + kreis + '</option>';
            }
        }
        markup += '</select>';
        markup += '</div>';
        markup += '</div>';
        markup += '<div class="modal-footer">';
        markup += '<button class="btn kreise-close" data-dismiss="modal" aria-hidden="true">Schließen</button>';
        markup += '<button id="kreise-btn-save" class="btn btn-primary">Speichern</button>';
        markup += '</div>';
        markup += '</div>';

        $('body').append(markup);

        let laenderKeys = [0, 2, 4, 7, 17, 19, 21, 23, 25, 29, 38, 42, 44, 48, 52, 54];

        $('.kreise-close').click(function(){
            $('#kreise-modal').hide();
        });

        $('#kreise-btn-save').click(function(){
            localStorage.setItem(STORAGE, JSON.stringify($('#kreise-selection').val()));
            location.reload();
        });

        $.getScript("https://cdn.rawgit.com/patosai/tree-multiselect/v2.4.1/dist/jquery.tree-multiselect.min.js", function(){
            $("#kreise-selection").treeMultiselect({searchable: true, startCollapsed: true});
            $('.tree-multiselect').css('background', '#fff');
        }).done(function() {
            // for (var i = 0; i < laenderKeys.length; i++) {
            //     $("div.selections [data-key='" + laenderKeys[i] + "']").each(function() {
            //         if (!$(this).hasClass('item')) {
            //             var toggleBundesland = '<div class="pull-right"><input type="checkbox"></div>';
            //             $(this).html($(this).html() + toggleBundesland);
            //         }
            //     });
            // }
        });
    });

})();
