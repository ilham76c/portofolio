const badge_color = [
  'badge-primary',
  'badge-success',
  'badge-danger',
  'badge-warning',
  'badge-info',
];

const projects = [
  {
    front: {
      nama: 'Find Meal',
      deskripsi: 'Aplikasi informasi makanan dengan data dari web API www.themealdb.com',
      images: [
        'find-meal-1.png',
        'find-meal-2.png',
        'find-meal-3.png',
      ],
    },
    back: [
      {
        coding: [
          'Javascript',
          'CSS',
          'HTML'
        ]
      },
      {
        library: [
          'Express.js'
        ]
      },
      {
        bundler: [
          'Webpack'
        ]
      }
    ],
    url: 'https://find-meal.herokuapp.com/'
  },
  {
    front: {
      nama: 'Liga Spanyol (LaLiga)',
      deskripsi: 'Aplikasi informasi jadwal pertandingan dan klasemen liga spanyol/LaLiga.',
      images: [
        'liga-spanyol-1.png',
        'liga-spanyol-2.png',
        'liga-spanyol-3.png',
      ],
    },
    back: [
      {
        coding: [
          'Javascript',
          'CSS',
          'HTML'
        ]
      },
      {
        library: [
          'Workbox',
          'Web-Push'
        ]
      },
      {
        teknologi: [
          'Service Worker'
        ]
      }
    ],
    url: 'https://submission2-v1.web.app/'
  },
  {
    front: {
      nama: 'Mesin Pencari',
      deskripsi: 'Mesin pencari informasi pariwisata yang menampilkan dokumen web berdasarkan kata kunci pencarian',
      images: [
        'search-engine-1.png',
        'search-engine-2.png',
        'search-engine-3.png',
      ],
    },
    back: [
      {
        framework: [
          'Codeigniter',
          'Bootstrap',
          'JQuery'
        ]
      },
      {
        database: [
          'PostgreSQL'
        ]
      },
      {
        library: [
          'Sastrawi'
        ]
      }
    ],
    url: 'https://mesin-pencari.herokuapp.com/'
  },
  {
    front: {
      nama: 'Portal Penelitian',
      deskripsi: 'Website yang berisi data penelitian dan aplikasi hasil penelitian.',
      images: [
        'portal-penelitian-1.png',
        'portal-penelitian-2.png',
        'portal-penelitian-3.png',
      ],
    },
    back: [
      {
        framework: [
          'Laravel',
          'Jetstream'
        ]
      },
      {
        database: [
          'PostgreSQL'
        ]
      },
    ],
    url: 'https://portal-penelitian.herokuapp.com/'
  },
  {
    front: {
      nama: 'Web Geolocation',
      deskripsi: 'Menampilkan peta menggunakan API dari HERE Maps. API yang digunakan diantaranya menampilkan marker, draggable mark, hingga menampilkan rute menuju lokasi.',
      images: [
        'web-gelocation-1.png',
        'web-gelocation-2.png',
        'web-gelocation-3.png',
      ],
    },
    back: [
      {
        framework: [
          'Laravel',
        ]
      },
      {
        database: [
          'PostgreSQL'
        ]
      },
    ],
    url: 'https://here-geolocation.herokuapp.com/'
  },
  {
    front: {
      nama: 'Template Web Pencarian',
      deskripsi: 'Template web pencarian atau search engine, dengan text input dan konten hasil pencarian di dalamnya.',
      images: [
        'template-web-pencarian-1.png',
        'template-web-pencarian-2.png',
      ],
    },
    back: [
      {
        coding: [
          'Javascript',
          'CSS',
          'HTML'
        ]
      },
    ],
    url: 'https://ilham76c.github.io/template-web-pencarian/'
  },
];

class ProjectsItem extends HTMLElement {
  connectedCallback() {
    projects.forEach((project) => {
      this.innerHTML += this.createProjectItem(project);
    });
  }

  createImageItem(images) {
    let html = '';
    let i = 0;
    images.forEach(image => {
      html += `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
          <img src="./img/projects/${image}" class="d-block w-100" alt="Gambar">
        </div>
      `;
      i++;
    });
    return html;
  }

  createBackItem(back) {
    let contents = '';
    let item = '';
    back.forEach(val => {
      
      for (let key in val) {
        item = `<h6 class="card-title capitalize mb-0">${key}</h6>`;
        val[key].forEach(m => {
          item += `<span class="badge badge-pill mr-1 ${badge_color[Math.floor(Math.random() * 5)]}">${m}</span>`;
        })
      }

      contents += `
        <div class="px-2 pb-2 pt-3 mb-2 rounded shadow">
          ${item}
        </div>
      `;
    });

    return `
      <div class="card card-back nav-bg">
        <div class="card-body border rounded">
          ${contents}
        </div>              
      </div>
    `;
  }

  createFrontItem(front) {
    return `
      <div class="card card-front nav-bg">                  
        <div class="card-body border rounded p-2">                    
            <div class="carousel slide mb-3" data-ride="carousel">
              <div class="carousel-inner img-thumbnail">
                ${this.createImageItem(front.images)}
              </div>
            </div>
            <div class="px-2">
              <h5 class="font-weight-bold">${front.nama}</h5>
              ${front.deskripsi}
            </div>
        </div>                  
      </div>
    `;
  }

  createProjectItem(project) {
    return `
      <div class="col-lg-4 col-md-6 col-12 mb-4 d-flex flex-column">
        <div class="card-flip flex-fill">
          <!-- card front -->
          ${this.createFrontItem(project.front)}
          <!-- end. card front -->

          <!-- card back -->
          ${this.createBackItem(project.back)}
          <!-- end. card back -->
        </div>

        <!-- button -->        
        <div class="d-flex justify-content-center mt-1 py-2">
          <a href="${project.url}" class="card-link btn btn-outline-light btn-sm" target="_blank">
            Aplikasi
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
            </svg>
          </a>
        </div>
        <!-- end. button -->
      </div>   
    `;
  }
}

customElements.define('projects-item', ProjectsItem);
