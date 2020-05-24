import React from 'react';

const Article = ({ title, autor, text }) => {
    const styles = {
        marginTop: '40px',
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: '3px',
                textTransform: 'UpperCase'
            }}>{title}</h3>
            <span style={{
                display: 'block',
                marginBottom: '13px',
                fontSize: 14,
            }}>{autor}</span>
            <p style={{ fontSize: 16 }}>{text}</p>
        </article>
    );
}

export default Article;