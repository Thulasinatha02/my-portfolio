import "./StarsBackground1.css";

export default function StarsBackground1() {
  const stars = Array.from({ length: 20 });

  return (
    <div className="stars-wrapper small">
      {stars.map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
