export type Case = {
    id: string;
    module: string;
    reference: string;
    gender: string;
    age: string;
    site: string;
    created: string;
    modified: string;
  };
  
  export const fakeData: Case[] = [
    {
      id: '6151',
      module: 'Bladder/Kidney',
      reference: '123456',
      gender: 'Male',
      age: '33',
      site: 'test',
      created: 'Feb 1, 2024 9:54 am',
      modified: 'Mar 9, 2024 9:54 am',
    },
    {
      id: '66151',
      module: 'Breast',
      reference: '123456',
      gender: 'Female',
      age: '44',
      site: 'test',
      created: 'Feb 4, 2024 9:54 am',
      modified: 'Mar 7, 2024 9:54 am',
    },
    {
      id: '56151',
      module: 'Brain',
      reference: '123456',
      gender: 'Male',
      age: '55',
      site: 'test',
      created: 'Feb 6, 2024 9:54 am',
      modified: 'Mar 5, 2024 9:54 am',
    },
    {
      id: '46151',
      module: 'Ovarian',
      reference: '123456',
      gender: 'Femail',
      age: '66',
      site: 'test',
      created: 'Feb 7, 2024 9:54 am',
      modified: 'Mar 1, 2024 9:54 am',
    },
  ];
  
