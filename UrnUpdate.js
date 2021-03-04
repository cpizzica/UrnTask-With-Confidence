var timeline = []
var FreshBlock = 'on'
var ChoiceDirection = ''
var PreviousTrialIndex = 0
var RelativeTrialIndex = 1
var Correct = 0
var TaskType = ''
var Block_Index = 0

// Session order - uncomment the order you want
var All_Type = ['Low_HMMActual','High_HMMActual','Low_MMActual','High_MMActual']
//var All_Type = ['Low_HMMActual','High_HMMActual','Low_MMActual','High_MMActual']
var Block_Type = All_Type[Block_Index]

//var pavlovia_init = {
//	    type: "pavlovia",
//	    command: "init"
//	};

     var script_picker = Math.floor((Math.random() * 200) + 1)


    Low_HMMData = $ .get(`stimuli/low_hazard_HMM/low_hazard_HMM${script_picker}.csv`, function(){
   Low_HMMActual = Papa.parse(Low_HMMData.responseText, {
	   dynamicTyping: true
   })
            })
    
        Low_MMData = $ .get(`stimuli/low_hazard_MM/low_hazard_MM${script_picker}.csv`, function(){
   Low_MMActual = Papa.parse(Low_MMData.responseText, {
	   dynamicTyping: true
   })
            })
    
        High_HMMData = $ .get(`stimuli/high_hazard_HMM/high_hazard_HMM${script_picker}.csv`, function(){
   High_HMMActual = Papa.parse(High_HMMData.responseText, {
	   dynamicTyping: true
   })
            })
    
        High_MMData = $ .get(`stimuli/high_hazard_MM/high_hazard_MM${script_picker}.csv`, function(){
   High_MMActual = Papa.parse(High_MMData.responseText, {
	   dynamicTyping: true
   })
            })
    
function centered_message(message) {
return '<div class="container" style="height:800px;width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-weight:normal;font-family:Arial;font-size:20px">' + message + '<div>'
}
    
    function centered_message_image(message) {
return '<div class="container" style="height:200px;width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:left;font-weight:normal;font-family:Arial;font-size:20px">' + message + '<div>'
}
var check_consent = function(elem) {
    if ($('#consent_checkbox').is(':checked')) {
	return true;
    }
    else {
	alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
	return false;
    }
    return false;
};

var preload = {
    type: 'preload',
    auto_preload: true 
}
 var consent = {
    type:'external-html', 
    url: "consent.html", 
    cont_btn: "start", 
    check_fn: check_consent
}

var Gender_options = ["Male", "Female", "Transgender", "Do Not Wish To Say"];
var Ethnicity_options = ["American Indian or Alaskan Native","Asian","Black or African American","Native Hawaiian or Pacific Islander","White","Hispanic or Latino","Other","Do Not Wish to Respond"]
var demographics = {
	type: "survey-multi-choice",
	questions: [{prompt:"Gender Orientation:", options: Gender_options, required:true,}, 
	{prompt:"Ethnicity:", options: Ethnicity_options, required:true}],
	   };
var age = {
type: "survey-text",
questions: [{prompt: "How old are you?"}],
post_trial_gap: 100
	   };

