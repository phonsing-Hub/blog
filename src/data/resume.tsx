import { Icons } from "@/components/icons";
export const DATA = {
  name: "Phonsing",
  initials: "PS",
  //url: "https://dillion.io",
  description: "Computer Engineering and Software Developer",
  summary:
    "Hello, my name is Phonsing Taleman. I am passionate about the development of technology and innovation. My expertise lies in software development and hardware design. I am always eager to learn and improve myself, with a commitment to creating valuable and interesting work continuously.",
  avatarUrl: "/favicon.png",
  skills: [
    "C/C++",
    "Go",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "Bun",
    "Node.js",
    "React.js",
    "Tailwindcss",
    "Ant Design",
    "Next.js",
    "Next UI",
    "Magic UI",
    "Express.js",
    "Elysia.js",
    "Go Fiber",
    "My SQL",
    "MS SQL",
    "Pg SQL",
    "Mongo DB",
    "Prisma",
    "Go Grom",
    "Arduino",
    "Easy EDA",
    "Ubuntu",
    "Google Cloud",
    "Docker",
  ],

  contact: {
    email: "polsing.ap@gmail.com",
    tel: "064-763-3547",
    location: "lampho bangbuathong nonthaburi",
    time: "08.00 - 22.00",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phonsing-Hub/blog",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/polsing-ps",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/phonsing_",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      }
      
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Sripatum University",
      href: "https://www.spu.ac.th/",
      degree: "Information Technology",
      logoUrl: "/spu.png",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Employee System",
      href: "https://github.com/phonsing-Hub/EmployeeSystem",
      dates: "Sep 2024",
      active: true,
      description:
        "technology designed to streamline core HR services and improve workforce productivity.",
      technologies: ["React", "Go Fiber", "Gorm DB", "TailwindCSS", "Next UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/phonsing-Hub/EmployeeSystem",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./1026.mp4",
    },
    {
      title: "Face Recognition",
      href: "https://github.com/phonsing-Hub/ImageProcessing",
      dates: "Oct 2024",
      active: true,
      description:
        "Face Recognition is a technology that was created To recognize the structure of the human face Then the detected facial data is sent to the system.",
      technologies: [
        "Python",
        "Open CV",
        "FastAPI",
        "Paho MQTT",
        "React",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/phonsing-Hub/ImageProcessing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "./Flowchart.jpg",
    },
    {
      title: "Hardware Controlled System",
      href: "https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman",
      dates: "Sep 2023",
      active: true,
      description:
      " Hardware-Controlled System is a control system that relies on hardware alone, without microcontrollers or processors, functioning based on circuit designs using components like logic gates, diodes, and transistors. It is designed for simple, specific tasks requiring stability and low power. Examples include light-following circuits and basic industrial automation controls.",
      technologies: [
        "Photoresistor LDR",
        "Variable Resistor",
        "Motor dc",
        "LED",
        "Resistor",
        "Op-Amp",
        "IC 74HC32",
        "IC 74HC04",
        "IC L293D ",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "./1028.mp4",
    },
  ],
};
