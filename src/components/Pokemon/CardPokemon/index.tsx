import React from 'react';
import './index.sass';
import { IElementPokemon } from '../../../interface/interfacePokemon';

interface ICardPokemon extends IElementPokemon
{
    img?: string | null // Изображение карточки
    OnClick?: ()=> void // Клик по карточке
    hover?: boolean // Эффект наведения на карточку
}

const CardPokemon: React.FC<ICardPokemon> = ({
  name, img, OnClick = () => {}, hover = false,
}) => (
  <div className={hover ? 'element hover' : 'element'} onClick={() => { OnClick(); }} title={name}>
    {
                img
                  ? <img src={img} alt={name} className="image" />
                  : <div className="text">{name}</div>
            }
  </div>
);

export default CardPokemon;
