import { NumberSystem } from '../types';

export interface ConversionResult {
  decimal: string;
  binary: string;
  octal: string;
  hexadecimal: string;
  isValid: boolean;
  errorMessage?: string;
  steps: {
    title: string;
    description: string;
    calculation: string;
  }[];
  bitAnalysis?: {
    raw8bit: string;
    raw16bit: string;
    onesComplement?: string;
    twosComplement?: string;
    isNegative: boolean;
  };
}

export const VALIDATION_REGEX = {
  decimal: /^-?\d*(\.\d*)?$/,
  binary: /^-?[01]*(\.[01]*)?$/,
  octal: /^-?[0-7]*(\.[0-7]*)?$/,
  hexadecimal: /^-?[0-9a-fA-F]*(\.[0-9a-fA-F]*)?$/
};

export function validateInput(value: string, fromSystem: NumberSystem): { isValid: boolean; error?: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return { isValid: true };
  }

  // Check character validity
  switch (fromSystem) {
    case 'decimal': {
      if (!/^-?\d+(\.\d+)?$/.test(trimmed)) {
        return { isValid: false, error: "Invalid decimal number. Please enter digits 0–9 (optional decimal point or leading minus)." };
      }
      break;
    }
    case 'binary': {
      if (!/^-?[01]+(\.[01]+)?$/.test(trimmed)) {
        return { isValid: false, error: "Invalid binary number. Please enter only 0 and 1 (optional decimal point or leading minus)." };
      }
      break;
    }
    case 'octal': {
      if (!/^-?[0-7]+(\.[0-7]+)?$/.test(trimmed)) {
        return { isValid: false, error: "Invalid octal number. Please enter only digits 0–7 (optional decimal point or leading minus)." };
      }
      break;
    }
    case 'hexadecimal': {
      if (!/^-?[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/.test(trimmed)) {
        return { isValid: false, error: "Invalid hexadecimal number. Please enter only 0–9 and A–F / a–f." };
      }
      break;
    }
  }

  return { isValid: true };
}

/**
 * Convert any fractional/integer number from base r to Decimal float
 */
function toDecimalFloat(input: string, base: number): number {
  const isNegative = input.startsWith('-');
  const cleanInput = isNegative ? input.slice(1) : input;
  const parts = cleanInput.split('.');
  
  const intPart = parts[0] ? parseInt(parts[0], base) : 0;
  if (isNaN(intPart)) return NaN;
  
  let fracPart = 0;
  if (parts.length > 1 && parts[1]) {
    const fracStr = parts[1];
    for (let i = 0; i < fracStr.length; i++) {
      const digitVal = parseInt(fracStr[i], base);
      if (isNaN(digitVal)) return NaN;
      fracPart += digitVal / Math.pow(base, i + 1);
    }
  }
  
  const total = intPart + fracPart;
  return isNegative ? -total : total;
}

/**
 * Convert decimal float to target base string with fraction support
 */
function fromDecimalFloat(dec: number, targetBase: number, maxFracDigits = 8): string {
  if (isNaN(dec)) return '';
  const isNegative = dec < 0;
  const absDec = Math.abs(dec);
  
  const intVal = Math.floor(absDec);
  let fracVal = absDec - intVal;
  
  const intStr = intVal.toString(targetBase).toUpperCase();
  if (fracVal === 0) {
    return isNegative ? `-${intStr}` : intStr;
  }
  
  let fracStr = '';
  let count = 0;
  while (fracVal > 0 && count < maxFracDigits) {
    fracVal *= targetBase;
    const digit = Math.floor(fracVal);
    fracStr += digit.toString(targetBase).toUpperCase();
    fracVal -= digit;
    count++;
  }
  
  const result = `${intStr}.${fracStr}`;
  return isNegative ? `-${result}` : result;
}

/**
 * Generate 8-bit & 16-bit 2's complement representation for integers
 */
function generateBitAnalysis(decimalVal: number) {
  if (!Number.isInteger(decimalVal)) return undefined;
  
  const isNegative = decimalVal < 0;
  const intVal = Math.floor(Math.abs(decimalVal));
  
  if (intVal > 65535) return undefined;
  
  // Format unsigned binary
  const binary8 = (intVal & 0xFF).toString(2).padStart(8, '0');
  const binary16 = (intVal & 0xFFFF).toString(2).padStart(16, '0');
  
  let onesComp = '';
  let twosComp = '';
  
  if (isNegative) {
    // 8-bit two's complement
    const twosVal8 = ((~intVal + 1) & 0xFF).toString(2).padStart(8, '0');
    const onesVal8 = (~intVal & 0xFF).toString(2).padStart(8, '0');
    onesComp = onesVal8;
    twosComp = twosVal8;
  } else {
    onesComp = binary8.split('').map(b => b === '0' ? '1' : '0').join('');
    const twos = ((~intVal + 1) & 0xFF).toString(2).padStart(8, '0');
    twosComp = twos;
  }
  
  return {
    raw8bit: isNegative ? twosComp : binary8,
    raw16bit: isNegative ? (((~intVal + 1) & 0xFFFF).toString(2).padStart(16, '0')) : binary16,
    onesComplement: onesComp,
    twosComplement: twosComp,
    isNegative
  };
}

