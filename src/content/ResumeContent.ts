import Resume from "type/Resume";

const ResumeContent: Resume = {
  nameFull: "Joshua de Jong",
  nameFirst: "Joshua",
  email: "joshuakdejong@gmail.com",
  github: "https://github.com/JoshuadeJong",
  linkedin: "https://www.linkedin.com/in/joshua-de-jong/",
  about: [
    "Hello! My name is Rexxi and I enjoy licking ham and other things that live on the planet. My interest in Japan started back in 1985 when I decided to try eating the Tokyo Tower — turns out the Japanese didn't like me eating an iconic building in their country. " +
      "So I set out to destroy the entire city with my sharp tooth.",
    "Fast-forward to today, I've been banned from Japan and all of South-East Asia, as I am a world wide threat. To get by, I've settled down in a  tiny apartment in Seattle WA. Living under the radar with my best friend Da-da and my servant Ma-ma, my life has become comfortable and non-threatening." +
      " I spend most days sleeping in and licking my juicy hams (Squishy Baby).",
    "I also have two brothers Rexxi and Rexxi. They help me terrorize the house so everything can remain happy and peaceful.",
  ],
  career: [
    {
      companyName: "Flexport",
      companyLink: "https://www.flexport.com/",
      title: "Software Engineer II",
      startDate: "Aug 2021",
      endDate: "Present",
      location: "Seattle, WA",
      bullet: [],
    },
    {
      companyName: "Expeditors",
      companyLink: "https://www.expeditors.com/",
      title: "Software Engineer I",
      startDate: "Jan 2020",
      endDate: "Jul 2021",
      location: "Seattle, WA",
      bullet: [
        "Developed Java and Python services to monitor 2000+ applications and 5000+ devices company wide.",
        "Improved overall performance of data pipelines by 12% by identifying and optimizing poor performing methods.",
        "Empowered internal teams by building a Web App and API allowing teams to manage their monitoring solutions.",
        "Built fully automated, highly available, zero downtime release CI/CD pipelines for 12 products decreasing deployment cost by 200 hours a year.",
        "Increased team’s knowledge and performance by mentoring team members and promoting best software practices.",
      ],
    },
    {
      companyName: "CafeParts",
      companyLink: "https://www.cafeparts.com/Home",
      title: "Data Analyst",
      startDate: "Feb 2019",
      endDate: "Dec 2019",
      location: "Denver, CO",
      bullet: [
        "Increased website traffic by improving advertising and page retention through use of A/B Testing.",
        "Reduced restocking costs by forecasting sale trends and company growth to create an agile inventory.",
        "Designed a product recommendation system based on customer’s current shopping cart using scikit-learn.",
      ],
    },
    {
      companyName: "CSU",
      companyLink: "https://mathematics.colostate.edu/",
      title: "Research Assistant",
      startDate: "May 2018",
      endDate: "Dec 2018",
      location: "Fort Collins, CO",
      bullet: [
        "Developed machine vision tools to aid in analysis and accurate empirical data collection of chemical reactions.",
        "Modeled experiments and verified the model's integrity using PDE's, regressions, and cross-validation.",
        "Created and maintained a relational database to store experiments and analytics for future enquiries.",
        "Dynamically approached problems with a team and taught statistical modeling techniques to junior researchers.",
      ],
    },
  ],
  skills: [
    // Languages
    {
      name: "Java",
      iconPath: "skills/java.png",
    },
    {
      name: "Kotlin",
      iconPath: "skills/kotlin.png",
    },
    {
      name: "Python",
      iconPath: "skills/python.png",
    },
    {
      name: "Golang",
      iconPath: "skills/go.png",
    },

    // Frontend Languages
    {
      name: "Javascript",
      iconPath: "skills/javascript.png",
    },
    {
      name: "Typescript",
      iconPath: "skills/typescript.png",
    },

    // Database
    {
      name: "PostgreSQL",
      iconPath: "skills/postgres.png",
    },
    {
      name: "MongoDB",
      iconPath: "skills/mongodb.png",
    },
    {
      name: "ElasticSearch",
      iconPath: "skills/elasticsearch.png",
    },
    {
      name: "Redis",
      iconPath: "skills/redis.png",
    },

    // Frameworks
    {
      name: "Spring Boot",
      iconPath: "skills/springboot.png",
    },
    {
      name: "React",
      iconPath: "skills/react.png",
    },
    {
      name: "Sass",
      iconPath: "skills/sass.png",
    },

    // Messaging
    {
      name: "Graphql",
      iconPath: "skills/graphql.png",
    },

    // Infra Stuff
    {
      name: "AWS",
      iconPath: "skills/aws.png",
    },
    {
      name: "Docker",
      iconPath: "skills/docker.png",
    },
    {
      name: "Kubernetes",
      iconPath: "skills/kubernetes.png",
    },
  ],
  projects: [
    {
      title: "Spotify Profile",
      subTitle: "Feature  Project",
      text: [
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      ],
      imagePath: "projects/grind_01.jpg",
      skills: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      githubLink: "https://www.yahoo.com",
      projectLink:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=1131494371",
    },
    {
      title: "Spotify Profile",
      subTitle: "Feature  Project",
      text: [
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      ],
      imagePath: "projects/grind_01.jpg",
      skills: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      githubLink: "https://www.yahoo.com",
      projectLink:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=1131494371",
    },
    {
      title: "Spotify Profile",
      subTitle: "Feature  Project",
      text: [
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      ],
      imagePath: "projects/grind_01.jpg",
      skills: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      githubLink: "https://www.yahoo.com",
      projectLink:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=1131494371",
    },
  ],
  referrals: [
    {
      text: "Josh is an awesome dev and an even better tech lead! Any team would be luckly to have Josh!",
      person: "Joe Smith",
      position: "Senior Engineer",
      company: "Amazon",
    },
    {
      text: "Josh is an awesome dev and an even better tech lead! Any team would be luckly to have Josh!",
      person: "Joe Smith",
      position: "Senior Engineer",
      company: "Amazon",
    },
    {
      text: "Josh is an awesome dev and an even better tech lead! Any team would be luckly to have Josh!",
      person: "Joe Smith",
      position: "Senior Engineer",
      company: "Amazon",
    },
  ],
};

export default ResumeContent;
