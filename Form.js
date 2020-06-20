class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Hello");
    title.position(130, 0);
    var button1 = createButton('Start');
    button1.position(130,100);

    button1.mousePressed(function(){
      button1.hide();


    var input = createInput("Name");
    var button = createButton('Open');
    
    input.position(130, 160);
    button.position(250, 200);
    
    button.mousePressed(function(){
      input.hide();
      button.hide();


      background(backgroundImage);

      
      var name = input.value();
      
     
     
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });
  });
  }
}
