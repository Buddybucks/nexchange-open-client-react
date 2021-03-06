import React from 'react';
import { I18n } from 'react-i18next';
import arrow from 'Img/arrow-right-2.svg';

import styles from './MyOrdersCollapsed.scss';


const MyOrdersCollapsed = props => {
    const myOrdersList = <div className={styles.list}>
    <div className={styles.orders}>
      {props.myOrders.slice(0, 5).map((order) => {
        return (
          <div key={order.unique_reference} className={styles.order}>
            <div className={styles.coin}>
                <i className={`${styles.icon} coin-icon cc ${order.pair.base.code}`} />
                <span className={`${styles.code} hidden-xs hidden-ms hidden-sm`}>{order.pair.base.code}</span>
                <span className={styles.amount}>{parseFloat(order.amount_base).toFixed(5)}</span>
              </div>
              <img src={arrow} className={styles.arrow} alt="Arrow" />
              <div className={styles.coin}>
                <i className={`${styles.icon} coin-icon cc ${order.pair.quote.code}`} />
                <span className={`${styles.code} hidden-xs hidden-ms hidden-sm`}>{order.pair.quote.code}</span>
                <span className={styles.amount}>{parseFloat(order.amount_quote).toFixed(5)}</span>
              </div>
          </div>);
      })}
    </div>
    <div className={`${styles.viewAll}`} onClick={() => props.expandMyOrders()}>
      <a>View All My Orders</a>
    </div>
  </div>;
  return (
        <I18n ns="translations">
            {(t, i18n) => (
                    <div id='myOrders' className={`${styles.container}`}>
                        <div className={`${styles.heading}`}><h4>My Orders</h4></div>
                        <div className={`${styles.content}`}>
                        {_.isEmpty(props.myOrders) 
                            ? <p>No order history...</p>
                            : myOrdersList}
                        </div>
                    </div>
            )}
        </I18n>
  );
};

export default MyOrdersCollapsed;
