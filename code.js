setScreen("screen_Splash");
timedLoop(2000, function() {
  setScreen("screen_Home");
  stopTimedLoop();
});
onEvent("button_reading", "click", function( ) {
  setScreen("screen_drawcard");
});
onEvent("button_drawcard", "click", function( ) {
  setScreen("screen_card");
  var card_num = 0;
  card_num = randomNumber(0, 77);
  setText("label_hiddencardnum", card_num);
  if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else if (getText("label_hiddencardnum") == 0) {
    setImageURL("image_card", "assets/5-cups.jpg");
  } else {
    
  }
});
