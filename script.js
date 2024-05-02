
const projects = [
  {
    title : "Travel-Blog Website",
    link : "https://safaring-monk.onrender.com/",
    technology: "React",
    github: "https://github.com/rohitchornele/safaring_monk.git"
  },
  {
    title : "Real-Estate-Site",
    link : "https://real-estate-phi-pink.vercel.app/",
    technology: "React",
    github: "https://github.com/rohitchornele/real-estate.git"
  },
  {
    title : "FullStack Crud App",
    link : "https://mern-crud-rc.netlify.app/",
    technology: "React",
    github: "https://github.com/rohitchornele/crud-app-frontend.git"
  },
  {
    title : "Zomato-Frontend",
    link : "https://luminous-mermaid-11c47d.netlify.app/",
    technology: "HTML/CSS",
    github: "https://luminous-mermaid-11c47d.netlify.app/"
  },
  {
    title : "Dentytech (Dribble)",
    link : "https://dentytech-dribble.netlify.app/",
    technology: "HTML/CSS",
    github: "https://github.com/rohitchornele/dentytech.git"
  },
  {
    title : "Draggable Componet",
    link : "https://draggable-components.netlify.app/",
    technology: "Javascript",
    github: "https://github.com/rohitchornele/draggable-components.git"
  },
  {
    title : "To-Do-List",
    link : "https://prismatic-belekoy-e715cd.netlify.app/",
    technology: "React",
    github: "https://github.com/rohitchornele/my-tasks.git"
  },
]

const buildTable = () => {

  var table = document.getElementById("myTable")

  for (let i = 0; i < projects.length; i++){
    var row = `<tr>
      <td>${projects[i].title}</td>
      <td> <a href=${projects[i].link} target="_blank">${projects[i].link}</a></td>
      <td>${projects[i].technology}</td>
      <td><a href=${projects[i].github} target="_blank">${projects[i].github}</a></td>
    </tr>`

    table.innerHTML += row;
  }
}

buildTable();