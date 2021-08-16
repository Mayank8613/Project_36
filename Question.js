class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Your Option No. Here....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");



    this.message = createElement("h2");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question - What month of the year has 28 days?");
    this.option1.html("1: February");
    this.option2.html("2: May");
    this.option3.html("3: November")
    this.option4.html("4: All of them");

    this.input1.position(150, 230);
    this.input2.position(400,230);
    this.button.position(290, 300);
    this.question.position(150,70);
    this.option1.position(150,90);
    this.option2.position(150,110);
    this.option3.position(150,130);
    this.option4.position(150,150);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you, your answer has been submitted");
      this.message.position(260,325);
    })


  }
}
