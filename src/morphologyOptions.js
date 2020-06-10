export default [
  { 
    value: 'A-',
    text: 'adjectif',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],      
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ],
      degré: [
        { value: '-', text: '-' },
        { value: 'C', text: 'comparatif' },
        { value: 'S', text: 'superlatif' }
      ]
    } 
  },
  {
    value: 'N-',
    text: 'nom',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RA',
    text: 'article défini',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RD',
    text: 'pronom démonstratif',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RI',
    text: 'pronom interrogatif/indéfini',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RP',
    text: 'pronom personnel',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RR',
    text: 'pronom relatif',
    parsing: {
      cas: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      genre: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      nombre: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'V-',
    text: 'verbe',
    parsing: {
      voix: [
        { value: 'A', text: 'active' },
        { value: 'M', text: 'moyenne' },
        { value: 'P', text: 'passive' }
      ],
      mode: [
        {
          value: 'I',
          text: 'indicatif',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              { value: 'I', text: 'imparfait' },
              { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              { value: 'X', text: 'parfait' },
              { value: 'Y', text: 'plus-que-parfait' }
            ],
            personne: [
              { value: '1', text: '1ère' },
              { value: '2', text: '2ème' },
              { value: '3', text: '3ème' }
            ],
            nombre: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'D',
          text: 'impératif',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              { value: 'I', text: 'imparfait' },
              { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              { value: 'X', text: 'parfait' },
              { value: 'Y', text: 'plus-que-parfait' }
            ],
            personne: [
              // { value: '1', text: '1ère' },
              { value: '2', text: '2ème' },
              // { value: '3', text: '3ème' }
            ],
            nombre: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'S',
          text: 'subjonctif',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              { value: 'I', text: 'imparfait' },
              { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              { value: 'X', text: 'parfait' },
              { value: 'Y', text: 'plus-que-parfait' }
            ],
            personne: [
              { value: '1', text: '1ère' },
              { value: '2', text: '2ème' },
              { value: '3', text: '3ème' }
            ],
            nombre: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'O',
          text: 'optatif',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              { value: 'I', text: 'imparfait' },
              { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              { value: 'X', text: 'parfait' },
              { value: 'Y', text: 'plus-que-parfait' }
            ],
            personne: [
              { value: '1', text: '1ère' },
              { value: '2', text: '2ème' },
              { value: '3', text: '3ème' }
            ],
            nombre: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'N',
          text: 'infinitif',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              // { value: 'I', text: 'imparfait' },
              // { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              // { value: 'X', text: 'parfait' },
              // { value: 'Y', text: 'plus-que-parfait' }
            ],
            // personne: [
            //   { value: '1', text: '1ère' },
            //   { value: '2', text: '2ème' },
            //   { value: '3', text: '3ème' }
            // ],
            // nombre: [
            //   { value: 'S', text: 'sg' },
            //   { value: 'P', text: 'pl' }
            // ]
          }
        },
        {
          value: 'P',
          text: 'participe',
          parsing: {
            temps: [
              { value: 'P', text: 'présent' },
              // { value: 'I', text: 'imparfait' },
              // { value: 'F', text: 'futur' },
              { value: 'A', text: 'aoriste' },
              // { value: 'X', text: 'parfait' },
              // { value: 'Y', text: 'plus-que-parfait' }
            ],
            // personne: [
            //   { value: '1', text: '1ère' },
            //   { value: '2', text: '2ème' },
            //   { value: '3', text: '3ème' }
            // ],
            cas: [
              { value: 'N', text: 'N' },
              { value: 'A', text: 'A' },
              { value: 'G', text: 'G' },
              { value: 'D', text: 'D' }
            ],
            genre: [
              { value: 'M', text: 'm' },
              { value: 'F', text: 'f' },
              { value: 'N', text: 'n' }
            ],
            nombre: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ],
          }
        }
      ]
    }
  },
  { value: 'P-', text: 'préposition' },
  { value: 'X-', text: 'particule' },
  { value: 'C-', text: 'conjonction' },
  { value: 'D-', text: 'adverbe' },
  { value: 'I-', text: 'interjection' }
];