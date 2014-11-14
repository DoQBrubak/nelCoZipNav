var HTMLforOption = "<option value='%needValue%'>%needDesc%</option>";

places.renderHTML = function() {
  for (var i = 0; i <  placeKeys.length; i++) {
    var useHTML = HTMLforOption;
    useHTML = useHTML.replace("%needValue%", placeKeys[i]);
    useHTML = useHTML.replace("%needDesc%", this[placeKeys[i]].fullname);
    console.log(useHTML)
  };
}
places.renderHTML();
