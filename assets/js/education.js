AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [{
        title: "Google Data Analytics",
        cardImage: "assets/images/education-page/coursera2.svg",
        moocLink: "https://www.coursera.org/account/accomplishments/professional-cert/HYKHRAMCYEC5",
    },
    {
        title: "Generative AI and Natural Language Processing",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-d21f3ddf-4c79-4192-ba8b-c0b2abcc170a/",
    },
    {
        title: "Full Stack Web Development",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-d3386d4e-949a-4f70-bd42-4170e42d4814/",
    },
    {
        title: "Flutter UI Development",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-b62fbc28-11a9-4051-850a-6993369efa4e/",
    },
    {
        title: "HTML and CSS",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-9ebfafff-c6dc-4993-a9b9-4d07dd4ea0e4/",
    },
    {
        title: "Certified Ethical Hacking",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-f61f0c7b-e6b7-4b8d-86e0-5ba614bbfb6f/",
    },
    {
        title: "UIUX Essentials",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-4ea85c67-ce42-456f-b443-72b2ce7859e6/",
    },
    {
        title: "R-Programming",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-acc706c1-7fb7-4630-9d50-1cc48447513c/",
    },
    {
        title: "Python and Flask",
        cardImage: "assets/images/education-page/udemy.svg",
        moocLink: "https://www.udemy.com/certificate/UC-765658d5-ea05-4b0c-be17-c23b48ebd97a/",
    },
];

const experience = [{
        img: "assets/images/education-page/c1.png",
    },
    {
        img: "assets/images/education-page/c2.jpg",
    },
    {
        img: "assets/images/education-page/c3.png",
    },
    {
        img: "assets/images/education-page/c4.png",
    },
    {
        img: "assets/images/education-page/c5.jpg",
    },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function() {
    showExperience();
});

function showExperience() {
    setInterval(function() {
        if (currentItem === experience.length) {
            currentItem = 0;
        }
        const item = experience[currentItem];
        img.src = item.img;
        currentItem++;
    }, 3000);
}

const showCards = () => {
    let output = "";
    moocscards.forEach(
        ({ title, cardImage, moocLink }) =>
        (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
    );
    moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);