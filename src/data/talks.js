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
        when: '11:30-12:30'
    },
    'ggarciapaola': {
        name: 'Salir de la rueda de hamster una tarea complicada... Inception',
        description: '',
        speaker: 'Paola García',
        speakerImage: 'paola.svg',
        speakerTitle: 'CEO - CHEFLY',
        when: '11:30-12:30'
    },
    'soygema': {
        name: '',
        description: '',
        speaker: 'Gema Parreño',
        speakerImage: 'gema_nueva.svg',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'lalalalia': {
        name: '',
        description: '',
        speaker: 'Analía Plaza',
        speakerImage: 'lalalalia.svg',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'fesja': {
        name: '',
        description: '',
        speaker: 'Javier Escribano',
        speakerImage: 'fesja.svg',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'nachocoloma': {
        name: '',
        description: '',
        speaker: 'Nacho Coloma',
        speakerImage: 'nacho.svg',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'antoniocarlon': {
        name: '',
        description: '',
        speaker: 'Antonio Carlón',
        speakerImage: 'antonio.png',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'jesus': {
        name: '',
        description: '',
        speaker: 'Jesús',
        speakerImage: 'jesus.png',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'luisico': {
        name: '',
        description: '',
        speaker: 'Luis',
        speakerImage: 'luis.png',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'kikobeats': {
        name: '',
        description: '',
        speaker: 'Kiko',
        speakerImage: 'kikobeats.png',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'danihompanera': {
        name: '',
        description: '',
        speaker: 'Daniel Hompanera',
        speakerImage: 'dani.png',
        speakerTitle: '',
        when: '11:30-12:30'
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