var ProlificID = {
type: "survey-text",
questions: [{prompt: "Please Enter your ProlificID"}],
post_trial_gap: 100
	   };


         var Instruction_trial1 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p>In this task you will see black or white beads being pulled from jars. <br><br>On each trial, a bead will be pulled from one of two jars. Once you see this bead, your goal is to predict the color of the NEXT bead that will be pulled. <br> <br>Every time you correctly guess the color of the NEXT bead, you will get a point. <br><br>Press the SPACEBAR to continue.</p>'),
	 choices: [' '],
	 prompt: '',     
     };
    
             var Instruction_trial2 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p>Jars are filled with 80% white or black beads and 20% of the opposite color mixed in.<br><br>Press the SPACEBAR to continue. </p>'),
	 choices: [' '],
	 prompt: ''
     };
           
            
             var Instruction_trial5 = {
	 type: 'image-keyboard-response',
	 stimulus: 'resources/WhiteJar_HMM.png',
	 choices: [' '],
	 prompt: centered_message_image('A jar filled with 80% White Beads and 20% Black Beads')
     };
    
            var Instruction_trial6 = {
	 type: 'image-keyboard-response',
	 stimulus: 'resources/BlackJar_HMM.png',
	 choices: [' '],
	 prompt: centered_message_image('A jar filled with 80% Black Beads and 20% White Beads')
     };
    
                 var Instruction_trial7 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p>There will be two blocks of trials. Each block will contain 500 trials. <br><br>Here are examples of what you will see on each trial.<br><br>Press the SPACEBAR to continue. </p>'),
	 choices: [' '],
	 prompt: ''
     }; 
	 
	 var Instruction_trial9 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/NoChoice.png',
	 choices: [' '],
	 prompt: centered_message_image('Press the SPACEBAR to continue.')
     };
    
    var Instruction_trial10 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p> The jar the beads are pulled from is NOT choosen at random on each trial.<br><br>After each prediction, there will be a chance that the jars will switch, and that the next bead will be pulled from the opposite jar as the previous trial.<br><br>In each block, the chance that a jar will switch will either be LOW (the jars will not switch very often), or HIGH (the jars will switch almost all the time).<br><br>At the start of each block, you will be told the probability that the jars will switch on each trial. This switch probability will stay constant throughout the block.<br><br>We will now show you some examples of beads being drawn from jars. The bead will appear in the middle of the screen, and the jar the bead was pulled from will be indicated with a black rectangle.<br><br>Press the SPACEBAR to continue. </p>'),
	 choices: ['spacebar'],
	 prompt: ''
     }; 
    
    
        var Instruction_trial14 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/TutorialWhiteJarDrawHMMC.png',
	 choices: ['spacebar'],
	 prompt: centered_message_image('Press the SPACEBAR to continue.')
     };
    
        var Instruction_trial15 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/TutorialBlackJarDrawHMMC.png',
	 choices: ['spacebar'],
	 prompt: centered_message_image('Press the SPACEBAR to continue.')
     };
    
        var Instruction_trial16 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/TutorialBlackJarDrawHMMI.png',
	 choices: ['spacebar'],
	 prompt: centered_message_image('Press the SPACEBAR to continue.')
     };
    
        var Instruction_trial17 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p> As you observed, a white bead was pulled from a 80% white jar, the jars switched and a black bead was pulled from the 80% black jar, but then a low-probability white bead was pulled from the 80% black jar. <br><br>Because the jars have a mix of white and black beads, the best strategy to predict the next bead is to first figure out which jar the current bead was pulled from, then use the jar switch probability to predict which jar will be drawn from next.<br><br>Press SPACEBAR to conitnue.</p>'),
	 choices: ['spacebar'],
	 prompt: ''
     }; 
    
    var Instruction_trial18 = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p> You will now be given a 2 question quiz to make sure you understand the task. </p>'),
	 choices: ['spacebar'],
	 prompt: ''
     }; 
    
    var Instruction_trial19 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/TutorialQuestion1.png',
	 choices: ['rightarrow'],
	 prompt: '',
     on_finish: function(info) {
         alert('Correct!')
     }

     };
    
        var Instruction_trial20 = {
	 type: 'image-keyboard-response',
	 stimulus: 'Images/TutorialQuestion2.png',
	 choices: ['uparrow'],
	 prompt: '',
     on_finish: function(info) {
         alert('Correct!')
     }

     };
    
    LHMM_text = '<p style="font-family:Arial;text-align:center;width:800px;font-size:20px">In this block, there will be a 1% chance that the jar on the next trial will be different from the jar on the current trial. <br><br> The jar on the left contains 80% black beads and 20% white beads. <br><br> The jar on the right contains 80% white beads and 20% black beads. <br><br>Remember that the best strategy to predict the next bead is to try and predict the next jar the bead will be pulled from.<br><br> Press the SPACEBAR to continue.</p>'
    
    LMM_text = '<p style="font-family:Arial;text-align:center;width:800px;font-size:20px">The probablity that the jar that was previously drawn from is switched to the opposite jar is 10%. <br><br> The jar on the left contains 100% black beads and 0% white balls. <br><br> The jar on the right contains 100% white beads and 0% black beads. <br><br> Press the SPACEBAR to continue.</p>'
	 
	 HHMM_text = '<p style="font-family:Arial;text-align:center;width:800px;font-size:20px">In this block, there will be a 99% chance that the jar on the next trial will be different from the jar on the current trial. <br><br> The jar on the left contains 80% black beads and 20% white beads. <br><br> The jar on the right contains 80% white beads and 20% black beads. <br><br>Remember that the best strategy to predict the next bead is to try and predict the next jar the bead will be pulled from.<br><br> Press the SPACEBAR to continue.</p>'
	 
	     HMM_text = '<p style="font-family:Arial;text-align:center;width:800px;font-size:20px">The probablity that the jar that was previously drawn from is switched to the opposite jar is 90%. <br><br> The jar on the left contains 100% black beads and 0% white balls. <br><br> The jar on the right contains 100% white beads and 0% black beads. <br><br> Press the SPACEBAR to continue.</p>'
	 
	 
     var Load_trial = {
	 type: 'html-keyboard-response',
	 stimulus: centered_message('<p>Loading episode&hellip;</p>'),
	 choices: [' '],
	 prompt: '',
    on_start: function(trial) {
                 var Block_Type = All_Type[Block_Index]

                 		  switch(Block_Type) {
                          
                      case 'Low_HMMActual':
                                  trial.prompt = LHMM_text

                          break;
                      case 'Low_MMActual':
                                  trial.prompt = LMM_text

                          break;
						  
					  case 'High_HMMActual':
					              trial.prompt = HHMM_text
						  
						  break;
						  
					  case 'High_MMActual':
						  		 trial.prompt = HMM_text
						  
						  break;
						  
                          }
    },
     on_finish: function(trial) {
         var Block_Type = All_Type[Block_Index]

         		  switch(Block_Type) {
                          
                      case 'Low_HMMActual':
                          CurrentBlock = Low_HMMActual
						  TaskType = ''
                          break;
                      case 'High_HMMActual':
                          CurrentBlock = High_HMMActual
						  TaskType = ''
                          break;
                      case 'Low_MMActual':
                          CurrentBlock = Low_MMActual
                          TaskType = 'MM'
                          break;
                      case 'High_MMActual':
                          CurrentBlock = High_MMActual
                          TaskType = 'MM'
                          break;
                  }
     }
     };


  var TrialStart = {
	  
	  type: 'image-button-response',	  
	  stimulus: '',
	  stimulus_width: 900,
	  maintain_aspect_ratio: true,
	  prompt: "<p>Please select a bead color and your confidence in that choice.</p>",
	  button_html: ['<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:white; color:black">%choice%</button>', '<button class="jspsych-btn"style="background-color:white; color:black">%choice%</button>' ],
	  choices: ['Black Bead-LOW Confidence', 'Black Bead-HIGH Confidence', 'White Bead-LOW Confidence', 'White Bead-HIGH Confidence'],
	  on_start: function(trial){

          switch(FreshBlock) {
                  case 'on':
                  trial.stimulus = 'Images/NoChoice' + TaskType + '.png'
                  BeadColor = CurrentBlock.data[RelativeTrialIndex][1]
                  FreshBlock = 'off'
                  break;
                  case 'off':
                    BeadColor = CurrentBlock.data[RelativeTrialIndex][1]
                    PreviousBeadColor = CurrentBlock.data[RelativeTrialIndex-1][1]

		              switch(PreviousBeadColor) {
		                  case 1:
			                 trial.stimulus = 'Images/NewTrialBC' + TaskType + '.png'
			                 break;
                          case 2:
			                 trial.stimulus = 'Images/NewTrialWC'  + TaskType + '.png'
			                 break;
                  
          }
          }
      },	  

	  on_finish: function(trial){
		  if(trial.response === 0 || trial.response === 1) {
		  ChoiceDirection = '1'
		  }
		  if(trial.response === 2 || trial.response === 3) {
		  	ChoiceDirection = '2'
		  }

	  },
  }
  
  var SubjectChoice = {
	  type: 'image-button-response',
	  stimulus: '',
	  choices:['Black Bead-LOW Confidence', 'Black Bead-HIGH Confidence', 'White Bead-LOW Confidence', 'White Bead-HIGH Confidence'],
	  button_html: ['<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:white; color:black">%choice%</button>', '<button class="jspsych-btn"style="background-color:white; color:black">%choice%</button>' ],
	  prompt: "<p>Please select a bead color and your confidence in that choice.</p>",
	  stimulus_width: 900,
	  maintain_aspect_ratio: true,
	  trial_duration: 300,
	  response_ends_trial: false,
	  on_start: function(trial){
		  
		  switch(ChoiceDirection) {  
		  case '1':
		  trial.stimulus = 'Images/BlackBeadChoice' + TaskType + '.png'
			  break;
		  case '2':	    
		  	trial.stimulus = 'Images/WhiteBeadChoice'  + TaskType + '.png'
			  break
		  }
	  },
  }
  
  
  var BeadAppears = {
	  type: 'image-button-response',
	  stimulus: '',
	  choices:['Black Bead-LOW Confidence', 'Black Bead-HIGH Confidence', 'White Bead-LOW Confidence', 'White Bead-HIGH Confidence'],
	  button_html: ['<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:black; color:white">%choice%</button>','<button class="jspsych-btn" style="background-color:white; color:black">%choice%</button>', '<button class="jspsych-btn"style="background-color:white; color:black">%choice%</button>' ],
	  prompt: "<p>Please select a bead color and your confidence in that choice.</p>",
	  stimulus_width: 900,
	  maintain_aspect_ratio: true,
	  trial_duration: 500,
	  response_ends_trial: false,
	  on_start: function(trial){
          		  
		  BeadAppearsImage = ChoiceDirection + BeadColor
		  
		  switch(BeadAppearsImage) {
			  
		  case '22':
		  trial.stimulus = 'Images/WhiteBeadChoiceCorrect'  + TaskType + '.png'
                  Correct += 1
			  break;
		  case '21':
		  trial.stimulus = 'Images/WhiteBeadChoiceWrong' + TaskType + '.png'
			  break;
		  case '12':	    
		  	trial.stimulus = 'Images/BlackBeadChoiceWrong' + TaskType + '.png'
			  break
		  case '11':	    
		  	trial.stimulus = 'Images/BlackBeadChoiceCorrect' + TaskType + '.png'
                  Correct += 1
			  break
		  }
                    RelativeTrialIndex += 1

	  },
  }
  
  var reset_trial = {
 type: 'html-keyboard-response',
 stimulus: '',
 choices: [' '],
 prompt: '',
      on_start: function(trial){
     trial.prompt = '<p style="height:800px;width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-weight:normal;font-family:Arial;font-size:20px">&hellip;end of first block. Your score in this block was: ' + Correct + ' <br> Press SPACEBAR to start last block'
      },
      on_finish: function(trial){
     FreshBlock = 'on'
    RelativeTrialIndex = 1
    Block_Index += 1
    Correct = 0

      }
  };
  
  var consentdemo_block = {
      timeline: [consent, demographics, age, ProlificID],
      repetitions: 0}
  
  
  var experiment_block = {
      timeline: [TrialStart,SubjectChoice,BeadAppears],
      repetitions: 500}
  
  var instruction_block = {
      timeline: [Instruction_trial1, Instruction_trial2, Instruction_trial5, Instruction_trial6, Instruction_trial7, Instruction_trial9, Instruction_trial10, Instruction_trial14, Instruction_trial15, Instruction_trial16, Instruction_trial17, Instruction_trial18, Instruction_trial19, Instruction_trial20],
      repetitions:0}
  
	// var pavlovia_finish = {
	//      type: "pavlovia",
	//      command: "finish"
	//  };


	  
  jsPsych.init({
    preload: [Low_HMMData, Low_MMData, High_HMMData, High_MMData],
	  timeline: [preload, Load_trial, experiment_block, reset_trial, Load_trial, experiment_block, reset_trial],
      on_data_update: function(data){
  	jsPsych.data.get().addToLast({Script_Picker: script_picker})
    jsPsych.data.get().addToLast({Block_Type: Block_Type})
	  },

	  on_finish: function() {
	          document.body.innerHTML = '<p> Please wait. Data is being uploaded. Please do not close the browser window or your data may be lost. You will be redirected back to Prolific in 10 seconds.</p>'
	          setTimeout(function () { location.href = prolific_href }, 3000) 
	  
    }
  });