import React, { useState, useEffect } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(() => {
        return parseInt(localStorage.getItem('activeTab')) || 0;
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const tabContent = [
        "Content 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Content 2 - Nulla venenatis ante augue, pharetra volutpat neque.",
        "Content 3 - Phasellus volutpat neque ac dui malesuada vulputate.",
        "Content 4 - Etiam consequat aliquam lorem, in sodales lorem ultricies."
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
        localStorage.setItem('activeTab', index);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#f0f0f0' : '#121212';
        document.body.style.color = theme === 'light' ? '#000' : '#fff';
    }, [theme]);

    return (
        <div style={{
            padding: '20px',
            borderRadius: '5px',
            backgroundColor: theme === 'light' ? '#1976D2' : '#333',
            color: theme === 'light' ? 'white' : '#ccc',
            position: 'relative'
        }}>
            <h2>Tabs Component with React</h2>
            <button 
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    backgroundColor: theme === 'light' ? '#555' : '#ddd',
                    color: theme === 'light' ? '#fff' : '#333',
                    border: 'none',
                    borderRadius: '5px',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1
                }}
            >
                Toggle Theme
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '20px',
                flexWrap: 'wrap'
            }}>
                {tabContent.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            backgroundColor: activeTab === index ? (theme === 'light' ? '#1565C0' : '#555') : (theme === 'light' ? '#1E88E5' : '#666'),
                            border: 'none',
                            borderRadius: '5px',
                            color: 'white',
                            fontWeight: activeTab === index ? 'bold' : 'normal',
                            marginBottom: '10px',
                            width: '100px',
                            textAlign: 'center'
                        }}
                    >
                        TAB {index + 1}
                    </button>
                ))}
            </div>
            <div style={{
                padding: '20px',
                backgroundColor: theme === 'light' ? '#1565C0' : '#444',
                borderRadius: '5px'
            }}>
                {tabContent[activeTab]}
            </div>
        </div>
    );
};

export default Tabs;