export function convertNumber(input: string, fromSystem: NumberSystem): ConversionResult {
  const trimmed = input.trim();
  
  if (!trimmed) {
    return {
      decimal: '',
      binary: '',
      octal: '',
      hexadecimal: '',
      isValid: true,
      steps: []
    };
  }

  const validation = validateInput(trimmed, fromSystem);
  if (!validation.isValid) {
    return {
      decimal: '',
      binary: '',
      octal: '',
      hexadecimal: '',
      isValid: false,
      errorMessage: validation.error,
      steps: []
    };
  }

  try {
    let base = 10;
    if (fromSystem === 'binary') base = 2;
    else if (fromSystem === 'octal') base = 8;
    else if (fromSystem === 'hexadecimal') base = 16;

    const decimalValue = toDecimalFloat(trimmed, base);
    if (isNaN(decimalValue)) {
      return {
        decimal: '',
        binary: '',
        octal: '',
        hexadecimal: '',
        isValid: false,
        errorMessage: `Cannot parse ${fromSystem} value "${trimmed}".`,
        steps: []
      };
    }

    const decStr = decimalValue.toString();
    const binStr = fromDecimalFloat(decimalValue, 2);
    const octStr = fromDecimalFloat(decimalValue, 8);
    const hexStr = fromDecimalFloat(decimalValue, 16);

    // Generate mathematical steps
    const steps = [];

    // Step 1: Conversion to Decimal (if not already decimal)
    if (fromSystem !== 'decimal') {
      const clean = trimmed.startsWith('-') ? trimmed.slice(1) : trimmed;
      const parts = clean.split('.');
      const intStr = parts[0] || '0';
      const expansion = intStr
        .split('')
        .reverse()
        .map((digit, i) => `(${digit} × ${base}^${i})`)
        .reverse()
        .join(' + ');

      steps.push({
        title: `Step 1: Convert ${fromSystem.toUpperCase()} to Decimal (Base 10)`,
        description: `Expand digits by positional weights of radix ${base}:`,
        calculation: `${clean}₍${base}₎ = ${expansion} = ${Math.abs(decimalValue)}₁₀${decimalValue < 0 ? ' (with negative sign: ' + decStr + ')' : ''}`
      });
    } else {
      steps.push({
        title: "Input is already Decimal (Base 10)",
        description: "Direct reference value:",
        calculation: `Value = ${decStr}₁₀`
      });
    }

    // Step 2: Conversion to Binary
    const absInt = Math.floor(Math.abs(decimalValue));
    let divSteps = '';
    let temp = absInt;
    const remainders: number[] = [];
    if (temp === 0) {
      divSteps = '0 ÷ 2 = 0 (Remainder: 0)';
    } else {
      while (temp > 0 && remainders.length < 8) {
        const rem = temp % 2;
        remainders.push(rem);
        const nextTemp = Math.floor(temp / 2);
        divSteps += `${temp} ÷ 2 = ${nextTemp} [Remainder: ${rem}]\n`;
        temp = nextTemp;
      }
    }

    steps.push({
      title: "Step 2: Decimal to Binary (Successive Division by 2)",
      description: "Divide the integer part successively by 2 and read remainders from bottom to top (LSB to MSB):",
      calculation: `${divSteps}\nBinary Output = ${binStr}₂`
    });

    // Step 3: Octal & Hex Grouping
    steps.push({
      title: "Step 3: Binary Grouping for Octal & Hexadecimal",
      description: "Group binary bits into sets of 3 for Octal (2³=8) and sets of 4 for Hexadecimal (2⁴=16):",
      calculation: `Binary: ${binStr}₂\nOctal (3-bit groups) = ${octStr}₈\nHexadecimal (4-bit groups / Nibbles) = 0x${hexStr}₁₆`
    });

    const bitAnalysis = Number.isInteger(decimalValue) ? generateBitAnalysis(decimalValue) : undefined;

    return {
      decimal: decStr,
      binary: binStr,
      octal: octStr,
      hexadecimal: hexStr,
      isValid: true,
      steps,
      bitAnalysis
    };
  } catch (err: any) {
    return {
      decimal: '',
      binary: '',
      octal: '',
      hexadecimal: '',
      isValid: false,
      errorMessage: err?.message || 'An unexpected conversion error occurred.',
      steps: []
    };
  }
}
