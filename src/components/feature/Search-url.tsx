import React from 'react';
import fs from "fs";

export const SearchUrl = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [resultValue, setResultValue] = React.useState("");
    const [dataSearch, setDataSearch] = React.useState([]);

    // https://areajugones.sport.es/wp-content/uploads/2022/04/the-rising-of-the-shield-hero-anime.jpeg
    const makeAPICall = async (e: any) => {
        try {
            let url = { inputValue };
            await fetch(
                `https://api.trace.moe/search?url=${encodeURIComponent(
                    url.inputValue
                )}`
            )
                .then((e) => e.json())
                .then((response) => {
                    console.log(response.result);
                    setDataSearch(response.result);
                });
        }
        catch (e) {
            console.log('error fetch =>');
            console.log(e);
        }
    }

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className='select-container'>
                <input
                    type="text"
                    placeholder='Image URL'
                    onChange={onChangeHandler}
                    value={inputValue}
                    className="filetype" />
            </div>
            <div className='image-container'>
                <img className="image-target" src={inputValue} />
            </div>
            <div className='search-container'>
                <button className='seach-button' onClick={makeAPICall}>Search</button>
            </div>
            <div className='result-container'>
                {dataSearch.slice(0, 1).map((item, index) => (
                    <ul className='anime-container' key={index}>
                        <li>
                            <video controls autoPlay>
                                <source src={item.video} type="video/mp4" />
                            </video>
                        </li>
                        <li>
                            <span className='anime-info'>Similarity: </span>
                            {(parseFloat(item.similarity) * 100).toFixed(2)}%
                        </li>
                        <li>
                            <span className='anime-info'>Anime: </span>
                            {item.filename}
                        </li>
                        <li>
                            <span className='anime-info'>Episode: </span>
                            {item.episode}
                        </li>
                        <li>
                            <span className='anime-info'>From: </span>
                            {(parseFloat(item.from) / 60).toFixed(2)}' - {(parseFloat(item.to) / 60).toFixed(2)}'
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
};
