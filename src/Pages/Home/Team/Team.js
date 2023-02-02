import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])
    return (
        <div className='text-center mx-10  text-center'>
            <p className='font-bold cusorange'>Team</p>
            <h1 className="text-5xl font-bold my-5">Meet Our Team</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='my-32 grid grid-cols-3 gap-5'>
                {
                    team.map(teamMember => <TeamMember
                    key={teamMember._id}
                    teamMember={teamMember}
                    ></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;