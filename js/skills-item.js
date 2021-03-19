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
  'Docker'
];

class SkillsItem extends HTMLElement {

  createSkillElement(skill) {
    return `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card nav-bg">
          <div class="row no-gutters">
            <div class="col-3 col-xs-3">
              <img class="img-thumbnail" src="/img/skills/${skill.toLowerCase()}64.png" alt="gambar">
            </div>
            <div class="col-9 col-xs-9 d-flex flex-fill align-items-center">
              <div class="card-body">
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