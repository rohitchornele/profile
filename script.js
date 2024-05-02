
const projects = [
  {
    title : "Travel-Blog Website",
    link : "https://safaring-monk.onrender.com/",
    technology: "React",
    github: ""
  },
  {
    title : "Real-Estate-Site",
    link : "https://real-estate-phi-pink.vercel.app/",
    technology: "React",
    github: ""
  },
  {
    title : "FullStack Crud App",
    link : "https://mern-crud-rc.netlify.app/",
    technology: "React",
    github: ""
  },
  {
    title : "Zomato-Frontend",
    link : "https://luminous-mermaid-11c47d.netlify.app/",
    technology: "React",
    github: ""
  },
  {
    title : "Dentytech (Dribble)",
    link : "https://dentytech-dribble.netlify.app/",
    technology: "Javascript",
    github: ""
  },
  {
    title : "Draggable Componet",
    link : "https://draggable-components.netlify.app/",
    technology: "Javascript",
    github: ""
  },
  {
    title : "To-Do-List",
    link : "https://prismatic-belekoy-e715cd.netlify.app/",
    technology: "React",
    github: ""
  },
]

const projectsDiv = document.getElementById("project-div");

// const title = document.getElementById("title");
// const link = document.getElementById("link");

const getData = () => {
  const newSpan = document.createElement("span");
    
    for (let i = 0; i < projects.length; i++){
      const titleSpan = document.createElement("span");
      const linkSpan = document.createElement("a");
      const techSpan = document.createElement("span");
      const gitSpan = document.createElement("a");

      linkSpan.href = projects[i].link;
      gitSpan.href = projects[i].github;
      linkSpan.target = "_blank"
      gitSpan.target = "_blank"

      titleSpan.textContent = projects[i].title;
      linkSpan.textContent = projects[i].link;
      techSpan.textContent = projects[i].technology;
      gitSpan.textContent = projects[i].github;
      
      projectsDiv.appendChild(titleSpan);
      projectsDiv.appendChild(linkSpan);
      projectsDiv.appendChild(techSpan);
      projectsDiv.appendChild(gitSpan);
      projectsDiv.appendChild(document.createElement("br"));
      projectsDiv.appendChild(document.createElement("br"));
    }
}

getData();



// const dataArray = ["Data 1", "Data 2", "Data 3"];

//         // Get reference to the data container
//         const dataContainer = document.getElementById("dataContainer");

//         // Function to create spans and load data into them
//         function loadDataIntoSpans() {
//             // Loop through the array and create spans with data
//             for (let i = 0; i < dataArray.length; i++) {
//                 // Create a new span element
//                 const span = document.createElement("span");
                
//                 // Set the text content of the span
                
//                 // Append the span to the data container
//                 dataContainer.appendChild(span);
                
//                 // Add a line break after each span
//             }
//         }

//         // Call the function to load data into spans
//         // loadDataIntoSpans();