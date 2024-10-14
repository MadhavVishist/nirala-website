import React, { useEffect, useState } from 'react';

const NewsAndEvents = () => {
    const [newsEvents, setNewsEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');

    // Fetch all news/events from the backend
    const fetchNewsEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/news-events');
            const data = await response.json();
            setNewsEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Add a new event
    const handleAddEvent = async () => {
        if (!newEvent.trim()) return;

        try {
            await fetch('http://localhost:5000/api/news-events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: newEvent })
            });
            setNewEvent('');
            fetchNewsEvents();  // Refresh the event list
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };

    // Delete an event by id
    const handleDeleteEvent = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/news-events/${id}`, {
                method: 'DELETE'
            });
            fetchNewsEvents();  // Refresh the event list
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    // Fetch events when component mounts
    useEffect(() => {
        fetchNewsEvents();
    }, []);

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg border border-yellow-700 ">
                <h1 className="text-3xl font-bold text-center text-brown-800 mb-10">News and Events</h1>

                {/* Section to Display News and Events */}
                <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-10">
                    <h2 className="text-2xl font-semibold text-brown-800 mb-4">Latest Events</h2>
                    <ul className="space-y-4">
                        {newsEvents.length > 0 ? (
                            newsEvents.map(event => (
                                <li
                                    key={event.id}
                                    className="flex justify-between items-center bg-yellow-200 p-4 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300 border border-yellow-400"
                                >
                                    <span className="text-brown-700 text-lg">{event.content}</span>
                                    <button
                                        onClick={() => handleDeleteEvent(event.id)}
                                        className="text-red-600 text-xl font-bold hover:text-red-800 transition-all duration-200"
                                    >
                                        &#x2716; {/* Cross symbol for delete */}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="text-center text-brown-600">No events available</li>
                        )}
                    </ul>
                </div>

                {/* Section to Add New Event */}
                <div className="bg-yellow-200 p-3 rounded-lg shadow-md  mx-auto">
                    <h2 className="text-xl font-semibold text-brown-800 mb-2">Add a New Event</h2>
                    <textarea
                        value={newEvent}
                        onChange={(e) => setNewEvent(e.target.value)}
                        placeholder="Write a new event here..."
                        className="w-full h-20 p-2 border border-yellow-700 rounded-lg focus:ring-2 focus:ring-brown-500 focus:outline-none mb-2 bg-yellow-50 resize-none"
                    ></textarea>
                    <button
                        onClick={handleAddEvent}
                        className="w-full bg-brown-600 text-white px-4 py-2 rounded-lg hover:bg-brown-700 transition-all duration-200"
                    >
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsAndEvents;
