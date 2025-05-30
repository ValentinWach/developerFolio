/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Valentin Wach",
  title: "Valentin Wach.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technical University of Munich (TUM)",
      logo: require("./assets/images/tumLogo.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "October 2024 – September 2026",
      desc: "Joint Master’s Program of TUM, LMU and the University of Augsburg",
      descBullets: [
        "Current Average Grade: 1.1",
        "Highly selective admission: selected as one of 20 from 1,600 applicants"
      ]
    },
    {
      schoolName: "Ludwig Maximilian University of Munich (LMU)",
      logo: require("./assets/images/lmuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science with minor in Philosophy",
      duration: "October 2021 – March 2025",
      desc: "Bachelor’s thesis: Porting the security tool Driller to the ARM architecture",
      descBullets: [
        "Average Grade: 1.17",
        "Awarded the LMU Deutschlandstipendium for academic excellence"
      ]
    }
]

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "QPLIX GmbH",
      companylogo: require("./assets/images/qplixLogo.png"),
      date: "October 2023 - October 2024",
      descBullets: [
        "Developed frontend components in Angular, including a dynamic form for configuration file editing",
        "Created monitoring dashboards by extending the internal REST API backend in C#",
        "Resolved full-stack bugs across the QPLIX ordering platform"
      ]
    },
    {
      role: "IT Infrastructure Engineer",
      company: "QPLIX GmbH",
      companylogo: require("./assets/images/qplixLogo.png"),
      date: "April 2022 – September 2023",
      descBullets: [
        "Automated the deployment of containerized applications using Docker",
        "Designed and implemented a synchronization process from Active Directory to Bitwarden using PowerShell",
        "Installed and maintained virtualization solutions such as Proxmox",
        "Developed workflow automations within the YouTrack ticket system using JavaScript",
        "Led rollout of a mobile device management solution for all company-owned smartphones"
      ]
    },
    {
      role: "Technical Support Engineer",
      company: "netcos GmbH",
      companylogo: require("./assets/images/netcosLogo.png"),
      date: "November 2020 - September 2021",
      descBullets: [
        "Supported the planning and implementation of hardware migrations for clinics",
        "Provisioned laptops according to customer standards using PowerShell",
        "Configured and commissioned server-client products from the Igel brand"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/electraLogo.png"),
      projectName: "Electra",
      projectDesc: "• Developed in a two-person team, with my focus on backend development\n" +
        "• Displays German federal election results such as seat distribution, vote shares, and more",
      footerLink: [
        {
          name: "Check it out",
          url: "https://electra.vwach.de/"
        }
      ]
    },
    {
      image: require("./assets/images/ultimateLogo.png"),
      projectName: "Ultimate",
      projectDesc: "• Winner of the ELTEMATE Challenge prize at the LegalTech Hackathon 2025\n" +
        "• Allows users to upload rental contracts and receive feedback on invalid or uncommon clauses",
      footerLink: [
        {
          name: "Check it out",
          url: "http://ultimate.vwach.de/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Extracurricular Programs"),
  achievementsCards: [
    {
      title: "Pre-Incubator program at TEG",
      subtitle:
        "• Successful participation in the Pre-Incubator Program of The Entrepreneurial Group (TEG)\n" +
        "• Activities: Independent development, refinement, and presentation of a business idea in small teams",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo"
    },

    {
      title: "Blockchain and DLT Course at VHB",
      subtitle: "• Successful participation in the course “Technical Basics of Blockchain and Distributed Ledger Technologies” offered by the Virtual University of Bavaria (VHB)\n" + 
      "• Course content: Cryptographic fundamentals, technical concepts of blockchain, smart contracts",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "contact@vwach.de"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
