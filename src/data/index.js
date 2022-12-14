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
import liskovPrinciple3 from '../assets/imgs/skill-cards/solid/liskov-principle-3.png';
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
import tsMainImg from '../assets/imgs/skill-cards/detail-topics/typescript-overview.png';

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
    "title": "Typescript overview",
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
        "node": "Para algunos, me incluyo, implementar Typescript puede resultar dif??cil; sobre todo si la mayor parte de nuestros desarrollos han estado gestionados con el Javascript de toda la vida, es decir din??mico. Pero como buenos desarrolladores debemos saber que nuestro camino es la mejora constante y sabemos que somos mejores cuando nuestro flujo de trabajo es beneficioso en cuanto a tiempo, escalabilidad, legibilidad y mantenimiento."
      },
      {
        "type": "p",
        "node": "A continuaci??n, voy a tratar de abordar el panorama general al que nos iremos enfrentando al decidir trabajar con Typescript, a partir de ahora TS. Y por ello empezar?? hablando de las ventajas, aunque tampoco dejar?? de hablar de las dificultades y dolores de cabeza a los que nos enfrentaremos."
      },
      {
        "type": "h4",
        "node": "Ventajas de la popularidad"
      },
      {
        "type": "p",
        "node": "Hoy en d??a las m??s respetables librer??as y frameworks ( MaterialUI, Redux, React Router, Node, etc ) implementan TS, lo que nos ayuda mejorar la legibilidad de las funciones y propiedades tipadas al momento de utilizarlas. ??Qu?? significa esto? que en caso de tener dudas del tipo de argumentos o salida de una funci??n incorporada no tenemos que ir a su definici??n para poder implementarla correctamente, el intellisense de IDE, nos ayudar?? en esta tarea. Podemos ver en tiempo de desarrollo la firma, usar el autocompletado autom??tico, visualizar errores de transpilaci??n, entre otras cosas."
      },
      {
        "type": "p",
        "node": "Y hablando de popularidad no hay que dejar de mencionar que es precisamente la amplia difusi??n lo que deja ver signos de ??xito. En el desarrollo tecnol??gico no ser?? la regla, pero si una ventaja en cuanto a soporte se refiere. El punto es que la popularidad proporciona soporte por una comunidad cada vez m??s amplia, lo que a su vez nos da acceso a herramientas cada vez m??s eficientes, como lo es el ventajoso uso del intellisense."
      },
      {
        "type": "p",
        "node": "Los desarrollos son entes org??nicos digitales. Podemos pensar en ellos como entidades con un ciclo de vida propio, desde el desarrollo de las ideas hasta la entrega del producto, con un rendimiento adecuado a las necesidades de cliente. En este sentido tenemos que ver la refactorizaci??n de c??digo como una etapa m??s del desarrollo, como un c??digo m??s tolerante a cambios y que las herramientas que nos ayudan a facilitar esta tarea siempre ser??n bien recibidas. As?? es como encontramos una ventaja m??s al utilizar TS, ya que este es especialmente relevante en cuanto al acceso a los tipos de las variables que utilizamos."
      },
      {
        "type": "p",
        "node": "La mantenibilidad mejorar?? en medida que aprendamos a manejar todas las posibilidades de esta herramienta. Usar types o interfaces, enums y gen??ricos ayuda a consolidar la estructura y evitar malas pr??cticas como el temido acoplamiento y la baja cohesi??n de la aplicaci??n."
      },
      {
        "type": "h4",
        "node": "M??s desaf??os que desventajas"
      },
      {
        "type": "p",
        "node": "Nada escapa a la ley de los opuestos y en tecnolog??a si sabemos que es bueno para escalabilidad y mantenimiento algo de malo ha de tener, pues desde mi punto de vista estos son los aspectos negativos al desarrollar con TS:"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Curva de aprendizaje</strong> Aparentemente su aprendizaje puede ser sencillo, pero nada m??s lejos de la realidad. El set de herramientas de TS es amplio y en muchas ocasiones los mensajes de error son cr??pticos o lo que es lo mismo: dif??ciles de leer. Hay que tener paciencia y perseverancia, practicar lo f??cil pero despejar las dudas. Si evidentemente estamos en el desarrollo de una aplicaci??n, basada en tiempos, como lo es con todos los desarrollos, la curva de aprendizaje ser?? la principal desventaja."
          }
        ],
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Pruebas unitarias:</strong> Por si mismas las pruebas unitarias tienen una curva de aprendizaje, su desarrollo tambi??n es particular y acatado a ciertas normas. Hacerlo con TS implica mayor atenci??n al detalle. Sin embargo, desde mi punto de vista representa un problema cuando tenemos que acatar cierto porcentaje de cobertura, trabajarlas desde TS puede aumentar la complejidad a la hora de implementar las pruebas."
          }
        ],
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "Typescript provee un sistema opcional de tipos (Type system) que permite escribir c??digo escalable. Es decir, permite escribir c??digo f??cil de depurar y mantener. Lo que da un mejor sentido en proyectos medianos o grandes. Siempre se va agradecer que un proyecto heredado se haya escrito con la mayor de las entregas posibles y por lo que entiendo, typescript te ayuda a eso."
      },
      {
        "type": "p",
        "node": "En cuanto a las partes duras o dif??ciles, hay que verlo como reto, as?? lo solventaremos mejor, y eso nos har?? resilentes y al final lograremos obtener una preciada herramienta cada vez m??s imprescindible." 
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de inter??s</strong>"
            
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://www.typescriptlang.org/docs/\">Documentaci??n de typescript</a></li><li><a href=\"https://dev.to/hiro9108/javascript-vs-typescript-why-we-should-learn-typescript-4d5o\">Dev.io Communuty</a></li><li><a href=\"https://www.iamdeveloper.com/vscodetips/2022/may-2nd-2022-vs-code-tip-of-the-week-2l6m/\">Typescript resourse to VSC</a></li><li><a href=\"https://www.typescriptlang.org/cheatsheets\">Cheatsheets to typescript</a></li><li><a href=\"https://dev.to/nickytonline/learning-resources-for-typescript-4g1n\">Learning resources for Typescript</a></li>"
            
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
            "node": "Trabajar con librer??as y frameworks es muy beneficioso para solventar los tiempos de entrega, sin embargo, requiere siempre del riguroso sometimiento a la curva de aprendizaje. El tiempo para adquirir los conocimientos depende de la complejidad de la librer??a, su documentaci??n (dicho sea de paso, la ducumentaci??n de MUI es simplemente excelente), el soporte y muchos otros factores. En el presente art??culo presento un panorama general sobre c??mo es trabajar con la librer??a estrella de React <strong>Material UI</strong> (desde mi punto de vista) , escrita tanto para desarrollos con JS plano como TS."
          }
        ]
      },
      {
        "type": "p",
        "node": "Como desarrollador mi primer acercamiento a esta librer??a fue algo intimidante, ver tantas secciones, tantos componentes y diferentes formas de personalizarlos era en definitiva un reto. Por otra parte, los componentes est??n listos para llevarse a producci??n y lo hay de todo, sliders, tooltip, layouts (cabe destacar que la estructura est?? implementada con flexbox), tipograf??a, o componentes avanzados como tablas din??micas, sliders, acordeones, de todo. A cualquiera le entran ganas de utilizarlo. Pero no es tan sencillo, si a??n no se est?? tan familiarizado con las estructuras JSX, aconsejo para el desarrollador front react que est?? comenzando, intente soportar sus primeras aplicaciones con JSX y dise??os personalizado, para conocer de primera mano c??mo se trasmite la informaci??n desde el componente que contiene la l??gica hasta su representaci??n, pasando por las reglas sint??cticas de JSX."
      },
      {
        "type": "h4",
        "node": "Configuraci??n inicial"
      },
      {
        "type": "p",
        "node": "Primero la instalaci??n de las dependencias:"
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
            "node": "Adem??s de mui se instala <a href='https://github.com/emotion-js/emotionemotion'>emotion</a>, debido m??s que nada a la interoperabilidad que permite material para estilizar los componentes de m??ltiples maneras. Emotion proporciona una manera muy eficiente en cuanto a composici??n de estilos, adem??s de admitir diferentes sintaxis con las que es posible llevar nuestro CSS al siguiente nivel."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Una vez realizada la instalaci??n estamos listos para configurar el tema. La posibilidad que proporciona MUI para personalizar el aspecto visual de los componentes en general. T??pico muy importante que no podemos descartar en estos <strong>primeros pasos</strong>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Personalizaci??n del tema en MUI"
      },
      {
        "type": "p",
        "node": "Un tema en Material UI es simplemente un objeto que espec??fica los valores de estilo tales como el color de fondo de los componentes, la opacidad, sombras, tama??os de fuentes, jerarqu??a de colores y m??s. Este objeto est?? configurado por defecto por lo que los nombres de propiedad son arbitrarios, si queremos modificar la apariencia de un componente tenemos que invocar este objeto y sobrescribir sus valores, y lo podemos hacer de forma global o de forma aislada y encapsulada en cada componente. Lo m??s recomendable es trabajar este objeto en su propio archivo:"
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
        "node": "Con esta configuraci??n inicial ThemeProvider ahora proporciona ese objeto si es que lo estamos configurando de forma global, si no es as?? proporcionar?? el objeto por defecto con el nombre theme desde cualquier componente descendiente en la jerarqu??a de componentes."
      },
      {
        "type": "code",
        "node": "import { createStyles, makeStyles} from '@material-ui/styles'"
      },
      {
        "type": "p",
        "node": "Seg??n la documentaci??n, createStyles realmente no hace nada, simplemente act??a como una funci??n de identidad para pasar sus estilos. makeStyles, por otro lado, vincula una hoja de estilo a un componente de funci??n utilizando un hook para ello."
      },
      {
        "type": "p",
        "node": "Ahora ya todo est?? listo para sobrescribir todas las propiedades del tema definidas por el propio MUI. Hay que hacer ??nfasis que las propiedades del objeto theme tambi??n pueden ser funciones por lo que para crear el nuevo estilo basta con pasarle los argumentos necesarios. A continuaci??n, vemos un ejemplo de sobrescritura del relleno inferior del componente Container:"
      },
      {
        "type": "img",
        "node": mui3,
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "Como mencion?? al inicio MUI es inmenso en este art??culo s??lo toco el contenido de forma muy superficial. Es la iniciativa de cada uno lo que nos lleva al siguiente nivel. Espero seguir editando y agregando t??picos a este tema que por lejos est?? por agotarse y tambi??n lejos estoy de dejarlo de utilizar. Tal vez agregue temas m??s avanzado o reedite este post conforme vaya avanzando."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos ??tiles:</strong>"
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
        "node": "A continuaci??n, realizo un acercamiento a los principales patrones de dise??o de componentes de React. Algunos de los patrones de dise??o de React m??s son m??s populares porque son eficientes para preocupaciones transversales, el intercambio de datos globales (sin props dilling), la separaci??n de responsabilidades como la l??gica de estado compleja de otros componentes, la extensi??n de estilos, composici??n y otros."
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
            "node": "<strong>Qu?? problema resuelve: </strong><em>el encapsulamiento de la l??gica de estado principalmente</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "B??sicamente es una funci??n JS con l??gica aislada para ser reutilizable por otros componentes. Por convenci??n la identificamos con el prefijo use. "
      },
      {
        "type": "p",
        "node": "Favorecen el mantenimiento de la aplicaci??n al mantener la responsabilidad de cada parte dentro de funciones muy espec??ficas"
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
            "node": "<li>Favorecen el mantenimiento de la aplicaci??n al mantener la responsabilidad de cada parte dentro de funciones muy espec??ficas</li><li>Es m??s f??cil testear la aplicaci??n ya que se encuentra delegada.</li><li>La abstracci??n del estado compartido entre componentes es m??s f??cil de gestionar en contraposici??n con el uso de redux u otro patr??n basado en clases como un Hight Order Component (HOC)</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": "B??sicamente mientras tengamos l??gica de estado es posible aislar su l??gica en un hook. A continuaci??n, un ejemplo de un hook \"toogle\" y su implementaci??n desde el componente:"
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
        "node": "Patr??n de composici??n"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Que problema resuelve: </strong><em>En muchas ocasiones algunos componentes requieren saber el estado o los cambios de estado de otros adyacentes o m??s lejanos en el ??rbol de componentes pero visibles en la misma interfaz. Este patr??n aprovecha al m??ximo la composici??n para que podamos implementar componentes muy flexibles que comparten un estado com??n, pero haciendo que se comuniquen internamente sin necesidad de pasar props (props drilling).</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "Los elementos de la UI deben compartir un estado en com??n y al mismo tiempo dar la flexibilidad suficiente para modificar estructuras de la UI. Este patr??n nos permite manejar la informaci??n desde un componente padre y tener control total sobre los componentes hijos. A continuaci??n, el aspecto que tiene el componente proveedor y sus hijos consumidores"
      },
      {
        "type": "img",
        "node": compoundComponentPattern1,
      },
      {
        "type": "p",
        "node": "El componente ProductCard, es el encargado de proveer informaci??n a todos sus descendientes. ??ste a trav??s de API Context devuelve los valores esperados por sus componentes hijos"
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
            "node": "El componente consumidor, en este caso el componente <strong>ProductImage</strong> se conecta con a su proveedor a trav??s de <code>useContext()</code> y mediante desestructuraci??n se accede a los valores requeridos"
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
            "node": "Omito el c??digo para los componentes <strong><ProductTitle /></strong> y <strong><ProductBottons /></strong> debido a que el procedimiento para acceder a los datos de su proveedor es el mismo. Es decir se conectan mediante <code>useContext()</code> y utilizan los valores como es requerido. Como podemos ver este patr??n nos abre una gran variedad de posibilidades para construir componentes reutilizables e incluso librer??as personalizadas (as?? est?? por ejemplo <strong>React Router</strong>) con la m??xima flexibilidad posible."
          }
        ]
      },




      {
        "type": "h4",
        "node": "Patr??n provider e inversi??n de control de estado"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Qu?? problema resuelve: </strong><em>Este patr??n de dise??o permite ofrecer al usuario (desarrollador), mayor control sobre la actualizaci??n de estado del componente, permiti??ndole acceder al estado interno y aplicar diferentes actualizaciones de estado</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "El patr??n <strong>provider</strong> en React es un patr??n avanzado que se utiliza para gestionar estados m??s complejos. Busca delegar el control de estado a una funci??n reductora. Actualmente en aplicaciones de react m??s modernas se gestiona a partir de <code>useReducer(reducer, initialState)</code> que devuelve un array de 2 posiciones, siendo la primera la que contiene el estado actualizado; mientras que la segunda devuelve la funci??n dispatch, encargada de actualizar ese estado."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "La actualizaci??n de estado se delega a una funci??n reductora pura.  Como se menciona en el p??rrafo anterior react proporciona el hook incorporado: <code>useReduce()</code> que recibe como primer argumento la funci??n reductora y como segundo el estado actual:" 
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
        "node": "La funci??n dispatch recibe el action creator y ??ste por debajo invoca la funci??n reductora, para que actualice el nuevo valor del estado."
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
            "node": "En el ejemplo anterior un custom hook controla la l??gica de actualizacion de estado mediante useReducer. La actualizaci??n de estado est?? completamente en manos del hook, aqui  llamado <code>usePlayerReducer()</code> con la l??gica que implica la llamada a useReducer(); necesitamos aportar mayor flexibilidad e invertir el control de estado, para que sea responsabilidad del componente que utiliza este hook."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Para lograrlo debemos pasar una funci??n que suplante la llamada de la funci??n reductora utilizada por el custom hook. Hacer los cambios de estado que la l??gica del componente demande en la funci??n que se le pasar?? a <code>usePlayerReducer()</code> y de esa manera invertir control de estado a manos del componente. Y modificar el <code>usePlayerReducer()</code> para que este listo y pueda recibir el objeto con la funci??n reductora personalizada en el lado del componente:"
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
        "node": "Cada vez que se requiera pasar el control de estado al custom hook lo hacemos desde el componente que lo requiera mediante el env??o de un objeto que contenga la funci??n reductora personalizada."
      },



      {
        "type": "h4",
        "node": "Patr??n Control Props"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Qu?? problema resuelve:</strong> <em>El poder gestionar el estado interno de nuestro componente desde el exterior. Generalmente desde el componente contenedor. Lo que tambi??n permite sobrescribir el estado por defecto que tenga el hijo.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": "Un componente controlado usa props para obtener su valor actual y mediante un callback notifica los cambios al padre. Al procesar el callback, en el padre (administrador de estado de su hijo) ??ste entrega los valores actualizados como props al componente hijo."
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
        "node": "Esta es la forma m??s simple de implementar este patr??n, pero la forma recomendada es dejar un gestor de estado internamente por default en caso de no controlar el componente desde el padre."
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
            "node": "<strong>Que problema resuelve: </strong> <em>delegar la responsabilidad del renderizado del componente a un prop de tipo funci??n. Es permite definir diferente l??gica de renderizado, desde un componente contenedor.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Con este patr??n podemos cumplir con el <strong>Open and Close principle</strong> ya que al estar delegada la responsabilidad del render en el padre, no ser?? necesario modificar la presentaci??n del componente en la UI, cada que necesitemos modificar la UI. Por otro lado, debemos cuidar de no caer en el antipatr??n de anidar la prop de renderizado entre componentes ya que agrega complejidad al c??digo."
          }
        ]
      },
      {
        "type": "p",
        "node": "Pensemos por ejemplo en un componente que nos ayude a gestionar los mensajes de error mientras se est?? en tiempo de desarrollo. Este mensaje ser?? diferente seg??n la secci??n en la que nos encontremos. Por lo que tenemos diferentes UI. A continuaci??n, un ejemplo del componente ErrorBoundary sin alternativas para renderizar un mensaje personalizado desde el padre: "
      },
      {
        "type": "img",
        "node": renderProps1,
      },
      {
        "type": "p",
        "node": "Para pasar una prop con la l??gica del renderizado o con la informaci??n necesaria para mostrar diferentes mensajes de error. Necesitamos preparar nuestro componente hijo y configurar el render prop en el padre: "
      },
      {
        "type": "img",
        "node": renderProps2,
      },
      {
        "type": "p",
        "node": "Una vez preparado el padre para enviar prop render de tipo funci??n el componente hijo tendr??a el siguiente aspecto, para renderizar un mensaje por defecto o el que el contenedor decida, si es que lo env??a"
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
            "node": "<strong>Qu?? problema resuelve:</strong> <em>la necesidad de personalizar nuestros componentes de forma seg??n el contexto en el que se encuentren. Por ejemplo, un bot??n puede utilizarse para una acci??n de cancelar el env??o de un formulario o por el contrario llevarlo a cabo, y s??lo distinguirlo en la interfaz de usuario mediante los estilos; con un color de fondo que sea relevante o carente para la cancelaci??n.</em>"
          } 
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Por mucho, el patr??n m??s sencillo de implementar, (junto con  <strong>state initializer</strong>). Algunos frameworks para componentes como MUI lo implementan en todos sus componentes. Este patr??n proporciona la alternativa para modificar el aspecto visual de los componentes a trav??s de props, donde podremos asignar tanto objetos, para crear reglas para estilos en l??nea o nombres de clase."
          }
        ]
      },
      {
        "type": "p",
        "node": "Las ventajas de este patr??n es que permite la reutilizaci??n de componentes. Y cumple con el principio SOLID Open Close Principle- Donde la funci??n en este caso el componente queda abierto a su extensi??n, pero cerrado a su modificaci??n"
      },



      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "Utilizar los patrones de dise??o en react nos permiten reducir el tiempo de desarrollo ya que aprovechamos esquemas de soluci??n a problemas comunes, aplicados y probados por muchos desarrolladores de react y al mismo tiempo mejoramos la calidad del software en el proceso."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de inter??s</strong>"
            
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
        "node": "En general el estudio de modelo de caja en css puede ser tedioso, no podemos simplemente comprenderlo si no acatamos primero la teor??a. Detr??s de todo el aspecto de cada uno de los elementos dentro de una p??gina web tiene su base l??gica explicativa, y detr??s de ello comprensi??n del por qu?? de ciertos comportamientos. En este art??culo trato de dilucidar de forma general pero con intensi??n de ser conciso el modelo de caja para lograr sacar ventaja y hacer nuestro css m??s predecible."
      },
      {
        "type": "p",
        "node": "Hay que pensar en los elementos html de la interfaz en su forma m??s b??sica como meras cajas, formas de rectangulares con l??mites superior, inferior y lados, definido su ancho y alto por el tama??o de su contenido."
      },
      {
        "type": "p",
        "node": "Las cajas tienen un comportamiento diferente seg??n su display, sus dimensiones establecidas (width y height) y el contenido que vive dentro de ellas. Pensemos primero que para hablar de un tama??o intr??nseco  la anchura debe depender expl??citamente del contenido y no de una anchura arbitraria definida con width"
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
            "node": "En esta imagen izquierda podemos visualizar claramente los efectos del modelo de caja cuando su anchura es fija y cuando la mantenemos por defecto (sin width) o con la propiedad <strong>min-width</strong>. Esta propiedad le dice a la caja que sea tan ancha como el ancho m??nimo intr??nseco de su contenido (la palabra \"awesome\"). Lo que permite que la caja se ajuste perfectamente a \"CSS is awesome\"."
          }
        ]
      },
      {
        "type": "p",
        "node": "Una vez m??s por las dudas, cuando la caja usa un tama??o arbitrario, hay un l??mite de la cantidad de contenido que se puede agregar antes de que se desborde de los l??mites establecidos. Estas dimensiones dan l??mites estrictos a todo lo que se encuentre adentro del elemento, que se respetar?? a menos que el contenido sea demasiado grande para la caja, en cuyo caso se producir?? un desbordamiento visible."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong><em>Nota: </em></strong>Puedes definir c??mo un elemento maneja el contenido de desbordamiento, utilizando la propiedad de overflow."
          }
        ]
      },
      {
        "type": "h4",
        "node": "De que est?? compuesto el modelo de caja:"
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
            "node": "El modelo de caja comienza por el ??rea que ocupa el contenido, que como hemos visto anteriormente suele ser el ??rea de tama??o m??s variable. A continuaci??n, contamos con el relleno o \"padding\" que rodea la caja de contenido. Si nuestra caja tiene reglas de desbordamiento establecidas, como <strong>overflow: auto</strong> o <strong>overflow: scroll</strong>, las barras de desplazamiento ocupar??n este espacio tambi??n. Lo siguiente es la caja de borde ??sta rodea la caja de padding y su espacio est?? ocupado por el valor del border. Y finalmente, nos encontramos con la caja de margen. Propiedades como el <strong>outline</strong> y <strong>box-shadow</strong> ocupan este espacio porque est??n pintadas por encima de los elementos, por lo que no afectan el tama??o de nuestra caja. Puedes tener un <strong>outline-width</strong> de 200px en nuestra caja y todo lo que est?? dentro e incluido la caja de borde ser??a exactamente del mismo tama??o."
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
            "node": "<strong>M??rgenes:</strong> Un punto clave a la hora de entender los m??rgenes es el concepto de <strong>colapso del margen</strong>. Si tienes dos elementos cuyos m??rgenes se tocan, esos m??rgenes se combinan para convertirse en un s??lo margen, cuyo tama??o es el del margen m??s grande."
          }
        ]
      },
      {
        "type": "p",
        "node": "Pensemos por ejemplo en dos elementos de p??rrafo, donde cada uno de ellos ocupa el ancho total de su contenedor. El primer p??rrafo, tiene un margen inferior de 30px y el segundo un margen superior de 20px. El colapso de sus m??rgenes har?? que ??nicamente el margen con mayor cantidad de pixeles sea la distancia entre los 2 elementos y no sea la suma de estos. El concepto de colapso del margen es otra parte m??s del modelo de caja"
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
            "node": "<strong>Padding:</strong> El relleno se encuentra entre el borde y el ??rea de contenido. A diferencia de los m??rgenes, el relleno no puede tomar valores negativos, por lo que el valor debe ser 0 o positivo. Cualquier fondo aplicado al elemento se mostrar?? detr??s del ??rea de relleno y, generalmente, se usa para mantener el contenido alejado del borde."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Propiedad display en elementos en l??nea y de bloque:</strong> El modelo de caja tiene un comportamiento distinto si se trata de elementos en l??nea o elementos de bloque. Para los elementos en l??nea no se respeta un ancho o altura fija; en cambio para los elementos de bloque si. Los elementos de bloque provocan un salto de l??nea, los elementos inline no. Sin embargo, podemos utilizar la propiedad especial: <strong>display: inline-block</strong> para agregar un comportamiento m??s flexible a los elementos en l??nea"
          }
        ]
      },
      {
        "type": "p",
        "node": "La propiedad inline-block hace que el elemento de l??nea se comporte como uno de bloque, respeta as?? las definiciones para ancho y alto. El relleno, el margen y el borde mantiene alejado a los otros elementos de la caja y lo m??s importante no genera un salto en l??nea entre los elementos colindantes."
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "El modelo de caja puede ser complicado de comprender si no se practica lo suficiente, hay muchos factores que afectan su correcto funcionamiento, desde la hoja de estilo por defecto del navegador hasta las propiedades css que lo controlan. Sin olvidar las variaciones de comportamiento ante el tama??o intr??nseco o arbitrario de la caja de contenido o del tipo inline o block del elemento que tratamos. Alcanzar a generar un css predecible toma tiempo, pero una vez comprendido mucho aspectos generales del dise??o web son despejados."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Links de inter??s</strong>"
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
            "node": "<strong>Importante:</strong> Los conceptos son generales y aplican para cualquier aplicaci??n escrita en x lenguaje, sin embargo, los c??digos aqu?? presentados son part??cularmente utilizados para testear una aplicaci??n desarrollada con react.",
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
            "node": "Para comenzar siempre es importante dar una atenta le??da al <strong>get started</strong> del recurso en cuesti??n, es este caso de jest, aqu??: <a href='https://jestjs.io/docs/getting-started'><em>Jest Getting Started</em></a>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Igualmente, para todos los desarrolladores involucrados la creaci??n de pruebas unitarias es muy favorable comenzar con la autom??tizaci??n del proceso de ejecuci??n, es muy pesado andar ejecutando comandos repetitivos una y otra vez, cuando se puede ejecutar uno que se mantenga a la escucha de cambios, aqu?? el de jest: "
      },
      {
        "type": "code",
        "node": "jest --watchAll"
      },
      {
        "type": "p",
        "node": "No olvides instalar la dependencia de jest en Vite, y por supuesto la librer??a de testing para react, yo lo hago con yarn:"
      },
      {
        "type": "code",
        "node": "yarn add jest @testing-library/react"
      },
      {
        "type": "p",
        "node": "Otra cuesti??n de ayuda muy importante para el desarrollo hoy en d??a lo proporcionan las IDE's, la m??s importante hoy en d??a por mucho es Visual Studio Code, con ayuda de su intellisense tenemos acceso a m??todos y propiedades de la librer??a de jest de forma predictiva, para ello basta con escribir las primeras letras para que nos sugiera alg??n autocompletado, sin embargo, no es autom??tico; hay que instalar los tipos de Jest con el siguiente comando:"
      },
      {
        "type": "code",
        "node": "yarn add ???D @types/jest"
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Algo m??s que nos puede ayudar a mejorar el flujo de trabajo y hacerlo m??s r??pido y eficiente, es aislar las pruebas por componente trabajado. Ya que si se estamos en modo ???observador??? cada cambio involucra todo el conjunto de pruebas que viven dentro de la carpeta test, lo que significa que ejecutar?? todo el proyecto por cada cambio, ??ineficiente no es as??? Jest, a trav??s de la L??nea de comandos nos ofrece la soluci??n: despu??s de realizar alg??n cambio en el archivo a trabajar, presionar la letra <strong>w</strong>, estando en el CLI y a continuaci??n la letra <strong>p</strong> lo que nos permitir?? escribir el t??tulo del archivo y ejecutar ??nicamente ese test. El realizar esta acci??n mantiene a Jest escuchando cambios en ese archivo; cu??ndo necesitemos pasar a otro archivo o componente realizamos el mismo procedimiento y listo."
          }
        ]
      },
      {
        "type": "h4",
        "node": "Recomendaciones y buenas pr??cticas al realizar pruebas unitarias:"
      },
      {
        "type": "p",
        "node": "A continuaci??n, una peque??a lista con algunas recomendaciones para realizar las pruebas unitarias:"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Es recomendable trabajar con el Snapshot s??lo cuando se tiene el producto final y no en tiempo de desarrollo ya que los constantes cambios al componente provocan una actualizaci??n continua.</li><li>De la misma manera hay que buscar que las pruebas verifiquen lo que se necesita pero que al mismo tiempo sean flexibles. Es decir, probar la existencia de valores en un arreglo podr??a indicar la conexi??n exitosa a un backend y no esperar la longitud de un arreglo espec??fico</li><li>Vale la pena darse un tiempo para analizar la ruta cr??tica de una funcionalidad o de la aplicaci??n; lo que en la pr??ctica ayudar??a a evitar perder tiempo en acciones dependientes de la alguna funcionalidad dentro de la <strong>ruta cr??tica</strong></li><li>Para hacer las pruebas unitarias m??s eficientes es muy importante analizar el c??digo y tener claro que se espera haga; si se reciben props de tipo funci??n que se espera que hagan, si se reciben argumentos en una funci??n que se espera resuelva, etc</li><li>Hay que verificar que pruebas son aplicables a un componente, o funci??n, ya que hay tareas que no corresponden al correcto funcionamiento de un components, como podr??a ser la actualizaci??n de un estado ya sea mediante un useState, un reducer, o cualquier otra funci??n que podr??a comprobarse por aparte</li><li>Si alguno de los nombres de directorios de la suite de test coincide con otro directorio de la aplicaci??n que no requiera de test, como puede ser una carpeta mock, es buena pr??ctica nombrarla __mocks__</li><li>Utilizar <em>react-testing-library</em> hace m??s eficiente las evaluaciones del renderizado de react. Aunado a esto podemos prescindir de utilizar los objetos devueltos por ???render??? (getByText, container..,) y gestionarlos con la funci??n <strong>screen</strong>; un m??todo importado por testing-library que permite almacenar el objeto generado por la funci??n <strong>render.</strong></li><li>Utilizar la funci??n <strong>debug()</strong> para visualizar en la terminal como luce el objeto de pruebas en el DOM. Es parecido console.log(), pero enfocado al DOM</li>"
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
        "node": "Hoy en d??a es muy dif??cil encontrar desarrollos front de react que inicialmente implementen una infrasestructura basada en clases. La l??gica se encuentra encapsulada a partir de la versi??n 16.8 en lo que conocemos como hooks, pero.., como testearlos? ",
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Los hooks son funciones, hay que verificar que el argumento recibido se utiliza para devolver lo esperado. Por lo tanto, para lograr esto debemos apoyarnos de <strong>renderHook</strong> funci??n proporcionada por <strong>testing-library</strong>. Debemos pasar el custom hook en el cuerpo del callback, asignado como el primer argumento de la funci??n renderHook. El resultado se almacena en un objeto llamado: <strong>result.current</strong>"
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
            "node": "Si queremos configurar nuestro <strong>jest.config</strong> como un m??dulo de CommonJS por ejemplo: exportarlo con la sintaxis: <strong>module.exports = {}</strong>, hay que prescindir la propiedad type con el valor module: <strong>type:module</strong> del archivo package json."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "Podemos hacer importaciones globales dentro del archivo de configuraci??n de <strong>jest.setup</strong>, como en el caso de el import de la dependencia <strong>setimmediate</strong>"
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
        "node": "Para evitar agregar archivos de terceros (como puede ser el caso de las dependencias de firebase para trabajar con su m??dulo de autenticaci??n) es importante agregar la siguiente opci??n al objeto de configuraci??n de Jest: "
      },
      {
        "type": "code",
        "node": "transformIgnorePatterns: []"
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "En mi reciente experiencia al trabajar con Vite, en lo que a pruebas unitarias se refiere puede ser costoso configurar desde cero el set, hay que tener en cuenta que esta aplicaci??n de utilidad est?? realizada para ser personalizada a la medida y muchas configuraciones no vienen escritas por defecto; hay que investigar y muchas otras veces trabajar con prueba y error, por lo tanto, es menester contar con un post relacionado que nos ayude a realizar esta tarea de forma m??s clara y expl??cita. Sin m??s tengo que decir que este post regularmente lo estar?? actualizando con nueva informaci??n relacionada a la configuraci??n y optimizaci??n de las pruebas unitarias dentro de Vite."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos ??tiles:</strong>"
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
        "node": "En el mundo de desarrollo web las APIs son esenciales para enriquecer las aplicaciones, ??stas nutren las interfaces con informaci??n interactiva para el usuario final. Permiten entre un mundo de posibilidades actualizar, borrar informaci??n o crear posts para personalizar un m??dulo de usuario, o afianzar la seguridad de la aplicaci??n al gestionar la autenticaci??n de alg??n usuario. El backend como el frontend puede manejarse con distintas infraestructuras y pr??cticamente aseguran lo mismo."
      },
      {
        "type": "h4",
        "node": "C??digos de estado establecidos de forma correcta"
      },
      {
        "type": "p",
        "node": "Cada que el cliente (solicitante) env??a una petici??n al servidor, es procesado por el mismo para luego devolver los recursos relevantes junto con los encabezados HTTP"
      },
      {
        "type": "p",
        "node": "Los c??digos de estado de HTTP se entregan a tu navegador en el encabezado de HTTP. Aunque los c??digos de estado se devuelven cada vez que el navegador solicita una p??gina web o un recurso, la mayor??a de las veces no los ves."
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><strong>100s: </strong>C??digos informativos que indican que la solicitud iniciada por el navegador contin??a.</li><li><strong>200s: </strong>Los c??digos con ??xito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.</li><li><strong>300s: </strong>C??digos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.</li><li><strong>400s: </strong>C??digos de error del cliente que indican que hubo un problema con la solicitud.</li><li><strong>500s: </strong>C??digos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidi?? que se cumpliera.</li>",
          }
        ]
      },
      {
        "type": "p",
        "node": "Dentro de cada una de estas tipos, existe una variedad de c??digos de servidor y pueden ser devueltos por el servidor. Cada c??digo individual tiene un significado espec??fico y ??nico, que cubriremos en la lista m??s detallada a continuaci??n."
      },
      {
        "type": "p",
        "node": "Los c??digos de estado HTTP se dividen en 5 ??tipos??. Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qu?? son puede ayudarte a determinar r??pidamente la sustancia general de un c??digo de estado antes de que vayas a buscar su significado espec??fico."
      },
      {
        "type": "p",
        "node": "Finalmente, una vez comprendido la operaci??n realizada, hay que devolver el resultado adecuado seg??n sea decida la l??gica. A continuaci??n, los tipos de respuesta que puede mandar el servidor al cliente al ejecutar una acci??n de eliminado."
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
        "node": "Cuando un desarrollador piensa en la documentaci??n de la API, lo m??s probable es que visualice una referencia completa. Este es solo un tipo de documentaci??n, pero es importante. Aqu?? encontrar?? una lista de puntos finales de la API, qu?? campos de solicitud y respuesta est??n disponibles y c??mo autenticarse con la API. Todas estas son partes muy importantes de la integraci??n con su API."
      },
      {
        "type": "p",
        "node": "El mejor lugar para comenzar a generar una referencia de API de forma automatizada despu??s de configurar, son OpenAPI, Swagger o RAML. Estas aplicaciones permiten describir los endpoints de la API, configurar encabezados, realizar procesos de autenticaci??n y otros mecanismos de interacci??n"
      },
      {
        "type": "p",
        "node": "En su forma m??s simple, una buena documentaci??n de API puede mostrar respuestas de ejemplo. Los datos que se devuelven de una API son al menos tan importantes como la forma en que realiza las llamadas."
      },
      {
        "type": "p",
        "node": "Cuando un desarrollador puede ver qu?? esperar, puede predecir mejor c??mo podr??a integrarse con una API sin hacer llamadas en vivo. Dicho esto, mostrar los documentos API puede ir m??s all?? del contenido est??tico. La documentaci??n interactiva es una opci??n que incluso permite ver respuestas simuladas o en vivo p generar codigo fuente en lenguajes populares. "
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
            "node": "<li>Ya es un buen de tiempo que se pueden responder solicitudes mediante estructuras JSON sin instalar librer??as de terceros. Ya esta incorporado en express <code>express.json()</code></li><li>Las acciones GET, PUT, DELETE, HEAD y PATCH deben ser idempotentes. La misma solicitud repetida en el mismo recurso debe dar como resultado el mismo estado. Por ejemplo, enviar varias solicitudes DELETE para el mismo URI debe tener el mismo efecto, aunque el c??digo de estado HTTP en los mensajes de respuesta sea diferente. La primera solicitud DELETE podr??a devolver el c??digo de estado 204 (sin contenido), mientras que una solicitud DELETE posterior podr??a devolver el c??digo de estado 404 (no encontrado) </li><li>El m??todo PUT es idempotente en HTTP lo que significa que producir?? el mismo resultado si se ejecuta varias veces. El m??todo POST no es idempotente, ya que si se ejecuta varias veces est?? creando varios elementos.</li><li>La diferencia entre el m??todo HTTP PATCH y PUT es que el primero aplica modificaciones parciales a un recurso, mientras que el segundo ??nicamente permite reemplazar completamente un documento.</li><li>URL (Uniform Resource Locator o ???Localizador uniforme de recursos???) est?? formada por un conjunto de caracteres, que sigue un est??ndar, y que especifica que un determinado recurso digital est?? identificado y disponible y permite localizarlo. Todos los URLs son URIs (pero no todos los URIs son URLs).</li><li>Admitir almacenamiento en cach?? del lado del cliente es otra manera de controlar la persistencia de datos</li><li>Utilizar endpoints anidados para mostrar pantescos sem??nticos entre la jerarqu??a. ( TRES NIVELES COMO M??XIMO )</li>",
          }
        ]
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "En el presente art??culo pretendo hablar de forma general de algunas de las buenas pr??cticas y su porqu?? cuando las implementamos en nuestras API. Documentaci??n, mensajes de respuesta adecuados a su c??digo de est??tus son s??lo una peque??a parte del total de recomendaciones que se aconsejan. Por lo tanto, este art??culo muy posiblemente se fragmentar?? en otros m??s especificos que aborden el tema inmenso que abarca la creaci??n de una API RESTful."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Enlaces de inter??s:</strong>"
          }

        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://stoplight.io/api-documentation-guide\">Gu??a API documentati??n y mejores pr??cticas</a></li><li><a href=\"https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/\">Freecodecamp Mejores pr??cticas API</a></li><li><a href=\"https://learn.microsoft.com/es-es/azure/architecture/best-practices/api-implementation\">API Implementation</a></li><li><a href=\"https://kinsta.com/es/blog/codigos-de-estado-de-http/\">C??digos de estado HTTP</a></li><li><a href=\"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes\">Wikipedia: List of HTTP status codes.</a></li><li><a href=\"https://www.openapis.org/\">OpenAPI specification</a></li>"
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
        "node": "Git Commit Mejores Pr??cticas"
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
            "node": "Un commit debe ser un contenedor para los cambios relacionados. Por ejemplo, corregir dos errores diferentes deber??a producir dos confirmaciones separadas. Las confirmaciones peque??as facilitan que otros desarrolladores comprendan los cambios y los reviertan si algo sali?? mal. Con herramientas como el <strong>staging area</strong> y la capacidad de organizar s??lo partes de un archivo, Git facilita la creaci??n de commits muy granulares."
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
            "node": "<strong>Realizar commits de forma regular</strong> nos permite compartir nuestro c??digo con mayor frecuencia con otros. De esa forma, es m??s f??cil para todos integrar los cambios con regularidad y evitar conflictos de <strong>merge</strong>. Tener commits grandes y compartirlos con poca frecuencia, por el contrario, dificulta la resoluci??n de conflictos."
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
        "node" : "Debemos commitear s??lo cuando tenemos completo el aspecto l??gico de la funcionalidad o fix. Si tenemos la tentaci??n de commitear s??lo porque tenemos la necesidad de respaldar nuestro trabajo, creemos una rama o guardemos los cambios en un stash."
      },
      { 
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Realizar commit despu??s de probar que su funcionalidad es correcta</strong>"
          }
        ],
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "A menos que no estemos trabajando de forma colaborativa, no importa subir cambios sin testear, pero como en el desarrollo profesional esto no es una realidad hay que garantizar que el c??digo creado est?? libre de errores y as?? evitar atascaderos en otras zonas del desarrollo."
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
            "node": "El mensaje deber?? comenzar con un breve resumen de nuestros cambios (hasta 50 caracteres como gu??a, es recomendado). El cuerpo deber?? estar separado por una l??nea en blanco. El cuerpo del mensaje debe proporcionar respuestas detalladas a las siguientes preguntas: ??? ??Cu??l fue la motivaci??n para el cambio? ??? ??En qu?? se diferencia de la implementaci??n anterior? Usar el tiempo presente imperativo (\"cambiar\", no \"cambiado\" o \"cambios\") podemos ser coherentes con los mensajes generados a partir de comandos como <strong>git merge</strong>. Tener una copia de seguridad de nuestros archivos en un servidor remoto es un buen efecto secundario de tener un sistema de control de versiones, pero para nada debe ser la norma utilizarlo con esta finalidad."
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
            "node": "La ramificaci??n es una de las caracter??sticas m??s poderosas de Git, y esto no es por accidente: la ramificaci??n r??pida y f??cil fue un requisito central desde el primer d??a. Las ramas son la herramienta perfecta para ayudarte a evitar mezclar diferentes l??neas de desarrollo. Debemos usar ramas de manera extensiva en tus flujos de trabajo de desarrollo: para nuevas funciones, correcciones de errores, ideas..."
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
            "node": "<li>Commit en may??sculas, corto (50 caracteres o menos)</li><li>Texto explicativo m??s detallado, si es necesario. Envu??lvelo en alrededor de 72 caracteres. En algunos contextos, la primera l??nea se trata como el asunto de un correo electr??nico y el resto del texto como el cuerpo. La l??nea en blanco que separa el resumen del cuerpo es fundamental</li><li>Siempre dejar la segunda l??nea en blanco</li><li>Escribir el mensaje de confirmaci??n en imperativo: \"Fix bug\" y no \"Fixed bug\" o \"Fixes bug\". Esta convenci??n coincide con los mensajes de confirmaci??n generados por comandos como git merge y git revert.</li>"
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
        "node": "Crear alias para los comandos usados m??s comunes puede ayudarnos a ahorrar valiosos minutos todos los d??as, acciones repetitivas en comandos automatizados" 
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
            "node": "<strong>Nota: </strong>Este recurso fue extra??do del gist de <a href=\"https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60\">LuisMTS</a> colega desarrollador, todos los cr??ditos para ??l" 
          }
        ]
      },
      {
        "type": "h4",
        "node": "Conclusi??n:" 
      },
      {
        "type": "p",
        "node": "El sistema de control de versiones de GIT es fabuloso y tambi??n inmenso como lo es nuestro mundo de ingenier??a, es tambi??n uno de nuestros mejores aliados y la mejor herramienta colaborativa para el desarrollo de proyectos m??s seguros y ??giles. Podemos estar seguros que entregando nuestra plena confianza a sus mejores pr??cticas nos facilitar?? el desarrollo y la calidad que siempre buscamos" 
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos ??tiles:</strong>"
          }
        ]
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li><a href=\"https://acompiler.com/git-best-practices/#tve-jump-17738882369\">La gu??a definitiva</a></li><li><a href=\"https://github.com/\">Github Home</a></li><li><a href=\"http://yourfirstpr.github.io/\">Your First Pull Request</a></li><li><a href=\"http://yourfirstpr.github.io/\">Formateo b??sico seg??n Github</a></li><li><a href=\"https://learngitbranching.js.org/?locale=es_ES\">Learn Git Branching</a></li>"
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
        "node": "A continuaci??n, se aborda un tema vital para el desarrollo de c??digo escalable, por contar con una estructura que evita el c??digo altamente acoplado. Cabe destacar que son PRINCIPIOS, no es la regla y es siempre una opci??n optar por estructurar nuestro c??digo basado en sus dict??menes."
      },
      {
        "type": "p",
        "node": "Los principios SOLID nos indican c??mo organizar nuestras funciones y estructuras de datos en componentes y c??mo dichos componentes deben estar interconectados entre ellos. De igual manera abordar?? su contraparte descrito con el acr??nimo STUPID explicadas malas pr??cticas identificadas"
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
            "node": "<strong>Singleton: </strong> Un singleton nos ayudar??a a mantener una ??nica instancia para la conexi??n a una base de datos por ejemplo. Suena bien no? Bueno un singleton reside en el objeto global, tu dir??s si no es peligroso mantener variables de conexi??n visibles en el entorno global"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Tight coupling: </strong> B??sicamente con alto acoplamiento se refiere a la dependencia de otras funciones, clases o m??dulos ajenas a la propia l??gica que maneja. Y con baja cohesi??n a las m??ltiples responsabilidades que gesti??n la l??gica de una funci??n, clase o m??dulo. Lo ideal es tener bajo acoplamiento y alta cohesi??n."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Untestability: </strong> El alto acoplamiento genera c??digo dif??cil de testear. El c??digo resuelve un problema; un problema es esencialmente complejo, pero no por esto vamos a conseguir la soluci??n siendo necesariamente complejos. El hacer c??digo complejo sin necesidad es una mala pr??ctica."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Premature Optimization: </strong>La optimizaci??n de una aplicaci??n es necesaria desde muchos enfoques, con decir que una aplicaci??n veloz afianza la confianza del cliente, es suficiente para justificar su necesidad, sin embargo, esta implementaci??n debe contar con su fase dedicada a ello y no en la fase de desarrollo de funcionalidades. ??Porqu??? Bueno, implica tiempo y en determinados momentos es m??s necesario tener el feature funcional por posibles cambios y mejoras que la optimizaci??n. En tiempo de desarrollo estamos supeditados a cambios, la optimizaci??n deber??a estar lista en el producto final."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Indescifrable naming: </strong> Ser muy espec??fico o demasiado gen??rico a la hora de nombrar mis variables, nombres de funci??n, clases, m??dulos, perjudica la legibilidad. Si pensamos en desarrollar un c??digo reutilizable vale ser gen??rico a la hora de nombrar las variables, si por el contrario se trata miembros privados de una clase vale est??n descritas de forma espec??fica."
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Duplicate: </strong> Existen dos formas de generar c??digo duplicado, una es creando literalmente el mismo c??digo que cumpla la misma necesidad para diferentes zonas de la aplicaci??n. Y la otra forma es la duplicidad accidental, que genera c??digo similar pero no necesariamente igual. En este ??ltimo caso la duplicidad de c??digo se puede evitar, agregando nuevos par??metros u validaciones, pero requiere un mejor an??lisis y toma de decisiones adecuadas."
          }
        ]
      },
      {
        "type": "h4",
        "node": "S.O.L.I.D"
      },
      {
        "type": "p",
        "node": "He comenzado con las cl??usulas dedicadas a describir lo que no debemos hacer como desarrolladores, por el simple hecho de que no podemos saber que es lo bueno si antes no pasamos por lo malo, adem??s que a partir de esa peque??a descripci??n podemos identificarnos mejor con la soluci??n ya que los principios SOLID requieren un an??lisis adicional partiendo de la abstracci??n a partir de momento en el que decidimos CREAR!"
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
            "node": "\"Nunca deber??a haber m??s de un motivo por el cual cambiar una clase o un m??dulo.\" <span>Robert C. Martin </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Tener una ??nica responsabilidad no es sin??nimo de hacer una ??nica cosa, sino de tener funcionalidades que est??n expuestos a una sola fuente de cambio. Por ejemplo, una clase con un m??todo que cargue informaci??n de una base de datos y con otro m??todo los represente en la interfaz de usuario, es una clase que tiene 2 responsabilidades, si en alg??n momento cambia el requerimiento de conexi??n inevitablemente se ver?? afectada el m??todo que agrega la informaci??n a la interfaz. Lo que indudablemente es un indicio de que esta clase est?? expuesta a 2 fuentes de cambio distinta."
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
            "node": "<li>Nombres de clases o m??dulos demasiado gen??ricos</li><li>La clase involucra m??ltiples capas, la de representaci??n de datos en la UI; la consumo y guardado de informaci??n a una base de datos, la de gesti??n del estado global o local, etc.</li><li>Excesivo n??mero de l??neas</li><li>Una buena indicaci??n de que un componente ha superado su prop??sito original (SPR) es que requiere un mont??n de declaraciones <code>if</code> que cambian el renderizado o comportamiento original.</li><li>Esto tambi??n aplica a funciones generales no asociadas a JSX. Si se requiere agregar constantemente argumentos para controlar el flujo de la aplicaci??n posiblemente esta funci??n est?? haciendo demasiado.</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Para resumir, el principio de responsabilidad ??nica tiene que ver con mantener nuestros componentes peque??os y con un s??lo prop??sito. Dichos componentes son m??s legibles, m??s f??ciles de probar y modificar, y es menos probable que introduzcamos la duplicaci??n de c??digo no intencional."
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
        "node": "Establece que las entidades de software (clases, m??dulos, m??todos) deben estar abiertas para la extensi??n, pero cerradas a la modificaci??n"
      },
      {
        "type": "p",
        "node": "Las aplicaciones son entes org??nicos digitales en constante cambio, una funcionalidad est?? contantemente sometida al cambio. Pensar en esta realidad nos ayuda a no violar este principio. Pero ejemplifiquemos. Pensemos en una entidad como en un m??todo de clase; supongamos que ese m??todo tiene la tarea de grabar un nombre de archivo en la base de datos. Y lo realiza desde el cuerpo del m??todo. Ahora llega un nuevo requerimiento, y es necesario cambiar el nombre del archivo a grabar, para lograrlo abro el m??todo y lo modifico el nombre, (una clara violaci??n a este principio)."
      },
      {
        "type": "p",
        "node": "La soluci??n a este problema es simple, hay que pasar el nombre de archivo por par??metro, as?? cuando se necesite volver a cambiar este nombre de archivo a guardar no habr?? raz??n por modificar ese m??todo, la funci??n esta preparada para este cambio y ya no es necesario modificar su implementaci??n."
      },
      {
        "type": "p",
        "node": "En conclusi??n, para a??adir funcionalidades a la aplicaci??n, tenemos que escribir nuevo c??digo, no modificar el ya existente."
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
            "node": "<li>Cambios normalmente afectan a la clase, m??dulo o funci??n de forma constante</li><li>Cuando una clase o m??dulo afecta a varias capas de la aplicaci??n (Representaci??n en la UI, almacenamiento en Base de datos, interacci??n con la API, etc.)<li>Este principio es el m??s ligado con el principio 'Single Responsability'</li>"
          }
        ]
      },
      {
        "type": "h4",
        "node": "Principio de sustituci??n de Liskov"
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
        "node": "El principio Liskov nos ayuda a utilizar la herencia de forma correcta y a tener un mayor cuidado a la hora de extender clases. Es necesario cuidar no violar el principio de responsabilidad ??nica, ya que usualmente utilizar la herencia en JS genera c??digo acoplado, sin embargo, existe un t??cnica que nos ayudar?? a gestionar la jerarqu??a de forma m??s eficiente, pero s??lo se puede implementar con el uso de Typescript. "
      },
      {
        "type": "p",
        "node": "Si decimos que una clase hija debe poder funcionar como implementamos la clase padre, significa que la clase hija contiene los mismos m??todos de la clase padre. Como hacemos que se respete esto y no rompa la aplicaci??n en el momento que un metodo que no exista: con las clases abstractas de TS."
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
        "node": "Las clases que extienden de Vehicle no pueden implementar nada que no est?? en la firma del padre. R??pido seguro y eficiente. Pensar en clases abstractas al momento de querer aplicar este principio es una soluci??n r??pida y elegante."
      },
      {
        "type": "p",
        "node": "Ahora cualquier otra clase o funci??n que requiera utilizar cualquier subclase de Vehicle, debe poder ser capaz de manejarla, solo lo indicamos en su contrato"
      },
      {
        "type": "img",
        "node": liskovPrinciple3
      },
      {
        "type": "p",
        "node": "Detectar violaciones al Sustituci??n de Liskov"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Utilizando la t??cnica de definir la firma de una clase con una clase abstracta, pr??cticamente no podr??s violar este principio porque TS de impedir?? la transpilaci??n del c??digo en tiempo de desarrollo</li><li>Si prescindes del uso de TS, y optas por heredar en lugar de componer sabr??s que violas este principio si tienes m??todos sobrantes en las clases hijas.</li>",

          }
        ]
      },
      {
        "type": "h4",
        "node": "Principio de segregaci??n de interfaces"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Los clientes no deber??an estar obligados a depender de interfaces que no utilicen. \"<span>Robert C. Martin </span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Aplicar correctamente este principio permite crear clases o funciones tolerantes al cambio. Las modificaciones en una clase no deben afectar a aquellas que no implementen la interfaz relacionada. Hace el c??digo verboso, pero con la capacidad de expandirse o extenderse m??s."
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested", 
            "node": "<strong><em>Nota: </em></strong>Hay que mencionar que este principio es aplicable ??nicamente en entornos de desarrollo con TS, ya que en JS no es posible implementar interfaces de forma nativa"
          }
        ]
      },
      {
        "type": "p",
        "node": "El prop??sito de este principio es obligarnos a escribir c??digo tenga una alta cohesi??n, es decir hacer que la clase, funci??n o m??dulo no realice acciones que involucren a otra entidad. Ejemplificarlo es sencillo, primero veamos que est?? mal en el siguiente c??digo:"
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
            "node": "Evidentemente estamos implementando para la <strong>clase Tucan</strong> m??todos que no va a utilizar. Esta clase no utiliza los m??todos <strong>run()</strong> y <strong>swim()</strong>, porque est?? fuera de sus habilidades. Por lo que estoy recurriendo a una mala pr??ctica. La soluci??n es implementar las interfaces propias de la clase Tuc??n e implementar los m??todos sobrantes para las clases que lo requieran, si es que van a existir clases que requieran de esas habilidades. A continuaci??n, el mismo ejemplo pero implementado de la forma correcta: "
          }
        ]
      },
      {
        "type": "img",
        "node": segregation2
      },
      {
        "type": "p",
        "node": "Ahora cada una de las clases espera implementar la interfaz correcta. Nada falta y nada sobra a las necesidades de este conjunto de clases. Y ganamos alta cohesi??n, lo esperado en el desarrollo de software escalable y de buena calidad."
      },
      {
        "type": "h4",
        "node": "Inversi??n de dependencias"
      },
      {
        "type": "blockquote",
        "node": [
          {
            "type": "nested",
            "node": "\"Los m??dulos de alto nivel no deber??an depender de los m??dulos de bajo nivel. Ambos deber??an depender de abstracciones es decir interfaces.\"<span>Uncle Bob</span>"
          }
        ]
      },
      {
        "type": "p",
        "node": "Con este principio garantizamos que las principales entidades de la aplicaci??n permanezcan desacopladas de los componentes encargados de suministrar los detalles. Lo que en la pr??ctica significa que cambios en la capa de detalles o de bajo nivel no induce a errores o perdida de rendimiento, porque no afecta a la capa superior. Enti??ndase como componentes de bajo nivel, a aquellos que suministran los detalles, pero sobre todo aquellos que no contienen dependencias"
      },
      {
        "type": "p",
        "node": "Este principio se salda (la de evitar el acoplamiento entre componentes) con la implementaci??n de abstracciones o interfaces. Por lo que aplicarlo con Javascript puro es distinto de lo que har??amos si lo hacemos con Typescript"
      },
      {
        "type": "p",
        "node": "La comunicaci??n entre los componentes del sistema depende de interfaces no de componentes con funcionalidad concreta. Ahora las entidades, como podr??a ser una encargada de la conexi??n con una base de datos no deber??a causar estragos si las conexiones de otras entidades a ??sta se realiza mediante interfaces. As?? es evidente que la aplicaci??n permanece desacoplada y ahora es posible modificar el gestor encargado del almacenamiento de datos de MongoDB a MySQL sin causar ning??n problema al funcionamiento de la aplicaci??n."
      },
      {
        "type": "h4",
        "node": "Conclusi??n"
      },
      {
        "type": "p",
        "node": "Finalizar?? este art??culo con un colorario seg??n mi experiencia de lo considero buenas y malas pr??cticas en general:"
      },
      {
        "type": "ul",
        "node": [
          {
            "type": "nested",
            "node": "<li>Una buena pr??ctica es tener en cuenta las pruebas unitarias desde la creaci??n del c??digo, un buen c??digo las har?? m??s sencillas</li><li>En general un m??todo con m??s de 10 l??neas de c??digo debe hacernos pensar en la existencia del mismo</li><li>Utilizar demasiados valores en datos primitivos, puede generar un c??digo innecesariamente grande. Es importante analizar a que campo sem??ntico pertenecer??an los datos similares para agruparlos en objetos, clases, m??dulos, etc.</li><li>Tener una larga lista de par??metros tambi??n es una mala pr??ctica</li><li>Hacer clases, funciones o m??dulos que sepan lo menos posible de otros m??todos, m??dulos o elementos es una buena pr??ctica y ayuda mucho al testing.</li><li>Si identificamos una cadena de mensajes (informaci??n que pasa de A a D pero pasando por B y C) estamos haciendo c??digo acoplado. En la medida de lo posible debemos intentar las posibilidades de pasarlo de A a D sin intermediarios.</li><li>Utilizar correctamente los principios SOLID mejora considerablemente el tiempo de desarrollo del testing</li><li>Un cambio en un m??dulo por lo general provoca un efecto domin?? de los cambios en otros m??dulos</li>"
          }
        ]
      },
      {
        "type": "p",
        "node": [
          {
            "type": "nested",
            "node": "<strong>Algunos recursos ??tiles:</strong>"
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
