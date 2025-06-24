import { useEffect, useState } from "react";

function QuoteBox({ setBgColor }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#342224");
  
  useEffect(() => {
    fetchQuote();
  }, []);

    const fetchQuote = async () => {
        const res = await fetch("https://api.quotable.io/random");
        console.log("ini hasil dari", res);
        const data = await res.json();
        setQuote(data.content);
        setAuthor(data.author || "Unknown");

        const newColor = getRandomColor();
        setColor(newColor);
        setBgColor(newColor);
    };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  return (
    <div id="quote-box" style={{ color: color }}>
      <div className="quotes">
        <i className="fa-solid fa-quote-left"></i>
        <p id="text">{quote}</p>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <p id="author">- {author}</p>

      <div className="buttons">
        <div className="left-buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            style={{ backgroundColor: color }}
            title="Tweet this quote!"
            target="_top"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            id="tumblr-quote"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,inspiration&caption=${encodeURIComponent(
              author
            )}&content=${encodeURIComponent(
              quote
            )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            style={{ backgroundColor: color }}
            title="Post this quote on tumblr!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tumblr"></i>
          </a>
        </div>
        <button id="new-quote" className="right-button" onClick={fetchQuote} style={{ backgroundColor: color }}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;