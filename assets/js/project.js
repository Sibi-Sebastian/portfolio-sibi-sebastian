AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [{
        title: "Movie App",
        cardImage: "assets/images/project-page/onboard3.png",
        description: "",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Appflix-movie-application-flutter",
    },
    {
        title: "Smart Home App",
        cardImage: "assets/images/project-page/0.jpeg",
        description: "",
        tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Smart-Home-Application",
    },
    {
        title: "News App",
        cardImage: "assets/images/project-page/news.jpg",
        description: "",
        tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/news-application-flutter",
    },
    {
        title: "Shopping App",
        cardImage: "assets/images/project-page/splash.png",
        description: "",
        tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/shopping-application",
    },
    {
        title: "Smart Home App 2",
        cardImage: "assets/images/project-page/entertainment.jpeg",
        description: "",
        tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Smart-Home-Application-2",
    },

    {
        title: "Cricket Data Analysis",
        cardImage: "assets/images/project-page/cricket.webp",
        description: "Beveloped an analytical pipeline using Python libraries (Pandas) to collect and analyze T20 World Cup player data.",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/T20-World-Cup-Data-Analytics-Project",
    },
    {
        title: "ATS System",
        cardImage: "assets/images/project-page/ats.jpg",
        description: "Built a Python application utilizing OpenAI APIs to optimize resumes for Applicant Tracking Systems.",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/ATS-Resume-LLM-App",
    },
    {
        title: "Chat App ",
        cardImage: "assets/images/project-page/chat.jpg",
        description: "",
        tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/chat-messaging-application",
    },

    {
        title: "ChatBot App",
        cardImage: "assets/images/project-page/chatbot.avif",
        description: "Poker game built using typescript.",
        tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Advanced-Q-A-Chatbots-with-DataStax-Databases-and-Vector-Embedding",
    },
    {
        title: "Nutritionist AI Doctor",
        cardImage: "assets/images/project-page/doctor.jpg",
        description: "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Nutritionist-Generative-AI-Doctor",
    },
    {
        title: "Blog Generation App",
        cardImage: "assets/images/project-page/blog.webp",
        description: "Personal book library app built using JavaScript.",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Blog-Generation-LLM-App",
    },
    {
        title: "Text-To-SQL App",
        cardImage: "assets/images/project-page/sql.svg",
        description: "Minesweeper Game built using python Object Oriented Programming.",
        tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        Previewlink: "",
        Githublink: "https://github.com/Sibi-Sebastian/Text-To-SQL-LLM-App",
    },

];

// function for rendering project cards data
const showCards = () => {
    let output = "";
    projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
        output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
    });
    projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card, title;
    input = document.getElementById("myInput").value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName("skill-card");
    card = document.getElementsByClassName("card");
    title = document.getElementsByClassName("title");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (
            button[i].innerHTML.toUpperCase().includes(input) ||
            title[i].innerHTML.toUpperCase().includes(input)
        ) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}