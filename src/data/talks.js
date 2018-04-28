const talks = {
    'soygema': {
        name: '',
        description: '',
        speaker: 'Gema Parreño',
        speakerImage: 'gema_nueva.svg',
        speakerTitle: '',
        when: '11:30-12:30'
    },
    'saleiva': {
        name: '',
        description: '',
        speaker: 'Sergio Álvarez',
        speakerImage: 'saleiva.svg',
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
    'ggarciapaola': {
        name: '',
        description: '',
        speaker: 'Paola García',
        speakerImage: 'paola.svg',
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
    'k4rliky': {
        name: '',
        description: '',
        speaker: 'Carlos',
        speakerImage: 'karliky.png',
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
