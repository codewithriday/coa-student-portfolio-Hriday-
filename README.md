# Computer Organization & Architecture (COA) Student Portfolio & Learning Platform

A modern, responsive, academic student portfolio and educational website engineered with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

Built specifically for Computer Science & Engineering students to demonstrate technical mastery in Computer Organization & Architecture, showcase verified academic credentials, and provide a client-side **COA Number System Converter & Logic Simulation Engine**.

---

## 🌟 Key Features

### 1. 🧮 Interactive COA Number System Converter
- **4 Radix Conversions:** Instant, bidirectional, real-time conversion across **Decimal (Base-10)**, **Binary (Base-2)**, **Octal (Base-8)**, and **Hexadecimal (Base-16)**.
- **Mathematical Accuracy:** Supports positive/negative integers, floating-point decimals, and 2's complement representation.
- **Step-by-Step Breakdown:** Visualizes the exact successive division remainder steps and power expansion proofs.
- **Hardware Bit & Register Inspector:** 8-bit & 16-bit register bit viewer with MSB/LSB labels, 1's complement, and 2's complement arithmetic.
- **Validation & Error Handling:** Real-time character sanitization with friendly error feedback.
- **Copy to Clipboard:** 1-click copy with toast notifications.
- **Educational References:** Base explanation cards and standard demonstration examples (e.g. Decimal `25` ↔ Binary `11001` ↔ Octal `31` ↔ Hex `19`).

