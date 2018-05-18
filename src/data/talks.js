const talks = {
    'saleiva': {
        name: '',
        description: '',
        speaker: 'Sergio Álvarez',
        speakerImage: 'saleiva.svg',
        speakerTitle: 'PRODUCT/TECH - ZARA.COM',
        when: '09:35-10:20'
    },
    'k4rliky': {
        name: 'Consejo: No hagas trampas en videojuegos',
        description: 'Una charla sobre lo efímero y complicado del éxito hackeando videojuegos',
        speaker: 'Carlos Hernández',
        speakerImage: 'karliky.png',
        speakerTitle: 'I\'M NOT A HACKER - AUDIENSE',
        when: '10:20-10:45'
    },
    'ggarciapaola': {
        name: 'Salir de la rueda de hamster una tarea complicada... Inception',
        description: '¿Cuantas veces has sentido que hacemos las cosas por inercia aunque parezcan NO tener sentido al menos para ti? Yo he sentido esto varias veces a lo largo de mi carrera y he salido "fuera de la rueda de hamster de aquello que me atrapaba"... ¿o no? Salí del mundo de trabajador por cuenta ajena en corporate al mundo del emprendimiento y ¿sabes que? Aquí también he encontrado una rueda de hamster! Salir del sistema establecido no es tan facil como parece... pero sigo intuyendo que merece la pena :) Te cuento mi experiencia por el camino en este charla.',
        speaker: 'Paola García',
        speakerImage: 'paola.svg',
        speakerTitle: 'CEO - CHEFLY',
        when: '10:45-11:30'
    },
    'luisico': {
        name: 'Las prisas se han comido a mi equipo',
        description: 'Una de las partes más bonitas de trabajar en una startup es que si te implicas y aguantas el tiempo suficiente tienes la oportunidad de participar en muchas y diferentes fases de la empresa. Creas lazos muy fuertes con otras personas y en general vives sensaciones de euforia, cansancio pero también de éxito y fracaso. Mi experiencia personal al frente del equipo de infraestructura refleja un poco eso. La velocidad de la empresa puede afectar a la calidad de tu trabajo y especialmente a tu equipo y a ti como manager. Quiero hablar de cómo llega un punto en que me doy cuenta de que no he cambiado bien el chip y no me he enfocado lo suficiente en el equipo. ',
        speaker: 'Luis Bosque',
        speakerImage: 'luis.png',
        speakerTitle: 'HEAD OF INFRASTRUCTURE - CARTO',
        when: '11:30-12:00'
    },
    'nachocoloma': {
        name: 'Cosas que aprendes diseñando aplicaciones',
        description: 'Veinte años en informática da para ver de todo. Durante esta sesión revisaremos una selección de buenas prácticas de diseño de aplicaciones, de resolución de problemas y de gestión de equipos. Hablaremos de la última milla, de construir el producto correcto, de lo que significa ser full stack. Habrá un poco de todo. Será divertido.',
        speaker: 'Nacho Coloma',
        speakerImage: 'nacho.svg',
        speakerTitle: 'SENIOR CUSTOMER ENGINEER - GOOGLE',
        when: '12:30-13:15'
    },
    'antoniocarlon': {
        name: 'The cake is a lie',
        description: 'Después de más de 6 años desarrollando juegos independientes para diversas plataformas como side-projects en mi tiempo libre y como freelance para otras empresas, con varios fracasos y algún éxito a mis espaldas me gustaría contar lo que he aprendido y cómo voy a aplicarlo para intentar aumentar las posibilidades de que mi próximo juego sea un éxito (o al menos fracasar un poco menos).',
        speaker: 'Antonio Carlón',
        speakerImage: 'antonio.png',
        speakerTitle: 'BACKEND DEVELOPER - CARTO',
        when: '13:15-13:45'
    },
    'soygema': {
        name: '¿Cómo funciona una Startup alrededor de un videojuego?',
        description: '¿Qué experimentos medibles se pueden realizar para avanzar en producción y en diseño? ¿Cómo se pasa de tener un canal de Youtube a ganar un concurso para PlayStation ? ¿Qué fracasos implica el éxito y qué éxitos implica el fracaso?',
        speaker: 'Gema Parreño',
        speakerImage: 'gema_nueva.svg',
        speakerTitle: 'DATA SCIENTIST - BBVA',
        when: '14:45-15:30'
    },
    'danihompanera': {
        name: 'El Viaje del Héroe',
        description: 'Abordaré la historia de Solid GEAR desde mi propia historia personal de transformación basada en el viaje del héroe y presentaré situaciones, herramientas y recursos que me ayudan en este viaje y que intento que ayuden a otros en el suyo propio. Todo esto sin obviar fracasos y decepciones que he ido superando en el proceso.',
        speaker: 'Daniel Hompanera',
        speakerImage: 'dani.png',
        speakerTitle: 'TECH LEAD - SOLID GEAR',
        when: '15:30-16:00'
    },
    'fesja': {
        name: 'Aplicando en OnTruck los aprendizajes de una start-up vendida y otra cerrada',
        description: 'En solo dos años de vida, hemos fundado y crecido OnTruck de 3 a más de 100 empleados, levantado más de 12M€ y conseguido la confianza de las principales empresas manufactureras y logísticas de España. Esta ejecución, casi de libro, se debe a las experiencias pasadas de los fundadores y del equipo. En esta charla compartiré con historias reales mías los aprendizajes que nos han permitido crecer a este altísimo ritmo. ¿Qué hemos aprendido del equipo, de los procesos y de la ejecución?',
        speaker: 'Javier Escribano',
        speakerImage: 'fesja.svg',
        speakerTitle: 'CPO - ONTRUCK',
        when: '16:00-16:45'
    },
    'jesus': {
        name: 'MEGA: como las antípodas llegaron a Salamanca',
        description: 'Tras 5 años, creo que puede ser interesante contar nuestra historia: emprendimiento, orígenes, evolución y crecimiento, metodología de trabajo, gestión de comunicación con las antípodas (no sólo en horarios, sino en diferencia de caracteres, cultura, etc), product management, experiencia de evolución e inserción en una industria existente con competidores muy potentes (Dropbox, Google Drive, OneDrive, Box, etc) donde MEGA se encuentra ahora mismo en el Top 3 de almacenamiento en nube, peculiaridades y factor de diferenciación de nuestro producto, estrategias de marketing, etc.',
        speaker: 'Jesús Rodríguez-Aragón',
        speakerImage: 'jesus.png',
        speakerTitle: 'SPAIN MANAGER - MEGA',
        when: '17:15-17:45'
    },
    'kikobeats': {
        name: 'Estrategias de Producto desde el Open Source',
        description: 'Desde hace un tiempo hasta ahora, quería cambiar el chip. Quería construir proyecto alrededor de la tecnología que hacía. Quería que esas piezas fueran la base para hacer algo mayor, y no quedarme sólo en la superficie. Y eso, implica un montón de cosas. Esto no va de startups! Va de estilo de vida. De poder hacer Open Source y poder vivir de ello. De dejar tu trabajo porque te puedes dedicar a tus proyectos, que además te dan de comer. Bueno, a ver, no nos flipemos que yo todavía no he llegado a eso. Pero work in progress 🙂',
        speaker: 'Kikobeats',
        speakerImage: 'kikobeats.png',
        speakerTitle: 'PRODUCT ENGINEER - AUDIENSE',
        when: '17:45-18:15'
    },
    'lalalalia': {
        name: 'La crisis de los 28',
        description: '',
        speaker: 'Analía Plaza',
        speakerImage: 'lalalalia.svg',
        speakerTitle: '',
        when: '18:15-19:00'
    },
    'lechazoconf': {
        name: 'Feedback para la conferencia',
        description: 'Danos feedback para mejorar!',
        speaker: 'Organización de la lechazoconf',
        speakerImage: 'lechacito.png',
        speakerTitle: '',
        when: '09:00-19:00'
    },
};

Object.keys(talks).forEach((k) => {
    talks[k].slug = k;
});

module.exports = {
    all() {
        return Object.keys(talks).map((id) => talks[id]);
    },
    getBySlug(slug) {
        return talks[slug];
    }
};
