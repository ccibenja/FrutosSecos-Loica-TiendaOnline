import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';
import styles from './OrderHistory.module.css';

function OrderHistory() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si no hay usuario, detenemos la carga
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, 'orders');
        // Cambiamos 'buyer.email' por 'userEmail' que es como lo guardaste en el Checkout
        const q = query(ordersRef, where('userEmail', '==', user.email));

        const snapshot = await getDocs(q);
        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Opcional: ordenar de la más reciente a la más antigua
        ordersData.sort((a, b) => b.date?.toDate() - a.date?.toDate());

        setOrders(ordersData);
      } catch (error) {
        console.error("Error al obtener las órdenes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading) return <Spinner />;

  if (!user) {
    return <h2 className={styles.title}>Debes iniciar sesión para ver tus órdenes.</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mi Historial de Compras</h2>

      {orders.length === 0 ? (
        <p className={styles.empty}>Aún no has realizado ninguna compra.</p>
      ) : (
        <div className={styles.grid}>
          {orders.map((order) => (
            <div key={order.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.orderId}>Orden: {order.id}</span>
                <span className={styles.orderDate}>
                  {order.date ? order.date.toDate().toLocaleDateString() : ''}
                </span>
              </div>
              <ul className={styles.itemList}>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.quantity}x {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <strong>Total pagado:</strong> <span>${order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;