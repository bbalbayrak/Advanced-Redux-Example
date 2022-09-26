import style from './Notification.module.css';

const Notification = (props) => {
  let specialstyle = '';

  if (props.status === 'error') {
    specialstyle = style.error;
  }
  if (props.status === 'success') {
    specialstyle = style.success;
  }

  const cssStyle = `${style.notification} ${specialstyle}`;

  return (
    <section className={cssStyle}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;