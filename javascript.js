
function changeWTheme() {
  document.querySelector('html').style.backgroundImage = "url('assets/winter.jpg')";
  document.querySelector('html').style.backgroundOrigin = 'cover';
  document.querySelector('html').style.backgroundRepeat = 'no-repeat';

}

function changeSTheme() {
  document.querySelector('html').style.backgroundImage = "url('assets/summer.jpg')";
  document.querySelector('html').style.backgroundSize = 'cover';
}



const context = {
    instruments: [
      {
        titles: 'HTML Projects',
        image: 'assets/JsPhotos/html/form-a-story.png',
        name: 'Form A Story',
        description: 'Using knowledge of HTML forms to collect input users and put a spin on a classic story!',
        click: 'assets/JsPhotos/html/form-a-story.png'
      },
      {
        image: 'assets/JsPhotos/html/nyc-blog.png',
        name: 'NYC Blog',
        description: 'Create a blog about New York City using various semantic elements to show off how amazing the Big Apple is!',
        click: 'assets/JsPhotos/html/nyc-blog.png'
      },
      {
        image: 'assets/JsPhotos/html/wine-festival-schedule.png',
        name: 'Wine Festival Schedule',
        description: 'practice tabular organization in HTML so you can hone your skills and feel confident taking them to the real world.',
        click: 'assets/JsPhotos/html/wine-festival-schedule.png'
      },
      {
        titles: 'CSS Projects',
        image: 'assets/JsPhotos/css/accessibilty.png',
        name: 'Code, Blog!',
        description: 'Help update the home page for the Code! blog to make it accessible to all who visit.',
        click: 'assets/JsPhotos/css/accessibilty.png'
      },
      {
        image: 'assets/JsPhotos/css/grid-task-board.png',
        name: 'Task-board',
        description: 'Create a board of to-do items organized into columns.',
        click: 'assets/JsPhotos/css/grid-task-board.png'
      },
      {
        image: 'assets/JsPhotos/css/to-do-list.png',
        name: 'TO-DO List',
        description: 'Set the Flexbox properties for a to-do app.',
        click: 'assets/JsPhotos/css/to-do-list.png'
      },
      {
        image: 'assets/JsPhotos/css/transition-20kleague-under-sea.png',
        name: '20,000 Leagues Under the Sea',
        description: 'Add animations to an existing static web page.',
        click: 'assets/JsPhotos/css/transition-20kleague-under-sea.png'
      },
      {
        image: 'assets/JsPhotos/css/tsunami-coffee.png',
        name: 'Tsunami Coffee',
        description: 'Relative units and responsive web design to help Tsunami Coffee make their website come to life',
        click: 'assets/JsPhotos/css/tsunami-coffee.png'
      },
      {
        image: 'assets/JsPhotos/css/variable-function.png',
        name: 'Curious Ornithologist',
        description: 'Createing different color themes, interactive elements, and transitions for the landing page of a bird-watching website!',
        click: 'assets/JsPhotos/css/variable-function.png'
      },
      {
        titles: 'Javascript Projects',
        image: 'assets/JsPhotos/javascript/dog-years.png',
        name: 'Dog Years',
        description: 'Practice variables and strings in JavaScript so we can hone skills and feel confident taking them to the real world.',
        click: 'assets/JsPhotos/javascript/dog-years.png'
      },
        {
        image: 'assets/JsPhotos/javascript/grammer-check-iterator.png',
        name: 'Grammer Checker',
        description: ' iterating over arrays to gather information and improve the quality of a paragraph.',
        click: 'assets/JsPhotos/javascript/grammer-check-iterator.png'
      },
      {
        image: 'assets/JsPhotos/javascript/musicon-template.png',
        name: 'Musicon Template',
        description: 'Updating the website of an online musical instruments store, Musicon. You will incorporate your knowledge of HTML, CSS, JavaScript, and Handlebars to make a stylish multi-page interactive website!',
        click: 'assets/JsPhotos/javascript/musicon-template.png'
      },
      {
        image: 'assets/JsPhotos/javascript/piano-keys-dom.png',
        name: 'Piano Keys Dom',
        description: ' create an interactive game to help their beginner-level piano students study. Create a piano player with DOM events in JavaScript!',
        click: 'assets/JsPhotos/javascript/piano-keys-dom.png'
      },
      {
        image: 'assets/JsPhotos/javascript/race-day.png',
        name: 'Race Day',
        description: 'Design the logic for an app that will give runners information on race day!',
        click: 'assets/JsPhotos/javascript/race-day.png'
      },
      {
        image: 'assets/JsPhotos/javascript/scope-training-days.png',
        name: 'Training Days',
        description: 'Practice scope in JavaScript so we can hone skills and feel confident taking them to the real world.',
        click: 'assets/JsPhotos/javascript/scope-training-days.png'
      },
      {
        image: 'assets/JsPhotos/javascript/secret-message-array.png',
        name: 'Secret Message',
        description: 'The goal for this project is to be able to successfully retrieve and manipulate the data in an array.',
        click: 'assets/JsPhotos/javascript/secret-message-array.png'
      },
      {
        image: 'assets/JsPhotos/javascript/sleep-debt.png',
        name: 'Sleep debt',
        description: 'In this project, we re going to practice functions in JavaScript, to  help us build separation of concerns so our code isn t one long function.',
        click: 'assets/JsPhotos/javascript/sleep-debt.png'
      },
      {
        image: 'assets/JsPhotos/javascript/team-state-objects.png',
        name: 'Team Stats',
        description: 'Practice Objects in JavaScript by creating a data structure to maintain and manipulate sports stats!',
        click: 'assets/JsPhotos/javascript/team-state-objects.png'
      },
      {
        image: 'assets/JsPhotos/javascript/whate-talk-loop.png',
        name: 'Whale Talk',
        description: 'It’s time to practice loops in JavaScript by building a project that will translate English into “Whale Talk”.',
        click: 'assets/JsPhotos/javascript/whate-talk-loop.png'
      }
    ]
  };

  const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;