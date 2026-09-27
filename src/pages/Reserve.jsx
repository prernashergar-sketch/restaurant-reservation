import { useState } from "react";
import { supabase } from "../supabase";

function Reserve() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  async function handleReservation(e) {
    e.preventDefault();

    if (!name || !phone || !restaurant || !date || !time || !guests) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("reservations")
      .insert([
        {
          name: name,
          phone: phone,
          restaurant: restaurant,
          date: date,
          time: time,
          guests: Number(guests)
        }
      ]);
      if (error) {
  console.log("Reservation Error:", error);
  alert("Reservation failed: " + error.message);
}
    
     else {
      alert("🎉 Reservation successful!");

      setName("");
      setPhone("");
      setRestaurant("");
      setDate("");
      setTime("");
      setGuests("");
    }
  }

  return (
    <div className="reserve-page">
      <div className="reserve-box">

        <div className="reserve-icon">🍽️</div>

        <h1>Reserve Your Table</h1>

        <p>
          ✨ Good food tastes better when shared!
        </p>

        <form onSubmit={handleReservation}>

          <label>👤 Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>📱 Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>🍴 Restaurant</label>
          <select
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          >
            <option value="">Select a restaurant</option>
            <option value="Spice Garden">Spice Garden</option>
            <option value="Pasta House">Pasta House</option>
            <option value="Wok Express">Wok Express</option>
            <option value="Sushi World">Sushi World</option>
          </select>

          <label>📅 Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>⏰ Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <label>👥 Number of Guests</label>
          <input
            type="number"
            min="1"
            placeholder="How many people?"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <button type="submit">
            🍽️ Reserve My Table
          </button>

        </form>
      </div>
    </div>
  );
}

export default Reserve;