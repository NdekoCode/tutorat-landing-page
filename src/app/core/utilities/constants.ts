import { Course, User } from './types'

export enum GLOBAL_CONSTANTS {
  ALERT_TIMEOUT = 4500,
  AUTH_TIMEOUT = 5500,
  AUTH_TIMEOUT_LOGIN = 2000,
  SLIDE_TIMEOUT = 5000
}
export enum DOCUMENT_IDENTITY_TYPE {
  ID_CARD = 2,
  PASSPORT = 3
}

export enum DOCUMENT_CERTIFICATION_TYPE {
  CERTIFICATION = 4,
  DIPLOMA = 5
}
export const IDENTITY_TYPE_NAME = 'IDENTITY'
export const CERTIFICATION_TYPE_NAME = 'CERTIFICATION'
export const TUTOR_REQUIRED_FIELDS = Object.freeze([
  'bio',
  'hourlyRate',
  'specialization',
  'video',
  'document'
])
export const ALERT_COLORS = Object.freeze({
  error: 'error-color',
  success: 'success-color',
  warning: 'warning-color',
  infos: 'infos-color'
})
export const ALERT_BG_COLORS = Object.freeze({
  error: 'bg-error',
  success: 'bg-success',
  warning: 'bg-warning',
  infos: 'bg-infos'
})

export const ALERT_AUTH = Object.freeze({
  signup: {
    error: {
      alertTitle: 'Votre inscription est revoquer',
      alertMessage: ''
    },
    success: {
      alertTitle: 'Inscription faite avec succés',
      alertMessage: "Un email de verification vous a été envoyer à l'adresse "
    }
  },
  login: {
    error: {
      alertTitle: 'Erreur survenus lors de la connexion',
      alertMessage: ''
    },
    success: {
      alertTitle: 'Connexion reussis',
      alertMessage: 'Bravo, vous etes connecter avec succés !'
    }
  },
  tutor: {
    error: {
      alertTitle: 'Votre inscription est revoquer',
      alertMessage: ''
    },
    success: {
      alertTitle: 'Bravo vous etes tuteurs',
      alertMessage: ''
    }
  }
})

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Geometry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    name: 'Geographie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    name: 'Physique',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 4,
    name: 'Trigonometrie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 5,
    name: 'Chimie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 6,
    name: 'Math',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 7,
    name: 'Anglais',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 8,
    name: 'Santé',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]
