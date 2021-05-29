import React, { useState, useEffect } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
    const [journey, setJourney] = useState(null);

    const handleJourneyChange = (fromCity, toCity, date) => {
        fetch(
            `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
        )
            .then((response) => response.json())
            .then((json) => setJourney(json.data));
    };

    return (
        <main>
            <JourneyPicker onJourneyChange={handleJourneyChange} />

            {journey === null ? (
                <></>
            ) : (
                <div>Nalezeno spojení s ID {journey.journeyId}</div>
            )}
        </main>
    );
};
