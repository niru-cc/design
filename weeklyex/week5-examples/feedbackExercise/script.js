///////// Feedback

let meterText = document.getElementById("meterOutputText");

let meterCheckInterval = 100;

let currentVolume = null;

setInterval(() => {
  /* meter defined in toneSetup */
  currentVolume = meter.getValue();
  let newValue = clamp(currentVolume, -48, 0);
  let newValueInt = parseInt(newValue);
  let newRemappedValue = remapRange(newValueInt, -48, -6, 0, 100);

  if (newRemappedValue < 1) {
  } else if (newRemappedValue < 60) {
    meterText.innerHTML = "▪";
  } else {
    meterText.innerHTML = "✺";
  }
  //meterText.innerHTML = newRemappedValue + "%";

  let newColour = `color-mix(in hsl, red, blue ${newRemappedValue}%)`;
  console.log(newColour);
  document.getElementById("playbackToggle").style.backgroundColour = newColour;

  //document.getElementById("playbacktoggle").style.backgroundColor = "red";

  /*remappedValue = parseInt(
    remapRange(clamp(currentVolume, -48, 0), -48, -6, 0, 100)
  );
  meterText.innerHTML = `$(remappedValue)%`;*/
}, meterCheckInterval);
