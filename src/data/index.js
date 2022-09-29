export const carouselData = [
  {
    name: "Front-end Programming",
    description: "The quality of the front-end code is the most deciding factor of a great web app, for this reason I'm focus in best practices and other principes"
  },
  {
    name: "Design",
    description: "A well-designed website can help us form a good impression on our prospective customers. It can also help it make the difference in all digital universe so we have a relevant webapp"
  },
  {
    name: "Colaboration and Creativity",
    description: "For me the colaboration with a team is one of main factors to rise successful development, everyone learn, everyone benefits   "
  }
];

export const cardsSkillsBlog = [
  {
    "id": 1,
    "title": "Typescript, hard to learn, but completely neccesary",
    "section": "typescript",
    "badge": [
      "Secure",
      "Development"
    ],
    "intro": "Nowadays is more evident that technologic enterprices apply their efforts to create apps more secure and scalables, this is the main reason for implement and use Typescript ",
    "image": "../src/assets/imgs/skill-cards/ts.png"
  },
  {
    "id": 2,
    "title": "Material UI and React",
    "section": "react",
    "badge": [
      "Libraries",
      "Frontend"
    ],
    "intro": "In software development the priority is quality and speed, and the best way to reach this is learn Material UI, the best library of components for react",
    "image": "../src/assets/imgs/skill-cards/front1.png"
  },
  {
    "id": 3,
    "title": "Some stategies to test react apps",
    "section": "testing",
    "badge": [
      "Testing Library"
    ],
    "intro": "Everybody know that testing is an essential practice in software development that help us to build robust and hight quality app. To test front-end react apps uses testing library",
    "image": "../src/assets/imgs/skill-cards/thumb-section.jpg"
  },
  {
    "id": 4,
    "title": "CSS Box Model",
    "section": "css",
    "badge": [
      "Design",
      "CSS"
    ],
    "intro": "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. Learn how to apply it, is the first step to create usables and effective design apps",
    "image": "../src/assets/imgs/skill-cards/es6yjs.png"
  },
  {
    "id": 5,
    "title": "Testing front with testing library in MaterialUI",
    "section": "testing",
    "badge": [
      "Testing Library",
      "React"
    ],
    "intro": "Vite is a great and amazing boilerplate to developing speed react apps, but is neccesary make some configurations, here will explore some strategies to start the suite test",
    "image": "../src/assets/imgs/skill-cards/sass.png"
  },
  {
    "id": 6,
    "title": "Interact with backend",
    "section": "fullstack",
    "badge": [
      "Fullstack"
    ],
    "intro": "Create a rest api to consumes in front; create one module to authentication with JWT, validations fields, and CRUD to interact app in front-end",
    "image": "../src/assets/imgs/skill-cards/fullstack.png"
  },
  {
    "id": 7,
    "title": "Git Best Practices",
    "section": "best practices",
    "badge": [
      "WorkFlow"
    ],
    "intro": "Here, we will explore some of the commands and use case to manage one of the most useful control version. For ohter hand will see how to work with branchs and colaborative team",
    "image": "../src/assets/imgs/skill-cards/git.png",
    "content": [
      { 
        "type": "h4",
        "node": "Style commits"
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Method names:</strong> Naming things is one of the hard problstrongs in computer science. If a method is named get_message_queue_name and it is actually doing something completely different like sanitizing HTML from the input, then that\'s an inaccurate method name. And probably a misleading function."
          }
        ],
      },
      {
        "type": "p",
        "node" : [
          {
            "type": "nested",
            "node": "<strong>Variable names:</strong> foo or bar are probably not useful names for data structures. <strong>e</strong> is similarly not useful when compared to exception. Be as verbose as you need (depending on the language). Expressive variable names make it easier to understand code when we have to revisit it later."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Function length:</strong> My rule of thumb is that a function should be less than 20 or so lines. If I see a method above 50, I feel it\'s best that it be cut into smaller pieces."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Class length:</strong> I think classes should be under about 300 lines total and ideally less than 100. It\'s likely that large classes can be split into separate objects, which makes it easier to understand what the class is supposed to do."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>File length:</strong> For Python files, I think around 1000 lines of code is about the most we should have in one file. Anything above that is a good sign that it should be split into smaller, more focused files. As the size of a file goes up, discoverability goes down."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Docstrings:</strong> For complex methods or those with longer lists of arguments, is there a docstring explaining what each of the arguments does, if it\'s not obvious?"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Commented code:</strong> Good idea to rstrongove any commented out lines." 
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Number of method arguments:</strong> For the methods and functions, do they have 3 or fewer arguments? Greater than 3 is probably a sign that it could be grouped in a different way."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Readability:</strong> Is the code easy to understand?, Do I have to pause frequently during the review to decipher it?"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "SOLID",
    "section": "best practices",
    "badge": [
      "Framework",
      "Desarrollo"
    ],
    "intro": "The SOLID principles tell us how to organize our functions and data structures into components and how those components should be interconnected.",
    "image": "../src/assets/imgs/skill-cards/solid.jpg"
  }
];

// Navigation bar
export const pages = [
  { page: 'About', section: 'about' },
  { page: 'Skills', section: 'skills' },
  { page: 'Projects', section: 'projects' },
  { page: 'Contact', section: 'contact' }
];

export const settings = ['Login', 'Logout'];

// Categories

export const categories = [
  { section: 'Testing'},
  { section: 'Typescript'},
  { section: 'React'},
  { section: 'Fullstack'},
  { section: 'CSS'},
  { section: 'Best practices'}
]
