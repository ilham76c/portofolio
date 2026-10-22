const skills = [
  'Laravel',
  'Codeigniter',
  'Express.js',
  'Node.js',
  'JQuery',
  'Bootstrap',
  'PHP',
  'Javascript',
  'HTML',
  'CSS',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Redux',
  'Docker',
];

class SkillsItem extends HTMLElement {
  createSkillElement(skill) {
    return `
      <div class="col-1 col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4">
        <div class="card nav-bg">
          <div class="row no-gutters align-items-center">
            <div class="col-auto">
              <img
                class="img-thumbnail w-50"
                src="./img/skills/${skill.toLowerCase()}64.png"
                alt="${skill}"
              >
            </div>
            <div class="col">
              <div class="card-body py-2">
                <p class="card-text m-0">${skill}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    skills.forEach((skill) => {
      this.innerHTML += this.createSkillElement(skill);
    });
  }
}

customElements.define('skills-item', SkillsItem);
