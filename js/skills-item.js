// const skills = [
//   'Laravel',
//   'Codeigniter',
//   'Express.js',
//   'Node.js',
//   'JQuery',
//   'Bootstrap',
//   'PHP',
//   'Javascript',
//   'HTML',
//   'CSS',
//   'MySQL',
//   'PostgreSQL',
//   'Redis',
//   'Redux',
//   'Docker',
// ];

const skills = {
  backend: [
    { name: 'Node.js', image: 'nodejs64.png' },
    { name: 'Express.js', image: 'expressjs64.png' },
    { name: 'Laravel', image: 'laravel64.png' },
    { name: 'CodeIgniter', image: 'codeigniter64.png' },
    { name: 'PHP Slim', image: 'php64.png' },
    { name: 'FastAPI', image: 'fastapi.png' },
    { name: 'REST API', image: 'restapi.png' },
    { name: 'Sequelize', image: 'sequelize.png' },
    { name: 'TypeORM', image: 'typeorm.png' },
    { name: 'SQLAlchemy', image: 'sqlalchemy.png' },
    { name: 'Python', image: 'python.png' },
  ],

  frontend: [
    { name: 'JavaScript', image: 'javascript64.png' },
    { name: 'TypeScript', image: 'typescript.png'},
    { name: 'React.js', image: 'reactjs.png' },
    { name: 'Next.js', image: 'nextjs.png' },
    { name: 'Vue.js', image: 'vuejs.png' },
    { name: 'jQuery', image: 'jquery64.png' },
    { name: 'HTML', image: 'html64.png' },
    { name: 'CSS', image: 'css64.png' },
    { name: 'Less CSS', image: 'lesscss.png' },
    { name: 'Tailwind CSS', image: 'tailwindcss.png' },
    { name: 'Bootstrap', image: 'bootstrap64.png' },
    { name: 'Material UI', image: 'materialui.png' },
    { name: 'ChartJS', image: 'chartjs.png' },
  ],

  database: [
    { name: 'PostgreSQL', image: 'postgresql64.png' },
    { name: 'MySQL', image: 'mysql64.png' },
    { name: 'Redis', image: 'redis64.png' }
  ],

  'state-management': [
    { name: 'Redux', image: 'redux64.png' },
    { name: 'Vuex', image: 'vuejs.png' },
    { name: 'Pinia', image: 'pinia.png' },
  ],

  'data-fetching': [
    { name: 'TanStack Query', image: 'tanstack.png' },
    { name: 'Axios', image: 'axios.png' },
  ],

  'data-visualization': [
    { name: 'ECharts', image: 'echarts.png' },
    { name: 'ChartJs', image: 'chartjs.png' },
  ],

  // 'data-processing': [
  //   'Pandas',
  //   'OpenPyXL',
  //   'PDF Data Extraction',
  //   'ETL',
  //   'Web Scraping',
  // ],

  'background-jobs': [
    { name: 'BullMQ', image: 'bullmq.png' },
    { name: 'Redis', image: 'redis64.png' },
    { name: 'Cron Jobs', image: 'cronjob.png' },
    { name: 'APScheduler', image: 'apscheduler.png' },
  ],

  // 'testing-automation': ['Playwright', 'Postman'],

  'database-migration': [{ name: 'Alembic', image: 'python.png' }],

  'object-storage': [{ name: 'MinIO', image: 'minio.png' }],

  containerization: [{ name: 'Docker', image: 'docker64.png'}],

  'version-control': [
    { name: 'Git', image: 'git64.png' }, 
    { name: 'GitHub', image: 'github.png' }
  ],

  'operating-systems': [
    { name: 'Windows', image: 'windows.png' },
    { name: 'Ubuntu', image: 'ubuntu.png' },
    { name: 'ParrotOS', image: 'parrotos.png' },
    { name: 'Manjaro', image: 'manjaro.png' },
  ],
};

class SkillsItem extends HTMLElement {
  createSkillElement(skill) {
    return `
      <div class="col">
        <div class="skill-card d-flex align-items-center h-75">
          <img
            src="./img/skills/${skill.image}"
            class="skill-image"
            alt="${skill.name}"
            loading="lazy"
          >
          <span class="skill-name">${skill.name}</span>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    let html = '';
    for (const [key, values] of Object.entries(skills)) {
      let skillContent = '';
      values.forEach((skill) => {
        skillContent += this.createSkillElement(skill);
      });
      const skillSection = `
        <details open>
          <summary class="capitalize mb-2 user-select-none">${key.replace(/-/g, ' ')}</summary>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-3 mb-4">
            ${skillContent}
          </div>
        </details>
      `;
      html += skillSection;
    }
    this.innerHTML = html;
  }
}

customElements.define('skills-item', SkillsItem);
