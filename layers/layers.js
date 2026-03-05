var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_province_1 = new ol.format.GeoJSON();
var features_province_1 = format_province_1.readFeatures(json_province_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_province_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_province_1.addFeatures(features_province_1);
var lyr_province_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_province_1, 
                style: style_province_1,
                popuplayertitle: 'province',
                interactive: true,
    title: 'province<br />\
    <img src="styles/legend/province_1_0.png" /> 70036 - 346262<br />\
    <img src="styles/legend/province_1_1.png" /> 346262 - 622487<br />\
    <img src="styles/legend/province_1_2.png" /> 622487 - 898713<br />\
    <img src="styles/legend/province_1_3.png" /> 898713 - 1174939<br />\
    <img src="styles/legend/province_1_4.png" /> 1174939 - 1451164<br />\
    <img src="styles/legend/province_1_5.png" /> 1451164 - 1727390<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_province_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_province_1];
lyr_province_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'pop_06_POP': 'pop_06_POP', });
lyr_province_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'pop_06_POP': 'TextEdit', });
lyr_province_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_2': 'inline label - always visible', 'pop_06_POP': 'inline label - always visible', });
lyr_province_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});