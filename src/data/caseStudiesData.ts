export interface CaseStudyItem {
  id: string;
  title: string;
  assignmentNumber: string;
  subject: string;
  subjectCode: string;
  studentName: string;
  rollNumber: string;
  course: string;
  branch: string;
  academicYear: string;
  semester: string;
  section: string;
  university: string;
  campus: string;
  facultyGuide: string;
  pdfUrl: string;
  pdfFileName: string;
  parameters: {
    totalAccesses: number;
    cacheHits: number;
    cacheMisses: number;
    hitTimeNs: number;
    missPenaltyNs: number;
    totalMissCostNs: number;
    hitRatioDecimal: number;
    hitRatioPercent: number;
    missRatioDecimal: number;
    missRatioPercent: number;
    penaltyAddedNs: number;
    amatNs: number;
  };
  hitRatioComparisons: {
    label: string;
    hitRatioPercent: number;
    hitRatioDecimal: number;
    missRatioDecimal: number;
    penaltyAddedNs: number;
    amatNs: number;
    isCaseStudyScenario?: boolean;
  }[];
  references: {
    id: number;
    authors: string;
    title: string;
    publisher: string;
  }[];
}

export const coaCaseStudy: CaseStudyItem = {
  id: 'coa-case-study-3',
  title: 'Cache Memory Performance Analysis',
  assignmentNumber: 'Case Study No. 3',
  subject: 'Computer Organization and Architecture (COA)',
  subjectCode: '25CST-238',
  studentName: 'Hriday Katariaa',
  rollNumber: '25BAI10046',
  course: 'Bachelor of Technology (B.Tech)',
  branch: 'CSE AI (Microsoft)',
  academicYear: '2026–27',
  semester: '3rd Semester',
  section: '601-A',
  university: 'Chandigarh University',
  campus: 'Gharuan, Mohali, Punjab',
  facultyGuide: 'Mrs. Ruchika Gupta Mam',
  pdfUrl: '/academic-work/COA-Cache-Memory-Case-Study.pdf',
  pdfFileName: 'COA-Cache-Memory-Case-Study.pdf',
  parameters: {
    totalAccesses: 1000,
    cacheHits: 850,
    cacheMisses: 150,
    hitTimeNs: 2,
    missPenaltyNs: 50,
    totalMissCostNs: 52, // 2 ns hit time + 50 ns miss penalty
    hitRatioDecimal: 0.85,
    hitRatioPercent: 85,
    missRatioDecimal: 0.15,
    missRatioPercent: 15,
    penaltyAddedNs: 7.5, // 0.15 * 50 ns
    amatNs: 9.5, // 2 ns + 7.5 ns
  },
  hitRatioComparisons: [
    {
      label: '70% Hit Rate',
      hitRatioPercent: 70,
      hitRatioDecimal: 0.70,
      missRatioDecimal: 0.30,
      penaltyAddedNs: 15.0,
      amatNs: 17.0,
      isCaseStudyScenario: false,
    },
    {
      label: '85% Hit Rate (Case Study Data)',
      hitRatioPercent: 85,
      hitRatioDecimal: 0.85,
      missRatioDecimal: 0.15,
      penaltyAddedNs: 7.5,
      amatNs: 9.5,
      isCaseStudyScenario: true,
    },
    {
      label: '95% Hit Rate',
      hitRatioPercent: 95,
      hitRatioDecimal: 0.95,
      missRatioDecimal: 0.05,
      penaltyAddedNs: 2.5,
      amatNs: 4.5,
      isCaseStudyScenario: false,
    },
  ],
  references: [
    {
      id: 1,
      authors: 'Hennessy, J. L. and Patterson, D. A.',
      title: 'Computer Architecture: A Quantitative Approach',
      publisher: 'Morgan Kaufmann',
    },
    {
      id: 2,
      authors: 'Patterson, D. A. and Hennessy, J. L.',
      title: 'Computer Organization and Design: The Hardware/Software Interface',
      publisher: 'Morgan Kaufmann',
    },
    {
      id: 3,
      authors: 'Stallings, W.',
      title: 'Computer Organization and Architecture: Designing for Performance',
      publisher: 'Pearson',
    },
    {
      id: 4,
      authors: 'Mano, M. M.',
      title: 'Computer System Architecture',
      publisher: 'Pearson',
    },
  ],
};

