import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import Navbar from './Navbar'; // Import the Navbar component
import Card from './Card'; // Reusable card component for articles/tutorials
import Button from './Button'; // Reusable button component
import Footer from './Footer'; // Reusable footer component
import Subscribe from './Subscribe'; // Reusable sign-up component
import Chat from './Chat'; // Import the Chat component
import { faker } from '@faker-js/faker'; // Import faker for random data
import './css/Home.css'; // Styles specific to the Home component

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Check if user is logged in when component mounts
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        if (token) {
            setIsLoggedIn(true); // Update state if token exists
        }
    }, []);

    // Handle user logout functionality
    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove token from local storage
        setIsLoggedIn(false); // Update login state
        navigate('/login'); // Redirect to login page
    };

    // Generate random articles
    const articles = Array.from({ length: 3 }).map(() => ({
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        author: faker.person.fullName(),
        rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
    }));

    // Generate random tutorials
    const tutorials = Array.from({ length: 3 }).map(() => ({
        image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        author: faker.person.fullName(), // Instead of faker.name.findName()
        rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
    }));

    return (
        <div className="home-page">
            <img className='home-page-img'
                style={{ width: 1500 }} 
                src={require('./images/Deakin.avif')} 
                alt="Deakin Image" 
            />
            <Navbar /> {/* Add the Navbar component here */}

            {/* Welcome and Search Section */}
            <h1>Welcome to the Home Page</h1>
            
            <div className="search-bar">
                <p>Dev@DEAKIN</p>
                <input type="text" placeholder="Search..." />
                <Link to='/post'>
                    <button type="button">Post</button> {/* Button to navigate to post page */}
                </Link>
            </div>

            {/* Actions: Login/Logout Button */}
            <div className="actions">
                {isLoggedIn ? (
                    <button className="logout-button" onClick={handleLogout}>
                        Logout {/* Logout button functionality */}
                    </button>
                ) : (
                    <Link to="/login">
                        <button className="login-button">Login</button> {/* Button to navigate to login page */}
                    </Link>
                )}
            </div>

            {/* Featured Articles Section */}
            <h1>Featured Articles</h1>
            <div className="ArticleSection">
                {articles.map((article, index) => (
                    <Card
                        key={index} // Unique key for each item
                        image={article.image}
                        title={article.title}
                        description={article.description}
                        author={article.author}
                        rating={article.rating}
                    />
                ))}
            </div>
            <Link to="/articles-page"> {/* Link to the Articles page */}
                <Button text="See all articles" />
            </Link>

            {/* Featured Tutorials Section */}
            <h1 className="TutorialHeadline">Featured Tutorials</h1>
            <div className="TutorialSection">
                {tutorials.map((tutorial, index) => (
                    <Card
                        key={index} // Unique key for each item
                        image={tutorial.image}
                        title={tutorial.title}
                        description={tutorial.description}
                        author={tutorial.author}
                        rating={tutorial.rating}
                    />
                ))}
            </div>
            <Button text="See all tutorials" onClick={() => navigate('/tutorials')} /> {/* Button to navigate to all tutorials */}

            <div className='subscribe'>
                {/* SignUp Section */}
                <Subscribe /> {/* Render the sign-up component */}
            </div>

            {/* Chat Component */}
            <Chat /> {/* Render the chat component */}

            {/* Footer */}
            <Footer /> {/* Render the footer component */}
        </div>
    );
};

export default Home;
