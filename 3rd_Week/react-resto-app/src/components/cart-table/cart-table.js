import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';
import { Link } from 'react-router-dom';
import './cart-table.scss';

const CartTable = ({ items, deleteFromCart }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>

      <div className="cart__list">
        {items.length === 0 && (
          <h3>
            Вы пока еще ничего не заказали, пожалуйста перейдите в{' '}
            <Link to="/">Меню</Link>
          </h3>
        )}
        {items.map(item => {
          const { title, price, url, id, cnt } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title} />
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {`$${price} x ${cnt} Total: $${cnt * price}`}
              </div>
              <div className="cart__close" onClick={() => deleteFromCart(id)}>
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToPorps = ({ items }) => {
  return { items };
};

export default connect(
  mapStateToPorps,
  { deleteFromCart }
)(CartTable);
