export default {
  name: 'Chris Carstens',
  title: 'Full Stack Developer',
  description:
    'Full Stack Developer - Java | Spring | Typescript | React | Node.js',
  status: 'Available for Work',
  about:
    'I am a detail-oriented environmental professional seeking to transition to a software developer role. I have experience managing complex, multi-year projects. I enjoy making sense out of complicated technical problems and delivering quality solutions. I love to learn, and would be happy to get up to speed on any technologies or domain knowledge required for your projects.',
  email: {
    address: 'dev@chriscarstens.com',
    url: 'mailto:dev@chriscarstens.com',
  },
  github: {
    shortUrl: 'github.com/snetsrac',
    url: 'https://github.com/snetsrac',
  },
  linkedin: {
    shortUrl: 'linkedin.com/in/snetsrac',
    url: 'https://linkedin.com/in/snetsrac',
  },
  callToAction:
    'I am currently seeking a full-time position.',
  skills: {
    java: {
      title: 'Java',
      description:
        'Java is an object-oriented, statically typed, platform-independent language used in many different contexts.',
      imageUrl: '/skills/java.png',
    },
    spring: {
      title: 'Spring (Boot)',
      description:
        'The Spring Framework is an open source modular application framework commonly used in Java web applications.',
      imageUrl: '/skills/spring.png',
    },
    sql: {
      title: 'SQL Databases',
      description:
        'Relational database management systems such as PostgreSQL and MySQL are the standard for managing data.',
      imageUrl: '/skills/postgresql.png',
    },
    javascript: {
      title: 'TypeScript',
      description:
        'TypeScript adds static type checking to JavaScript for error detection and code maintainability.',
      imageUrl: '/skills/typescript.png',
    },
    react: {
      title: 'React',
      description:
        'React is a front-end framework that is great for dividing applications into individual components.',
      imageUrl: '/skills/react.png',
    },
    css: {
      title: 'CSS Libraries',
      description:
        'CSS frameworks such as Bootstrap and Tailwind CSS are handy tools for quickly styling websites.',
      imageUrl: '/skills/bootstrap.png',
    },
    nodejs: {
      title: 'Node.js',
      description:
        'Node.js is a runtime environment for JavaScript that is independent of the web browser.',
      imageUrl: '/skills/nodejs.png',
    },
    nosql: {
      title: 'NoSQL Databases',
      description:
        "NoSQL databases such as MongoDB are an alternative to traditional RDBMS's.",
      imageUrl: '/skills/mongodb.png',
    },
    frontend: {
      title: 'Front End',
      description:
        'I use HTML5, CSS3, and JavaScript to build modern, responsive front ends for the web.',
      imageUrl: '/skills/html5_css3_js.png',
    },
  },
  projects: {
    igcviewer: {
      title: 'IGC Viewer',
      subtitle: 'Flight Tracker Logs',
      url: 'https://igc-viewer.chriscarstens.com',
      githubUrl: 'https://github.com/snetsrac/igc-viewer',
      backgroundColor: 'bg-teal-500',
      imageUrl: '/projects/icons/glider.png',
      imageAlt: 'glider and clouds',
      thumbnailUrl: '/projects/thumbnails/igcviewer.png',
      description: `● A web map application for viewing flight tracks generated by glider flight computers in the .igc file format. The application consists of a Python/Flask backend and a Typescript/React frontend.\n
      ● Python is used on the backend to parse .igc files into GeoJSON objects, which are then served by a REST API.\n
      ● Flight tracks are displayed on the frontend in a Mapbox GL JS web map. Additionally, a profile view of altitude during the flight is displayed using a Chart.js visualization. Both the map and chart are interactable.\n
      ● The user can hover over either the map or chart to view the corresponding location on the other visualization. This and other flight data are calculated using Turf.js.\n
      ● Tools used: Python, Flask, Typescript, React, Mapbox GL JS, Chart.js, Turf.js, Next.js, Tailwind CSS
      `
    },
    issuetracker: {
      title: 'Issue Tracker',
      subtitle: 'Ticket System',
      url: 'https://issuetracker.chriscarstens.com',
      githubUrl: 'https://github.com/snetsrac/issue-tracker-backend',
      backgroundColor: 'bg-indigo-400',
      imageUrl: '/projects/icons/online-test.png',
      imageAlt: 'computer screen',
      thumbnailUrl: '/projects/thumbnails/issuetracker.png',
      description: `● A web application for software professionals to manage feature development, bug-fixing, etc. using a ticket system. The application consists of a Java/Spring/PostgreSQL backend and a TypeScript/React frontend.\n
        ● The application includes OAuth 2.0 authentication and authorization. Role-based access control allows users to submit, modify, and assign other users to issues, provided they have the appropriate permissions.\n
        ● Unit and integration tests written for the backend REST API using test-driven development (TDD) with JUnit, AssertJ, Mockito, and Spring MockMvc.\n
        ● Tools used: Java, Spring, Spring Boot, PostgreSQL, Auth0, TypeScript, React, Next.js, Tailwind CSS, Docker
      `,
    },
    wq: {
      title: 'Water Quality',
      subtitle: 'Dashboard',
      url: 'https://wq.chriscarstens.com',
      githubUrl: 'https://github.com/snetsrac/wq-dashboard',
      backgroundColor: 'bg-amber-500',
      imageUrl: '/projects/icons/water-drop.png',
      imageAlt: 'water drops',
      thumbnailUrl: '/projects/thumbnails/wq.png',
      description: `● A prototype water quality dashboard showing canal flow rate and salinity data for the Lake Worth Lagoon for use by water management professionals. The application includes data visualizations and a map view. The backend API synthesizes data from multiple sources, transforming API requests into a unified JSON format on the backend.\n
        ● The prototype was used by the County’s IT department to develop the production application.\n
        ● Tools used: JavaScript, Node.js, Express, Chart.js, Mapbox GL JS, Webpack
      `,
    },
    yelpcamp: {
      title: 'YelpCamp',
      subtitle: 'Campground Reviews',
      url: 'https://yelpcamp.chriscarstens.com',
      githubUrl: 'https://github.com/snetsrac/yelpcamp',
      backgroundColor: 'bg-green-500',
      imageUrl: '/projects/icons/camping-tent.png',
      imageAlt: 'camping tent and moon',
      thumbnailUrl: '/projects/thumbnails/yelpcamp.png',
      description: `● A web application that allows users to share and review campgrounds as a course project. The application includes authentication and authorization, image upload and cloud storage, and a geocoded map view.\n
        ● Tools used: JavaScript, Node.js, Express, MongoDB, Passport.js, Cloudinary, Mapbox GL JS, Bootstrap
      `,
    },
  },
};
