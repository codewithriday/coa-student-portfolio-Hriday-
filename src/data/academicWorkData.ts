export interface AcademicDocument {
  id: string;
  title: string;
  documentType: 'assignment' | 'case-study';
  badge: string;
  category: string;
  author: string;
  university?: string;
  academicYear?: string;
  course?: string;
  subjectCode?: string;
  pageCount: number;
  fileSize: string;
  description: string;
  pdfUrl: string;
  downloadFileName: string;
  tags: string[];
  highlights?: {
    label: string;
    value: string;
    color: string;
  }[];
  keyTopics: string[];
}

export const academicDocuments: AcademicDocument[] = [
  {
    id: 'assignment-1',
    title: 'Computer Organization and Architecture – Assignment 1',
    documentType: 'assignment',
    badge: 'Assignment No. 1',
    category: 'Computer Organization and Architecture',
    author: 'Hriday Kataria',
    university: 'Chandigarh University',
    academicYear: '2026–27',
    course: 'B.Tech CSE AI (Microsoft)',
    subjectCode: '25CST-238',
    pageCount: 3,
    fileSize: '24.6 KB',
    description:
      'An academic assignment covering Yotta, NPTEL, the Turing Award, Raspberry Pi, programming language selection, CPU versus GPU, CPU/GPU/TPU comparisons, computer specifications, Intel and AMD founders, processor organization, the Stampeding Herd Problem, India AI Impact Summit 2026 and The Imitation Game.',
    pdfUrl: '/academic-work/Assignment-No-1.pdf',
    downloadFileName: 'Assignment-No-1.pdf',
    tags: [
      'Yotta Cloud',
      'NPTEL',
      'Turing Award',
      'Raspberry Pi',
      'CPU vs GPU',
      'CPU / GPU / TPU',
      'AMD Ryzen 5',
      'Stampeding Herd',
      'India AI Summit 2026',
      'The Imitation Game'
    ],
    highlights: [
      { label: 'Topics Covered', value: '13 Core Questions', color: 'cyan' },
      { label: 'Hardware Focus', value: 'AMD Ryzen 5 5500U', color: 'indigo' },
      { label: 'AI Summit', value: 'India AI 2026', color: 'emerald' },
      { label: 'Architecture', value: 'CPU / GPU / TPU', color: 'amber' }
    ],
    keyTopics: [
      '1. Yotta Cloud Architecture & Tier-IV Data Centers',
      '2. NPTEL E-Learning Initiative by IITs & MoE',
      '3. A.M. Turing Award in Reinforcement Learning',
      '4. Raspberry Pi Architecture & Embedded Systems',
      '5. Language Selection Criteria (Python, C++, Java)',
      '6. Parallel Processing: Why GPU is Faster than CPU',
      '7. Architectural Comparison: CPU vs. GPU vs. TPU',
      '8. Computer Hardware Configuration (8 GB RAM, 64-bit)',
      '9. Semiconductor Founders: Intel (Moore/Noyce) & AMD (Sanders)',
      '10. Laptop CPU Organization: AMD Ryzen 5 (6 Cores / 12 Threads)',
      '11. The Stampeding Herd Concurrency Problem',
      '12. Key Takeaways from India AI Impact Summit 2026',
      '13. Architectural Lessons from The Imitation Game (Alan Turing)'
    ]
  },
  {
    id: 'case-study-3',
    title: 'Cache Memory Performance Analysis',
    documentType: 'case-study',
    badge: 'Case Study No. 3',
    category: 'Computer Organization and Architecture – Case Study No. 3',
    author: 'Hriday Katariaa',
    university: 'Chandigarh University',
    academicYear: '2026–27',
    course: 'B.Tech CSE AI (Microsoft)',
    subjectCode: '25CST-238',
    pageCount: 6,
    fileSize: '210 KB',
    description:
      'A technical case study analysing cache memory performance, cache hits and misses, hit ratio, miss ratio, locality of reference and Average Memory Access Time (AMAT).',
    pdfUrl: '/academic-work/COA-Cache-Memory-Case-Study.pdf',
    downloadFileName: 'COA-Cache-Memory-Case-Study.pdf',
    tags: [
      'Cache Memory',
      'Hit Ratio (85%)',
      'Miss Ratio (15%)',
      'AMAT (9.5 ns)',
      'Locality of Reference',
      'Temporal Locality',
      'Spatial Locality',
      'CPU-Cache-RAM',
      'Memory Hierarchy'
    ],
    highlights: [
      { label: 'Cache Hit Ratio', value: '85%', color: 'emerald' },
      { label: 'Cache Miss Ratio', value: '15%', color: 'amber' },
      { label: 'Average Access Time', value: '9.5 ns', color: 'cyan' },
      { label: 'Cache Hit Time', value: '2 ns', color: 'indigo' }
    ],
    keyTopics: [
      '1. Introduction to Cache Memory in Von Neumann Architecture',
      '2. Experimental Scenario: 1,000 Memory Access Cycles',
      '3. Core Objectives & Memory Hierarchy Placement',
      '4. Definition, Purpose & Cost-Performance Trade-offs',
      '5. Systematic Distinction Between Cache Hits and Misses',
      '6. Step-by-Step Cache Hit Ratio Calculation (850 / 1000 = 85%)',
      '7. Cache Miss Ratio Calculation (150 / 1000 = 15%)',
      '8. Temporal and Spatial Locality of Reference Analysis',
      '9. Average Memory Access Time (AMAT) Mathematical Derivation',
      '10. High-Fidelity CPU–Cache–RAM Datapath Architecture Diagram',
      '11. Three Crucial Architectural Observations on Memory Latency',
      '12. Non-linear Inverse Relationship between Hit Ratio and AMAT',
      '13. Academic Conclusion & Memory Subsystem Optimization',
      '14. Textbook References (Hennessy & Patterson, Stallings, Mano)'
    ]
  }
];

