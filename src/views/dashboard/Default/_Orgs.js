import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

export const data = [
    {
        role: 'Super User',
        department: 'Owner',
        id: '0',
        npi: '',
        organizationName: 'MCG',
        firstName: 'Sean',
        lastName: 'Allen',
        email: 'seansahh@gmail.com',
        phone: '123-456-7890',
        address: '123 Street St.',
        city: 'Royal Palm Beach',
        state: 'Florida',
        zip: '33411',

        subRows: [
            {
                role: 'Organization',
                department: 'Director',
                id: '1',
                npi: '1982384814',
                organizationName: 'MCG',
                firstName: 'Sean',
                lastName: 'Allen',
                email: 'seansahh@gmail.com',
                phone: '123-456-7890',
                address: '123 Street St.',
                city: 'Royal Palm Beach',
                state: 'Florida',
                zip: '33411',

                subRows: [
                    {
                        role: 'Admin',
                        department: 'Admin, Physician',
                        id: '2',
                        organizationName: 'MCG',
                        firstName: 'Sean',
                        lastName: 'Allen',
                        email: 'seansahh@gmail.com',
                        phone: '123-456-7890',
                        address: '123 Street St.',
                        city: 'Royal Palm Beach',
                        state: 'Florida',
                        zip: '33411',
                        subRows: [
                            {
                                role: 'User',
                                department: 'Physician',
                                id: '3',
                                organizationName: 'MCG',
                                firstName: 'Sean',
                                lastName: 'Allen',
                                email: 'seansahh@gmail.com',
                                phone: '123-456-7890',
                                address: '123 Street St.',
                                city: 'Royal Palm Beach',
                                state: 'Florida',
                                zip: '33411',
                                subRows: [
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
                                ],
                            },
                        ],
                    },
                ]
            }
        ]
    }
]

const Orgs = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 80,
            },
            {
                accessorKey: 'role',
                header: 'Account Type',
            },
            {
                accessorKey: 'department',
                header: 'Role',
            },
            {
                accessorKey: 'npi',
                header: 'NPI',
            },
            {
                accessorKey: 'organizationName',
                header: 'Organization',
            },
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
            {
                accessorKey: 'phone',
                header: 'Phone',
            },
            {
                accessorKey: 'address',
                header: 'Address',
            },
            {
                accessorKey: 'city',
                header: 'City',
            },
            {
                accessorKey: 'state',
                enableColumnOrdering: false,
                header: 'State',
            },
            {
                accessorKey: 'zip',
                header: 'Zip',
            },
        ],
        [],
        //end
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableExpandAll: false, //hide expand all double arrow in column header
        enableExpanding: true,
    });

    return <MaterialReactTable table={table} />;
};

export default Orgs;
