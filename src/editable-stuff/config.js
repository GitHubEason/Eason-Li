// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Eason",
  middleName: "",
  lastName: "Li",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/GitHubEason",
    },


    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eason-li-0216/",
    },

  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/eason_li.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/eason_li.jpg"),
  imageSize: 375,
  message:
    "Master of Computer Science graduate, eager to develop further professional skills and to contribute to team success with diligence in humility with team working attitude. Thorough comprehension of complex C++, R, HTML, CSS and JavaScript programming languages. Confidence to work in a new and challenging environment.",
  resume: "https://drive.google.com/file/d/1SUFPt8uZUOnAclmf5t2tvwK_OcW1vin7/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "GitHubEason", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "1",
  images: [
    { 
      img: require("../editable-stuff/eason_li.jpg"), 
      label: "First slide label", 
      paragraph: "2" 
    },
    { 
      img: require("../editable-stuff/eason_li.jpg"), 
      label: "Second slide label", 
      paragraph: "3" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Data Structures", value: 90 },
    { name: "C++", value: 90 },
    { name: "Python", value: 90 },
    { name: "R", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 55 },


  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "easonli0216@gmail.com",
};

const experiences = {
  show: true,
  heading: "Projects",
  data: [
    {
      role: 'Authorship identification',// Here Add Company Name
      first: '- A R language based system is developed to be trained and fed by texts for author identification. ',
      second: '- Accuracy of 95% was achieved.',
    },
    {
      role: 'Behavior of taxi drives',
      first: '- A project with large datasets of 320 taxi drivers form the metropolitan city of Rome',
      second: '-The completion of this project went through the processes form data preparation, Model planning, Model building and result.',
    },
    {
      role: 'Website: Books shop',
      link: 'https://my-books-shop.vercel.app/',
      first: '- Working together with other volunteer computing engineers.',
      second: '- Built by React, Next.js and Strip Checkout.',
      third: '- Uses also React Hooks to manage local component state.',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
