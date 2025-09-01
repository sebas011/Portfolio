document.addEventListener("DOMContentLoaded", ()=>{
    const content = document.getElementById("content");
    
    const sections = {
        about: `
            <h1>About Me</h1>
            <p>Hello! I'm Rodian, a full-stack developer passionate about building clean and efficient web applications.</p>
        `,
        projects: `
            <h1>Projects</h1>
            <ul>
                <li>Portfolio Website</li>
                <li>Task Manager App</li>
                <li>Finance Management System</li>
            </ul>
        `,
        skills: `
            <h1>Skills</h1>
            <p>JavaScript, HTML, CSS, Node.js, Express, React, SQL</p>
        `,
        contact: `
            <h1>Contact</h1>
            <p>Email: rodian@example.com</p>
            <p>GitHub: github.com/rodian</p>
        `
    };

    document.querySelectorAll(".navbar a").forEach(link =>{
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            const section = link.getAttribute("data-section");
            content.innerHTML = sections[section] || "<h1>Not Found!</h1>";
        });
    });
});