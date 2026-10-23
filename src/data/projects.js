/**
 * Contenido del portfolio.
 * Cada proyecto reúne una descripción desarrollada y una galería de imágenes
 * con texto alternativo y epígrafe propio.
 */

const asset = (path) => encodeURI(`/assets/${path}`);

export const site = {
  name: "Carolina Cagliuso",
  brand: "CC Arquitectura & Diseño",
  email: "arq.carolinacagliuso@outlook.es",
  phone: "+54 9 11 6674 9430",
  whatsapp: "5491166749430",
  instagram: "https://www.instagram.com/arq.cagliuso/",
  linkedin: "https://www.linkedin.com/in/carolina-yanina-cagliuso/",
};

export const heroSlides = [
  {
    src: asset("viviendas/renders realista..3con marca de agua.png"),
    alt: "Render de vivienda moderna integrada al paisaje",
  },
  {
    src: asset("interiores/interior.png"),
    alt: "Render de interior cálido con luz natural",
  },
  {
    src: asset("oficinas/edificio 4.jpg"),
    alt: "Render de edificio de oficinas de líneas contemporáneas",
  },
  {
    src: asset("viviendas/renders realista..5 con marca de agua.png"),
    alt: "Render exterior de vivienda con galería y jardín",
  },
];

export const projects = [
  {
    id: "exteriores",
    index: "01",
    title: "Exteriores",
    kicker: "Viviendas & paisaje",
    lead: "Arquitectura que dialoga con el entorno.",
    description: [
      "Diseñamos viviendas que se integran al entorno en lugar de imponerse. Cada proyecto parte de una lectura atenta del terreno, la orientación y la luz para definir volúmenes claros, recorridos fluidos y espacios que invitan a habitar el exterior durante todo el año.",
      "La paleta de materiales —hormigón, madera, piedra y grandes planos vidriados— construye una imagen serena y atemporal. Galerías, terrazas y expansiones profundizan el vínculo entre la arquitectura y el paisaje, mientras la iluminación acompaña el paso del día.",
    ],
    images: [
      {
        src: asset("viviendas/renders realista c marca de agua.png"),
        alt: "Render de fachada de vivienda moderna con volúmenes macizos y grandes aberturas",
        title: "Fachada principal",
        caption:
          "La fachada combina planos macizos y transparencias para lograr una imagen rotunda y liviana al mismo tiempo, con una paleta de materiales que envejece con dignidad.",
      },
      {
        src: asset("viviendas/renders realista..1 con marca de agua.png"),
        alt: "Render del acceso a la vivienda con galería profunda y vegetación",
        title: "Acceso & galería",
        caption:
          "El acceso se resuelve con una galería profunda que protege del sol y de la lluvia, y anticipa el ritmo sereno de los espacios interiores.",
      },
      {
        src: asset("viviendas/renders realista..2con marca de agua.png"),
        alt: "Render de vivienda abierta hacia el jardín mediante aberturas de piso a techo",
        title: "Frente al jardín",
        caption:
          "Las aberturas de piso a techo diluyen el límite entre el interior y el jardín. El verde entra en la casa y la casa se prolonga hacia afuera.",
      },
      {
        src: asset("viviendas/renders realista..3con marca de agua.png"),
        alt: "Render de volumetría escalonada de vivienda con cubierta plana y terrazas",
        title: "Volumetría",
        caption:
          "La volumetría escalonada libera terrazas y permite que cada ambiente se abra hacia las mejores vistas y hacia la orientación más favorable.",
      },
      {
        src: asset("viviendas/renders realista..4 con marca de agua.png"),
        alt: "Render de detalle de fachada con texturas y luz cálida",
        title: "Materialidad",
        caption:
          "Texturas, juntas y una iluminación cálida refuerzan la lectura material de la fachada y le dan escala humana al conjunto.",
      },
      {
        src: asset("viviendas/renders realista..5 con marca de agua.png"),
        alt: "Render nocturno de vivienda con interiores iluminados",
        title: "Vista nocturna",
        caption:
          "Al anochecer, la luz interior transforma la vivienda en una linterna cálida sobre el paisaje y revela la profundidad de sus espacios.",
      },
    ],
  },
  {
    id: "interiores",
    index: "02",
    title: "Interiores",
    kicker: "Ambientes que se habitan",
    lead: "Diseño interior con sensibilidad y propósito.",
    description: [
      "Entendemos el interior como una extensión natural de la arquitectura: un lugar donde la luz, la materialidad y el uso cotidiano se encuentran. Trabajamos con paletas neutras, texturas cálidas y mobiliario de líneas simples para crear ambientes que se sienten tan bien como se ven.",
      "Cada espacio se resuelve a partir de las necesidades reales de quienes lo habitan: almacenamiento invisible, iluminación en capas y circulaciones claras, para que el diseño acompañe la vida diaria sin esfuerzo.",
    ],
    images: [
      {
        src: asset("interiores/inte.png"),
        alt: "Render de living amplio con mobiliario de líneas simples y luz natural",
        title: "Living integrado",
        caption:
          "Un living integrado donde la continuidad del piso y el cielorraso amplía la percepción del espacio y ordena el encuentro entre estar y comedor.",
      },
      {
        src: asset("interiores/interi.png"),
        alt: "Render de interior con paleta de materiales cálidos y vegetación",
        title: "Materiales & textura",
        caption:
          "Maderas, textiles y superficies mates construyen una atmósfera cálida y envolvente, pensada para el descanso y la conversación.",
      },
      {
        src: asset("interiores/interio.png"),
        alt: "Render de ambiente interior con iluminación en capas y detalles a medida",
        title: "Luz en capas",
        caption:
          "La iluminación se diseña en capas —general, funcional y de acento— para que cada momento del día tenga su propia temperatura.",
      },
      {
        src: asset("interiores/interior.png"),
        alt: "Render de espacio interior sereno con grandes aberturas y vistas al exterior",
        title: "Continuidad visual",
        caption:
          "Las visuales largas y las aberturas enmarcadas conectan los ambientes entre sí y con el exterior, sumando amplitud y calma.",
      },
    ],
  },
  {
    id: "oficinas",
    index: "03",
    title: "Oficinas",
    kicker: "Espacios de trabajo",
    lead: "Arquitectura corporativa que cuida a las personas.",
    description: [
      "Proyectamos espacios de trabajo que combinan identidad corporativa, eficiencia y bienestar. Desde edificios de oficinas hasta interiores de planta libre, cada decisión busca mejorar la experiencia de quienes los usan y reducir el impacto ambiental del proyecto.",
      "Incorporamos criterios de diseño sustentable —luz natural, ventilación cruzada, materiales de bajo mantenimiento y flexibilidad de uso— para que los espacios puedan adaptarse a las nuevas formas de trabajar sin perder calidad ni carácter.",
    ],
    images: [
      {
        src: asset("oficinas/Portada.jpg"),
        alt: "Imagen de portada del proyecto de edificio de oficinas",
        title: "Edificio corporativo",
        caption:
          "La imagen de conjunto del proyecto: una arquitectura de oficinas clara, eficiente y con una presencia urbana cuidada.",
      },
      {
        src: asset("oficinas/edificio 1.jpg"),
        alt: "Render exterior de edificio de oficinas con fachada contemporánea",
        title: "Fachada urbana",
        caption:
          "La fachada ordena las visuales y protege las áreas de trabajo del asoleamiento directo, sin perder transparencia.",
      },
      {
        src: asset("oficinas/edificio 2.jpg"),
        alt: "Render de acceso a edificio de oficinas con espacio de transición",
        title: "Acceso",
        caption:
          "Un acceso de escala generosa recibe y orienta, funcionando como umbral entre la ciudad y el espacio de trabajo.",
      },
      {
        src: asset("oficinas/edificio 3.jpg"),
        alt: "Render de edificio de oficinas con terrazas y espacios comunes",
        title: "Terrazas & pausa",
        caption:
          "Terrazas y espacios de pausa se integran al programa para ofrecer aire libre y descanso dentro de la jornada laboral.",
      },
      {
        src: asset("oficinas/edificio 4.jpg"),
        alt: "Render de conjunto de edificio de oficinas de líneas modernas",
        title: "Conjunto",
        caption:
          "La lectura de conjunto busca una pieza urbana coherente, con proporciones y materiales que dialogan con su entorno.",
      },
      {
        src: asset("oficinas/ed sustentable 1.jpg"),
        alt: "Render de edificio sustentable con estrategias de ahorro energético",
        title: "Edificio sustentable",
        caption:
          "Estrategias pasivas de orientación, protección solar y ventilación natural reducen la demanda energética desde el inicio.",
      },
      {
        src: asset("oficinas/ed sustentable 2.jpg"),
        alt: "Render de edificio sustentable y su relación con el verde urbano",
        title: "Verde urbano",
        caption:
          "La incorporación de vegetación mejora el confort, filtra visuales y ayuda a regular la temperatura de los espacios exteriores.",
      },
      {
        src: asset("oficinas/ed sustentable 3.jpg"),
        alt: "Render de fachada de edificio sustentable con protección solar",
        title: "Envolvente",
        caption:
          "La envolvente funciona como filtro: controla la luz, la ganancia térmica y la intimidad de los espacios de trabajo.",
      },
      {
        src: asset("oficinas/ed sustentable 4.jpg"),
        alt: "Render de edificio sustentable con terrazas verdes",
        title: "Cubiertas & eficiencia",
        caption:
          "Cubiertas y terrazas verdes colaboran con el aislamiento, la gestión del agua y la calidad ambiental del conjunto.",
      },
      {
        src: asset("oficinas/ofi interior 2mas1.png"),
        alt: "Render panorámico de oficina de planta libre con puestos de trabajo",
        title: "Planta libre",
        caption:
          "La planta libre se organiza en zonas de trabajo, encuentro y concentración, con circulaciones claras y mobiliario flexible.",
      },
      {
        src: asset("oficinas/ofi interior 1.jpg"),
        alt: "Render de interior de oficina con puestos de trabajo junto a ventanales",
        title: "Luz natural",
        caption:
          "Los puestos se ubican junto a las aberturas para aprovechar la luz natural y mantener una conexión visual constante con el exterior.",
      },
      {
        src: asset("oficinas/ofi interior 2.jpg"),
        alt: "Render de office y área de encuentro en oficina moderna",
        title: "Encuentro",
        caption:
          "El office y las áreas de encuentro se piensan como el corazón social del espacio de trabajo: informales, cómodos y bien iluminados.",
      },
      {
        src: asset("oficinas/ofi interior 3.jpg"),
        alt: "Render de sala de reuniones con mobiliario contemporáneo",
        title: "Salas de reunión",
        caption:
          "Las salas combinan acústica, tecnología y confort visual para que reuniones y presentaciones sucedan sin fricción.",
      },
      {
        src: asset("oficinas/ofi interior 4.jpg"),
        alt: "Render de área de trabajo colaborativa en oficina",
        title: "Colaboración",
        caption:
          "Espacios flexibles permiten alternar entre trabajo individual y colaborativo según la tarea y el momento del día.",
      },
      {
        src: asset("oficinas/ofi interior 5.jpg"),
        alt: "Render de circulación y recepción en oficina",
        title: "Circulaciones",
        caption:
          "Circulaciones amplias y puntos de recepción claros ordenan el movimiento y mejoran la orientación de visitantes y equipos.",
      },
      {
        src: asset("oficinas/ofi interior 6.jpg"),
        alt: "Render de rincón de descanso en oficina con vegetación",
        title: "Bienestar",
        caption:
          "Rincones de descanso, vegetación y materiales cálidos convierten el bienestar en parte del programa arquitectónico.",
      },
      {
        src: asset("oficinas/soto-1.jpg"),
        alt: "Render de espacio de oficina con vistas abiertas y diseño minimalista",
        title: "Vistas & amplitud",
        caption:
          "La continuidad de las vistas y un lenguaje minimalista amplían los ambientes y reducen el ruido visual del día a día.",
      },
    ],
  },
  {
    id: "estands",
    index: "04",
    title: "Estands",
    kicker: "Arquitectura efímera",
    lead: "Marcas que se cuentan en el espacio.",
    description: [
      "Diseñamos stands y espacios efímeros pensados para contar una marca en pocos segundos. La arquitectura se vuelve comunicación: recorridos claros, jerarquías visuales y detalles que invitan a detenerse, interactuar y recordar.",
      "Trabajamos con sistemas modulares y materiales livianos que permiten montajes rápidos, reutilización y una presencia sólida en ferias y exposiciones, sin perder la calidad espacial ni la identidad del cliente.",
    ],
    images: [
      {
        src: asset("stands expo/IMAGEN1.png"),
        alt: "Render de stand de exposición con volumen principal y gráfica de marca",
        title: "Presencia",
        caption:
          "Un volumen principal concentra la identidad de la marca y funciona como faro dentro del pabellón, visible desde los principales recorridos.",
      },
      {
        src: asset("stands expo/IMAGEN2.png"),
        alt: "Render de stand de exposición con recorrido abierto y área de encuentro",
        title: "Recorrido",
        caption:
          "El recorrido abierto invita a entrar sin barreras, mientras el área de encuentro genera una pausa para conversar y profundizar la propuesta.",
      },
      {
        src: asset("stands expo/IMAGEN3.png"),
        alt: "Render de stand de exposición con iluminación escenográfica y mobiliario",
        title: "Detalle & luz",
        caption:
          "La iluminación escenográfica jerarquiza productos y mensajes, y el mobiliario a medida completa una experiencia coherente de marca.",
      },
    ],
  },
];

export const pillars = [
  {
    index: "01",
    title: "Proyecto integral",
    text: "Del anteproyecto a la dirección de obra, cada etapa se piensa como parte de un mismo relato espacial.",
  },
  {
    index: "02",
    title: "Diseño con propósito",
    text: "Cada decisión responde a quienes van a habitar el espacio: sus rutinas, sus necesidades y su forma de vivir.",
  },
  {
    index: "03",
    title: "Mirada sustentable",
    text: "Orientación, materiales y eficiencia energética se integran desde el inicio para construir un futuro más responsable.",
  },
];

export const navLinks = [
  { label: "Inicio", to: "/#inicio" },
  { label: "Estudio", to: "/#estudio" },
  { label: "Proyectos", to: "/#proyectos" },
  { label: "Contacto", to: "/#contacto" },
];
