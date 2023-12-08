import React, { useTransition } from "react";
import { useState } from "react";
import './';

function Newchat() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [inputValue, setInputValue] = useState("")
    // Define a function to map option names to image URLs
    function getImageURLForOption(option) {
        const imageMapping = {
            "anthropic claude-2": "https://www.pexels.com/photo/green-tree-268533/",
            "anthropic claude-instant-1.2": "https://www.pexels.com/photo/green-tree-268533/",
            // Add image URLs for other options as needed...
        };

        return imageMapping[option] || "default-image-url"; // You can set a default image URL if the option doesn't have a specific image.
    }

       const options = [
           "anthropic claude-2",
           "anthropic claude-instant-1.2",
           /* "anthropic claude-instant-v1",
           "replicate llama7b-v2-chat",
           "anthropic clause-instant-1.2",
           "anthropic claude-instant-v1",
           "anthropic claude-instant-v1-100k",
           "anthropic claude-v1",
           "anthropic claude-v1-100k",
           "cohere chat",
           "datacrunch falcon-40b-instruct",
           "datacrunch guanaco-65b merged",
           "open-playground mpt 30b-chat",
           "open gpt-3.5-turbo",
           "openai gpt-4",
           "openai gpt-4-0314",
           "openai gpt-4-32k",
           "openai gpt-4-32k-0314",
           "replicate llama13b-v2-chat",
           "replicate llama170b-v2-chat",
           "replicate llama7b-v2-chatv", */
       ]; 

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };


    return (
        <div className="Newchat-container">
            <div className="New-chat">
                <button className="newchat-button">New chat</button>
            </div>
            <div className="middlecontainer-chat">
                {/* <div classname="book-logo">
                    hellooo
                </div> */}
                <div className="search-model-container">
                    hello
                    <div className="btn-group">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                            placeholder="Search model"
                            className="placeholder-search"
                        />
                        <ul className={`dropdown-menu ${isDropdownVisible ? 'sscrollable-menu' : ''}`}>
                            {options
                                .filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))
                                .map((option, index) => (
                                    <li key={index}>
                                        <img src={getImageURLForOption(option)} alt={option} className="option-image" />
                                        <a href="#">{option}</a>
                                    </li>
                                ))}
                        </ul>

                        {/*    <ul className={`dropdown-menu ${isDropdownVisible ? 'sscrollable-menu' : ''}`}>
                                    {options
                                        .filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))
                                        .map((option, index) => (
                                            <>
                                            <li key={index}><a href="#">{option}</a></li>
                                            </>
                                        ))}
                                </ul */}
                        { <ul className={`dropdown-menu ${isDropdownVisible ? 'sscrollable-menu' : ''}`}>
                                            {options
                                                .filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))
                                                .map((option, index) => (
                                                    <>
                                                    <li><a href="anthropic claude 2">{option}</a></li>
                                                        <li><a href="anthropic claude-instant-1.2">{option}</a></li>
                                                        <li><a href="anthropic claude-instant-v1">{option}</a></li>
                                                        <li><a href="anthropic claude-instant-v1-100k">{option}</a></li>
                                                        <li><a href="anthropic claude-v1">{option}</a></li>
                                                        <li><a href="anthropic claude-v1-100k">{option}</a></li>
                                                        <li><a href="cohere chat">{option}</a></li>
                                                        <li><a href="datacrunch falcon-40b-instruct">{option}</a></li>
                                                        <li><a href="datacrunch guanaco-65b merged">{option}</a></li>
                                                        <li><a href="open-playground mpt 30b-chat">{option}</a></li>
                                                        <li><a href="open gpt-3.5-turbo">{option}</a></li>
                                                        <li><a href="openai gpt 3.5-turbo-16k">{option}</a></li>
                                                        <li><a href="openai gpt-4">{option}</a></li>
                                                        <li><a href="openai gpt-4-0314">{option}</a></li>
                                                        <li><a href="openai gpt-4-32k">{option}</a></li>
                                                        <li><a href="openai gpt-4-32k-0314">{option}</a></li>
                                                        <li><a href="replicate llama13b-v2-chat">{option}</a></li>
                                                        <li><a href="replicate llama170b-v2-chat">{option}</a></li>
                                                        <li><a href="replicate llama7b-v2-chat">{option}</a></li>
                                                        </>
                                                ))}
                                        </ul> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newchat;