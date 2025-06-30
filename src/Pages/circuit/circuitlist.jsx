import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCircuitNameList } from "../../api/circuitApi"; // Adjust path if needed

const CircuitList = () => {
  const [circuits, setCircuits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCircuits = async () => {
      try {
        const data = await getCircuitNameList();
        setCircuits(data);
      } catch (error) {
        console.error("Failed to fetch circuits:", error);
      }
    };

    fetchCircuits();
  }, []);

  const handleSelect = (id) => {
    navigate(`/admin/rooms/${id}`);

  };

  return (
    <div>
      <h2>Select a Circuit</h2>
      <ul>
        {circuits.map((circuit) => (
          <li
            key={circuit.id}
            onClick={() => handleSelect(circuit.id)}
            style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
          >
            {circuit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CircuitList;
