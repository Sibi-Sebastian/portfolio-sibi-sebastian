AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Software Engneer Intern",
        cardImage: "assets/images/experience-page/chipsy.jpg",
        place: "Chipsy",
        time: "(May, 2024 - june, 2024)",
        desp: "<li>Collaborated with Flutter Developers on Mobile App Projects and Leveraged the Flutter framework (Dart Programming) to build mobile Applications</li> <li>Employed mobile app development concepts and version control practices.</li> <li>Successfully integrated APIs to enhance app functionality.</li > ",
    },

];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        title: "Google Devfest 2023 ",
        cardImage: "assets/images/experience-page/7.png",
        description: "Attended and participated in workshops and sessions related to GenAI and Kubernetes technologies.",
    },
    {
        title: "Skill-A-Thon 2022",
        cardImage: "assets/images/experience-page/1.jpg",
        description: "Led College Team to Top Rankings in RPA, Achieved 1st place in the state and 6th place nationally.",
    },
    {
        title: "Hackothsava 2023",
        cardImage: "assets/images/experience-page/2.png",
        description: "Developed an AI and 3D model project focused on transformative education, enhancing student learning abilities and practical knowledge.",
    },
    {
        title: "Securathon 2023",
        cardImage: "assets/images/experience-page/3.png",
        description: "Developed innovative approaches to combat digital threats, and focused on cybersecurity challenges and solutions",
    },
    {
        title: "Forensics Workshop",
        cardImage: "assets/images/experience-page/4.jpg",
        description: "Learned so much about the lates techniques and strategies in cyber security forensics.",
    },
    {
        title: "Coding Club 2024 ",
        cardImage: "assets/images/experience-page/8.png",
        description: "I would be responsible for guiding 200s of students of student counsil in their first steps towards their coding journey",
    },
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);