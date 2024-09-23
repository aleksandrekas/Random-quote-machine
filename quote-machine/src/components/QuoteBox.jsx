import { useEffect, useState } from "react";

function getQuote() {
    return fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        headers: { 'X-Api-Key': 'O1ILBtVFqtyXhOdJRyUeSw==DIwJ8EV4XjYzE7UC' }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => data[0])  
    .catch(error => {
        console.error("Fetch error:", error);
        return { quote: "Error fetching quote", author: "" };
    });
}

export default function QuoteBox({ color }) {  
    const [quoteData, setQuoteData] = useState({
        quote: '',
        author: ''
    });

    useEffect(()=>{
        handleNewQuote()
    },[])

    const handleNewQuote = () => {
        getQuote().then(quote => {
            setQuoteData({
                quote: quote.quote,
                author: quote.author
            });
        });
    };

    return (
        <div id="quote-box">
            <p style={{color:color}} id="text">{quoteData.quote}</p>
            <h3 id="author">- {quoteData.author}</h3>
            <button style={{ background: color }} onClick={handleNewQuote} id="new-quote">
                New quote
            </button>
        </div>
    );
}
