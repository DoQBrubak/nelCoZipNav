var c = document.getElementById('map_canvas');
var ctx = c.getContext('2d');
var current = {value:'base'};



places.rawHTML = "<option value='%data-val%'>%data-desc%</option>";
places.keys = Object.keys(places.places);
places.renderHTML = function() {
  for (var i = 0; i < this.keys.length; i++) {
    var useHTML = places.rawHTML;
    useHTML = useHTML
      .replace('%data-val%', this.keys[i])
      .replace('%data-desc%', this.places[this.keys[i]].zip + " - " + this.places[this.keys[i]].fullname);
    $('#townSelector').append(useHTML);
}};


//pass in a 4-letter name string
var makeImgAndDraw = function(someplace) {
  var localImgObj = new Image()
  localImgObj.src = 'images/' + someplace + ".png";

  localImgObj.onload = function() {
    ctx.drawImage(
      this,
      places.places[someplace][ 'xy' ][0],
      places.places[someplace][ 'xy' ][1]
)}};



function reTown() {
  current.value = $('#townSelector').prop('value');
  makeImgAndDraw('base');
  if (current.value != 'base'){
    makeImgAndDraw(current.value);  
  }
};







$('#townSelector').attr('value', current.value );
$('#townSelector').change(reTown);
places.renderHTML();
makeImgAndDraw('base');

