import modelBox1 from '../assets/imgs/skill-cards/css/model-box-1.png';
import modelBox2 from '../assets/imgs/skill-cards/css/model-box-2.png';
import modelBox3 from '../assets/imgs/skill-cards/css/model-box-3.png';
import es6yjs from '../assets/imgs/skill-cards/es6yjs.png';
import front1 from '../assets/imgs/skill-cards/front1.png';
import fullstack from '../assets/imgs/skill-cards/fullstack.png';
import restBack1 from '../assets/imgs/skill-cards/fullstack/rest-back-1.png';
import git from '../assets/imgs/skill-cards/git.png';
import git1 from '../assets/imgs/skill-cards/git/git-1.png';
import git2 from '../assets/imgs/skill-cards/git/git-2.png';
import mui1 from '../assets/imgs/skill-cards/mui-started/mui-1.png';
import mui2 from '../assets/imgs/skill-cards/mui-started/mui-2.png';
import mui3 from '../assets/imgs/skill-cards/mui-started/mui-3.png';
import compoundComponentPattern1 from '../assets/imgs/skill-cards/react-patterns/compound-component-pattern-1.png';
import compoundComponentPattern2 from '../assets/imgs/skill-cards/react-patterns/compound-component-pattern-2.png';
import compoundComponentPattern3 from '../assets/imgs/skill-cards/react-patterns/compound-component-pattern-3.png';
import controlProps1 from '../assets/imgs/skill-cards/react-patterns/control-props-1.png';
import controlProps2 from '../assets/imgs/skill-cards/react-patterns/control-props-2.png';
import hooksPattern1 from '../assets/imgs/skill-cards/react-patterns/hooks-pattern-1.png';
import hooksPattern2 from '../assets/imgs/skill-cards/react-patterns/hooks-pattern-2.png';
import reducerPattern1 from '../assets/imgs/skill-cards/react-patterns/reducer-pattern-1.png';
import reducerPattern2 from '../assets/imgs/skill-cards/react-patterns/reducer-pattern-2.png';
import reducerPattern3 from '../assets/imgs/skill-cards/react-patterns/reducer-pattern-3.png';
import renderProps1 from '../assets/imgs/skill-cards/react-patterns/render-props-1.png';
import renderProps2 from '../assets/imgs/skill-cards/react-patterns/render-props-2.png';
import renderProps3 from '../assets/imgs/skill-cards/react-patterns/render-props-3.png';
import sass from '../assets/imgs/skill-cards/sass.png';
import solid from '../assets/imgs/skill-cards/solid.jpg';
import liskovPrinciple1 from '../assets/imgs/skill-cards/solid/liskov-principle-1.png';
import liskovPrinciple2 from '../assets/imgs/skill-cards/solid/liskov-principle-2.png';
import segregation1 from '../assets/imgs/skill-cards/solid/segregation-1.png';
import segregation2 from '../assets/imgs/skill-cards/solid/segregation-2.png';
import thumbSection from '../assets/imgs/skill-cards/thumb-section.jpg';
import isImage from '../assets/imgs/skill-cards/ts.png';

