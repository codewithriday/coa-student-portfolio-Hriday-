import { StudentProfile, GalleryItem, AchievementItem } from '../types';

/**
 * =========================================================================
 * HRIDAY KATARIA - AUTHENTIC PERSONAL & ACADEMIC CONFIGURATION
 * =========================================================================
 * Grounded directly in Hriday's official resume & academic credentials.
 * =========================================================================
 */

export const studentConfig: StudentProfile = {
  name: "Hriday Kataria",
  initials: "HK",
  uid: "25BAI10046",
  branch: "B.Tech CSE (AI) | Python • AI/ML • Azure Certified",
  university: "Chandigarh University, Gharuan, Punjab",
  subject: "Computer Organization & Architecture (COA)",
  subjectCode: "COA-Core",
  semester: "2nd Year (Semester 3)",
  tagline: "CSE – Artificial Intelligence (Microsoft) Student",
  motto: "Learn. Build. Explore. Experience.",
  
  // Authentic contact details
  email: "hridaykataria026@gmail.com",
  github: "https://github.com/codewithriday",
  linkedin: "https://www.linkedin.com/in/hriday-kataria-0459a63a9/",
  resumePath: "/resume/Hriday-Kataria-Resume.pdf",

  bio: "Second-year B.Tech CSE (AI) student with a strong foundation in Python, C++, core AI, cloud computing, and computer architecture. Microsoft Certified in Azure AI Fundamentals (AI-900) and Azure Fundamentals (AZ-900).",
  
  extendedBio: "Hi, I'm Hriday Kataria, a second-year B.Tech CSE (AI) student at Chandigarh University (Faculty Evaluator: Prof. Ruchika Gupta). I have hands-on project experience in computer vision, low-level instruction set simulation, and conversational AI systems. Beyond technology and coding in Python and C++, I am an active multi-sports enthusiast and competitive Lawn Tennis champion.",

  personalInterests: [
    {
      title: "LAWN TENNIS & MULTI-SPORTS",
      tagline: "Lawn Tennis Winner • Multi-Sports Athlete",
      description: "As a passionate multi-sports athlete and tournament winner in Lawn Tennis, sports instill discipline, swift reflexes, focus, and competitive endurance.",
      icon: "Activity",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400",
      badge: "Lawn Tennis Champion"
    },
    {
      title: "EXPLORATION & TECH TRENDS",
      tagline: "AI Trends • Cloud Systems • Innovations",
      description: "Constantly exploring emerging AI breakthroughs, cloud computing architectures, and innovative open-source projects across global developer communities.",
      icon: "Compass",
      color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/40 text-cyan-400",
      badge: "Tech Explorer"
    },
    {
      title: "ADVENTURE & OUTDOOR ACTIVITIES",
      tagline: "Outdoor Pursuits • Music • Continuous Learning",
      description: "Stepping outside the comfort zone through outdoor activities, sports expeditions, listening to music, and experimenting with hands-on software engineering.",
      icon: "Flame",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400",
      badge: "Active Lifestyle"
    }
  ],

  academicInterests: [
    { title: "Artificial Intelligence & ML", description: "Deep learning models, predictive data pipelines, and machine learning architectures.", category: "AI & ML" },
    { title: "Computer Vision & MediaPipe", description: "Real-time hand gesture tracking, landmark detection, and camera-feed classification with OpenCV.", category: "AI & ML" },
    { title: "Cloud Computing (Microsoft Azure)", description: "Microsoft Azure AI (AI-900), Cloud Infrastructure (AZ-900), and scalable distributed cloud systems.", category: "AI & ML" },
    { title: "Computer Organization & Architecture", description: "Instruction set simulators, ALU datapaths, CPU registers, number systems, and memory hierarchies.", category: "Architecture & Systems" },
    { title: "Computer Systems & C++", description: "Low-level system programming, memory management, and high-performance algorithms in C and C++.", category: "Architecture & Systems" },
    { title: "Operating Systems & Linux", description: "Process scheduling, command-line automation, memory paging, Linux, and Kali Linux environments.", category: "Architecture & Systems" },
    { title: "Data Structures & Algorithms", description: "Problem solving, time-space asymptotic complexity, and structured Python/C++ logic.", category: "Core CS & Software" },
    { title: "Python Software Development", description: "Modular software design, scientific computation (NumPy, Pandas, Scikit-learn), and OpenCV.", category: "Core CS & Software" },
    { title: "Conversational Chatbot Systems", description: "Intent-matching architectures, rule-based systems, and NLP model integration.", category: "Core CS & Software" },
    { title: "Generative AI", description: "Foundational LLM integration, prompt engineering, and modern neural generative workflows.", category: "AI & ML" },
    { title: "Data Science & Web Systems", description: "Active collaboration on data-focused and web projects via the DSW (Data Science & Web) Club.", category: "Core CS & Software" },
    { title: "Computer Networks & Cloud", description: "Network protocols, cloud APIs, distributed services, and secure communication.", category: "Architecture & Systems" }
  ],

  futureGoals: [
    { id: 1, title: "Become a strong AI/ML and Cloud Systems engineer.", category: "Career" },
    { id: 2, title: "Build practical, production-ready AI and Computer Vision applications.", category: "Engineering" },
    { id: 3, title: "Master advanced low-level Computer Architecture and Instruction Set Simulation.", category: "Academics" },
    { id: 4, title: "Secure an AI/ML, Python Development, Data Analyst, or Cloud internship.", category: "Internship" },
    { id: 5, title: "Expand Azure Cloud certifications to Associate and Solutions Architect levels.", category: "Cloud" },
    { id: 6, title: "Deepen expertise in OpenCV, PyTorch, and real-time vision algorithms.", category: "Computer Vision" },
    { id: 7, title: "Contribute to impactful open-source repositories and collegiate tech projects.", category: "Community" },
    { id: 8, title: "Continue leading and organizing collegiate initiatives with DSW Club & Discipline Team.", category: "Leadership" },
    { id: 9, title: "Compete and win in university-level Lawn Tennis tournaments.", category: "Sports" },
    { id: 10, title: "Maintain a balanced lifestyle combining AI technology, athletic sports, and exploration.", category: "Lifestyle" }
  ],

  futureProjects: [
    {
      title: "Real-Time Hand Gesture Recognition System",
      category: "Computer Vision",
      description: "Engineered with Python, OpenCV, and MediaPipe to detect, track, and classify landmark hand movements from a live camera feed.",
      techTags: ["Python", "OpenCV", "MediaPipe", "Vision"]
    },
    {
      title: "Instruction Set & COA Architecture Simulator",
      category: "Computer Architecture",
      description: "Low-level processor simulation and 4-radix number system converter modeling arithmetic, logic, and instruction execution.",
      techTags: ["C++", "Python", "COA", "Radix Math"]
    },
    {
      title: "Modular Scientific Calculator Engine",
      category: "Software Development",
      description: "Python-based scientific computation system supporting arithmetic, trigonometric, and logarithmic calculations with input validation.",
      techTags: ["Python", "Algorithms", "Validation"]
    },
    {
      title: "Extensible AI Chatbot System",
      category: "Artificial Intelligence",
      description: "Conversational chatbot combining C++ and Python with an extensible intent-matching structure ready for ML-based NLP models.",
      techTags: ["C++", "Python", "NLP", "AI"]
    },
    {
      title: "Azure Cloud Scalable Data Pipelines",
      category: "Cloud & Data",
      description: "Building cloud-native machine learning pipelines utilizing Microsoft Azure AI services (AI-900 / AZ-900 foundations).",
      techTags: ["Azure", "AI-900", "AZ-900", "Cloud"]
    },
    {
      title: "Interactive COA Learning & Logic Portal",
      category: "Educational Technology",
      description: "Interactive educational portal with live 4-radix converter, gate simulators, and 12 architecture study modules.",
      techTags: ["Next.js", "React", "TypeScript", "Tailwind"]
    }
  ]
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    category: "Certificates",
    description: "Official certification by Microsoft validating foundational knowledge of Machine Learning, Computer Vision, Natural Language Processing, and Conversational AI workloads on Microsoft Azure.",
    date: "Certified",
    iconType: "Award",
    placeholderText: "Microsoft Azure AI-900",
    tags: ["Microsoft Certified", "Azure AI-900", "Machine Learning"]
  },
  {
    id: "g2",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    category: "Certificates",
    description: "Official Microsoft certification validating cloud concepts, Azure architectural services, management tools, cloud security, and governance.",
    date: "Certified",
    iconType: "Award",
    placeholderText: "Microsoft Azure AZ-900",
    tags: ["Microsoft Certified", "Azure AZ-900", "Cloud Computing"]
  },
  {
    id: "g3",
    title: "Generative AI Essentials — Coursera",
    category: "Certificates",
    description: "Professional specialization covering generative artificial intelligence concepts, prompt design, large language models, and real-world AI applications.",
    date: "Certified",
    iconType: "Award",
    placeholderText: "Generative AI Essentials",
    tags: ["Generative AI", "Coursera", "LLMs"]
  },
  {
    id: "g4",
    title: "Lawn Tennis Tournament Winner",
    category: "Personal Highlights",
    description: "Won tournament honors in competitive Lawn Tennis, exemplifying athletic discipline, strategic focus, and physical endurance.",
    date: "Sports Honor",
    iconType: "Activity",
    placeholderText: "Lawn Tennis Winner",
    tags: ["Lawn Tennis", "Sports Winner", "Athletics"]
  },
  {
    id: "g5",
    title: "Hand Gesture Recognition Project (OpenCV & MediaPipe)",
    category: "Projects",
    description: "Real-time computer vision system translating live camera hand gestures into discrete classification commands via landmark tracking.",
    date: "Project",
    iconType: "Binary",
    placeholderText: "Hand Gesture CV Project",
    tags: ["Python", "OpenCV", "MediaPipe"]
  },
  {
    id: "g6",
    title: "DSW (Data Science & Web) Club & Discipline Team",
    category: "Academic",
    description: "Active contributing member of the DSW Club collaborating on AI and data projects, as well as serving on the college campus discipline committee.",
    date: "Active",
    iconType: "Award",
    placeholderText: "DSW Club & Discipline Team",
    tags: ["DSW Club", "Leadership", "Chandigarh University"]
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Microsoft Certified in Azure AI (AI-900) & Azure (AZ-900)",
    category: "Certification",
    organization: "Microsoft",
    date: "Verified Certification",
    description: "Demonstrated verified mastery of cloud computing infrastructure, security, machine learning pipelines, and Azure AI workloads.",
    status: "Microsoft Certified"
  },
  {
    id: "ach-2",
    title: "Lawn Tennis Tournament Winner & Multi-Sports Athlete",
    category: "Participation",
    organization: "Sports Syndicate & Tournaments",
    date: "Competitive Sports",
    description: "Secured top tournament standing in competitive Lawn Tennis, maintaining a balanced lifestyle of athletic and academic excellence.",
    status: "Winner"
  },
  {
    id: "ach-3",
    title: "DSW (Data Science & Web) Club Member",
    category: "Academic",
    organization: "Chandigarh University",
    date: "2025 – Present",
    description: "Actively collaborating on data-focused, AI, and web projects with fellow engineers in the collegiate Data Science & Web Club.",
    status: "Active Member"
  },
  {
    id: "ach-4",
    title: "Instruction Set Simulator & COA Academic Portal Author",
    category: "Technical",
    organization: "Dept. of CSE, Chandigarh University (Prof. Ruchika Gupta)",
    date: "2026",
    description: "Engineered instruction set simulators and the complete interactive 4-radix COA Number System Converter educational portal.",
    status: "Completed Course Project"
  }
];
