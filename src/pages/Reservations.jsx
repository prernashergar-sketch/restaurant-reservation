import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations();
  }, []);

  async function getReservations() {
    const { data, error } = await supabase
      .from("reservations")
      .select("*");

    if (error) {
      console.log("Error:", error);
    } else {
      setReservations(data);
    }
  }

  return (
    <div className="reservations-page">
      <h1>📋 Your Reservations</h1>

      <p className="reservation-subtitle">
        ✨ Here are your table reservations
      </p>

      <div className="reservation-list">
        {reservations.length === 0 ? (
          <p className="no-reservations">
            🍽️ No reservations yet.
          </p>
        ) : (
          reservations.map((reservation) => (
            <div className="reservation-card" key={reservation.id}>
              <div className="reservation-icon">🍴</div>

              <h2>{reservation.restaurant}</h2>

              <p>👤 <strong>Name:</strong> {reservation.name}</p>
              <p>📱 <strong>Phone:</strong> {reservation.phone}</p>
              <p>📅 <strong>Date:</strong> {reservation.date}</p>
              <p>⏰ <strong>Time:</strong> {reservation.time}</p>
              <p>👥 <strong>Guests:</strong> {reservation.guests}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reservations;