import { NextApiRequest, NextApiResponse } from 'next';
import { UserRecord } from '@/types'

const applyErrors = (input: string, errorRate: number): string => {
    // Implementation of error application logic
    return input; // Placeholder implementation
};

export const generateUserData = (numRecords: number, errorRate: number): UserRecord[] => {
    const userData: UserRecord[] = [];

    for (let i = 0; i < numRecords; i++) {
        // @ts-ignore
        const name = names[Math.floor(Math.random() * names.length)];
         // @ts-ignore
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const identifier = `${name}_${surname}`;

        const nameWithError = applyErrors(name, errorRate);
        const surnameWithError = applyErrors(surname, errorRate);
         // @ts-ignore
        userData.push({identifier, name: nameWithError, surname: surnameWithError});
    }

    return userData;
};

// const generateData = (req: NextApiRequest, res: NextApiResponse, numRecords: number, errorRate: number) => {
//     const generatedData: any[] = generateUserData(numRecords, errorRate)
//     res.status(200).json(generatedData);
// };
//
// export default generateData;

class DataGenerator {
  constructor(
      private numRecords: number,
      private errorRate: number
  ) {}

  generateData(): any[] {
    return generateUserData(this.numRecords, this.errorRate);
  }
}

export default DataGenerator;
