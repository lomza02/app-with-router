import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        autor: 'Jan Nowak',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?',
    },
    {
        id: 2,
        title: 'Czym jest paradoks fermiego?',
        autor: 'Jan Nowak2',
        text: '2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?',
    },
    {
        id: 3,
        title: 'Czym jest materia i ciemna energia?',
        autor: 'Jan Nowak3',
        text: '3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?',
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;