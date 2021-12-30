import { Machine } from "./Machine";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const MachineList = () => {
  const { machines, getMachines } = useContext(GlobalContext);

  useEffect(() => {
    //getMachines();
    const interval = setInterval(() => {
      getMachines();
    }, 1000);
  }, []);

  return (
    <>
      <h1>Machine Surveillance System</h1>
      <div className="container">
        <ul className="list">
          {machines.map((machine) => (
            <Machine key={machine.id} machine={machine} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MachineList;
