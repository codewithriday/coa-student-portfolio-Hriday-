import { COATopic } from '../types';

export const coaTopics: COATopic[] = [
  {
    id: "number-systems",
    title: "1. Number Systems",
    shortDesc: "Positional numeral systems (Decimal Base-10, Binary Base-2, Octal Base-8, Hexadecimal Base-16) and their mathematical radices.",
    iconName: "Binary",
    category: "Fundamentals",
    detailedContent: {
      overview: "Positional number systems express any value using a defined set of symbols (digits) where the weight of each digit is determined by its position and radix (base r). In computer engineering, radix-2 (Binary) represents physical voltage states (High/Low), radix-8 (Octal) and radix-16 (Hexadecimal) act as human-friendly shorthands for large binary words.",
      keyPoints: [
        "Decimal (Base 10): Uses digits 0–9. Everyday human system.",
        "Binary (Base 2): Uses digits 0 & 1. Fundamental language of electronic transistors.",
        "Octal (Base 8): Uses digits 0–7. 1 Octal digit precisely maps to 3 binary bits (2^3 = 8).",
        "Hexadecimal (Base 16): Uses digits 0–9 and letters A–F (A=10 ... F=15). 1 Hex digit maps to 4 binary bits (1 Nibble, 2^4 = 16)."
      ],
      formulaOrStructure: "Value = Σ (d_i × r^i) from i = -m to n-1\nWhere d_i is digit, r is radix/base, and i is positional power.",
      example: "Decimal 25 = (1×2^4) + (1×2^3) + (0×2^2) + (0×2^1) + (1×2^0) = 11001₂ = 31₈ = 19₁₆",
      importance: "Essential for data addressing, opcode encoding, register inspection, and memory dumps in low-level debugging."
    }
  },
  {
    id: "binary-arithmetic",
    title: "2. Binary Arithmetic & Complements",
    shortDesc: "Binary addition, subtraction, multiplication, and sign representations including 1's Complement and 2's Complement.",
    iconName: "Calculator",
    category: "Fundamentals",
    detailedContent: {
      overview: "Binary arithmetic forms the foundation of all computation. Digital processors rely primarily on 2's Complement representation for signed integers because it eliminates the dual-zero ambiguity (+0 vs -0) of 1's complement and allows subtraction to be executed seamlessly using simple adder circuitry (A - B = A + 2's complement of B).",
      keyPoints: [
        "Binary Addition Rules: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1), 1+1+1=1 (carry 1).",
        "1's Complement: Invert every bit (0 -> 1, 1 -> 0).",
        "2's Complement: Take 1's complement and add 1 (2's Comp = 1's Comp + 1).",
        "Booth's Multiplication: An efficient algorithm that multiplies two signed binary numbers in 2's complement notation by inspecting adjacent bit pairs."
      ],
      formulaOrStructure: "Signed Range for n-bit 2's Complement: [ -2^(n-1) to +(2^(n-1) - 1) ]\nFor 8-bit: -128 to +127",
      example: "Represent -5 in 8-bit 2's Complement:\n+5 in 8-bit = 00000101\n1's Complement = 11111010\nAdd 1 = 11111011 (which is -5)",
      importance: "Allows hardware designers to build unified Add/Subtract ALU units without separate complex subtraction hardware."
    }
  },
  {
    id: "data-representation",
    title: "3. Data Representation",
    shortDesc: "Fixed-point numbers, IEEE 754 floating-point standard (Sign, Exponent, Mantissa), character encodings, and BCD.",
    iconName: "FileCode",
    category: "Fundamentals",
    detailedContent: {
      overview: "Computers must encode integers, fractions, text, and instructions in uniform binary formats. While integers use fixed-point signed representations, real/scientific numbers use the IEEE 754 standard for floating-point values, standardizing single-precision (32-bit) and double-precision (64-bit) representations.",
      keyPoints: [
        "IEEE 754 Single Precision (32-bit): 1 bit Sign, 8 bits Biased Exponent (bias 127), 23 bits Mantissa/Fraction.",
        "IEEE 754 Double Precision (64-bit): 1 bit Sign, 11 bits Biased Exponent (bias 1023), 52 bits Mantissa.",
        "Binary Coded Decimal (BCD): Each decimal digit (0-9) is encoded into a 4-bit nibble.",
        "Character Encodings: ASCII (7/8-bit), UTF-8 (variable 1 to 4 bytes for universal multilingual support)."
      ],
      formulaOrStructure: "Value = (-1)^S × (1.M) × 2^(E - Bias)\nWhere S is Sign Bit, M is Normalized Mantissa, E is Stored Exponent.",
      example: "Convert -6.75 to IEEE 754 32-bit:\n1) Sign = 1 (negative)\n2) 6.75 in binary = 110.11 = 1.1011 × 2^2\n3) Exponent = 2 + 127 = 129 = 10000001₂\n4) Mantissa = 10110000000000000000000\nResult: 1 10000001 10110000000000000000000 = 0xC0D80000",
      importance: "Prevents numerical precision errors in scientific computation, graphic rendering engines, and financial computing."
    }
  },
  {
    id: "logic-gates",
    title: "4. Digital Logic Gates",
    shortDesc: "Fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) and Universal gate logic synthesis.",
    iconName: "Zap",
    category: "Fundamentals",
    detailedContent: {
      overview: "Logic gates are the physical building blocks of all digital integrated circuits. They implement Boolean algebraic operations via electronic switching transistors. NAND and NOR gates are recognized as 'Universal Gates' because any Boolean logic function or complex circuit (adders, multiplexers, latches) can be synthesized solely using NAND or NOR gates.",
      keyPoints: [
        "AND Gate: Output is HIGH (1) only if ALL inputs are 1. (Y = A · B)",
        "OR Gate: Output is HIGH (1) if AT LEAST ONE input is 1. (Y = A + B)",
        "NOT Gate: Inverter. (Y = A')",
        "NAND Gate: Inverted AND. Universal gate. (Y = (A · B)')",
        "NOR Gate: Inverted OR. Universal gate. (Y = (A + B)')",
        "XOR Gate: Output is HIGH when inputs are DIFFERENT (odd parity). (Y = A ⊕ B = A'B + AB')",
        "XNOR Gate: Output is HIGH when inputs are IDENTICAL (even parity / equivalence). (Y = (A ⊕ B)')"
      ],
      formulaOrStructure: "De Morgan's Laws:\n(A · B)' = A' + B'\n(A + B)' = A' · B'",
      example: "XOR Truth Table:\nA=0, B=0 => Y=0\nA=0, B=1 => Y=1\nA=1, B=0 => Y=1\nA=1, B=1 => Y=0",
      importance: "Used to construct half adders, full adders, multiplexers (MUX), decoders, registers, and the entire CPU arithmetic unit."
    }
  },
  {
    id: "cpu-architecture",
    title: "5. CPU (Central Processing Unit)",
    shortDesc: "The core brain of the computer: Control Unit (CU), Datapath, System Bus, and Internal interconnects.",
    iconName: "Cpu",
    category: "Processing",
    detailedContent: {
      overview: "The Central Processing Unit (CPU) interprets and executes machine instructions stored in system memory. It consists of the Control Unit (which sequences operations and generates timing signals), the Datapath (containing the ALU and internal registers), and internal buses that shuttle data, addresses, and control commands.",
      keyPoints: [
        "Control Unit (CU): Hardwired CU (faster, fixed logic gates) vs Microprogrammed CU (flexible, stored micro-code in control store).",
        "System Bus: Address Bus (unidirectional, specifies memory location), Data Bus (bidirectional, carries data words), Control Bus (transmits Read/Write strobes, clock ticks, and interrupts).",
        "Clock Speed & CPI: Cycles Per Instruction (CPI) and clock frequency govern overall execution speed.",
        "Harvard vs Von Neumann: Unified memory vs separate data and instruction buses."
      ],
      formulaOrStructure: "CPU Execution Time = Instruction Count × CPI × Clock Cycle Time (1 / Frequency)",
      example: "If a program has 1,000,000 instructions with an average CPI of 2.0 running on a 2.0 GHz CPU:\nExecution Time = 10^6 × 2.0 × (0.5 × 10^-9) = 1.0 millisecond.",
      importance: "Provides the foundational framework for compiler optimization, OS thread scheduling, and hardware acceleration."
    }
  },
  {
    id: "alu-subsystem",
    title: "6. ALU (Arithmetic Logic Unit)",
    shortDesc: "High-speed combinational execution engine handling arithmetic calculations, logical comparisons, and status flags.",
    iconName: "Scale",
    category: "Processing",
    detailedContent: {
      overview: "The Arithmetic Logic Unit (ALU) is the computational core within the CPU datapath. It accepts operands from registers or data buses, performs arithmetic operations (ADD, SUB, INC, DEC) or logical operations (AND, OR, XOR, SHIFT, ROTATE) based on function select codes, and outputs the result alongside status flag updates.",
      keyPoints: [
        "Arithmetic Operations: Addition, Subtraction with borrow, Increment, Decrement, Multiplication assistance.",
        "Logical Operations: Bitwise AND, OR, XOR, NOT, Logical Shift Left/Right, Arithmetic Shift (sign-extending), Bit Rotation.",
        "Status Flags Register: Zero Flag (Z=1 if result is 0), Sign/Negative Flag (S=MSB), Carry Flag (C=1 on unsigned overflow), Overflow Flag (V=1 on signed magnitude overflow), Parity Flag (P).",
        "Lookahead Carry Adder (CLA): Eliminates the propagation delay of Ripple Carry Adders by computing generate (G) and propagate (P) terms concurrently."
      ],
      formulaOrStructure: "CLA Logic: Carry Generate G_i = A_i · B_i | Carry Propagate P_i = A_i ⊕ B_i\nC_(i+1) = G_i + P_i · C_i",
      example: "Adding 127 + 1 in 8-bit signed ALU:\n01111111 (+127) + 00000001 (+1) = 10000000 (-128 in 2's complement)\nFlags set: S=1 (Negative), V=1 (Signed Overflow Error), C=0, Z=0.",
      importance: "Underpins mathematical computations and enables conditional branching (e.g. BEQ, BLT, JZ instructions in assembly)."
    }
  },
  {
    id: "registers-organization",
    title: "7. CPU Registers",
    shortDesc: "Ultra-fast on-chip storage units: PC, MAR, MDR, IR, Accumulator (AC), Stack Pointer (SP), and General Purpose Registers.",
    iconName: "Layers",
    category: "Processing",
    detailedContent: {
      overview: "Registers are the fastest and most expensive storage locations in the memory hierarchy, located directly inside the CPU processor die. They operate at the processor clock frequency with near-zero latency, holding intermediate values, memory pointers, status codes, and current instructions.",
      keyPoints: [
        "Program Counter (PC): Holds the memory address of the NEXT instruction to be fetched.",
        "Memory Address Register (MAR): Holds the address in physical memory currently being accessed (Read/Write).",
        "Memory Data Register (MDR) / MBR: Holds the actual data value read from or written to memory.",
        "Instruction Register (IR): Holds the binary opcode and operand fields of the instruction currently being decoded.",
        "Accumulator (AC): Holds default operands and immediate calculation results in accumulator-based architectures.",
        "Stack Pointer (SP): Points to the top of the call stack (push/pop for function calls and interrupt returns)."
      ],
      formulaOrStructure: "Register Transfer Language (RTL) notation:\nMAR ← [PC]\nPC ← [PC] + 1\nMDR ← Memory[MAR]\nIR ← [MDR]",
      example: "During the Fetch phase, PC places its value on the address bus via MAR, retrieves instruction data into MDR, copies it to IR, and increments PC by 1 word size.",
      importance: "Crucial for understanding context switching, register allocation algorithms in compilers, and assembly level debugging."
    }
  },
  {
    id: "memory-organization",
    title: "8. Memory Organization & Hierarchy",
    shortDesc: "Memory hierarchy pyramid (Registers -> Cache -> RAM -> Secondary Storage) balancing speed, cost, and capacity.",
    iconName: "HardDrive",
    category: "Memory & I/O",
    detailedContent: {
      overview: "Because fast memory is physically expensive and compact while cheap storage is slow, computer systems organize memory into a hierarchical pyramid. As you move from top to bottom, access speed decreases, latency increases, storage capacity increases exponentially, and cost per bit drops dramatically.",
      keyPoints: [
        "Memory Hierarchy: Registers (<1 ns) → L1/L2/L3 Cache (1–10 ns) → Main Memory RAM (50–100 ns) → SSD NVMe (~10–100 µs) → HDD / Cloud Storage (ms).",
        "SRAM vs DRAM: Static RAM (SRAM) uses 6-transistor bistable latches (faster, no refresh, used in Cache). Dynamic RAM (DRAM) uses 1-transistor 1-capacitor cells (denser, cheaper, requires periodic refresh, used in Main RAM).",
        "ROM Types: Mask ROM, PROM, EPROM (UV erasable), EEPROM (electrically erasable), Flash memory.",
        "Principle of Locality: Temporal Locality (recently accessed items will be accessed again soon) and Spatial Locality (adjacent items will be accessed soon)."
      ],
      formulaOrStructure: "Average Memory Access Time (AMAT):\nAMAT = Hit Time + (Miss Rate × Miss Penalty)",
      example: "If L1 Cache has a 95% hit rate with 1 ns hit time, and main memory miss penalty is 100 ns:\nAMAT = 1 ns + (0.05 × 100 ns) = 1 + 5 = 6 ns.",
      importance: "Guides software developers to write cache-friendly data structures (e.g. contiguous arrays vs fragmented linked nodes)."
    }
  },
  {
    id: "instruction-cycle",
    title: "9. Instruction Cycle & Execution",
    shortDesc: "The fundamental machine cycle: Fetch -> Decode -> Execute -> Memory Access -> Writeback, plus Interrupt handling.",
    iconName: "RefreshCw",
    category: "Architecture",
    detailedContent: {
      overview: "The instruction cycle represents the sequence of micro-operations executed by the CPU for every single instruction in a running program. Modern pipelined microprocessors overlap multiple instruction cycles simultaneously to achieve throughput approaching one instruction per clock cycle.",
      keyPoints: [
        "Fetch Stage: CPU reads instruction bytes from memory location indicated by the Program Counter (PC).",
        "Decode Stage: The Control Unit decodes the opcode bits to identify operation type and operand addressing modes.",
        "Execute Stage: ALU performs arithmetic/logic computation, or effective address calculation.",
        "Memory Access: Read/write memory operand if instruction is a LOAD/STORE.",
        "Writeback (WB): Write final result back to destination register.",
        "Interrupt Cycle: At the end of execution, CPU checks interrupt lines (INTR/NMI) to handle I/O devices or timer interrupts."
      ],
      formulaOrStructure: "Instruction Format: [ Opcode | Addressing Mode | Reg Source | Reg Dest | Immediate / Offset ]",
      example: "Executing 'ADD R1, R2, R3' (R1 = R2 + R3):\n1. Fetch: Load opcode into IR from [PC].\n2. Decode: Identify integer ADD operation.\n3. Execute: ALU calculates R2 + R3.\n4. Writeback: Put result into register R1.",
      importance: "Understanding the instruction cycle is the prerequisite for understanding instruction pipelining, hazards, and branch prediction."
    }
  },
  {
    id: "io-organization",
    title: "10. Input/Output (I/O) Organization",
    shortDesc: "Communication with peripherals: Programmed I/O, Interrupt-Driven I/O, and Direct Memory Access (DMA) controllers.",
    iconName: "Cpu",
    category: "Memory & I/O",
    detailedContent: {
      overview: "Peripherals (keyboards, disks, network interfaces, GPUs) operate at vastly different speeds compared to high-speed CPUs. The I/O subsystem handles synchronization, bus buffering, protocol translation, and data movement using three primary paradigms.",
      keyPoints: [
        "Programmed I/O (Polling): CPU continuously polls status registers of the I/O interface in a busy-wait loop. Extremely inefficient for CPU time.",
        "Interrupt-Driven I/O: Peripheral triggers hardware interrupt line when ready. CPU suspends current task, saves context, executes Interrupt Service Routine (ISR), and resumes.",
        "Direct Memory Access (DMA): A dedicated DMA Controller takes over the system bus to transfer bulk data blocks directly between peripheral and RAM with zero CPU intervention.",
        "Memory-Mapped I/O vs Isolated I/O: Shared address space for memory and I/O devices vs distinct IN/OUT assembly instructions with separate control lines (IOR/IOW)."
      ],
      formulaOrStructure: "DMA Modes:\n- Burst Transfer: DMA controller retains bus until entire block is transferred.\n- Cycle Stealing: DMA steals single bus clock cycles between CPU memory fetches.",
      example: "Transferring a 4 KB disk block via DMA:\n1. CPU initializes DMA with Source Address, Destination Address, Byte Count.\n2. DMA Controller autonomously transfers all 4096 bytes into RAM.\n3. DMA sends single interrupt signal to CPU when complete.",
      importance: "Underpins device drivers, fast network packet streaming, disk storage read/write performance, and OS kernel interrupt handling."
    }
  },
  {
    id: "cache-memory",
    title: "11. Cache Memory & Mapping Techniques",
    shortDesc: "Bridging the CPU-DRAM speed gap with L1/L2/L3 caches, Direct Mapping, Associative Mapping, and Set-Associative Mapping.",
    iconName: "Database",
    category: "Memory & I/O",
    detailedContent: {
      overview: "Cache memory is a small, ultra-fast SRAM buffer positioned directly between the CPU registers and main RAM. Cache controllers map large main memory blocks into smaller cache lines (typically 64 bytes) using specialized address tagging and placement policies.",
      keyPoints: [
        "Direct Mapping: Each main memory block maps to exactly ONE fixed cache line. (Cache Line = Block Address mod Number of Lines). Simple & fast, but suffers from conflict misses.",
        "Fully Associative Mapping: Any main memory block can be placed in ANY cache line. High flexibility and zero conflict misses, but requires expensive parallel tag comparators.",
        "Set-Associative Mapping: Hybrid compromise (e.g. 2-way, 4-way, 8-way). Cache is divided into sets; each block maps to a specific set, but can occupy any line within that set.",
        "Write Policies: Write-Through (updates cache & RAM simultaneously) vs Write-Back (updates only cache, sets 'Dirty Bit', writes to RAM only when line is evicted).",
        "Replacement Algorithms: LRU (Least Recently Used), FIFO (First In First Out), LFU (Least Frequently Used), Random."
      ],
      formulaOrStructure: "Main Memory Address Breakdown (Set-Associative):\n[ Tag Bits | Set Index Bits | Block / Word Offset Bits ]\nNumber of Sets = Total Cache Lines / Associativity (k)",
      example: "For a 32-bit address, 64 KB 4-way set-associative cache with 64-byte lines:\n- Offset bits = log2(64) = 6 bits\n- Total lines = 64 KB / 64 B = 1024 lines\n- Sets = 1024 / 4 = 256 sets => Index bits = log2(256) = 8 bits\n- Tag bits = 32 - (8 + 6) = 18 bits",
      importance: "Cache optimization is responsible for over 80% of modern software performance boosts (data locality, loop unrolling, matrix tiling)."
    }
  },
  {
    id: "computer-architecture-paradigms",
    title: "12. Computer Architecture Paradigms",
    shortDesc: "Von Neumann vs Harvard architectures, RISC vs CISC design philosophies, Pipelining, and Flynn's Taxonomy.",
    iconName: "Workflow",
    category: "Architecture",
    detailedContent: {
      overview: "Computer architecture defines the conceptual design and fundamental operational structure of computer systems. Over decades, architectural philosophies have evolved from complex monolithic instruction sets (CISC) to streamlined load-store reduced instruction sets (RISC), parallel pipelining, and multicore SIMD/MIMD configurations.",
      keyPoints: [
        "Von Neumann Architecture: Shared memory for both code instructions and data. Bottlenecked by the single bus ('Von Neumann Bottleneck').",
        "Harvard Architecture: Physically separate memories and buses for instructions and data, allowing concurrent instruction fetch and data read.",
        "RISC (Reduced Instruction Set Computer): Fixed instruction length, simple single-cycle instructions, load/store architecture, heavy reliance on compiler optimization (e.g. ARM, RISC-V, MIPS).",
        "CISC (Complex Instruction Set Computer): Variable instruction length, rich specialized instructions doing memory-to-memory operations, hardware microcode (e.g. x86 / Intel Core / AMD Ryzen).",
        "Pipelining & Hazards: Overlapping instruction execution stages. Hazards: Structural (resource conflicts), Data (Read-After-Write RAW dependencies), Control (branch penalties).",
        "Flynn's Taxonomy: SISD (Single Instruction Single Data), SIMD (Vector/GPU processing), MISD, MIMD (Multi-core CPUs & Clusters)."
      ],
      formulaOrStructure: "Ideal Pipelined Speedup S = (k × n) / (k + n - 1) ≈ k (for large number of instructions n, where k is pipeline stages)",
      example: "A 5-stage RISC pipeline (IF, ID, EX, MEM, WB) executes 1 instruction per cycle after filling the 5-cycle pipeline latency, yielding up to 5x throughput over non-pipelined hardware.",
      importance: "Guides system software engineers, chip architects, and compiler developers in designing next-generation computing hardware."
    }
  }
];