import cssMainImg from '../assets/imgs/skill-cards/detail-topics/css-box-model.png';
import gitMainImg from '../assets/imgs/skill-cards/detail-topics/git-best-practices.png';
import backMainImg from '../assets/imgs/skill-cards/detail-topics/interact-with-backend.png';
import muiMainImg from '../assets/imgs/skill-cards/detail-topics/material-ui-and-react.png';
import reactMainImg from '../assets/imgs/skill-cards/detail-topics/patrones-en-react.png';
import solidMainImg from '../assets/imgs/skill-cards/detail-topics/solid.png';
import testingMainImg from '../assets/imgs/skill-cards/detail-topics/testing-front-with-testing-library-and-vite.png';
import tsMainImg from '../assets/imgs/skill-cards/detail-topics/typescript-hard-to-learn-but-completely-neccesary.png';

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
    "mainImage": tsMainImg,
    "badge": [
      "Secure",
      "Development"
    ],
    "intro": "Nowadays is more evident that technologic enterprices apply their efforts to create apps more secure and scalables, this is the main reason for implement and use Typescript ",
    "image": isImage,
    "content": [
      {
        "type": "h4",
        "node": "Ventajas de trabajar con Typescript"
      },
      {
        "type": "p",
        "node": "Para algunos, me incluyo, implementar Typescript puede resultar difícil; más si es que la mayor parte de nuestro desarrollos han estado gestionados con el Javascript de toda la vida, es decir dinámico y no tipado. Pero como buenos desarrolladores debemos saber que nuestro camino es la mejora constante y sabemos que somos mejores cuando nuestro flujo de trabajo es beneficioso en cuanto a tiempo, escalabilidad, legibilidad y mantenimiento."
      },
      {
        "type": "p",
        "node": "A continuación, voy a tratar de abordar el panorama general al que nos iremos enfrentando al decidir trabajar con TS. Y por ello empezaré hablando de las ventajas, aunque tampoco dejaré de hablar de las dificultades y dolores de cabeza a los que nos enfrentaremos."
      },
      {
        "type": "h4",
        "node": "Ventajas de la popularidad"
      },
      {
        "type": "p",
        "node": "Hoy en día las más respetables librerías y frameworks ( MaterialUI, Redux, React Router, Node, etc ) implementan TS, lo que nos ayuda mejorar la legibilidad de las funciones y propiedades tipadas al momento de utilizarlas. ¿Qué significa esto? que en caso de tener dudas del tipo de argumentos o salida de una función incorporada no tenemos que ir a su definición para poder implementarla correctamente, el intellisense de IDE, nos ayudará en esta tarea. Podemos ver en tiempo de desarrollo la firma, usar el autocompletado automático, visualizar errores de transpilación, entre otras cosas."
      },
      {
        "type": "p",
        "node": "Y hablando de popularidad no hay que dejar de mencionar que es precisamente la amplia difusión lo que deja ver signos de éxito. En el desarrollo tecnológico no será la regla, pero si una ventaja en cuanto a soporte se refiere. El punto es que la popularidad proporciona soporte por una comunidad cada vez más amplia, lo que a su vez nos da acceso a herramientas cada vez más poderosas, como lo es el ventajoso uso del intellisense."
      },
      {
        "type": "p",
        "node": "Los desarrollos son entes orgánicos digitales. Podemos pensar en ellos como entidades con un ciclo de vida propio, desde el desarrollo de las ideas hasta la entrega del producto, con un rendimiento adecuado a las necesidades de cliente. En este sentido tenemos que ver la refactorización de código como una etapa más del desarrollo y que las herramientas que nos ayuden a facilitar esta tarea siempre serán bien recibidad. Así es como encontramos una ventaja más al utilizar TS, ya que este es especialmente relevante en cuanto al acceso a tipos de las variables que utilizamos."
      },
      {
        "type": "p",
        "node": "La mantenibilidad mejorará en medida que aprendamos a manejar todas las posibilidades de esta herramienta. Usar types o interfaces, enums y genéricos ayuda a consolidar la estructura y evitar malas prácticas como el temido acoplamiento y la baja cohesión de la aplicación."
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
            "node": "<strong>Curva de aprendizaje</strong> Aparentemente su aprendizaje puede ser sencillo, pero nada más lejos de la realidad. El set de herramientas de TS es amplio y en muchas ocasiones los mensajes de error son crípticos y difíciles de leer. Hay que tener paciencia y perceverancia, practicar lo fácil pero despejar las dudas. Si evidentemente estamos en desarrollo de una aplicación, basada en tiempos, como lo es con todas, la curva de aprendizaje será la principal desventaja."
          }
        ],
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Pruebas unitarias:</strong> Por si mismas las pruebas unitarias tienen una curva de aprendizaje, su desarrollo también es particular y acatado a ciertas normas. Hacerlo con TS implica mayor atención al detalle. Sin embargo, desde mi punto de vista representa un problema cuando tenemos que acatar cierto porcentaje de cobertura, trabajarlas desde TS puede aumentar la complejidad de implementarlas."
          }
        ],
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "Typescript provee un sistema opcional de tipos (Type system) que permite escribir código escalable. Es decir, permite escribir código fácil de depurar y mantener. Lo que da un mejor sentido en proyectos medianos o grandes. Siempre se va agradecer que un proyecto heredado se haya escrito con la mayor de las entregas posibles y por lo que entiendo, typescript te ayuda a eso."
      },
      {
        "type": "p",
        "node": "En cuanto a las partes duras o difíciles, verlo como reto para solventarlo mejor, eso nos hará a ser más resilentes y al final dominar una herramienta cada vez más imprescindible." 
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de interés</strong>"
            
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://www.typescriptlang.org/docs/\">Documentación de typescript</a></li><li><a href=\"https://dev.to/hiro9108/javascript-vs-typescript-why-we-should-learn-typescript-4d5o\">Dev.io Communuty</a></li><li><a href=\"https://www.iamdeveloper.com/vscodetips/2022/may-2nd-2022-vs-code-tip-of-the-week-2l6m/\">Typescript resourse to VSC</a></li><li><a href=\"https://www.typescriptlang.org/cheatsheets\">Cheatsheets to typescript</a></li><li><a href=\"https://dev.to/nickytonline/learning-resources-for-typescript-4g1n\">Learning resources for Typescript</a></li>"
            
          }
        ]
      },
    ]
  },
  {
    "id": 2,
    "title": "Material UI and React",
    "section": "react",
    "mainImage": muiMainImg,
    "badge": [
      "Libraries",
      "Frontend"
    ],
    "intro": "In software development the priority is quality and speed, and the best way to reach this is learn Material UI, the best library of components for react",
    "image": front1,
    "content": [
      {
        "type": "h4",
        "node": "Primeros pasos en Material UI."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Trabajar con librerías y frameworks es muy beneficioso para solventar los tiempos de entrega, sin embargo, requiere siempre del riguroso sometimiento a la curva de aprendizaje. El tiempo para adquirir los conocimientos depende de la complejidad de la librería, su documentación (dicho sea de paso, la ducumentación de MUI es simplemente excelente), el soporte y muchos otros factores. En el presente artículo presento un panorama general sobre cómo es trabajar con la librería estrella de React <strong>Material UI</strong> (desde mi punto de vista) , escrita tanto para desarrollos con JS plano como TS."
          }
        ]
      },
      {
        "type": "p",
        "node": "Como desarrollador mi primer acercamiento a esta librería fue algo intimidante, ver tantas secciones, tantos componentes y diferentes formas de personalizarlos era en definitiva un reto. Por otra parte, los componentes están listos para llevarse a producción y lo hay de todo, sliders, tooltip, layouts (cabe destacar que la estructura está implementada con flexbox), tipografía, o componentes avanzados como tablas dinámicas, sliders, acordeones, de todo. A cualquiera le entran ganas de utilizarlo. Pero no es tan sencillo, si aún no se está tan familiarizado con las estructuras JSX, aconsejo para el desarrollador front react que está comenzando, intente soportar sus primeras aplicaciones con JSX y diseños personalizado, para conocer de primera mano cómo se trasmite la información desde el componente que contiene la lógica hasta su representación, pasando por las reglas sintácticas de JSX."
      },
      {
        "type": "h4",
        "node": "Configuración inicial"
      },
      {
        "type": "p",
        "node": "Primero la instalación de las dependencias:"
      },
      {
        "type": "code",
        "node": "yarn add @mui/material @emotion/react @emotion/styled -E"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Además de mui se instala <a href='https://github.com/emotion-js/emotionemotion'>emotion</a>, debido más que nada a la interoperabilidad que permite material para estilizar los componentes de múltiples maneras. Emotion proporciona una manera muy eficiente en cuanto a composición de estilos, además de admitir diferentes sintaxis con las que es posible llevar nuestro CSS al siguiente nivel."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Una vez realizada la instalación estamos listos para configurar el tema. La posibilidad que proporciona MUI para personalizar el aspecto visual de los componentes en general. Tópico muy importante que no podemos descartar en estos <strong>primeros pasos</strong>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Personalización del tema en MUI"
      },
      {
        "type": "p",
        "node": "Un tema en Material UI es simplemente un objeto que específica los valores de estilo tales como el color de fondo de los componentes, la opacidad, sombras, tamaños de fuentes, jerarquía de colores y más. Este objeto está configurado por defecto por lo que los nombres de propiedad son arbitrarios, si queremos modificar la apariencia de un componente tenemos que invocar este objeto y sobrescribir sus valores, y lo podemos hacer de forma global o de forma aislada y encapsulada en cada componente. Lo más recomendable es trabajar este objeto en su propio archivo:"
      },
      {
        "type": "img",
        "node": mui2
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Para modificar este objeto primero debemos poder accederlo. MUI lo proporciona mediante React Context en el componente de <strong>ThemeProvider</strong>"
          }
        ]
      },
      {
        "type": "img",
        "node": mui1,
      },
      {
        "type": "p",
        "node": "Con esta configuración inicial ThemeProvider ahora proporciona ese objeto si es que lo estamos configurando de forma global, si no es así proporcionará el objeto por defecto con el nombre theme desde cualquier componente descendiente en la jerarquía de componentes."
      },
      {
        "type": "code",
        "node": "import { createStyles, makeStyles} from '@material-ui/styles'"
      },
      {
        "type": "p",
        "node": "Según la documentación, createStyles realmente no hace nada, simplemente actúa como una función de identidad para pasar sus estilos. makeStyles, por otro lado, vincula una hoja de estilo a un componente de función utilizando un hook para ello."
      },
      {
        "type": "p",
        "node": "Ahora ya todo está listo para sobrescribir todas las propiedades del tema definidas por el propio MUI. Hay que hacer énfasis que las propiedades del objeto theme también pueden ser funciones por lo que para crear el nuevo estilo basta con pasarle los argumentos necesarios. A continuación, vemos un ejemplo de sobrescritura del relleno inferior del componente Container:"
      },
      {
        "type": "img",
        "node": mui3,
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "Como mencioné al inicio MUI es inmenso en este artículo sólo toco el contenido de forma muy superficial. Es la iniciativa de cada uno lo que nos lleva al siguiente nivel. Espero seguir editando y agregando tópicos a este tema que por lejos está por agotarse y también lejos estoy de dejarlo de utilizar. Tal vez agregue temas más avanzado o reedite este post conforme vaya avanzando."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos útiles:</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://in-your-saas.github.io/material-ui-theme-editor/#text-buttons\">IYS Theme Editor</a></li><li><a href=\"https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=17ad99&secondary.color=ffb300&primary.text.color=000000&secondary.text.color=000000\">Material Design Color Theme</a></li><li><a href=\"https://rossbulat.medium.com/theming-with-material-ui-in-react-49cc767dfc86\">Theming with Material UI in Medium</a></li>"
          }
        ]
      },
    ]
  },
  {
    "id": 3,
    "title": "Patrones en react",
    "section": "react",
    "mainImage": reactMainImg,
    "badge": [
      "React Library, patterns"
    ],
    "intro": "Design patterns are solution templates to common software development problems. In React, also provide solution to solve common problems.",
    "image": thumbSection,
    "content": [
      {
        "type": "h4",
        "node": "Design patterns"
      },
      {
        "type": "p",
        "node": "A continuación, realizo un acercamiento a los principales patrones de diseño de componentes de React. Algunos de los patrones de diseño de React más son más populares porque son eficientes para preocupaciones transversales, el intercambio de datos globales (sin props dilling), la separación de responsabilidades como la lógica de estado compleja de otros componentes, la extensión de estilos, composición y otros."
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
            "node": "<strong>Qué problema resuelve: </strong><em>el encapsulamiento de la lógica de estado principalmente</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "Básicamente es una función JS con lógica aislada para ser reutilizable por otros componentes. Por convención la identificamos con el prefijo use. "
      },
      {
        "type": "p",
        "node": "Favorecen el mantenimiento de la aplicación al mantener la responsabilidad de cada parte dentro de funciones muy específicas"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Punto a favor del uso de hooks: </strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<li>Favorecen el mantenimiento de la aplicación al mantener la responsabilidad de cada parte dentro de funciones muy específicas</li><li>Es más fácil testear la aplicación ya que se encuentra delegada.</li><li>La abstracción del estado compartido entre componentes es más fácil de gestionar en contraposición con el uso de redux u otro patrón basado en clases como un Hight Order Component (HOC)</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Básicamente mientras tengamos lógica de estado es posible aislar su lógica en un hook. A continuación, un ejemplo de un hook \"toogle\" y su implementación desde el componente:"
      },
      {
        "type": "img",
        "node": hooksPattern1,
      },
      {
        "type": "img",
        "node": hooksPattern2,
      },



      {
        "type": "h4",
        "node": "Patrón de composición"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Que problema resuelve: </strong><em>En muchas ocasiones algunos componentes requieren saber el estado o los cambios de estado de otros adyacentes o más lejanos en el árbol de componentes pero visibles en la misma interfaz. Este patrón aprovecha al máximo la composición para que podamos implementar componentes muy flexibles que comparten un estado común, pero haciendo que se comuniquen internamente sin necesidad de pasar props (props drilling).</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "Los elementos de la UI deben compartir un estado en común y al mismo tiempo dar la flexibilidad suficiente para modificar estructuras de la UI. Este patrón nos permite manejar la información desde un componente padre y tener control total sobre los componentes hijos. A continuación, el aspecto que tiene el componente proveedor y sus hijos consumidores"
      },
      {
        "type": "img",
        "node": compoundComponentPattern1,
      },
      {
        "type": "p",
        "node": "El componente ProductCard, es el encargado de proveer información a todos sus descendientes. Éste a través de API Context devuelve los valores esperados por sus componentes hijos"
      },
      {
        "type": "img",
        "node": compoundComponentPattern3,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "El componente consumidor, en este caso el componente <strong>ProductImage</strong> se conecta con a su proveedor a través de <code>useContext()</code> y mediante desestructuración se accede a los valores requeridos"
          }
        ]
      },
      {
        "type": "img",
        "node": compoundComponentPattern2,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Omito el código para los componentes <strong><ProductTitle /></strong> y <strong><ProductBottons /></strong> debido a que el procedimiento para acceder a los datos de su proveedor es el mismo. Es decir se conectan mediante <code>useContext()</code> y utilizan los valores como es requerido. Como podemos ver este patrón nos abre una gran variedad de posibilidades para construir componentes reutilizables e incluso librerías personalizadas (así está por ejemplo <strong>React Router</strong>) con la máxima flexibilidad posible."
          }
        ]
      },




      {
        "type": "h4",
        "node": "Patrón provider e inversión de control de estado"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Qué problema resuelve: </strong><em>Este patrón de diseño permite ofrecer al usuario (desarrollador), mayor control sobre la actualización de estado del componente, permitiéndole acceder al estado interno y aplicar diferentes actualizaciones de estado</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "El patrón <strong>provider</strong> en React es un patrón avanzado que se utiliza para gestionar estados más complejos. Busca delegar el control de estado a una función reductora. Actualmente en aplicaciones de react más modernas se gestiona a partir de <code>useReducer(reducer, initialState)</code> que devuelve un array de 2 posiciones, siendo la primera la que contiene el estado actualizado; mientras que la segunda devuelve la función dispatch, encargada de actualizar ese estado."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "La actualización de estado se delega a una función reductora pura.  Como se menciona en el párrafo anterior react proporciona el hook incorporado: <code>useReduce()</code> que recibe como primer argumento la función reductora y como segundo el estado actual. Esta función devuelve un array de 2 posiciones, siendo el primero una variable con los últimos cambios realizados en el estado y en la segunda posición una función dispatch para actualizar ese estado:" 
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<code>const [ state, dispatch ] = useReducer(customReducer, state)</code>" 
          }
        ]
      },
      {
        "type": "p",
        "node": "La función dispatch recibe el action creator y éste por debajo invoca la función reductora, para que actualice el nuevo valor del estado."
      },
      {
        "type": "img",
        "node": reducerPattern1,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "En el ejemplo anterior un custom hook controla la lógica de actualizacion de estado mediante useReducer. La actualización de estado está completamente en manos del hook, aqui  llamado <code>usePlayerReducer()</code> con la lógica que implica la llamada a useReducer(); necesitamos aportar mayor flexibilidad e invertir el control de estado, para que sea responsabilidad del componente que utiliza este hook."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Para lograrlo debemos pasar una función que suplante la llamada de la función reductora utilizada por el custom hook. Hacer los cambios de estado que la lógica del componente demande en la función que se le pasará a <code>usePlayerReducer()</code> y de esa manera invertir control de estado a manos del componente. Y modificar el <code>usePlayerReducer()</code> para que este listo y pueda recibir el objeto con la función reductora personalizada en el lado del componente:"
          }
        ]
      },
      {
        "type": "img",
        "node": reducerPattern3,
      },
      {
        "type": "img",
        "node": reducerPattern2,
      },
      {
        "type": "p",
        "node": "Cada vez que se requiera pasar el control de estado al custom hook lo hacemos desde el componente que lo requiera mediante el envío de un objeto que contenga la función reductora personalizada."
      },



      {
        "type": "h4",
        "node": "Patrón Control Props"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Qué problema resuelve:</strong> <em>El poder gestionar el estado interno de nuestro componente desde el exterior. Generalmente desde el componente contenedor. Lo que también permite sobrescribir el estado por defecto que tenga el hijo.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "Un componente controlado usa props para obtener su valor actual y mediante un callback notifica los cambios al padre. Al procesar el callback, en el padre (administrador de estado de su hijo) éste entrega los valores actualizados como props al componente hijo."
      },
      {
        "type": "img",
        "node": controlProps1,
      },
      {
        "type": "img",
        "node": controlProps2,
      },
      {
        "type": "p",
        "node": "Esta es la forma más simple de implementar este patrón, pero la forma recomendada es dejar un gestor de estado internamente por default en caso de no controlar el componente desde el padre."
      },
      

      
      {
        "type": "h4",
        "node": "Render Props"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Que problema resuelve: </strong> <em>delegar la responsabilidad del renderizado del componente a un prop de tipo función. Es permite definir diferente lógica de renderizado, desde un componente contenedor.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Con este patrón podemos cumplir con el <strong>Open and Close principle</strong> ya que al estar delegada la responsabilidad del render en el padre, no será necesario modificar la presentación del componente en la UI, cada que necesitemos modificar la UI. Por otro lado, debemos cuidar de no caer en el antipatrón de anidar la prop de renderizado entre componentes ya que agrega complejidad al código."
          }
        ]
      },
      {
        "type": "p",
        "node": "Pensemos por ejemplo en un componente que nos ayude a gestionar los mensajes de error mientras se está en tiempo de desarrollo. Este mensaje será diferente según la sección en la que nos encontremos. Por lo que tenemos diferentes UI. A continuación, un ejemplo del componente ErrorBoundary sin alternativas para renderizar un mensaje personalizado desde el padre: "
      },
      {
        "type": "img",
        "node": renderProps1,
      },
      {
        "type": "p",
        "node": "Para pasar una prop con la lógica del renderizado o con la información necesaria para mostrar diferentes mensajes de error. Necesitamos preparar nuestro componente hijo y configurar el render prop en el padre: "
      },
      {
        "type": "img",
        "node": renderProps2,
      },
      {
        "type": "p",
        "node": "Una vez preparado el padre para enviar prop render de tipo función el componente hijo tendría el siguiente aspecto, para renderizar un mensaje por defecto o el que el contenedor decida, si es que lo envía"
      },
      {
        "type": "img",
        "node": renderProps3,
      },
      


      {
        "type": "h4",
        "node": "Extensible Styles"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Qué problema resuelve:</strong> <em>la necesidad de personalizar nuestros componentes de forma según el contexto en el que se encuentren. Por ejemplo, un botón puede utilizarse para una acción de cancelar el envío de un formulario o por el contrario llevarlo a cabo, y sólo distinguirlo en la interfaz de usuario mediante los estilos; con un color de fondo que sea relevante o carente para la cancelación.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Por mucho, el patrón más sencillo de implementar, (junto con  <strong>state initializer</strong>). Algunos frameworks para componentes como MUI lo implementan en todos sus componentes. Este patrón proporciona la alternativa para modificar el aspecto visual de los componentes a través de props, donde podremos asignar tanto objetos, para crear reglas para estilos en línea o nombres de clase."
          }
        ]
      },
      {
        "type": "p",
        "node": "Las ventajas de este patrón es que permite la reutilización de componentes. Y cumple con el principio SOLID Open Close Principle- Donde la función en este caso el componente queda abierto a su extensión, pero cerrado a su modificación"
      },



      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "Utilizar los patrones de diseño en react nos permiten reducir el tiempo de desarrollo ya que aprovechamos esquemas de solución a problemas comunes, aplicados y probados por muchos desarrolladores de react y al mismo tiempo mejoramos la calidad del software en el proceso."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de interés</strong>"
            
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://medium.com/the-non-traditional-developer/styling-best-practices-using-react-c37b96b8be9c\">Best practice in react styling components</a></li><li><a href=\"https://www2.logrocket.com/react-performance-monitoring\">Debugging performance in react apps</a></li><li><a href=\"https://blog.logrocket.com/react-component-design-patterns-2022/\">Most common patterns in react 2022</a></li><li><a href=\"https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks\">The State Reducer Pattern with React Hooks</a></li><li><a href=\"https://advanced-react-patterns.netlify.app/\">Advanced react patterns (exercises) </a></li><li><a href=\"https://github.com/streamich/react-use\">Hooks collection of react-use</a></li><li><a href=\"https://github.com/rehooks/awesome-react-hooks\">Awesome react hooks</a></li><li><a href=\"https://usehooks.com/useLocalStorage/\">Popular hooks</a></li>"
            
          }
        ]
      },
    ]
  },
  {
    "id": 4,
    "title": "CSS Box Model",
    "section": "css",
    "mainImage": cssMainImg,
    "badge": [
      "Design",
      "CSS"
    ],
    "intro": "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. Learn how to apply it, is the first step to create usables and effective design apps",
    "image": es6yjs,
    "content": [
      {
        "type": "h4",
        "node": "Fundamentos"
      },
      {
        "type": "p",
        "node": "En general el estudio de modelo de caja en css puede ser tedioso, no podemos simplemente comprenderlo si no acatamos primero la teoría. Detrás de todo el aspecto de cada uno de los elementos dentro de una página web tiene su base lógica explicativa, y detrás de ello comprensión del por qué de ciertos comportamientos. En este artículo trato de dilucidar de forma general pero con intensión de ser conciso el modelo de caja para lograr sacar ventaja y hacer nuestro css más predecible."
      },
      {
        "type": "p",
        "node": "Hay que pensar en los elementos html de la interfaz en su forma más básica como meras cajas, formas de rectangulares con límites superior, inferior y lados, definido su ancho y alto por el tamaño de su contenido."
      },
      {
        "type": "p",
        "node": "Las cajas tienen un comportamiento diferente según su display, sus dimensiones establecidas (width y height) y el contenido que vive dentro de ellas. Pensemos primero que para hablar de un tamaño intrínseco  la anchura debe depender explícitamente del contenido y no de una anchura arbitraria definida con width"
      },
      {
        "type": "img",
        "node": modelBox1,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "En esta imagen izquierda podemos visualizar claramente los efectos del modelo de caja cuando su anchura es fija y cuando la mantenemos por defecto (sin width) o con la propiedad <strong>min-width</strong>. Esta propiedad le dice a la caja que sea tan ancha como el ancho mínimo intrínseco de su contenido (la palabra \"awesome\"). Lo que permite que la caja se ajuste perfectamente a \"CSS is awesome\"."
          }
        ]
      },
      {
        "type": "p",
        "node": "Una vez más por las dudas, cuando la caja usa un tamaño arbitrario, hay un límite de la cantidad de contenido que se puede agregar antes de que se desborde de los límites establecidos. Estas dimensiones dan límites estrictos a todo lo que se encuentre adentro del elemento, que se respetará a menos que el contenido sea demasiado grande para la caja, en cuyo caso se producirá un desbordamiento visible."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong><em>Nota: </em></strong>Puedes definir cómo un elemento maneja el contenido de desbordamiento, utilizando la propiedad de overflow."
          }
        ]
      },
      {
        "type": "h4",
        "node": "De que está compuesto el modelo de caja:"
      },
      {
        "type": "img",
        "node": modelBox2,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "El modelo de caja comienza por el área que ocupa el contenido, que como hemos visto anteriormente suele ser el área de tamaño más variable. A continuación, contamos con el relleno o \"padding\" que rodea la caja de contenido. Si nuestra caja tiene reglas de desbordamiento establecidas, como <strong>overflow: auto</strong> o <strong>overflow: scroll</strong>, las barras de desplazamiento ocuparán este espacio también. Lo siguiente es la caja de borde ésta rodea la caja de padding y su espacio está ocupado por el valor del border. Y finalmente, nos encontramos con la caja de margen. Propiedades como el <strong>outline</strong> y <strong>box-shadow</strong> ocupan este espacio porque están pintadas por encima de los elementos, por lo que no afectan el tamaño de nuestra caja. Puedes tener un <strong>outline-width</strong> de 200px en nuestra caja y todo lo que está dentro e incluido la caja de borde sería exactamente del mismo tamaño."
          }
        ]
      },
      {
        "type": "h4",
        "node": "Algunas reglas del modelo de caja"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Márgenes:</strong> Un punto clave a la hora de entender los márgenes es el concepto de <strong>colapso del margen</strong>. Si tienes dos elementos cuyos márgenes se tocan, esos márgenes se combinan para convertirse en un sólo margen, cuyo tamaño es el del margen más grande."
          }
        ]
      },
      {
        "type": "p",
        "node": "Pensemos por ejemplo en dos elementos de párrafo, donde cada uno de ellos ocupa el ancho total de su contenedor. El primer párrafo, tiene un margen inferior de 30px y el segundo un margen superior de 20px. El colapso de sus márgenes hará que únicamente el margen con mayor cantidad de pixeles sea la distancia entre los 2 elementos y no sea la suma de estos. El concepto de colapso del margen es otra parte más del modelo de caja"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Bordes:</strong> Los bordes suman su width y height al total del modelo de caja a menos que se utilice el modelo de caja alternativo definido por la propiedad <strong>box-sizing: border-box</strong> que pasan de esa suma. Si se utiliza esta alternativa hay que agregar esta propiedad al selector html y heredar mediante cascada en los elementos descendientes."
          }
        ]
      },
      {
        "type": "img",
        "node": modelBox3,
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Padding:</strong> El relleno se encuentra entre el borde y el área de contenido. A diferencia de los márgenes, el relleno no puede tomar valores negativos, por lo que el valor debe ser 0 o positivo. Cualquier fondo aplicado al elemento se mostrará detrás del área de relleno y, generalmente, se usa para mantener el contenido alejado del borde."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Propiedad display en elementos en línea y de bloque:</strong> El modelo de caja tiene un comportamiento distinto si se trata de elementos en línea o elementos de bloque. Para los elementos en línea no se respeta un ancho o altura fija; en cambio para los elementos de bloque si. Los elementos de bloque provocan un salto de línea, los elementos inline no. Sin embargo, podemos utilizar la propiedad especial: <strong>display: inline-block</strong> para agregar un comportamiento más flexible a los elementos en línea"
          }
        ]
      },
      {
        "type": "p",
        "node": "La propiedad inline-block hace que el elemento de línea se comporte como uno de bloque, respeta así las definiciones para ancho y alto. El relleno, el margen y el borde mantiene alejado a los otros elementos de la caja y lo más importante no genera un salto en línea entre los elementos colindantes."
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "El modelo de caja puede ser complicado de comprender si no se practica lo suficiente, hay muchos factores que afectan su correcto funcionamiento, desde la hoja de estilo por defecto del navegador hasta las propiedades css que lo controlan. Sin olvidar las variaciones de comportamiento ante el tamaño intrínseco o arbitrario de la caja de contenido o del tipo inline o block del elemento que tratamos. Alcanzar a generar un css predecible toma tiempo, pero una vez comprendido mucho aspectos generales del diseño web son despejados."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Links de interés</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://web.dev/learn/css/box-model/\">Web Dev Box Model</a></li><li><a href=\"https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model\">MDN explica a detalle el modelo de caja</a></li><li><a href=\"https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\">Ancho de caja en CSS Tricks</a></li>"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Testing front with testing library and Vite",
    "section": "testing",
    "mainImage": testingMainImg,
    "badge": [
      "Testing Library",
      "React"
    ],
    "intro": "Vite is a great and amazing boilerplate to developing speed react apps, but is neccesary make some configurations, here will explore some strategies to start the suite test",
    "image": sass,
    "content": [
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Importante:</strong> Los conceptos son generales y aplican para cualquier aplicación escrita en x lenguaje, sin embargo, los códigos aquí presentados son partícularmente utilizados para testear una aplicación desarrollada con react.",
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
        "node": "Igualmente, para todos los desarrolladores involucrados la creación de pruebas unitarias es muy favorable comenzar con la automátización del proceso de ejecución, es muy pesado andar ejecutando comandos repetitivos una y otra vez, cuando se puede ejecutar uno que se mantenga a la escucha de cambios, aquí el de jest: "
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
        "node": "Otra cuestión de ayuda muy importante para el desarrollo hoy en día lo proporcionan las IDE's, la más importante hoy en día por mucho es Visual Studio Code, con ayuda de su intellisense tenemos acceso a métodos y propiedades de la librería de jest de forma predictiva, para ello basta con escribir las primeras letras para que nos sugiera algún autocompletado, sin embargo, no es automático; hay que instalar los tipos de Jest con el siguiente comando:"
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
            "node": "Algo más que nos puede ayudar a mejorar el flujo de trabajo y hacerlo más rápido y eficiente, es aislar las pruebas por componente trabajado. Ya que si se estamos en modo “observador” cada cambio involucra todo el conjunto de pruebas que viven dentro de la carpeta test, lo que significa que ejecutará todo el proyecto por cada cambio, ¿ineficiente no es así? Jest, a través de la Línea de comandos nos ofrece la solución: después de realizar algún cambio en el archivo a trabajar, presionar la letra <strong>w</strong>, estando en el CLI y a continuación la letra <strong>p</strong> lo que nos permitirá escribir el título del archivo y ejecutar únicamente ese test. El realizar esta acción mantiene a Jest escuchando cambios en ese archivo; cuándo necesitemos pasar a otro archivo o componente realizamos el mismo procedimiento y listo."
          }
        ]
      },
      {
        "type": "h4",
        "node": "Recomendaciones y buenas prácticas al realizar pruebas unitarias:"
      },
      {
        "type": "p",
        "node": "A continuación, una pequeña lista con algunas recomendaciones para realizar las pruebas unitarias:"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Es recomendable trabajar con el Snapshot sólo cuando se tiene el producto final y no en tiempo de desarrollo ya que los constantes cambios al componente provocan una actualización continua.</li><li>De la misma manera hay que buscar que las pruebas verifiquen lo que se necesita pero que al mismo tiempo sean flexibles. Es decir, probar la existencia de valores en un arreglo podría indicar la conexión exitosa a un backend y no esperar la longitud de un arreglo específico</li><li>Vale la pena darse un tiempo para analizar la ruta crítica de una funcionalidad o de la aplicación; lo que en la práctica ayudaría a evitar perder tiempo en acciones dependientes de la alguna funcionalidad dentro de la <strong>ruta crítica</strong></li><li>Para hacer las pruebas unitarias más eficientes es muy importante analizar el código y tener claro que se espera haga; si se reciben props de tipo función que se espera que hagan, si se reciben argumentos en una función que se espera resuelva, etc</li><li>Hay que verificar que pruebas son aplicables a un componente, o función, ya que hay tareas que no corresponden al correcto funcionamiento de un components, como podría ser la actualización de un estado ya sea mediante un useState, un reducer, o cualquier otra función que podría comprobarse por aparte</li><li>Si alguno de los nombres de directorios de la suite de test coincide con otro directorio de la aplicación que no requiera de test, como puede ser una carpeta mock, es buena práctica nombrarla __mocks__</li><li>Utilizar <em>react-testing-library</em> hace más eficiente las evaluaciones del renderizado de react. Aunado a esto podemos prescindir de utilizar los objetos devueltos por “render” (getByText, container..,) y gestionarlos con la función <strong>screen</strong>; un método importado por testing-library que permite almacenar el objeto generado por la función <strong>render.</strong></li><li>Utilizar la función <strong>debug()</strong> para visualizar en la terminal como luce el objeto de pruebas en el DOM. Es parecido console.log(), pero enfocado al DOM</li>"
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
            "node": "Los hooks son funciones, hay que verificar que el argumento recibido se utiliza para devolver lo esperado. Por lo tanto, para lograr esto debemos apoyarnos de <strong>renderHook</strong> función proporcionada por <strong>testing-library</strong>. Debemos pasar el custom hook en el cuerpo del callback, asignado como el primer argumento de la función renderHook. El resultado se almacena en un objeto llamado: <strong>result.current</strong>"
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
        "node": "Para evitar agregar archivos de terceros (como puede ser el caso de las dependencias de firebase para trabajar con su módulo de autenticación) es importante agregar la siguiente opción al objeto de configuración de Jest: "
      },
      {
        "type": "code",
        "node": "transformIgnorePatterns: []"
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "En mi reciente experiencia al trabajar con Vite, en lo que a pruebas unitarias se refiere puede ser costoso configurar desde cero el set, hay que tener en cuenta que esta aplicación de utilidad está realizada para ser personalizada a la medida y muchas configuraciones no vienen escritas por defecto; hay que investigar y muchas otras veces trabajar con prueba y error, por lo tanto, es menester contar con un post relacionado que nos ayude a realizar esta tarea de forma más clara y explícita. Sin más tengo que decir que este post regularmente lo estaré actualizando con nueva información relacionada a la configuración y optimización de las pruebas unitarias dentro de Vite."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos útiles:</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://testing-library.com/\">Testing Library</a></li><li><a href=\"https://reactjs.org/docs/testing.html\">Testing overview from react</a></li><li><a href=\"https://www.freecodecamp.org/news/how-to-test-react-applications/\">How to test react apps. FreeCodeCamp Article.</a></li>"
          }
        ]
      },
    ]
  },
  {
    "id": 6,
    "title": "Interact with backend",
    "section": "fullstack",
    "mainImage": backMainImg,
    "badge": [
      "Fullstack"
    ],
    "intro": "Create a rest api to consumes in front; create one module to authentication with JWT, validations fields, and CRUD to interact app in front-end",
    "image": fullstack,
    "content": [
      {
        "type": "p",
        "node": "En el mundo de desarrollo web las APIs son esenciales para enriquecer las aplicaciones, éstas nutren las interfaces con información interactiva para el usuario final. Permiten entre un mundo de posibilidades actualizar, borrar información o crear posts para personalizar un módulo de usuario, o afianzar la seguridad de la aplicación al gestionar la autenticación de algún usuario. El backend como el frontend puede manejarse con distintas infraestructuras y prácticamente aseguran lo mismo."
      },
      {
        "type": "h4",
        "node": "Códigos de estado establecidos de forma correcta"
      },
      {
        "type": "p",
        "node": "Cada que el cliente (solicitante) envía una petición al servidor, es procesado por el mismo para luego devolver los recursos relevantes junto con los encabezados HTTP"
      },
      {
        "type": "p",
        "node": "Los códigos de estado de HTTP se entregan a tu navegador en el encabezado de HTTP. Aunque los códigos de estado se devuelven cada vez que el navegador solicita una página web o un recurso, la mayoría de las veces no los ves."
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><strong>100s: </strong>Códigos informativos que indican que la solicitud iniciada por el navegador continúa.</li><li><strong>200s: </strong>Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.</li><li><strong>300s: </strong>Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.</li><li><strong>400s: </strong>Códigos de error del cliente que indican que hubo un problema con la solicitud.</li><li><strong>500s: </strong>Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.</li>",
          }
        ]
      },
      {
        "type": "p",
        "node": "Dentro de cada una de estas tipos, existe una variedad de códigos de servidor y pueden ser devueltos por el servidor. Cada código individual tiene un significado específico y único, que cubriremos en la lista más detallada a continuación."
      },
      {
        "type": "p",
        "node": "Los códigos de estado HTTP se dividen en 5 «tipos». Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico."
      },
      {
        "type": "p",
        "node": "Finalmente, una vez comprendido la operación realizada, hay que devolver el resultado adecuado según sea decida la lógica. A continuación, los tipos de respuesta que puede mandar el servidor al cliente al ejecutar una acción de eliminado."
      },
      {
        "type": "img",
        "node": restBack1,
      },
      {
        "type": "h4",
        "node": "Es completamente necesario contar con un API Documentada"
      },
      {
        "type": "p",
        "node": "Cuando un desarrollador piensa en la documentación de la API, lo más probable es que visualice una referencia completa. Este es solo un tipo de documentación, pero es importante. Aquí encontrará una lista de puntos finales de la API, qué campos de solicitud y respuesta están disponibles y cómo autenticarse con la API. Todas estas son partes muy importantes de la integración con su API."
      },
      {
        "type": "p",
        "node": "El mejor lugar para comenzar a generar una referencia de API de forma automatizada después de configurar, son OpenAPI, Swagger o RAML. Estas aplicaciones permiten describir los endpoints de la API, configurar encabezados, realizar procesos de autenticación y otros mecanismos de interacción"
      },
      {
        "type": "p",
        "node": "En su forma más simple, una buena documentación de API puede mostrar respuestas de ejemplo. Los datos que se devuelven de una API son al menos tan importantes como la forma en que realiza las llamadas."
      },
      {
        "type": "p",
        "node": "Cuando un desarrollador puede ver qué esperar, puede predecir mejor cómo podría integrarse con una API sin hacer llamadas en vivo. Dicho esto, mostrar los documentos API puede ir más allá del contenido estático. La documentación interactiva es una opción que incluso permite ver respuestas simuladas o en vivo p generar codigo fuente en lenguajes populares. "
      },
      {
        "type": "h4",
        "node": "Lo aprendido al gestionar conexiones en un backend"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Ya es un buen de tiempo que se pueden responder solicitudes mediante estructuras JSON sin instalar librerías de terceros. Ya esta incorporado en express <code>express.json()</code></li><li>Las acciones GET, PUT, DELETE, HEAD y PATCH deben ser idempotentes. La misma solicitud repetida en el mismo recurso debe dar como resultado el mismo estado. Por ejemplo, enviar varias solicitudes DELETE para el mismo URI debe tener el mismo efecto, aunque el código de estado HTTP en los mensajes de respuesta sea diferente. La primera solicitud DELETE podría devolver el código de estado 204 (sin contenido), mientras que una solicitud DELETE posterior podría devolver el código de estado 404 (no encontrado) </li><li>El método PUT es idempotente en HTTP lo que significa que producirá el mismo resultado si se ejecuta varias veces. El método POST no es idempotente, ya que si se ejecuta varias veces está creando varios elementos.</li><li>La diferencia entre el método HTTP PATCH y PUT es que el primero aplica modificaciones parciales a un recurso, mientras que el segundo únicamente permite reemplazar completamente un documento.</li><li>URL (Uniform Resource Locator o “Localizador uniforme de recursos”) está formada por un conjunto de caracteres, que sigue un estándar, y que especifica que un determinado recurso digital está identificado y disponible y permite localizarlo. Todos los URLs son URIs (pero no todos los URIs son URLs).</li><li>Admitir almacenamiento en caché del lado del cliente es otra manera de controlar la persistencia de datos</li><li>Utilizar endpoints anidados para mostrar pantescos semánticos entre la jerarquía. ( TRES NIVELES COMO MÁXIMO )</li>",
          }
        ]
      },
      {
        "type": "h4",
        "node": "Conclusión"
      },
      {
        "type": "p",
        "node": "En el presente artículo pretendo hablar de forma general de algunas de las buenas prácticas y su porqué cuando las implementamos en nuestras API. Documentación, mensajes de respuesta adecuados a su código de estátus son sólo una pequeña parte del total de recomendaciones que se aconsejan. Por lo tanto, este artículo muy posiblemente se fragmentará en otros más especificos que aborden el tema inmenso que abarca la creación de una API RESTful."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de interés:</strong>"
          }

        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://stoplight.io/api-documentation-guide\">Guía API documentatión y mejores prácticas</a></li><li><a href=\"https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/\">Freecodecamp Mejores prácticas API</a></li><li><a href=\"https://learn.microsoft.com/es-es/azure/architecture/best-practices/api-implementation\">API Implementation</a></li><li><a href=\"https://kinsta.com/es/blog/codigos-de-estado-de-http/\">Códigos de estado HTTP</a></li><li><a href=\"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes\">Wikipedia: List of HTTP status codes.</a></li><li><a href=\"https://www.openapis.org/\">OpenAPI specification</a></li>"
          }

        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Git Best Practices",
    "section": "best practices",
    "mainImage": gitMainImg,
    "badge": [
      "WorkFlow"
    ],
    "intro": "Here, we will explore some of the commands and use case to manage one of the most useful control version. For ohter hand will see how to work with better commits and another tips",
    "image": git,
    "content": [
      { 
        "type": "h4",
        "node": "Git Commit Mejores Prácticas"
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Commits relacionado a cambios</strong>"
          }
        ],
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Un commit debe ser un contenedor para los cambios relacionados. Por ejemplo, corregir dos errores diferentes debería producir dos confirmaciones separadas. Las confirmaciones pequeñas facilitan que otros desarrolladores comprendan los cambios y los reviertan si algo salió mal. Con herramientas como el <strong>staging area</strong> y la capacidad de organizar sólo partes de un archivo, Git facilita la creación de commits muy granulares."
          },
        ]
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Commits constantes</strong>"
          }
        ],
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Realizar commits de forma regular</strong> nos permite compartir nuestro código con mayor frecuencia con otros. De esa forma, es más fácil para todos integrar los cambios con regularidad y evitar conflictos de <strong>merge</strong>. Tener commits grandes y compartirlos con poca frecuencia, por el contrario, dificulta la resolución de conflictos."
          },
        ]
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>No realizar commits con trabajo a medias</strong>"
          }
        ],
      },
      {
        "type": "p",
        "node" : "Debemos commitear sólo cuando tenemos completo el aspecto lógico de la funcionalidad o fix. Si tenemos la tentación de commitear sólo porque tenemos la necesidad de respaldar nuestro trabajo, creemos una rama o guardemos los cambios en un stash."
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Realizar commit después de probar que su funcionalidad es correcta</strong>"
          }
        ],
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "A menos que no estemos trabajando de forma colaborativa, no importa subir cambios sin testear, pero como en el desarrollo profesional esto no es una realidad hay que garantizar que el código creado está libre de errores y así evitar atascaderos en otras zonas del desarrollo."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Escribe buenos mensajes de commit</strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "El mensaje deberá comenzar con un breve resumen de nuestros cambios (hasta 50 caracteres como guía, es recomendado). El cuerpo deberá estar separado por una línea en blanco. El cuerpo del mensaje debe proporcionar respuestas detalladas a las siguientes preguntas: – ¿Cuál fue la motivación para el cambio? – ¿En qué se diferencia de la implementación anterior? Usar el tiempo presente imperativo (\"cambiar\", no \"cambiado\" o \"cambios\") podemos ser coherentes con los mensajes generados a partir de comandos como <strong>git merge</strong>. Tener una copia de seguridad de nuestros archivos en un servidor remoto es un buen efecto secundario de tener un sistema de control de versiones, pero para nada debe ser la norma utilizarlo con esta finalidad."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Utilizar ramas</strong>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "La ramificación es una de las características más poderosas de Git, y esto no es por accidente: la ramificación rápida y fácil fue un requisito central desde el primer día. Las ramas son la herramienta perfecta para ayudarte a evitar mezclar diferentes líneas de desarrollo. Debemos usar ramas de manera extensiva en tus flujos de trabajo de desarrollo: para nuevas funciones, correcciones de errores, ideas..."
          }
        ]
      },
      {
        "type": "h4",
        "node": "Establecer reglas de formato (sugerencias)" 
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Commit en mayúsculas, corto (50 caracteres o menos)</li><li>Texto explicativo más detallado, si es necesario. Envuélvelo en alrededor de 72 caracteres. En algunos contextos, la primera línea se trata como el asunto de un correo electrónico y el resto del texto como el cuerpo. La línea en blanco que separa el resumen del cuerpo es fundamental</li><li>Siempre dejar la segunda línea en blanco</li><li>Escribir el mensaje de confirmación en imperativo: \"Fix bug\" y no \"Fixed bug\" o \"Fixes bug\". Esta convención coincide con los mensajes de confirmación generados por comandos como git merge y git revert.</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Ejemplos</strong>"
          }
        ]
      },
      {
        "type": "img",
        "node": git1,
      },
      {
        "type": "img",
        "node": git2,
      },
      {
        "type": "h4",
        "node": "Otros tips" 
      },
      {
        "type": "p",
        "node": "Crear alias para los comandos usados más comunes puede ayudarnos a ahorrar valiosos minutos todos los días, acciones repetitivas en comandos automatizados" 
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<li>st = status</li><li>ci = commit</li><li>br = branch</li><li>co = checkout</li><li>ds = diff --staged</li><li>changes = log -n1 -p --format=fuller</li><li>amend = commit --amend -C HEAD</li><li>undo = clean -f -d</li><li>undoci = reset HEAD~1</li><li>unstage = reset HEAD --</li><li>lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Nota: </strong>Este recurso fue extraído del gist de <a href=\"https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60\">LuisMTS</a> colega desarrollador, todos los créditos para él" 
          }
        ]
      },
      {
        "type": "h4",
        "node": "Conclusión:" 
      },
      {
        "type": "p",
        "node": "El sistema de control de versiones de GIT es fabuloso y también inmenso como lo es nuestro mundo de ingeniería, es también uno de nuestros mejores aliados y la mejor herramienta colaborativa para el desarrollo de proyectos más seguros y ágiles. Podemos estar seguros que entregando nuestra plena confianza a sus mejores prácticas nos facilitará el desarrollo y la calidad que siempre buscamos" 
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos útiles:</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://acompiler.com/git-best-practices/#tve-jump-17738882369\">La guía definitiva</a></li><li><a href=\"https://github.com/\">Github Home</a></li><li><a href=\"http://yourfirstpr.github.io/\">Your First Pull Request</a></li><li><a href=\"http://yourfirstpr.github.io/\">Formateo básico según Github</a></li><li><a href=\"https://learngitbranching.js.org/?locale=es_ES\">Learn Git Branching</a></li>"
          }
        ]
      },
    ]
  },
  {
    "id": 8,
    "title": "SOLID",
    "section": "best practices",
    "mainImage": solidMainImg,
    "badge": [
      "Framework",
      "Desarrollo"
    ],
    "intro": "The SOLID principles tell us how to organize our functions and data structures into components and how those components should be interconnected.",
    "image": solid,
    "content": [
      {
        "type": "p",
        "node": "A continuación, se aborda un tema vital para el desarrollo de código escalable, por contar con una estructura que evita el código altamente acoplado. Cabe destacar que son PRINCIPIOS, no es la regla y es siempre una opción optar por estructurar nuestro código basado en sus dictámenes."
      },
      {
        "type": "p",
        "node": "Los principios SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados entre ellos. De igual manera abordaré su contraparte descrito con el acrónimo STUPID explicadas malas prácticas identificadas"
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
            "node": "<strong>Tight coupling: </strong> Básicamente con alto acoplamiento se refiere a la dependencia de otras funciones, clases o módulos ajenas a la propia lógica que maneja. Y con baja cohesión a las múltiples responsabilidades que gestión la lógica de una función, clase o módulo. Lo ideal es tener bajo acoplamiento y alta cohesión."
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
            "node": "<strong>Premature Optimization: </strong>La optimización de una aplicación es necesaria desde muchos enfoques, con decir que una aplicación veloz afianza la confianza del cliente, es suficiente para justificar su necesidad, sin embargo, esta implementación debe contar con su fase dedicada a ello y no en la fase de desarrollo de funcionalidades. ¿Porqué? Bueno, implica tiempo y en determinados momentos es más necesario tener el feature funcional por posibles cambios y mejoras que la optimización. En tiempo de desarrollo estamos supeditados a cambios, la optimización debería estar lista en el producto final."
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
        "node": "He comenzado con las cláusulas dedicadas a describir lo que no debemos hacer como desarrolladores, por el simple hecho de que no podemos saber que es lo bueno si antes no pasamos por lo malo, además que a partir de esa pequeña descripción podemos identificarnos mejor con la solución ya que los principios SOLID requieren un análisis adicional partiendo de la abstracción a partir de momento en el que decidimos CREAR!"
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
        "node": "Tener una única responsabilidad no es sinónimo de hacer una única cosa, sino de tener funcionalidades que estén expuestos a una sola fuente de cambio. Por ejemplo, una clase con un método que cargue información de una base de datos y con otro método los represente en la interfaz de usuario, es una clase que tiene 2 responsabilidades, si en algún momento cambia el requerimiento de conexión inevitablemente se verá afectada el método que agrega la información a la interfaz. Lo que indudablemente es un indicio de que esta clase está expuesta a 2 fuentes de cambio distinta."
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
            "node": "<li>Nombres de clases o módulos demasiado genéricos</li><li>La clase involucra múltiples capas, la de representación de datos en la UI; la consumo y guardado de información a una base de datos, la de gestión del estado global, etc.</li><li>Excesivo número de líneas</li>"
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
        "node": "En conclusión, para añadir funcionalidades a la aplicación, tenemos que escribir nuevo código, no modificar el ya existente."
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
            "node": "<li>Cambios normalmente afectan a la clase, módulo o función de forma constante</li><li>Cuando una clase o módulo afecta a varias capas de la aplicación (Representación en la UI, almacenamiento en Base de datos, interacción con la API, etc.)<li>Este principio es el más ligado con el principio 'Single Responsability'</li>"
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
        "node": "De forma breve, aunque muy abstracto, este principio se refiere al hecho de que si una clase A es extendida por una clase B, debemos ser capaces de sustituir cualquier instancia de A por cualquier instancia de B, o en otras palabras una subclase debe poder ser substituida por su superclase, sin que el sistema se corrompa o falle."
      },
      {
        "type": "p",
        "node": "El principio Liskov nos ayuda a utilizar la herencia de forma correcta y a tener un mayor cuidado a la hora de extender clases. Es necesario cuidar no violar el principio de responsabilidad única, ya que usualmente utilizar la herencia en JS genera código acoplado, sin embargo, existe un técnica que nos ayudará a gestionar la jerarquía de forma más eficiente, pero sólo se puede implementar con el uso de Typescript. "
      },
      {
        "type": "p",
        "node": "Si decimos que una clase hija debe poder funcionar como implementamos la clase padre, significa que la clase hija contiene los mismos métodos de la clase padre. Como hacemos que se respete esto y no rompa la aplicación en el momento que un metodo que no exista.., solución: con las clases abstractas de TS."
      },
      {
        "type": "img",
        "node": liskovPrinciple1
      },
      {
        "type": "img",
        "node": liskovPrinciple2
      },
      {
        "type": "p",
        "node": "Las clases que extienden de Vehicle no pueden implementar nada que no esté en la firma del padre. Rápido seguro y eficiente. Pensar en clases abstractas al momento de querer aplicar este principio es una solución rápida y elegante."
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
        "node": "Aplicar correctamente este principio permite crear clases o funciones tolerantes al cambio. Las modificaciones en una clase no deben afectar a aquellas que no implementen la interfaz relacionada. Hace el código verboso, pero con la capacidad de expandirse o extenderse más."
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
        "node": segregation1
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Evidentemente estamos implementando para la <strong>clase Tucan</strong> métodos que no va a utilizar. Esta clase no utiliza los métodos <strong>run()</strong> y <strong>swim()</strong>, porque está fuera de sus habilidades. Por lo que estoy recurriendo a una mala práctica. La solución es implementar las interfaces propias de la clase Tucán e implementar los métodos sobrantes para las clases que lo requieran, si es que van a existir clases que requieran de esas habilidades. A continuación, el mismo ejemplo pero implementado de la forma correcta: "
          }
        ]
      },
      {
        "type": "img",
        "node": segregation2
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
        "node": "Con este principio garantizamos que las principales entidades de la aplicación permanezcan desacopladas de los componentes encargados de suministrar los detalles. Lo que en la práctica significa que cambios en la capa de detalles o de bajo nivel no induce a errores o perdida de rendimiento, porque no afecta a la capa superior. Entiéndase como componentes de bajo nivel, a aquellos que suministran los detalles, pero sobre todo aquellos que no contienen dependencias"
      },
      {
        "type": "p",
        "node": "Este principio se salda (la de evitar el acoplamiento entre componentes) con la implementación de abstracciones o interfaces. Por lo que aplicarlo con Javascript puro es distinto de lo que haríamos si lo hacemos con Typescript"
      },
      {
        "type": "p",
        "node": "La comunicación entre los componentes del sistema depende de interfaces no de componentes con funcionalidad concreta. Ahora las entidades, como podría ser una encargada de la conexión con una base de datos no debería causar estragos si las conexiones de otras entidades a ésta se realiza mediante interfaces. Así es evidente que la aplicación permanece desacoplada y ahora es posible modificar el gestor encargado del almacenamiento de datos de MongoDB a MySQL sin causar ningún problema al funcionamiento de la aplicación."
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
            "node": "<li>Una buena práctica es tener en cuenta las pruebas unitarias desde la creación del código, un buen código las hará más sencillas</li><li>En general un método con más de 10 líneas de código debe hacernos pensar en la existencia del mismo</li><li>Utilizar demasiados valores en datos primitivos, puede generar un código innecesariamente grande. Es importante analizar a que campo semántico pertenecerían los similares para agruparlos en objetos, clases, módulos, etc.</li><li>Tener una larga lista de parámetros también es una mala práctica</li><li>Hacer clases, funciones o módulos que sepan lo menos posible de otros métodos, módulos o elementos es una buena práctica y ayuda mucho al testing.</li><li>Si identificamos una cadena de mensajes (información que pasa de A a D pero pasando por B y C) estamos haciendo código acoplado. En la medida de lo posible debemos intentar las posibilidades de pasarlo de A a D sin intermediarios.</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos útiles:</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa\">S.O.L.I.D. Article from Medium</a></li><li><a href=\"https://hackernoon.com/understanding-solid-principles-in-javascript-w1cx3yrv\">Understanding SOLID Principles in JavaScript</a></li><li><a href=\"https://dev.to/denisveleaev/5-solid-principles-with-javascript-how-to-make-your-code-solid-1kl5\">How to make your code SOLID</a></li><li><a href=\"https://www.solidjs.com/guides/getting-started#aprende-solid\">SOLID JS</a></li>"
          }
        ]
      },
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
