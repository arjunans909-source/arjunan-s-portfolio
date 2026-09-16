const groups = [
  {
    title: 'Languages & Markup',
    items: ['HTML5 (semantic markup)', 'CSS3 (Grid, Flexbox, custom properties)', 'JavaScript (ES6+)'],
  },
  {
    title: 'Framework & Tools',
    items: ['React (hooks, component design)', 'Git & GitHub', 'Vite'],
  },
  {
    title: 'Workflow',
    items: ['AI-assisted development (ChatGPT, Claude, Copilot)', 'Responsive & mobile-first design', 'Debugging with browser DevTools'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {groups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
