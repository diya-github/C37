class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "enter your name");
    this.playButton = createButton("play");
    this.titleImage = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setElementsPosition(){
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width/2-90, height/2-20);
    this.titleImage.position(120,100);
    this.greeting.position(width/2-300, height/2-100);
  }
  hide(){
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  handleMousePressed() {
    this.playButton.mousePressed(()=> {
      this.input.hide();
      this.playButton.hide();
      var message = `
      hello ${this.input.value()}
      </br> waiting for other players to join`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
    })
  }
  display(){
    this.setElementsPosition();
    this.handleMousePressed();
  }

}
