export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  phone: string;
  role: string;
  organizationName: string;
  department: string;
  address: string;
  city: string;
  zip: string;
};

export const fakeData: User[] = [
  {
    id: '3',
    firstName: 'Sean',
    lastName: 'Allen',
    email: 'seansahh@gmail.com',
    phone: '123-456-7890',
    address: '123 Street St.',
    city: 'Royal Palm Beach',
    state: 'Florida',
    zip: '33411',
    role: 'Physician',
    department: 'Physician',
    organizationName: 'MCG'
  },
  {
    role: 'Patient',
    department: 'Patient',
    id: '4',
    organizationName: 'MCG',
    firstName: 'Sean',
    lastName: 'Allen',
    email: 'seansahh@gmail.com',
    phone: '123-456-7890',
    address: '123 Street St.',
    city: 'Royal Palm Beach',
    state: 'Florida',
    zip: '33411',
  },
];

//50 us states array
export const usStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Puerto Rico',
];
