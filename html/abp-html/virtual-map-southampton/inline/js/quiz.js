// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "What year did Geevor finally close?",
  choices: {
    correct: "1991",
    wrong: ["2009", "1972", "1987"]
  }
}, {
  question_string: "What does Wheal an Giver mean?",
  choices: {
    correct: "A piece of land occupied by goats",
    wrong: ["A piece of land occupied by frogs", "A piece of land occupied by pasties", "A piece of land occupied by badgers"]
  }
}, {
  question_string: "What was the name of the shaft built to celebrate the end of World War 1?",
  choices: {
    correct: "Wheal Victory",
    wrong: ["Wheal Europe", "Wheal Prosperous", "Wheal Britain"]
  }
}, {
  question_string: 'Where did the miners change their clothes and store their belongings?',
  choices: {
    correct: "In The Dry",
    wrong: ["In the mine", "In the pub", "In their house"]
  }
}, {
  question_string: 'What was the name of the women who worked on the surface of the mine?',
  choices: {
    correct: "Bal Maidens",
    wrong: ["Bakers", "Ballet dancers", "Barbara"]
  }
},{
  question_string: 'Which is the odd one out? ',
  choices: {
    correct: "South Crofty",
    wrong: ["Levant", "Wheal Owles", "Wheal Mexico"]
  }
}, {
  question_string: 'What did the female mine workers do as their job?',
  choices: {
    correct: "Pick and break up the ore",
    wrong: ["Work the cage ", "Dig tunnels", "Mend the drills"]
  }
}, {
  question_string: 'How old are the workings at Geevor?',
  choices: {
    correct: "Over 200 years ",
    wrong: ["100 years", "50 years", "25 years"]
  }
}, {
  question_string: 'What village is Geevor in?',
  choices: {
    correct: "Pendeen",
    wrong: ["Penwithick", "Portreath", "Porthleven"]
  }
}, {
  question_string: 'How do you say Cornwall Forever in Cornish?',
  choices: {
    correct: "Kernow bs vyken",
    wrong: ["Onen hag oll", "Wheal an Gever", "A Kernow kensa"]
  }
}];

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
  $('#quiz-name').text(this.quiz_name);
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      change_question();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    // Display the score with the appropriate message
    var percentage = score / self.questions.length;
    console.log(percentage);
    var message;
    if (percentage === 1) {
      message = "You're the best of the best, a fully qualified mining genius and because you are so clever, you're now a MINE CAPTAIN! Congratulations, cap!";
      $("#miner-profile").addClass("mine-captain");
    } else if (percentage >= .9) {
      message = "Very, very good. You're so good, you're a SHIFT CAPTAIN. Working hard underground, you'll be managing the day to day deep beneath the earth's surface.";
      $("#miner-profile").addClass("shift-captain");
    } else if (percentage >= .8) {
      message = "Very good. Solid score. You're a DRIVER and are responsible for bringing miners up and down the mine in the cage.";
      $("#miner-profile").addClass("driver");
    } else if (percentage >= .7) {
      message = "Great! You work hard and are very strong, you're a BAL MAIDEN.";
      $("#miner-profile").addClass("balmaiden");
    } else if (percentage >= .6) {
      message = "Solid work here, very solid. You're now a MINER and are responsible for finding as much tin and copper as you can. Good luck!";
      $("#miner-profile").addClass("miner");
    } else if (percentage >= .5) {
      message = "You're a pesky KNOCKER, always frightening the miners with knocks and rattles and other noises. Only the corner of a pasty will keep you quiet!";
      $("#miner-profile").addClass("knocker");
    } else if (percentage >= .4) {
      message = "Must try harder. You're a PIT PONY deep underground, pulling cartful's of rock. It's a tough job, but someone's got to do it!";
      $("#miner-profile").addClass("pony");
    } else if (percentage >= .3) {
      message = "You're a SLIME WORKER. You're going to be washing and cleaning the rocks for a very long time.";
      $("#miner-profile").addClass("slimes");
    } else if (percentage >= .2) {
      message = "Well that was a poor days work - HEAD HOME WITH NO PAY";
      $("#miner-profile").addClass("no-pay");
    } else if (percentage >= .1) {
      message = "That was terrible, have you even learned anything about the mine? - YOU'RE FIRED!";
      $("#miner-profile").addClass("fired");
    } else {
      message = 'THE MINE HAS COLLAPSED and you have been crushed to death by tonnes of rocks. Rest in Peace.';
      $("#miner-profile").addClass("dead");
    }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('My Quiz');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});

/*$('.sidebar').on('click', '.toggle-sidebar-standard', function() {
    var myLink = $(this).attr('data-link');
    $('.toggleMap.close').hide();
    $('#sidebar-standard').load('./inline/sidebar/' + myLink );
    $('#sidebar-views').hide();
    $('#sidebar-quiz').hide();
    $('#sidebar-standard').delay(200).fadeIn();
    $('.lightbox').hide();
    $('.nav-main').hide();
    $('.back-button').show();
    $('.status').addClass('hidden');
});*/




