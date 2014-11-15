var HTMLforOption = "<option value='%needValue%'>%needDesc%</option>";

var c = document.getElementById( 'map_canvas' );
var ctx = c.getContext('2d');


places.renderHTML = function() {
  for (var i = 0; i <  placeKeys.length; i++) {
    var useHTML = HTMLforOption;
    useHTML = useHTML.replace('%needValue%', placeKeys[i]);
    useHTML = useHTML.replace('%needDesc%',
      this[placeKeys[i]].zip + " - " + this[placeKeys[i]].fullname);
    $( '#towns_selector' ).append(useHTML);
    console.log(useHTML)
}};
places.renderHTML();


$( 'select' ).change( reTown );

$( '#towns_selector' ).attr( 'value', 'base' );

makeImgAndDraw( 'base' );

//pass in a 4-letter name string
var makeImgAndDraw = function( choosePlace ) {
  var localImgObj = new Image()
  localImgObj.src = 'images/' + choosePlace + ".png";
  

  localImgObj.onload = function() {
    ctx.drawImage(
      this,
      places[choosePlace][ 'xy' ][0],
      places[choosePlace][ 'xy' ][1]
)}};

function reTown() {
  current = $( '#towns_selector' ).prop( 'value' );
  makeImgAndDraw( 'base' );
  makeImgAndDraw(current);
};