### 2. 📚 12 COA Quick Learning Modules & Logic Gate Simulator
- In-depth study cards with rich modal dialogs covering:
  1. *Number Systems & Radix Mathematics*
  2. *Binary Arithmetic & Complements (1's & 2's Complement, Booth's Algorithm)*
  3. *Data Representation (IEEE-754 Single & Double Precision)*
  4. *Digital Logic Gates (Includes Live Interactive Gate Simulator for AND, OR, NOT, NAND, NOR, XOR, XNOR)*
  5. *CPU Architecture (Control Unit, Datapath, System Bus)*
  6. *ALU Subsystem (Arithmetic/Logic ops, Status Flags Z/S/C/V, Carry Lookahead)*
  7. *CPU Registers (PC, MAR, MDR, IR, Accumulator, SP)*
  8. *Memory Organization & Hierarchy Pyramid (SRAM vs DRAM, AMAT)*
  9. *Instruction Cycle (Fetch, Decode, Execute, Writeback, Interrupt Cycle)*
  10. *Input/Output (I/O) Organization (Programmed I/O, Interrupts, DMA)*
  11. *Cache Memory & Mapping Techniques (Direct, Associative, Set-Associative, Replacement)*
  12. *Computer Architecture Paradigms (Von Neumann vs Harvard, RISC vs CISC, Pipelining)*

### 3. 🎓 Academic Portfolio & Credentials
- **Hero & Student Profile:** Name, UID, Branch, College, Subject, live 8-bit bus pulse animation, and key statistics.
- **About Me:** Academic interests cards, future goals roadmap (short/medium/long-term), and technical skills proficiency bars.
- **Interactive Gallery:** Filterable categories (*Certificates, Achievements, Academic Activities, Projects, Other Highlights*) with full Lightbox modal preview.
- **Achievements Timeline:** Verified milestones with credential verification badges.
- **Resume Section:** In-app printable resume viewer modal and direct PDF download trigger.
- **Contact Section:** 1-click email copy, direct profile links, and message dispatch simulator.

---

## 📁 Project Structure

```
coa-student-portfolio/
├── public/
│   ├── images/                # Static assets & certificate images
│   └── resume/
│       └── resume.pdf         # Place your actual resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind styles & dark mode definitions
│   │   ├── layout.tsx         # Root layout with SEO metadata & fonts
│   │   └── page.tsx           # Main homepage layout assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive navbar with mobile drawer
│   │   ├── Hero.tsx           # Hero section with student credentials
│   │   ├── About.tsx          # About Me, Academic Interests, Future Goals
│   │   ├── Skills.tsx         # Technical skills proficiency matrix
│   │   ├── NumberConverter.tsx# Interactive 4-Radix Converter & Inspector
│   │   ├── LogicGateSimulator.tsx # Interactive Digital Logic Gate Sandbox
│   │   ├── COAKnowledge.tsx   # 12 COA Curriculum Cards
│   │   ├── COATopicModal.tsx  # Detailed study modal for COA topics
│   │   ├── Gallery.tsx        # Academic gallery with category filters
│   │   ├── GalleryLightbox.tsx# Modal Lightbox for certificates
│   │   ├── Achievements.tsx   # Achievements & distinctions timeline
│   │   ├── Resume.tsx         # Resume preview & download triggers
│   │   ├── ResumeModal.tsx    # Printable curriculum vitae sheet
│   │   ├── Contact.tsx        # Direct contact cards & message form
│   │   └── Footer.tsx         # University-grade footer & copyright
│   ├── data/
│   │   ├── studentConfig.ts   # 👈 SINGLE CONFIG FILE TO PERSONALIZE ALL INFO
│   │   └── coaTopics.ts       # Rich study notes for all 12 COA topics
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces & types
│   └── utils/
│       └── converter.ts       # Mathematical radix conversion engine
├── standalone-preview.html    # Zero-dependency browser preview file
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or 20.x recommended)
- `npm`, `yarn`, or `pnpm`

### 2. Installation
Open your terminal in this directory and install dependencies:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Reloading.

### 4. Build for Production
To verify there are zero TypeScript or linting errors:
```bash
npm run build
npm run start
```

### 5. Instant Browser Preview (Zero Installation)
If you do not have Node.js installed on your machine yet, simply double-click the included `standalone-preview.html` file to test the complete interactive portfolio and number converter directly in any browser (Chrome, Edge, Firefox, Safari).

---

## ✏️ How to Personalize the Website (in 60 Seconds)

All student information is centralized in a single file:
👉 **[`src/data/studentConfig.ts`](file:///C:/Users/Hriday%20Kataria/.gemini/antigravity-ide/scratch/coa-student-portfolio/src/data/studentConfig.ts)**

Open this file and replace the placeholder fields:

```typescript
export const studentConfig: StudentProfile = {
  name: "YOUR NAME",                   // Replace with your full name
  uid: "YOUR UID",                     // e.g. 23BCS10892
  branch: "YOUR BRANCH",               // e.g. Computer Science & Engineering
  college: "YOUR COLLEGE NAME",        // e.g. University Institute of Technology
  mentorOrTeacher: "Dr. Professor",    // Evaluator / Teacher name
  email: "your.email@university.edu",  // Your email
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  bio: "Computer Science student passionate about...",
  // ... customized interests, goals, skills, gallery items, and achievements!
};
```

When you save the file, the entire website (Hero, Navbar, About, Resume, Footer, Metadata, Open Graph tags) updates automatically!

---

## 📄 How to Add Your Resume PDF
1. Save your resume PDF as **`resume.pdf`**.
2. Place it in the directory: **`public/resume/resume.pdf`**.
3. Clicking **"Download Resume"** on the website will automatically serve your PDF file.

---

## 🖼️ How to Add Certificates & Gallery Images
1. Save your certificate images (PNG, JPG, or SVG) inside the `public/images/` directory.
2. In `src/data/studentConfig.ts`, update the `galleryItems` array with your certificate titles, dates, descriptions, and file paths.

---

## ☁️ How to Deploy to Vercel (Free & Instant)

Deploying this project to Vercel takes less than 2 minutes:

### Method A: Deploy via GitHub (Recommended)
1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of COA Student Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/coa-student-portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** and sign in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select your **`coa-student-portfolio`** repository.
5. Vercel will automatically detect **Next.js**. Keep the default settings and click **"Deploy"**.
6. In ~60 seconds, your site will be live!

### Method B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompt commands (press Enter for defaults), and Vercel will generate your live production URL.

---

## 🌐 How to Obtain Your Public Website URL
- After deployment completes on Vercel, your live URL will look like:
  `https://coa-student-portfolio-yourname.vercel.app`
- You can submit this public link directly for your **Computer Organization & Architecture academic assignment** or link it on your LinkedIn/resume!

---

## 🛡️ Quality & Architecture Standards
- ✅ 100% Responsive on Mobile, Tablet, Laptop, and 4K Screens.
- ✅ Accessible with Semantic HTML5, ARIA labels, and keyboard navigation.
- ✅ Mathematically verified 4-radix number system converter.
- ✅ Interactive Digital Logic Gate Simulator.
- ✅ SEO optimized with OpenGraph and Twitter card tags.
- ✅ Zero external backend dependencies — completely self-contained.
