//React
import React from 'react';
//Styles
import './showcase-button.styles.scss';

export interface Props {
    title: string;
}

const ShowcaseButton = ({ title } : Props) => (
    <article className="showcase-btn">
        <button>{title}</button>
        <aside className="bar"></aside>
    </article>
);

export default ShowcaseButton;