export const USERS: User[] = [
  {
    firstName: 'Terry',
    lastName: 'Medhurst',
    gender: 'male',
    email: 'atuny0@sohu.com',
    phoneNumber: '+63 791 675 8914',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    address: {
      address: '1745 T Street Southeast',
      city: 'Washington',
      postalCode: '20020',
      state: 'DC'
    },
    tutor: null,
    id: 1
  },
  {
    firstName: 'Sheldon',
    lastName: 'Quigley',

    gender: 'male',
    email: 'hbingley1@plala.or.jp',
    phoneNumber: '+7 813 117 7139',
    avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
    address: {
      address: '6007 Applegate Lane',
      city: 'Louisville',
      postalCode: '40219',
      state: 'KY'
    },
    tutor: null,
    id: 2
  },
  {
    firstName: 'Terrill',
    lastName: 'Hills',

    gender: 'male',
    email: 'rshawe2@51.la',
    phoneNumber: '+63 739 292 7942',
    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    address: {
      address: '560 Penstock Drive',
      city: 'Grass Valley',
      postalCode: '95945',
      state: 'CA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 39,
      transport: 1,
      specialization: ['Geometry', 'Geographie', 'Physique'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=21',
        description: 'Introduction to Terrill Hills tutoring services'
      },
      address: {
        address: '560 Penstock Drive',
        city: 'Grass Valley',
        postalCode: '95945',
        state: 'CA'
      }
    },
    id: 3
  },
  {
    firstName: 'Miles',
    lastName: 'Cummerata',

    gender: 'male',
    email: 'yraigatt3@nature.com',
    phoneNumber: '+86 461 145 4186',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
    address: {
      address: '150 Carter Street',
      city: 'Manchester',
      postalCode: '06040',
      state: 'CT'
    },
    tutor: null,
    id: 4
  },
  {
    firstName: 'Mavis',
    lastName: 'Schultz',

    gender: 'male',
    email: 'kmeus4@upenn.edu',
    phoneNumber: '+372 285 771 1911',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    address: {
      address: '2721 Lindsay Avenue',
      city: 'Louisville',
      postalCode: '40206',
      state: 'KY'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 2,
      specialization: ['Physique', 'Trigonometrie', 'Geographie'],
      video: {
        url: 'https://www.youtube.com/embed/1H5hyXn1soM',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=41',
        description: 'Introduction to Mavis Schultz tutoring services'
      },
      address: {
        address: '2721 Lindsay Avenue',
        city: 'Louisville',
        postalCode: '40206',
        state: 'KY'
      }
    },
    id: 5
  },
  {
    firstName: 'Alison',
    lastName: 'Reichert',

    gender: 'female',
    email: 'jtreleven5@nhs.uk',
    phoneNumber: '+351 527 735 3642',
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    address: {
      address: '18 Densmore Drive',
      city: 'Essex',
      postalCode: '05452',
      state: 'VT'
    },
    tutor: null,
    id: 6
  },
  {
    firstName: 'Oleta',
    lastName: 'Abbott',

    gender: 'female',
    email: 'dpettegre6@columbia.edu',
    phoneNumber: '+62 640 802 7111',
    avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    address: {
      address: '637 Britannia Drive',
      city: 'Vallejo',
      postalCode: '94591',
      state: 'CA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 1,
      specialization: ['Chimie', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/jNSiuyBauG4',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=61',
        description: 'Introduction to Oleta Abbott tutoring services'
      },
      address: {
        address: '637 Britannia Drive',
        city: 'Vallejo',
        postalCode: '94591',
        state: 'CA'
      }
    },
    id: 7
  },
  {
    firstName: 'Ewell',
    lastName: 'Mueller',

    gender: 'male',
    email: 'ggude7@chron.com',
    phoneNumber: '+86 946 297 2275',
    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
    address: {
      address: '5601 West Crocus Drive',
      city: 'Glendale',
      postalCode: '85306',
      state: 'AZ'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 33,
      transport: 0,
      specialization: ['Math', 'Physique'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=71',
        description: 'Introduction to Ewell Mueller tutoring services'
      },
      address: {
        address: '5601 West Crocus Drive',
        city: 'Glendale',
        postalCode: '85306',
        state: 'AZ'
      }
    },
    id: 8
  },
  {
    firstName: 'Demetrius',
    lastName: 'Corkery',

    gender: 'male',
    email: 'nloiterton8@aol.com',
    phoneNumber: '+86 356 590 9727',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    address: {
      address: '5403 Illinois Avenue',
      city: 'Nashville',
      postalCode: '37209',
      state: 'TN'
    },
    tutor: null,
    id: 9
  },
  {
    firstName: 'Eleanora',
    lastName: 'Price',

    gender: 'female',
    email: 'umcgourty9@jalbum.net',
    phoneNumber: '+60 184 408 0824',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    address: {
      address: '8821 West Myrtle Avenue',
      city: 'Glendale',
      postalCode: '85305',
      state: 'AZ'
    },
    tutor: null,
    id: 10
  },
  {
    firstName: 'Marcel',
    lastName: 'Jones',

    gender: 'male',
    email: 'acharlota@liveinternet.ru',
    phoneNumber: '+967 253 210 0344',
    avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
    address: {
      address: '2203 7th Street Road',
      city: 'Louisville',
      postalCode: '40208',
      state: 'KY'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 3,
      specialization: ['Physique', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/14uVY4S19-4',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=101',
        description: 'Introduction to Marcel Jones tutoring services'
      },
      address: {
        address: '2203 7th Street Road',
        city: 'Louisville',
        postalCode: '40208',
        state: 'KY'
      }
    },
    id: 11
  },
  {
    firstName: 'Assunta',
    lastName: 'Rath',

    gender: 'female',
    email: 'rhallawellb@dropbox.com',
    phoneNumber: '+380 962 542 6549',
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
    address: {
      address: '6463 Vrain Street',
      city: 'Arvada',
      postalCode: '80003',
      state: 'CO'
    },
    tutor: null,
    id: 12
  },
  {
    firstName: 'Trace',
    lastName: 'Douglas',

    gender: 'male',
    email: 'lgribbinc@posterous.com',
    phoneNumber: '+1 609 937 3468',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    address: {
      address: '87 Horseshoe Drive',
      city: 'West Windsor',
      postalCode: '05037',
      state: 'VT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 43,
      transport: 2,
      specialization: ['Physique', 'Geometry', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=121',
        description: 'Introduction to Trace Douglas tutoring services'
      },
      address: {
        address: '87 Horseshoe Drive',
        city: 'West Windsor',
        postalCode: '05037',
        state: 'VT'
      }
    },
    id: 13
  },
  {
    firstName: 'Enoch',
    lastName: 'Lynch',

    gender: 'male',
    email: 'mturleyd@tumblr.com',
    phoneNumber: '+94 912 100 5118',
    avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
    address: {
      address: '60 Desousa Drive',
      city: 'Manchester',
      postalCode: '06040',
      state: 'CT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 41,
      transport: 1,
      specialization: ['Trigonometrie', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=131',
        description: 'Introduction to Enoch Lynch tutoring services'
      },
      address: {
        address: '60 Desousa Drive',
        city: 'Manchester',
        postalCode: '06040',
        state: 'CT'
      }
    },
    id: 14
  },
  {
    firstName: 'Jeanne',
    lastName: 'Halvorson',

    gender: 'female',
    email: 'kminchelle@qq.com',
    phoneNumber: '+86 581 108 7855',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    address: {
      address: '4 Old Colony Way',
      city: 'Yarmouth',
      postalCode: '02664',
      state: 'MA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 41,
      transport: 0,
      specialization: ['Anglais', 'Chimie', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/gK_BMewAnOk',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=141',
        description: 'Introduction to Jeanne Halvorson tutoring services'
      },
      address: {
        address: '4 Old Colony Way',
        city: 'Yarmouth',
        postalCode: '02664',
        state: 'MA'
      }
    },
    id: 15
  },
  {
    firstName: 'Trycia',
    lastName: 'Fadel',

    gender: 'female',
    email: 'dpierrof@vimeo.com',
    phoneNumber: '+420 833 708 0340',
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    address: {
      address: '314 South 17th Street',
      city: 'Nashville',
      postalCode: '37206',
      state: 'TN'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 0,
      specialization: ['Trigonometrie', 'Anglais', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/6S9jvoyIz_w',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=151',
        description: 'Introduction to Trycia Fadel tutoring services'
      },
      address: {
        address: '314 South 17th Street',
        city: 'Nashville',
        postalCode: '37206',
        state: 'TN'
      }
    },
    id: 16
  },
  {
    firstName: 'Bradford',
    lastName: 'Prohaska',

    gender: 'male',
    email: 'vcholdcroftg@ucoz.com',
    phoneNumber: '+420 874 628 3710',
    avatar: 'https://randomuser.me/api/portraits/women/70.jpg',
    address: {
      address: '1649 Timberridge Court',
      city: 'Fayetteville',
      postalCode: '72704',
      state: 'AR'
    },
    tutor: null,
    id: 17
  },
  {
    firstName: 'Arely',
    lastName: 'Skiles',

    gender: 'male',
    email: 'sberminghamh@chron.com',
    phoneNumber: '+55 886 766 8617',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    address: {
      address: '5461 West Shades Valley Drive',
      city: 'Montgomery',
      postalCode: '36108',
      state: 'AL'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 32,
      transport: 4,
      specialization: ['Santé', 'Geographie', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/7H-phEizrTY',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=171',
        description: 'Introduction to Arely Skiles tutoring services'
      },
      address: {
        address: '5461 West Shades Valley Drive',
        city: 'Montgomery',
        postalCode: '36108',
        state: 'AL'
      }
    },
    id: 18
  },
  {
    firstName: 'Gust',
    lastName: 'Purdy',

    gender: 'male',
    email: 'bleveragei@so-net.ne.jp',
    phoneNumber: '+86 886 889 0258',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      postalCode: '37076',
      state: 'TN'
    },
    tutor: null,
    id: 19
  },
  {
    firstName: 'Lenna',
    lastName: 'Renner',

    gender: 'female',
    email: 'aeatockj@psu.edu',
    phoneNumber: '+1 904 601 7177',
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    address: {
      address: '22572 Toreador Drive',
      city: 'Salinas',
      postalCode: '93908',
      state: 'CA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 3,
      specialization: ['Geometry', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=191',
        description: 'Introduction to Lenna Renner tutoring services'
      },
      address: {
        address: '22572 Toreador Drive',
        city: 'Salinas',
        postalCode: '93908',
        state: 'CA'
      }
    },
    id: 20
  },
  {
    firstName: 'Doyle',
    lastName: 'Ernser',

    gender: 'male',
    email: 'ckensleyk@pen.io',
    phoneNumber: '+86 634 419 6839',
    avatar: 'https://randomuser.me/api/portraits/women/78.jpg',
    address: {
      address: '3034 Mica Street',
      city: 'Fayetteville',
      postalCode: '72704',
      state: 'AR'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 1,
      specialization: ['Chimie', 'Physique', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=201',
        description: 'Introduction to Doyle Ernser tutoring services'
      },
      address: {
        address: '3034 Mica Street',
        city: 'Fayetteville',
        postalCode: '72704',
        state: 'AR'
      }
    },
    id: 21
  },
  {
    firstName: 'Tressa',
    lastName: 'Weber',

    gender: 'female',
    email: 'froachel@howstuffworks.com',
    phoneNumber: '+34 517 104 6248',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    address: {
      address: '3729 East Mission Boulevard',
      city: 'Fayetteville',
      postalCode: '72703',
      state: 'AR'
    },
    tutor: null,
    id: 22
  },
  {
    firstName: 'Felicity',
    lastName: "O'Reilly",

    gender: 'female',
    email: 'beykelhofm@wikispaces.com',
    phoneNumber: '+63 919 564 1690',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    address: {
      address: '5114 Greentree Drive',
      city: 'Nashville',
      postalCode: '37211',
      state: 'TN'
    },
    tutor: null,
    id: 23
  },
  {
    firstName: 'Jocelyn',
    lastName: 'Schuster',

    gender: 'male',
    email: 'brickeardn@fema.gov',
    phoneNumber: '+7 968 462 1292',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    address: {
      address: '3466 Southview Avenue',
      city: 'Montgomery',
      postalCode: '36111',
      state: 'AL'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 32,
      transport: 4,
      specialization: ['Santé', 'Geometry', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=231',
        description: 'Introduction to Jocelyn Schuster tutoring services'
      },
      address: {
        address: '3466 Southview Avenue',
        city: 'Montgomery',
        postalCode: '36111',
        state: 'AL'
      }
    },
    id: 24
  },
  {
    firstName: 'Edwina',
    lastName: 'Ernser',

    gender: 'female',
    email: 'dfundello@amazon.co.jp',
    phoneNumber: '+86 376 986 8945',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    address: {
      address: '1513 Cathy Street',
      city: 'Savannah',
      postalCode: '31415',
      state: 'GA'
    },
    tutor: null,
    id: 25
  },
  {
    firstName: 'Griffin',
    lastName: 'Braun',

    gender: 'male',
    email: 'lgronaverp@cornell.edu',
    phoneNumber: '+62 511 790 0161',
    avatar: 'https://randomuser.me/api/portraits/women/93.jpg',
    address: {
      address: '600 West 19th Avenue',
      city: 'Anchorage',
      postalCode: '99503',
      state: 'AK'
    },
    tutor: null,
    id: 26
  },
  {
    firstName: 'Piper',
    lastName: 'Schowalter',

    gender: 'female',
    email: 'fokillq@amazon.co.jp',
    phoneNumber: '+60 785 960 7918',
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    address: {
      address: '1208 Elkader Court North',
      city: 'Nashville',
      postalCode: '37013',
      state: 'TN'
    },
    tutor: null,
    id: 27
  },
  {
    firstName: 'Kody',
    lastName: 'Terry',

    gender: 'male',
    email: 'xisherwoodr@ask.com',
    phoneNumber: '+81 859 545 8951',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    address: {
      address: '210 Green Road',
      city: 'Manchester',
      postalCode: '06042',
      state: 'CT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 41,
      transport: 1,
      specialization: ['Physique', 'Anglais', 'Geographie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=271',
        description: 'Introduction to Kody Terry tutoring services'
      },
      address: {
        address: '210 Green Road',
        city: 'Manchester',
        postalCode: '06042',
        state: 'CT'
      }
    },
    id: 28
  },
  {
    firstName: 'Macy',
    lastName: 'Greenfelder',

    gender: 'female',
    email: 'jissetts@hostgator.com',
    phoneNumber: '+81 915 649 2384',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    address: {
      address: '49548 Road 200',
      city: "O'Neals",
      postalCode: '93645',
      state: 'CA'
    },
    tutor: null,
    id: 29
  },
  {
    firstName: 'Maurine',
    lastName: 'Stracke',

    gender: 'female',
    email: 'kdulyt@umich.edu',
    phoneNumber: '+48 143 590 6847',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    address: {
      address: '81 Seaton Place Northwest',
      city: 'Washington',
      postalCode: '20001',
      state: 'DC'
    },
    tutor: null,
    id: 30
  },
  {
    firstName: 'Luciano',
    lastName: 'Sauer',

    gender: 'male',
    email: 'smargiottau@altervista.org',
    phoneNumber: '+420 491 212 0935',
    avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
    address: {
      address: '1267 Martin Street',
      city: 'Nashville',
      postalCode: '37203',
      state: 'TN'
    },
    tutor: null,
    id: 31
  },
  {
    firstName: 'Kaya',
    lastName: 'Emard',

    gender: 'female',
    email: 'lskeelv@webeden.co.uk',
    phoneNumber: '+1 813 801 4535',
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
    address: {
      address: '7431 Candace Way',
      city: 'Louisville',
      postalCode: '40214',
      state: 'KY'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 0,
      specialization: ['Chimie', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=311',
        description: 'Introduction to Kaya Emard tutoring services'
      },
      address: {
        address: '7431 Candace Way',
        city: 'Louisville',
        postalCode: '40214',
        state: 'KY'
      }
    },
    id: 32
  },
  {
    firstName: 'Lee',
    lastName: 'Schmidt',

    gender: 'male',
    email: 'gsilcockw@infoseek.co.jp',
    phoneNumber: '+66 835 467 6865',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    address: {
      address: '1407 Walden Court',
      city: 'Crofton',
      postalCode: '21114',
      state: 'MD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 39,
      transport: 2,
      specialization: ['Anglais', 'Math', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=321',
        description: 'Introduction to Lee Schmidt tutoring services'
      },
      address: {
        address: '1407 Walden Court',
        city: 'Crofton',
        postalCode: '21114',
        state: 'MD'
      }
    },
    id: 33
  },
  {
    firstName: 'Darien',
    lastName: 'Witting',

    gender: 'male',
    email: 'aaughtonx@businessweek.com',
    phoneNumber: '+33 888 700 6632',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    address: {
      address: '5906 Milton Avenue',
      city: 'Deale',
      postalCode: '20751',
      state: 'MD'
    },
    tutor: null,
    id: 34
  },
  {
    firstName: 'Jacklyn',
    lastName: 'Schimmel',

    gender: 'female',
    email: 'mbrooksbanky@gnu.org',
    phoneNumber: '+63 967 545 4702',
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
    address: {
      address: '74 Springfield Street',
      city: 'Agawam',
      postalCode: '01001',
      state: 'MA'
    },
    tutor: null,
    id: 35
  },
  {
    firstName: 'Angelica',
    lastName: 'Baumbach',

    gender: 'female',
    email: 'dalmondz@joomla.org',
    phoneNumber: '+62 805 799 5971',
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
    address: {
      address: '2905 Stonebridge Court',
      city: 'Norman',
      postalCode: '73071',
      state: 'OK'
    },
    tutor: null,
    id: 36
  },
  {
    firstName: 'Delfina',
    lastName: 'Ziemann',

    gender: 'female',
    email: 'nwytchard10@blogspot.com',
    phoneNumber: '+84 580 557 5307',
    avatar: 'https://randomuser.me/api/portraits/women/49.jpg',
    address: {
      address: '20930 Todd Valley Road',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: null,
    id: 37
  },
  {
    firstName: 'Thaddeus',
    lastName: 'McCullough',

    gender: 'male',
    email: 'igannan11@microsoft.com',
    phoneNumber: '+62 358 347 4052',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
    address: {
      address: '5928 West Mauna Loa Lane',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 33,
      transport: 3,
      specialization: ['Geometry', 'Math', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=371',
        description: 'Introduction to Thaddeus McCullough tutoring services'
      },
      address: {
        address: '5928 West Mauna Loa Lane',
        city: 'Glendale',
        postalCode: '85306',
        state: 'AZ'
      }
    },
    id: 38
  },
  {
    firstName: 'Salvatore',
    lastName: 'Fisher',

    gender: 'male',
    email: 'lgherardi12@washington.edu',
    phoneNumber: '+46 365 156 0334',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    address: {
      address: '802 Madison Street Northwest',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 2,
      specialization: ['Physique', 'Chimie', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=381',
        description: 'Introduction to Salvatore Fisher tutoring services'
      },
      address: {
        address: '802 Madison Street Northwest',
        city: 'Goma',
        postalCode: '05753',
        state: 'CD'
      }
    },
    id: 39
  },
  {
    firstName: 'Jasmin',
    lastName: 'Hermiston',

    gender: 'male',
    email: 'lgutridge13@sun.com',
    phoneNumber: '+81 649 401 1274',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    address: {
      address: '2811 Battery Place Northwest',
      city: 'Washington',
      postalCode: '20016',
      state: 'DC'
    },
    tutor: null,
    id: 40
  },
  {
    firstName: 'Nicklaus',
    lastName: 'Cruickshank',

    gender: 'male',
    email: 'cslateford14@blogspot.com',
    phoneNumber: '+62 873 274 2549',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    address: {
      address: '210 Lacross Lane',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 44,
      transport: 3,
      specialization: ['Geographie', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=401',
        description: 'Introduction to Nicklaus Cruickshank tutoring services'
      },
      address: {
        address: '210 Lacross Lane',
        city: 'Goma',
        postalCode: '05753',
        state: 'CD'
      }
    },
    id: 41
  },
  {
    firstName: 'Tiara',
    lastName: 'Rolfson',

    gender: 'female',
    email: 'mhaslegrave15@springer.com',
    phoneNumber: '+351 554 736 8690',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    address: {
      address: '2010 Rising Hill Drive',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 35,
      transport: 4,
      specialization: ['Geometry', 'Physique', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=411',
        description: 'Introduction to Tiara Rolfson tutoring services'
      },
      address: {
        address: '2010 Rising Hill Drive',
        city: 'Goma',
        postalCode: '05753',
        state: 'CD'
      }
    },
    id: 42
  },
  {
    firstName: 'Garret',
    lastName: 'Klocko',

    gender: 'male',
    email: 'kbrecknock16@marriott.com',
    phoneNumber: '+86 787 794 2189',
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    address: {
      address: '388 East Main Street',
      city: 'Goma',
      postalCode: '05753',
      state: 'CD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 43,
      transport: 4,
      specialization: ['Math', 'Santé', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=421',
        description: 'Introduction to Garret Klocko tutoring services'
      },
      address: {
        address: '388 East Main Street',
        postalCode: '05753',
        city: 'Goma',
        state: 'CD'
      }
    },
    id: 43
  },
  {
    firstName: 'Reginald',
    lastName: 'Wisoky',

    gender: 'male',
    email: 'rlaxe17@tamu.edu',
    phoneNumber: '+420 762 758 3107',
    avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
    address: {
      address: '450 Kinhawk Drive',
      city: 'Nashville',
      postalCode: '37211',
      state: 'TN'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 4,
      specialization: ['Physique', 'Geographie', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=431',
        description: 'Introduction to Reginald Wisoky tutoring services'
      },
      address: {
        address: '450 Kinhawk Drive',
        city: 'Nashville',
        postalCode: '37211',
        state: 'TN'
      }
    },
    id: 44
  },
  {
    firstName: 'Humberto',
    lastName: 'Botsford',

    gender: 'male',
    email: 'pidill18@china.com.cn',
    phoneNumber: '+228 252 183 9834',
    avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
    address: {
      address: '131 Westerly Street',
      city: 'Manchester',
      postalCode: '06042',
      state: 'CT'
    },
    tutor: null,
    id: 45
  },
  {
    firstName: 'Justus',
    lastName: 'Sipes',

    gender: 'male',
    email: 'rmcritchie19@topsy.com',
    phoneNumber: '+504 281 452 1944',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    address: {
      address: '308 Woodleaf Court',
      city: 'Glen Burnie',
      postalCode: '21061',
      state: 'MD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 39,
      transport: 4,
      specialization: ['Santé', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=451',
        description: 'Introduction to Justus Sipes tutoring services'
      },
      address: {
        address: '308 Woodleaf Court',
        city: 'Glen Burnie',
        postalCode: '21061',
        state: 'MD'
      }
    },
    id: 46
  },
  {
    firstName: 'Coralie',
    lastName: 'Boyle',

    gender: 'female',
    email: 'rlangston1a@51.la',
    phoneNumber: '+352 643 270 7653',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    address: {
      address: '8502 Madrone Avenue',
      city: 'Louisville',
      postalCode: '40258',
      state: 'KY'
    },
    tutor: null,
    id: 47
  },
  {
    firstName: 'Felicita',
    lastName: 'Gibson',

    gender: 'female',
    email: 'jevanson1b@admin.ch',
    phoneNumber: '+86 484 331 2036',
    avatar: 'https://randomuser.me/api/portraits/women/92.jpg',
    address: {
      address: '23 Sable Run Lane',
      city: 'Methuen',
      postalCode: '01844',
      state: 'MA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 42,
      transport: 0,
      specialization: ['Geometry', 'Santé', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=471',
        description: 'Introduction to Felicita Gibson tutoring services'
      },
      address: {
        address: '23 Sable Run Lane',
        city: 'Methuen',
        postalCode: '01844',
        state: 'MA'
      }
    },
    id: 48
  },
  {
    firstName: 'Pearl',
    lastName: 'Blick',

    gender: 'female',
    email: 'ssarjant1c@statcounter.com',
    phoneNumber: '+261 856 633 1458',
    avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
    address: {
      address: '716 Waller Road',
      city: 'Brentwood',
      postalCode: '37027',
      state: 'TN'
    },
    tutor: null,
    id: 49
  },
  {
    firstName: 'Johnathon',
    lastName: 'Predovic',

    gender: 'male',
    email: 'xlinster1d@bravesites.com',
    phoneNumber: '+351 572 534 5789',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    address: {
      address: '416 McIver Street',
      city: 'Nashville',
      postalCode: '37211',
      state: 'TN'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 1,
      specialization: ['Anglais', 'Geographie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=491',
        description: 'Introduction to Johnathon Predovic tutoring services'
      },
      address: {
        address: '416 McIver Street',
        city: 'Nashville',
        postalCode: '37211',
        state: 'TN'
      }
    },
    id: 50
  },
  {
    firstName: 'Jerry',
    lastName: 'Kertzmann',

    gender: 'male',
    email: 'tmullender1e@scientificamerican.com',
    phoneNumber: '+1 281 300 2097',
    avatar: 'https://randomuser.me/api/portraits/men/69.jpg',
    address: {
      address: '1508 Massachusetts Avenue Southeast',
      city: 'Washington',
      postalCode: '20003',
      state: 'DC'
    },
    tutor: null,
    id: 51
  },
  {
    firstName: 'Elbert',
    lastName: 'Gottlieb',

    gender: 'male',
    email: 'gmein1f@nasa.gov',
    phoneNumber: '+86 820 969 6388',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    address: {
      address: '5615 West Villa Maria Drive',
      city: 'Glendale',
      postalCode: '85308',
      state: 'AZ'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 33,
      transport: 3,
      specialization: ['Geographie', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=511',
        description: 'Introduction to Elbert Gottlieb tutoring services'
      },
      address: {
        address: '5615 West Villa Maria Drive',
        city: 'Glendale',
        postalCode: '85308',
        state: 'AZ'
      }
    },
    id: 52
  },
  {
    firstName: 'Sincere',
    lastName: 'Mueller',

    gender: 'female',
    email: 'gmaccumeskey1g@buzzfeed.com',
    phoneNumber: '+62 206 931 3800',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    address: {
      address: '3162 Martin Luther King Junior Boulevard',
      city: 'Fayetteville',
      postalCode: '72704',
      state: 'AR'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 4,
      specialization: ['Geometry', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=521',
        description: 'Introduction to Sincere Mueller tutoring services'
      },
      address: {
        address: '3162 Martin Luther King Junior Boulevard',
        city: 'Fayetteville',
        postalCode: '72704',
        state: 'AR'
      }
    },
    id: 53
  },
  {
    firstName: 'Telly',
    lastName: 'Spinka',

    gender: 'female',
    email: 'bpetts1h@smugmug.com',
    phoneNumber: '+62 820 759 6656',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    address: {
      address: '5306 Ritchie Highway',
      city: 'Baltimore',
      postalCode: '21225',
      state: 'MD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 39,
      transport: 0,
      specialization: ['Trigonometrie', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=531',
        description: 'Introduction to Telly Spinka tutoring services'
      },
      address: {
        address: '5306 Ritchie Highway',
        city: 'Baltimore',
        postalCode: '21225',
        state: 'MD'
      }
    },
    id: 54
  },
  {
    firstName: 'Hal',
    lastName: 'Keebler',

    gender: 'male',
    email: 'ajozef1i@usatoday.com',
    phoneNumber: '+48 553 262 8275',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    address: {
      address: '109 Summit Street',
      city: 'Burlington',
      postalCode: '05401',
      state: 'VT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 44,
      transport: 4,
      specialization: ['Geometry', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=541',
        description: 'Introduction to Hal Keebler tutoring services'
      },
      address: {
        address: '109 Summit Street',
        city: 'Burlington',
        postalCode: '05401',
        state: 'VT'
      }
    },
    id: 55
  },
  {
    firstName: 'Megane',
    lastName: 'Armstrong',

    gender: 'female',
    email: 'oyakushkev1j@oracle.com',
    phoneNumber: '+1 941 123 2756',
    avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
    address: {
      address: '816 West 19th Avenue',
      city: 'Anchorage',
      postalCode: '99503',
      state: 'AK'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 61,
      transport: 1,
      specialization: ['Geographie', 'Math', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=551',
        description: 'Introduction to Megane Armstrong tutoring services'
      },
      address: {
        address: '816 West 19th Avenue',
        city: 'Anchorage',
        postalCode: '99503',
        state: 'AK'
      }
    },
    id: 56
  },
  {
    firstName: 'Toy',
    lastName: 'Olson',

    gender: 'male',
    email: 'bpickering1k@clickbank.net',
    phoneNumber: '+1 423 134 5423',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    address: {
      address: '172 Alburg Springs Road',
      city: 'Alburgh',
      postalCode: '05440',
      state: 'VT'
    },
    tutor: null,
    id: 57
  },
  {
    firstName: 'Deanna',
    lastName: 'Glover',

    gender: 'female',
    email: 'nworley1l@thetimes.co.uk',
    phoneNumber: '+994 653 357 2437',
    avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    address: {
      address: '159 Downey Drive',
      city: 'Manchester',
      postalCode: '06040',
      state: 'CT'
    },
    tutor: null,
    id: 58
  },
  {
    firstName: 'Marcella',
    lastName: 'Shanahan',

    gender: 'female',
    email: 'klife1m@i2i.jp',
    phoneNumber: '+62 248 837 6818',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
    address: {
      address: '125 John Street',
      city: 'Santa Cruz',
      postalCode: '95060',
      state: 'CA'
    },
    tutor: null,
    id: 59
  },
  {
    firstName: 'Rachel',
    lastName: 'Jacobson',

    gender: 'female',
    email: 'dlambarth1n@blinklist.com',
    phoneNumber: '+420 101 364 3391',
    avatar: 'https://randomuser.me/api/portraits/men/89.jpg',
    address: {
      address: '1101 Lotus Avenue',
      city: 'Glen Burnie',
      postalCode: '21061',
      state: 'MD'
    },
    tutor: null,
    id: 60
  },
  {
    firstName: 'Nora',
    lastName: 'Sawayn',

    gender: 'female',
    email: 'cepgrave1o@biblegateway.com',
    phoneNumber: '+1 614 425 6745',
    avatar: 'https://randomuser.me/api/portraits/women/94.jpg',
    address: null,
    tutor: null,
    id: 61
  },
  {
    firstName: 'Mozell',
    lastName: "O'Connell",

    gender: 'female',
    email: 'mpoyner1p@google.co.uk',
    phoneNumber: '+86 694 202 1947',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    address: {
      address: '491 Arabian Way',
      city: 'Grand Junction',
      postalCode: '81504',
      state: 'CO'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 39,
      transport: 4,
      specialization: ['Physique', 'Trigonometrie', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=611',
        description: "Introduction to Mozell O'Connell tutoring services"
      },
      address: {
        address: '491 Arabian Way',
        city: 'Grand Junction',
        postalCode: '81504',
        state: 'CO'
      }
    },
    id: 62
  },
  {
    firstName: 'Nasir',
    lastName: 'Leuschke',

    gender: 'male',
    email: 'eburras1q@go.com',
    phoneNumber: '+62 770 940 9687',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    address: {
      address: '12245 West 71st Place',
      city: 'Arvada',
      postalCode: '80004',
      state: 'CO'
    },
    tutor: null,
    id: 63
  },
  {
    firstName: 'Quinn',
    lastName: 'Witting',

    gender: 'male',
    email: 'gfernandes1r@virginia.edu',
    phoneNumber: '+220 898 206 2696',
    avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    address: {
      address: '80 North East Street',
      city: 'Holyoke',
      postalCode: '01040',
      state: 'MA'
    },
    tutor: null,
    id: 64
  },
  {
    firstName: 'Jeanne',
    lastName: "O'Keefe",

    gender: 'female',
    email: 'hollet1s@trellian.com',
    phoneNumber: '+62 717 913 4633',
    avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
    address: {
      address: '4695 East Huntsville Road',
      city: 'Fayetteville',
      postalCode: '72701',
      state: 'AR'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 4,
      specialization: ['Trigonometrie', 'Santé', 'Chimie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=641',
        description: "Introduction to Jeanne O'Keefe tutoring services"
      },
      address: {
        address: '4695 East Huntsville Road',
        city: 'Fayetteville',
        postalCode: '72701',
        state: 'AR'
      }
    },
    id: 65
  },
  {
    firstName: 'Terrence',
    lastName: 'Koelpin',

    gender: 'male',
    email: 'hfasey1t@home.pl',
    phoneNumber: '+63 460 531 0660',
    avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
    address: {
      address: '310 Timrod Road',
      city: 'Manchester',
      postalCode: '06040',
      state: 'CT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 41,
      transport: 1,
      specialization: ['Math', 'Chimie', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=651',
        description: 'Introduction to Terrence Koelpin tutoring services'
      },
      address: {
        address: '310 Timrod Road',
        city: 'Manchester',
        postalCode: '06040',
        state: 'CT'
      }
    },
    id: 66
  },
  {
    firstName: 'Davonte',
    lastName: 'Heaney',

    gender: 'male',
    email: 'gbarhams1u@cnet.com',
    phoneNumber: '+52 250 381 1317',
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    address: {
      address: '1364 Capri Drive',
      city: 'Panama City',
      postalCode: '32405',
      state: 'FL'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 30,
      transport: 4,
      specialization: ['Geometry', 'Trigonometrie', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=661',
        description: 'Introduction to Davonte Heaney tutoring services'
      },
      address: {
        address: '1364 Capri Drive',
        city: 'Panama City',
        postalCode: '32405',
        state: 'FL'
      }
    },
    id: 67
  },
  {
    firstName: 'Everette',
    lastName: 'Prohaska',

    gender: 'female',
    email: 'rstrettle1v@globo.com',
    phoneNumber: '+55 539 822 6581',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    address: {
      address: '132 Laurel Green Court',
      city: 'Savannah',
      postalCode: '31419',
      state: 'GA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 32,
      transport: 4,
      specialization: ['Anglais', 'Trigonometrie', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=671',
        description: 'Introduction to Everette Prohaska tutoring services'
      },
      address: {
        address: '132 Laurel Green Court',
        city: 'Savannah',
        postalCode: '31419',
        state: 'GA'
      }
    },
    id: 68
  },
  {
    firstName: 'Oda',
    lastName: 'Schmidt',

    gender: 'male',
    email: 'btegler1w@elegantthemes.com',
    phoneNumber: '+55 537 574 0273',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    address: {
      address: '6657 West Rose Garden Lane',
      city: 'Glendale',
      postalCode: '85308',
      state: 'AZ'
    },
    tutor: null,
    id: 69
  },
  {
    firstName: 'Twila',
    lastName: 'Padberg',

    gender: 'female',
    email: 'cmasurel1x@baidu.com',
    phoneNumber: '+86 426 681 8895',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    address: null,
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 61,
      transport: 2,
      specialization: ['Physique', 'Chimie', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=691',
        description: 'Introduction to Twila Padberg tutoring services'
      },
      address: {
        address: '519 West 75th Avenue',
        city: 'Anchorage',
        postalCode: '99518',
        state: 'AK'
      }
    },
    id: 70
  },
  {
    firstName: 'Amelia',
    lastName: 'Mann',

    gender: 'female',
    email: 'omarsland1y@washingtonpost.com',
    phoneNumber: '+62 924 155 6791',
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    address: {
      address: '31353 Santa Elena Way',
      city: 'Union City',
      postalCode: '94587',
      state: 'CA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 37,
      transport: 3,
      specialization: ['Chimie', 'Anglais', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=701',
        description: 'Introduction to Amelia Mann tutoring services'
      },
      address: {
        address: '31353 Santa Elena Way',
        city: 'Union City',
        postalCode: '94587',
        state: 'CA'
      }
    },
    id: 71
  },
  {
    firstName: 'Frederique',
    lastName: 'Boehm',

    gender: 'female',
    email: 'mcrumpe1z@techcrunch.com',
    phoneNumber: '+63 528 723 2388',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    address: {
      address: '8398 West Denton Lane',
      city: 'Glendale',
      postalCode: '85305',
      state: 'AZ'
    },
    tutor: null,
    id: 72
  },
  {
    firstName: 'Clotilde',
    lastName: 'Larson',

    gender: 'female',
    email: 'wfeldon20@netlog.com',
    phoneNumber: '+86 773 539 4246',
    avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
    address: {
      address: '700 Winston Place',
      city: 'Anchorage',
      postalCode: '99504',
      state: 'AK'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 61,
      transport: 0,
      specialization: ['Geographie', 'Chimie', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=721',
        description: 'Introduction to Clotilde Larson tutoring services'
      },
      address: {
        address: '700 Winston Place',
        city: 'Anchorage',
        postalCode: '99504',
        state: 'AK'
      }
    },
    id: 73
  },
  {
    firstName: 'Moriah',
    lastName: 'Mills',

    gender: 'male',
    email: 'ahinckes21@google.es',
    phoneNumber: '+386 147 761 5345',
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    address: {
      address: '232 Maine Avenue',
      city: 'Panama City',
      postalCode: '32401',
      state: 'FL'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 30,
      transport: 4,
      specialization: ['Geographie', 'Santé', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=731',
        description: 'Introduction to Moriah Mills tutoring services'
      },
      address: {
        address: '232 Maine Avenue',
        city: 'Panama City',
        postalCode: '32401',
        state: 'FL'
      }
    },
    id: 74
  },
  {
    firstName: 'Claudia',
    lastName: 'Dooley',

    gender: 'female',
    email: 'ptilson22@360.cn',
    phoneNumber: '+86 477 915 2470',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    address: {
      address: '1 Kempf Drive',
      city: 'Easton',
      postalCode: '02375',
      state: 'MA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 42,
      transport: 2,
      specialization: ['Santé', 'Physique', 'Anglais'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=741',
        description: 'Introduction to Claudia Dooley tutoring services'
      },
      address: {
        address: '1 Kempf Drive',
        city: 'Easton',
        postalCode: '02375',
        state: 'MA'
      }
    },
    id: 75
  },
  {
    firstName: 'Deon',
    lastName: 'Gutkowski',

    gender: 'male',
    email: 'cgaber23@prlog.org',
    phoneNumber: '+30 927 372 5358',
    avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
    address: {
      address: '5811 Crossings Boulevard',
      city: 'Nashville',
      postalCode: '37013',
      state: 'TN'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 0,
      specialization: ['Math', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=751',
        description: 'Introduction to Deon Gutkowski tutoring services'
      },
      address: {
        address: '5811 Crossings Boulevard',
        city: 'Nashville',
        postalCode: '37013',
        state: 'TN'
      }
    },
    id: 76
  },
  {
    firstName: 'Amos',
    lastName: 'Weimann',

    gender: 'male',
    email: 'rkingswood24@usa.gov',
    phoneNumber: '+230 749 323 8084',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    address: {
      address: '5108 Franklin Street',
      city: 'Savannah',
      postalCode: '31405',
      state: 'GA'
    },
    tutor: null,
    id: 77
  },
  {
    firstName: 'Frankie',
    lastName: 'Hudson',

    gender: 'male',
    email: 'dbuist25@hao123.com',
    phoneNumber: '+33 604 197 4892',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    address: {
      address: '913 Fallview Trail',
      city: 'Nashville',
      postalCode: '37211',
      state: 'TN'
    },
    tutor: null,
    id: 78
  },
  {
    firstName: 'Harrison',
    lastName: 'Lemke',

    gender: 'male',
    email: 'pmoraleda26@symantec.com',
    phoneNumber: '+62 458 347 7200',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    address: {
      address: "270 Chrissy's Court",
      city: 'Goma',
      postalCode: '05443',
      state: 'CD'
    },
    tutor: null,
    id: 79
  },
  {
    firstName: 'Guy',
    lastName: 'Franecki',

    gender: 'male',
    email: 'vkohrt27@hostgator.com',
    phoneNumber: '+86 758 872 4898',
    avatar: 'https://randomuser.me/api/portraits/women/74.jpg',
    address: {
      address: '130 Old Route 103',
      city: 'Chester',
      postalCode: '05143',
      state: 'VT'
    },
    tutor: null,
    id: 80
  },
  {
    firstName: 'Sidney',
    lastName: 'Rutherford',

    gender: 'male',
    email: 'capplewhite28@nationalgeographic.com',
    phoneNumber: '+62 406 110 4091',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    address: {
      address: '10826 Pointe Royal Drive',
      city: 'Bakersfield',
      postalCode: '93311',
      state: 'CA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 35,
      transport: 1,
      specialization: ['Physique', 'Anglais', 'Math'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=801',
        description: 'Introduction to Sidney Rutherford tutoring services'
      },
      address: {
        address: '10826 Pointe Royal Drive',
        city: 'Bakersfield',
        postalCode: '93311',
        state: 'CA'
      }
    },
    id: 81
  },
  {
    firstName: 'Maymie',
    lastName: 'Yundt',

    gender: 'female',
    email: 'kogilvy29@blogtalkradio.com',
    phoneNumber: '+354 978 613 2483',
    avatar: 'https://randomuser.me/api/portraits/men/90.jpg',
    address: {
      address: '74 Ranch Drive',
      city: 'Montgomery',
      postalCode: '36109',
      state: 'AL'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 32,
      transport: 0,
      specialization: ['Chimie', 'Physique'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=811',
        description: 'Introduction to Maymie Yundt tutoring services'
      },
      address: {
        address: '74 Ranch Drive',
        city: 'Montgomery',
        postalCode: '36109',
        state: 'AL'
      }
    },
    id: 82
  },
  {
    firstName: 'Rita',
    lastName: 'Shields',

    gender: 'female',
    email: 'gconford2a@wordpress.com',
    phoneNumber: '+86 148 509 2978',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    address: {
      address: '6601 West Ocotillo Road',
      city: 'Glendale',
      postalCode: '85301',
      state: 'AZ'
    },
    tutor: null,
    id: 83
  },
  {
    firstName: 'Aniya',
    lastName: 'Wisozk',

    gender: 'female',
    email: 'dmantle2b@reuters.com',
    phoneNumber: '+63 811 971 2922',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    address: {
      address: '19416 Barclay Road',
      city: 'Castro Valley',
      postalCode: '94546',
      state: 'CA'
    },
    tutor: null,
    id: 84
  },
  {
    firstName: 'Angelica',
    lastName: 'Metz',

    gender: 'female',
    email: 'kpondjones2c@nsw.gov.au',
    phoneNumber: '+47 496 716 8666',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    address: {
      address: '1347 Blackwalnut Court',
      city: 'Annapolis',
      postalCode: '21403',
      state: 'MD'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 4,
      specialization: ['Santé', 'Trigonometrie', 'Geometry'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=841',
        description: 'Introduction to Angelica Metz tutoring services'
      },
      address: {
        address: '1347 Blackwalnut Court',
        city: 'Annapolis',
        postalCode: '21403',
        state: 'MD'
      }
    },
    id: 85
  },
  {
    firstName: 'Rupert',
    lastName: 'Upton',

    gender: 'male',
    email: 'whuman2d@hp.com',
    phoneNumber: '+1 907 460 1257',
    avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
    address: {
      address: '1770 Colony Way',
      city: 'Fayetteville',
      postalCode: '72704',
      state: 'AR'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 36,
      transport: 4,
      specialization: ['Anglais', 'Physique'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=851',
        description: 'Introduction to Rupert Upton tutoring services'
      },
      address: {
        address: '1770 Colony Way',
        city: 'Fayetteville',
        postalCode: '72704',
        state: 'AR'
      }
    },
    id: 86
  },
  {
    firstName: 'Eleazar',
    lastName: 'Torp',

    gender: 'male',
    email: 'fschlagman2e@deliciousdays.com',
    phoneNumber: '+57 170 928 2357',
    avatar: 'https://randomuser.me/api/portraits/women/86.jpg',
    address: {
      address: '165 Saint John Street',
      city: 'Manchester',
      postalCode: '06040',
      state: 'CT'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 41,
      transport: 2,
      specialization: ['Geographie', 'Physique', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=861',
        description: 'Introduction to Eleazar Torp tutoring services'
      },
      address: {
        address: '165 Saint John Street',
        city: 'Manchester',
        postalCode: '06040',
        state: 'CT'
      }
    },
    id: 87
  },
  {
    firstName: 'Anais',
    lastName: 'Yundt',

    gender: 'female',
    email: 'agreenhouse2f@mashable.com',
    phoneNumber: '+691 914 748 8902',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    address: {
      address: '2409 Research Boulevard',
      city: 'Fort Collins',
      postalCode: '80526',
      state: 'CO'
    },
    tutor: null,
    id: 88
  },
  {
    firstName: 'Gayle',
    lastName: 'Krajcik',

    gender: 'male',
    email: 'cdwyr2g@shop-pro.jp',
    phoneNumber: '+509 383 303 8524',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    address: {
      address: '1903 Bashford Manor Lane',
      city: 'Louisville',
      postalCode: '40218',
      state: 'KY'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 0,
      specialization: ['Math', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=881',
        description: 'Introduction to Gayle Krajcik tutoring services'
      },
      address: {
        address: '1903 Bashford Manor Lane',
        city: 'Louisville',
        postalCode: '40218',
        state: 'KY'
      }
    },
    id: 89
  },
  {
    firstName: 'Wilma',
    lastName: 'Hickle',

    gender: 'female',
    email: 'omottley2h@hugedomains.com',
    phoneNumber: '+7 330 984 6093',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    address: {
      address: '8315 Surf Drive',
      city: 'Panama City Beach',
      postalCode: '32408',
      state: 'FL'
    },
    tutor: null,
    id: 90
  },
  {
    firstName: 'Arne',
    lastName: 'Jacobs',

    gender: 'male',
    email: 'hyaknov2i@hhs.gov',
    phoneNumber: '+36 610 490 0839',
    avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
    address: {
      address: '3301 Old Muldoon Road',
      city: 'Anchorage',
      postalCode: '99504',
      state: 'AK'
    },
    tutor: null,
    id: 91
  },
  {
    firstName: 'Emely',
    lastName: 'Schmitt',

    gender: 'female',
    email: 'clambol2j@bloglovin.com',
    phoneNumber: '+86 478 217 4353',
    avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    address: {
      address: '8800 Cordell Circle',
      city: 'Anchorage',
      postalCode: '99502',
      state: 'AK'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 61,
      transport: 3,
      specialization: ['Chimie', 'Math', 'Santé'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=911',
        description: 'Introduction to Emely Schmitt tutoring services'
      },
      address: {
        address: '8800 Cordell Circle',
        city: 'Anchorage',
        postalCode: '99502',
        state: 'AK'
      }
    },
    id: 92
  },
  {
    firstName: 'Fabiola',
    lastName: 'Oberbrunner',

    gender: 'female',
    email: 'dduggan2k@simplemachines.org',
    phoneNumber: '+86 614 316 0439',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    address: {
      address: '117 East Cook Avenue',
      city: 'Anchorage',
      postalCode: '99501',
      state: 'AK'
    },
    tutor: null,
    id: 93
  },
  {
    firstName: 'Kari',
    lastName: 'Schinner',

    gender: 'female',
    email: 'jtossell2l@drupal.org',
    phoneNumber: '+60 470 340 3453',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    address: {
      address: '6231 North 67th Avenue',
      city: 'Glendale',
      postalCode: '85301',
      state: 'AZ'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 33,
      transport: 3,
      specialization: ['Anglais', 'Santé', 'Geographie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=931',
        description: 'Introduction to Kari Schinner tutoring services'
      },
      address: {
        address: '6231 North 67th Avenue',
        city: 'Glendale',
        postalCode: '85301',
        state: 'AZ'
      }
    },
    id: 94
  },
  {
    firstName: 'Rory',
    lastName: 'Conn',

    gender: 'male',
    email: 'cchomiszewski2m@cbsnews.com',
    phoneNumber: '+62 215 871 4657',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    address: {
      address: '8505 Waters Avenue',
      city: 'Savannah',
      postalCode: '31406',
      state: 'GA'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 31,
      transport: 0,
      specialization: ['Santé', 'Geometry', 'Trigonometrie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=941',
        description: 'Introduction to Rory Conn tutoring services'
      },
      address: {
        address: '8505 Waters Avenue',
        city: 'Savannah',
        postalCode: '31406',
        state: 'GA'
      }
    },
    id: 95
  },
  {
    firstName: 'Cristobal',
    lastName: 'Watsica',

    gender: 'male',
    email: 'bgoby2n@washingtonpost.com',
    phoneNumber: '+380 842 468 9675',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    address: {
      address: '7 Underwood Place Northwest',
      city: 'Washington',
      postalCode: '20012',
      state: 'DC'
    },
    tutor: {
      bio: 'I am well-versed in a variety of computer science topics, including programming languages, algorithms, data structures, and software engineering. Additionally, I have experience...',
      hourlyRate: 38,
      transport: 3,
      specialization: ['Geometry', 'Math', 'Geographie'],
      video: {
        url: 'https://www.youtube.com/embed/UKFLd0PTtcw',
        thumbnail:
          'https://loremflickr.com/g/320/240/paris,girl,video,brazil,rio?lock=951',
        description: 'Introduction to Cristobal Watsica tutoring services'
      },
      address: {
        address: '7 Underwood Place Northwest',
        city: 'Washington',
        postalCode: '20012',
        state: 'DC'
      }
    },
    id: 96
  },
  {
    firstName: 'Allene',
    lastName: 'Harber',

    gender: 'female',
    email: 'cdavydochkin2o@globo.com',
    phoneNumber: '+389 880 536 3911',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    address: {
      address: '21950 Arnold Center Road',
      city: 'Carson',
      postalCode: '90810',
      state: 'CA'
    },
    tutor: null,
    id: 97
  },
  {
    firstName: 'Lempi',
    lastName: 'Runte',

    gender: 'female',
    email: 'zstenning2p@list-manage.com',
    phoneNumber: '+81 529 266 5313',
    avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
    address: {
      address: '1427 South Carolina Avenue Southeast',
      city: 'Washington',
      postalCode: '20003',
      state: 'DC'
    },
    tutor: null,
    id: 98
  },
  {
    firstName: 'Terrell',
    lastName: 'Schuppe',

    gender: 'male',
    email: 'flesslie2q@google.nl',
    phoneNumber: '+371 241 489 8335',
    avatar: 'https://randomuser.me/api/portraits/men/96.jpg',
    address: {
      address: '1420 Turtleback Trail',
      city: 'Panama City',
      postalCode: '32413',
      state: 'FL'
    },
    tutor: null,
    id: 99
  },
  {
    firstName: 'Tevin',
    lastName: 'Prohaska',

    gender: 'male',
    email: 'pcumbes2r@networkadvertising.org',
    phoneNumber: '+46 185 553 3726',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    address: {
      address: '109 Summit Street',
      city: 'Burlington',
      postalCode: '05401',
      state: 'VT'
    },
    tutor: null,
    id: 100
  }
]
export enum TOKEN_PAIR_KEYS {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export enum AUTH_TYPE {
  BEARER = 'Bearer'
}
