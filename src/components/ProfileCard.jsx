export default function ProfileCard({ name, age, location }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      width: "250px",
      margin: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}
