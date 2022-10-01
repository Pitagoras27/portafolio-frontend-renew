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
    "image": "../src/assets/imgs/skill-cards/ts.png",
    "content": [
      {
        "type": "h4",
        "node": "Ventajas de trabajar con Typescript"
      },
      {
        "type": "p",
        "node": "Para algunos, me incluyo, el implementar TS puede resultar dificultoso y más si es que la mayor parte de nuestro desarrollos han estado gestionados con JS plano. Pero como buen desarrollador debemos saber que es nuestro camino es la mejora constante y sabemos que somos mejores cuando nuestro flujo de trabajo es beneficioso en cuanto a tiempo la escalabilidad, legibilidad y mantenimiento nos dejan descansar como la gente normal"
      },
      {
        "type": "p",
        "node": "A continuación voy a tratar de abordar el panorama general al que nos iremos enfrentando al decidir trabajar con TS. Y por ello empezaré hablando de las ventajas, aunque tampoco dejaré de hablar de las dificultades y dolores de cabeza a los que nos enfrentaremos"
      },
      {
        "type": "h4",
        "node": "Ventajas de la popularidad"
      },
      {
        "type": "p",
        "node": "Hoy en día las más respetables librerías y frameworks ( MaterialUI, Redux, React Router, Node, etc ) implementan TS, lo que nos ayuda mejorar la legibilidad de las funciones y propiedades tipadas al momento de utilizarlas. ¿Qué significa esto? que en caso de tener dudar del tipo de argumentos o salida de una función incorporada no tenemos que ir a la definición de la función para poder implementarla correctamente."
      },
      {
        "type": "p",
        "node": "Y hablando de popularidad no hay que dejar de mencionar que es precisamente la amplia difusión lo que deja ver signos de éxito, en el desarrollo tecnológico no será la regla pero si la ventaja mientras viva. El punto es que la popularidad es soporte por la comunidad, lo que a su vez hace accesible herramientas cada vez más poderosas, como lo es el maravilloso uso del intellisense, en este caso de Visual Studio Code. Con su intellisence tenemos la predición y el autocompletado automático de los tipos en tiempo de desarrollo, sin olvidar la detección de errores."
      },
      {
        "type": "p",
        "node": "Los desarrollos son entes organicos digitales por lo que podemos pensar que tienen un ciclo de vida. En este sentido la refactorización es un paso necesario en todo desarrollo. Bueno pues conocer los tipos exactos y dónde cambiarlos, facilita en gran medida esta parte del desarrollo"
      },
      {
        "type": "p",
        "node": "La mantenibilidad mejorará en medida que aprendamos a manejar todas las posibilidades de esta herramienta. Usar types o interfaces, enums y genéricos ayuda a consolidar la estructura y evitar malas practicas como el temido acoplamiento y la baja cohesión de la aplicación"
      },
      {
        "type": "h4",
        "node": "Más desafíos que desventajas"
      },
      {
        "type": "p",
        "node": "Nada escapa a la ley de los opuestos y en tecnología si sabemos que es bueno para escalabilidad y mantenimiento algo de malo ha de tener, pues desde mi punto de vista estos son los aspectos negativos al desarrollar con TS:"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Curva de aprendizaje</strong> Aparentemente su aprendizaje puede ser sencillo, pero nada más lejos de la realidad. El set de herramientas de TS es amplio y en muchas ocasiones los mensajes de error son cripticos y dificiles de leer. Hay que tener paciencia y perceverancia, practicar lo fácil pero despejar las dudas. Si evidentemente estamos en desarrollo de una aplicación, basada en tiempos, como lo son todas, la curva de aprendizaje será la principal desventaja"
          }
        ],
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Pruebas unitarias:</strong> Por si mismas las pruebas unitarias tienen una curva de aprendizaje, su desarrollo también es particuar y acatado a ciertas normas. Hacerlo con TS implica mayor atención al detalle. Sin embargo desde mi punto de vista representa un problema cuando tenemos que acatar cierto porcentaje de covertura, bajar de éste puede deberse a la complejidad de implementarlas con TS"
          }
        ],
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "Typescript provee un sistema opcional de tipos (Type system) que permite escribir código escalable. Es decir, permite escribir código fácil de depurar y mantener. Lo que da un mejor sentido en proyectos medianos o grandes. Siempre se va agradecer que un proyectos heredables se haya escrito con la mayor de las entregas posibles y por lo que entiendo, typescript te ayuda a eso "
      },
      {
        "type": "p",
        "node": "En cuanto a las partes duras o dificiles, aceptarlo y solventarlo nos hará más resilentes y poderosos." 
      }
    ]
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
    "content": [
      {
        "type": "p",
        "node": "A continuación se aborda un tema vital para el desarrollo de código escalable, por contar con una estructura que evita el código altamente acoplado. Cabe destacar que son PRINCIPIOS, no es la regla y es siempre una opción optar por estructurar nuestro código basado en sus dictamentes."
      },
      {
        "type": "p",
        "node": "Los principios SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados entre ellos. De igual manera abordaré su contraparte descrito con el acronimo STUPID, sin más introduccion consideremos primero como describir de forma general las malas prácticas"
      },
      {
        "type": "h4",
        "node": "S.T.U.P.I.D"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Singleton: </strong> Un singleton nos ayudaría a mantener una única instancia para la conexión a una base de datos por ejemplo. Suena bien no? Bueno un singleton reside en el objeto global, tu dirás si no es peligroso mantener variables de conexión visibles en el entorno global"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Tight coupling: </strong> Básicamente con alto acoplamiento se refiere a la dependencia de otras funciones, clases o módulos ajenas a la propia lógica que maneja. Y con baja cohesión a las múltiples responsabilidades que gestion la lógica de una función, clase o módulo. Lo ideal es tener bajo acoplamiento y alta cohesión."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Untestability: </strong> El alto acoplamiento genera código difícil de testear. El código resuelve un problema; un problema es esencialmente complejo, pero no por esto vamos a conseguir la solución siendo necesariamente complejos. El hacer código complejo sin necesidad es una mala práctica."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Premature Optimization: </strong>La optimización de una aplicación es necesaria desde muchos enfoques, con decir que una aplicación veloz afianza la confianza del cliente, es suficiente para justificar su necesidad, sin embargo esta implementación debe contar con su fase dedicada a ello y no en la fase de desarrollo de funcionalidades. ¿Porqué? Bueno, implica tiempo y en determinados momentos es más necesario tener el feature funcional por posibles cambios y mejoras que la optimización. En tiempo de desarrollo estamos supeditados a cambios, la optimización debería estar lista en el producto final."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Indescifrable naming: </strong> Ser muy específico o demasiado genérico a la hora de nombrar mis variables, nombres de función, clases, módulos, perjudica la legibilidad. Si pensamos en desarrollar un código reutilizable vale ser genérico a la hora de nombrar las variables, si por el contrario se trata miembros privados de una clase vale estén descritas de forma específica."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Duplicate: </strong> Existen dos formas de generar código duplicado, una es creando literalmente el mismo código que cumpla la misma necesidad para diferentes zonas de la aplicación. Y la otra forma es la duplicidad accidental, que genera código similar pero no necesariamente igual. En este último caso la duplicidad de código se puede evitar, agregando nuevos parámetros u validaciones, pero requiere un mejor análisis y toma de decisiones adecuadas."
          }
        ]
      },
      {
        "type": "h4",
        "node": "S.O.L.I.D"
      },
      {
        "type": "p",
        "node": "He comenzado con los cláusulas dedicadas a describir lo que no debemos hacer como desarrolladores, por el simple hecho de que no podemos saber que es lo bueno si antes no pasamos por lo malo, además que a partir de esa pequeña descripción podemos identificarnos mejor con la solución ya que los principios SOLID requieren un analisis adicional partiendo de la abstracción a partir de momento en el que decidimos CREAR!"
      },
      {
        "type": "h4",
        "node": "Single Responsibility"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo.\" <span>Robert C. Martin </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Tener una única responsabilidad no es sinónimo de hacer una única cosa, sino de tener funcionalidades que estén expuestos a una sola fuente de cambio. Por ejemplo una clase con un método que cargue información de una base de datos y con otro método los represente en la interfaz de usuario, es una clase que tiene 2 responsabilidades, si en algún momento cambia el requerimiento de conexión innevitablemente se verá afectada el método que agrega la información a la interfaz. Lo que indudablemente es un indicio de que esta clase está expuesta a 2 fuentes de cambio distinta."
      },
      {
        "type": "p",
        "node": "Algunos tips para detectar violaciones a este principio"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Nombres de clases o módulos demasiado genéricos</li><li>La clase involucra múltiples capas, la de representación de datos en la UI; la consumo y guardado de información a una base de datos, la de gestión del estado global, etc</li><li>Excesivo número de líneas</li>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Open and Close"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. \"<span>Bertrand Meyer. </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Establece que las entidades de software (clases, módulos, métodos) deben estar abiertas para la extensión, pero cerradas a la modificación"
      },
      {
        "type": "p",
        "node": "Las aplicaciones son entes orgánicos digitales en constante cambio, una funcionalidad está contantemente sometida al cambio. Pensar en esta realidad nos ayuda a no violar este principio. Pero ejemplifiquemos. Pensemos en una entidad como en un método de clase; supongamos que ese método tiene la tarea de grabar un nombre de archivo en la base de datos. Y lo realiza desde el cuerpo del método. Ahora llega un nuevo requerimiento, y es necesario cambiar el nombre del archivo a grabar, para lograrlo abro el método y lo modifico el nombre, (una clara violación a este principio)."
      },
      {
        "type": "p",
        "node": "La solución a este problema es simple, hay que pasar el nombre de archivo por parámetro, así cuando se necesite volver a cambiar este nombre de archivo a guardar no habrá razón por modificar ese método, la función esta preparada para este cambio y ya no es necesario modificar su implementación."
      },
      {
        "type": "p",
        "node": "En conclusión para añadir funcionalidades a la aplicación, tenemos que escribir nuevo código, no modificar el ya existente."
      },
      {
        "type": "p",
        "node": "Detectar violaciones al Open and Close principle"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Cambios normalmente afectan a la clase, módulo o función de forma constante</li><li>Cuando una clase o módulo afecta a varias capas de la aplicación (Representación en la UI, almacenamiento en Base de datos, interacción con la API, etc)<li>Este principio es el más ligado con el principio 'Single Responsability'</li>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Principio de sustitución de Liskov"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Las funciones que utilicen puntero o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo. \"<span>Robert C. Martin </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "De forma breve aunque muy abstracto, este principio se refiere al hecho de que si una clase A es extendida por una clase B, debemos ser capaces de sustituir cualquier instancia de A por cualquier instancia de B, o en otras palabras una subclase debe poder ser substituida por su superclase, sin que el sistema se corrompa o falle."
      },
      {
        "type": "p",
        "node": "El principio Liskov nos ayuda a utilizar la herencia de forma correcta y a tener un mayor cuidado a la hora de extender clases. Es necesario cuidar no violar el principio de responsabilidad única, ya que usualmente utilizar la herencia en JS genera codigo acoplado, sin embargo existe un técnica que nos ayudará a gestionar la jerarquia de forma más eficiente, pero sólo se puede implementar con el uso de Typescript. "
      },
      {
        "type": "p",
        "node": "Si decimos que una clase hija debe poder funcionar como implementamos la clase padre, significa que la clase hija contiene los mismo métodos de la clase padre. Como hacemos que se respete esto y no rompa la aplicación en el momento un metodo que no existe, con las clases abstractas de TS."
      },
      {
        "type": "img",
        "node": "/src/assets/imgs/skill-cards/solid/liskov-principle-1.png"
      },
      {
        "type": "img",
        "node": "/src/assets/imgs/skill-cards/solid/liskov-principle-2.png"
      },
      {
        "type": "p",
        "node": "Las clases que extieden de Vehicle no pueden implementar nada que no esté en la firma de padre. Rápido seguro y eficiente. Pensar en clases abstractas al momento de querer aplicar este principio es una solución rapida y elegante."
      },
      {
        "type": "p",
        "node": "Detectar violaciones al Sustitución de Liskov"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Utilizando la técnica de definir la firma de una clase con una clase abstracta, prácticamente no podrás violar este principio porque TS de impedirá la transpilación del código en tiempo de desarrollo</li><li>Si prescindes del uso de TS, y optas por heredar en lugar de componer sabrás que violas este principio si tienes métodos sobrantes que las clases hijas.</li>",

          }
        ]
      },
      {
        "type": "h4",
        "node": "Principio de segregación de interfaces"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Los clientes no deberían estar obligados a depender de interfaces que no utilicen. \"<span>Robert C. Martin </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Aplicar correctamente este principio permite crear clases o funciones tolerantes al cambio. Las modificaciones en una clase no deben afectar a aquellas que no implementen la interfaz relacionada. Hace el código verboso pero con la capacidad de expandirse o extenderse más."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested", 
            "node": "<strong><em>Nota: </em></strong>Hay que mencionar que este principio es aplicable únicamente en entornos de desarrollo con TS, ya que en JS no es posible implementar interfaces de forma nativa"
          }
        ]
      },
      {
        "type": "p",
        "node": "El propósito de este principio es obligarnos a escribir código tenga una alta cohesión, es decir hacer que la clase, función o módulo no realice acciones que involucren a otra entidad. Ejemplificarlo es sencillo, primero veamos que está mal en el siguiente código:"
      },
      {
        "type": "img",
        "node": "/src/assets/imgs/skill-cards/solid/segregation-1.png"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Evidentemente estamos implementando para la <strong>clase Tucan</strong> métodos que no va a utilizar. Esta clase no utiliza los métodos <strong>run()</strong> y <strong>swim()</strong>, porque está fuera de sus habilidades. Por lo que estoy recurriendo a una mala práctica. La solución es implementar las interfaces propias de la clase Tucán e implementar los métodos sobrantes para las clases que lo requieran, si es que van a existir clases que requieran de esas habilidades. A continuación el mismo ejemplo pero implementado de la forma correcta: "
          }
        ]
      },
      {
        "type": "img",
        "node": "/src/assets/imgs/skill-cards/solid/segregation-2.png"
      },
      {
        "type": "p",
        "node": "Ahora cada una de las clases espera implementar la interfaz correcta. Nada falta y nada sobra a las necesidades de este conjunto de clases. Y ganamos alta cohesión, lo esperado en el desarrollo de software escalable y de buena calidad."
      },
      {
        "type": "h4",
        "node": "Inversión de dependencias"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Los módulos de alto nivel no deberían depender de los módulos de bajo nivel. Ambos deberían depender de abstracciones es decir interfaces.\"<span>Uncle Bob</span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Con este principio garantizamos que las principales entidades de la aplicación permanezcan desacopladas de los componentes encargados de suministrar los detalles. Lo que en la práctica significa que cambios en la capa de detalles o de bajo nivel no induce a errores o perdida de rendimiento, porque no afecta a la capa superior. Entiendase como componentes de bajo nivel, a aquellos que suministran los detalles, pero sobre todo aquellos que no contienen dependencias"
      },
      {
        "type": "p",
        "node": "Este principio se salda (la de evitar el acoplamiento entre componentes) con la implementación de abstracciones o interfaces. Por lo que aplicarlo con Javascript puro es distinto de lo que hariamos si lo hacemos con Typescript"
      },
      {
        "type": "p",
        "node": "La comunicación entre los componentes del sistema depende de interfaces no de componentes con funcionalidad concreta. Ahora las entidades, como podría ser una encargada de la conexión con una base de datos no debería causar estragos si las conexiones de otras entidades a ésta se realiza mediante interfaces. Así es evidente que la aplicación permanece desacoplada y ahora es posible modificar el gestor encargado del almacenamiento de datos de MondoDB a MySQL sin causar ningún problema al funcionamiento de la aplicación."
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "Finalizaré este artículo con un colorario según mi experiencia de lo considero buenas y malas prácticas en general:"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Una buena práctica es tener en cuenta las pruebas unitarias desde la creación del código, un buen código las hará más sencillas</li><li>En general un método con más de 10 líneas de código debe hacernos pensar en la existencia del mismo</li><li>Utilizar demasiados valores en datos primitivos, puede generar un código innecesariamente grande. Es importante analizar a que campo semántico pertenecerían los similares para agruparlos en objetos, clases, módulos, etc.</li><li>Tener una larga lista de parámetros también es una mala práctica</li><li>Hacer clases, funciones o módulos que sepan lo menos posible de otros métodos, módulos o elementos es un buena práctica y ayuda mucho al testing.</li><li>Si identificamos una cadena de mensajes (información que pasa de A a D pero pasando por B y C) estamos haciendo código acoplado. En la medida de lo posible debemos intentar las posibilidades de pasarlo de A a D sin intermediarios.</li>"
          }
        ]
      }
    ]
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
