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
    "image": "../src/assets/imgs/skill-cards/front1.png",
    "content": []
  },
  {
    "id": 3,
    "title": "Some stategies to test react apps",
    "section": "testing",
    "badge": [
      "Testing Library"
    ],
    "intro": "Everybody know that testing is an essential practice in software development that help us to build robust and hight quality app. To test front-end react apps uses testing library",
    "image": "../src/assets/imgs/skill-cards/thumb-section.jpg",
    "content": []
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
    "image": "../src/assets/imgs/skill-cards/es6yjs.png",
    "content": []
  },
  {
    "id": 5,
    "title": "Testing front with testing library and Vite",
    "section": "testing",
    "badge": [
      "Testing Library",
      "React"
    ],
    "intro": "Vite is a great and amazing boilerplate to developing speed react apps, but is neccesary make some configurations, here will explore some strategies to start the suite test",
    "image": "../src/assets/imgs/skill-cards/sass.png",
    "content": [
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Importante:</strong> Los conceptos son generales y aplican para cualquier aplicación escrita en x lenguaje, sin embargo las herramientas son particularmente utilizadas para testear una aplicación desarrollada con react.",
          }
        ],
      },
      {
        "type": "h4",
        "node": "Pruebas unitarias en Vite"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Para comenzar siempre es importante dar una atenta leída al <strong>get started</strong> del recurso en cuestión, es este caso de jest, aquí: <a href='https://jestjs.io/docs/getting-started'><em>Jest Getting Started</em></a>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Igualmente para todos los desarrolladores involucrados la creación de pruebas unitarias es muy favorable comenzar con la automátización del proceso de ejecución, es muy pesado andar ejecutando comandos repetitivos una y otra vez, cuando se puede ejecutar uno que se mantenga a la escucha de cambios, aquí el de jest: "
      },
      {
        "type": "code",
        "node": "jest --watchAll"
      },
      {
        "type": "p",
        "node": "No olvides instalar la dependencia de jest en Vite, y por supuesto la librería de testing para react, yo lo hago con yarn:"
      },
      {
        "type": "code",
        "node": "yarn add jest @testing-library/react"
      },
      {
        "type": "p",
        "node": "Otra cuestión de ayuda muy importante para el desarrollo hoy en día lo proporcionan las IDE's, la más importante hoy en día por mucho es Visual Studio Code, con ayuda de su intellisense tenemos acceso a métodos y propiedades de la librería de jest de forma predictiva, para ello basta con escribir las primeras letras para que nos sugiera algún autocompletado, sin embargo no es automático; hay que instalar los tipos de Jest con el siguiente comando:"
      },
      {
        "type": "code",
        "node": "yarn add –D @types/jest"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Algo más que nos puede ayudar a mejorar el flujo de trabajo y hacerlo más rapido y eficiente, es aislar las pruebas por componente trabajado. Ya que si se estamos en modo “observador” cada cambio involucra todo el conjunto de pruebas que viven dentro de la carpeta test, lo que significa que ejecutara todo el proyecto por cada cambio, ineficiente no? Jest a través de la Línea de comandos nos ofrece la solucion: después de realizar algún cambio en el archivo a trabajar, presionar la letra <strong>w</strong>, estando en el CLI y a continuación la letra <strong>p</strong> lo que nos permitirá escribir el título del archivo y ejecutar unicamente ese test. El realizar esta acción mantiene a Jest escuchando cambiós en ese archivo; cuándo necesitemos pasar a otro archivo o componente realizamos el mismo procedimiento y listo."
          }
        ]
      },
      {
        "type": "h4",
        "node": "Recomendaciones y buenas prácticas al realizar pruebas unitarias:"
      },
      {
        "type": "p",
        "node": "A continuación una pequeña lista con algunas recomendaciones para realizar las pruebas unitarias:"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Es recomendable trabajar con el Snapshot sólo cuando se tiene el producto final y no en tiempo de desarrollo ya que los constantes cambios al componente provocan una actualización continua.</li><li>De la misma manera hay que buscar que las pruebas verifiquen lo que se necesita pero que al mismo tiempo sean flexibles. Es decir probar la existencia de valores en un arreglo podría indicar la conexión exitosa a un backend y no esperar la longitud de un arreglo específico</li><li>Vale la pena darse un tiempo para analizar la ruta crítica de una funcionalidad o de la aplicación; lo que en la práctica ayudaría a evitar perder tiempo en acciones dependientes de la alguna funcionalidad dentro de la <strong>ruta crítica</strong></li><li>Para hacer las pruebas unitarias más eficientes es muy importante analizar el código y tener claro que se espera haga; si se reciben props de tipo función que se espera que hagan, si se reciben argumentos en una función que se espera resuelva, etc</li><li>Hay que verificar que pruebas son aplicables a un componente, o función, ya que hay tareas que no corresponden al correcto funcionamiento de un components, como podría ser la actualización de un estado ya sea mediante un useState, un reducer, o cualquier otra función que podría comprobarse por aparte</li><li>Si alguno de los nombres de directorios de la suite de test coincide con otro directorio de la aplicación que no requiera de test, como puede ser una carpeta mock, es buena práctica nombrarla __mocks__</li><li>Utilizar <em>react-testing-library</em> hace más eficiente las evaluaciones del renderizado de react. Aunado a esto podemos prescindir de utilizar los objetos devueltos por “render” (getByText, container..,) y gestionarlos con la función <strong>screen</strong>; un método importado por testing-library que permite almacenar el objeto generado por la función <strong>render.</strong></li><li>Utilizar la función <strong>debug()</strong> para visualizar en la terminal como luce el objeto de pruebas en el DOM. Es parecido console.log(), pero enfocado al DOM</li>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Hooks"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Pruebas unitarias de hooks y custom hooks</strong>"
          },
        ],
        "type": "p",
        "node": "Hoy en día es muy difícil encontrar desarrollos front de react que inicialmente implementen una infrasestructura basada en clases. La lógica se encuentra encapsulada a partir de la versión 16.8 en lo que conocemos como hooks, pero.., como testearlos? ",
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Los hooks son funciones, hay que verificar que el argumento recibido se utiliza para devolver lo esperado. Por tanto para lograr esto debemos apoyarnos de <strong>renderHook</strong> función proporcionada por <strong>testing-library</strong>. Debemos pasar el custom hook en el callback proporcionado por renderHook. El resultado se almacena en un objeto llamado: <strong>result.current</strong>"
          }
        ],        
      },
      // {
      //   "type": "img",
      //   "code": ""
      // },
      {
        "type": "h4",
        "node": "Algunas configuraciones"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>jest.setup.js file</strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Si queremos configurar nuestro <strong>jest.config</strong> como un módulo de CommonJS por ejemplo: exportarlo con la sintaxis: <strong>module.exports = {}</strong>, hay que prescindir la propiedad type con el valor module: <strong>type:module</strong> del archivo package json."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Podemos hacer importaciones globales dentro del archivo de configuración de <strong>jest.setup</strong>, como en el caso de el import de la dependencia <strong>setimmediate</strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Las configuraciones agregadas a este archivo son globales al set de pruebas unitarias"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>jest.config.js file</strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Para evitar agregar archivos de terceros (como puede ser el caso de las dependecias de firebase para trabajar con su módulo de autenticación) es importante agregar la siguiente opción al objeto de configuración de Jest: "
      },
      {
        "type": "code",
        "node": "transformIgnorePatterns: []"
      }

    ]
  },
  {
    "id": 6,
    "title": "Interact with backend",
    "section": "fullstack",
    "badge": [
      "Fullstack"
    ],
    "intro": "Create a rest api to consumes in front; create one module to authentication with JWT, validations fields, and CRUD to interact app in front-end",
    "image": "../src/assets/imgs/skill-cards/fullstack.png",
    "content": []
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
    "image": "../src/assets/imgs/skill-cards/solid.jpg",
    "content": []
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
