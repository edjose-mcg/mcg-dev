import React, { useState } from 'react';
import { TextField, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from "react-router-dom"

const CaseDrawerFormBrain = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [sex, setSex] = useState('')
    const [race, setRace] = useState('')
    // const [ecog, setEcog] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, sex, race)
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Patient First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Patient Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Patient Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="Date of Birth"
                        onChange={e => setDateOfBirth(e.target.value)}
                        value={dateOfBirth}
                        id="age"
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="sex-label">Sex</InputLabel>
                        <Select
                            labelId="sex-label"
                            id="sex-select"
                            label="Sex"
                            onChange={e => setSex(e.target.value)}
                            value={sex}
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'femail'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="sex-label">Race</InputLabel>
                        <Select
                            labelId="race-label"
                            id="race-select"
                            label="Race"
                            onChange={e => setRace(e.target.value)}
                            value={race}
                        >
                            <MenuItem value={'white'}>White</MenuItem>
                            <MenuItem value={'black'}>Black or African American</MenuItem>
                            <MenuItem value={'indian'}>American Indian</MenuItem>
                            <MenuItem value={'asian'}>Asian</MenuItem>
                            <MenuItem value={'hawaiian'}>Native Hawaiian</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </form>

        </React.Fragment>
    )
}

export default CaseDrawerFormBrain;