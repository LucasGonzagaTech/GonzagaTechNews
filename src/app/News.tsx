"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';


export default () => {

    const [data, setData] = useState("");
    const [selectedNews, setSelectedNews] = useState(null); // Estado para controlar qual notícia está sendo exibida em detalhes
  
    const apiKey = '2de0f6c0244f4409841083bccfdf5ac3';
    const type = 'tesla';
    const date = '2024/06/07';
    const sortBy = 'published';
  
    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;
  
    const GrabNews = () => {
          axios.get(url)
          .then((res) =>{
            console.clear();
            setData(res.data);
            console.log(res.data);
          }).catch(err => {
            console.log(err)
          })
        }
  
    useEffect(() => {
      GrabNews(); // Chamando a função GrabNews() quando o componente for montado
    }, []); // O array de dependências vazio garante que a função seja chamada apenas uma vez, quando o componente é montado
  
  
    // Função para exibir a notícia em detalhes quando um card for clicado
    const handleNewsClick = (index) => {
      setSelectedNews(data.articles[index]);
    };
  
    // Renderização condicional da notícia em detalhes quando selecionada
    if (selectedNews) {
      return (
        <div className="news-details">
          <button onClick={() => setSelectedNews(null)}>Back</button>
          <h2>{selectedNews.title}</h2>
          <p>{selectedNews.description}</p>
          <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      );
    }
  
    return (
      <div>
        {data && data.articles.map((d, index) => {
          return (
            <div key={index} className="news-card" onClick={() => handleNewsClick(index)}>
              <div className="author">{d.author}</div>
              <img src={d.urlToImage} alt="News" className="news-image" />
              <div className="title">{d.title}</div>
            </div>
          );
        })}
        </div>
    )
}