export const Card = (props) => {
  const {title, desc, btn} = props;
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href="#">{btn}</a>
    </article>
  );
};