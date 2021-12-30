export const Machine = ({ machine }) => {
  return (
    <div className="list-item">
      <h3>{machine.name}</h3>
      <div>temperature: {machine.temperature}</div>
      <div>water level: {machine.water_level}</div>
      <div>cap: {machine.cap_on ? "open" : "closed"}</div>
    </div>
  );
};
