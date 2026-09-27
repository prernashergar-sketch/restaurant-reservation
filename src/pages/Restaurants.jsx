import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const { data, error } = await supabase
      .from("restaurants")
      .select("*");

    if (error) {
      console.log("Error:", error);

      // Display sample restaurants if Supabase has an issue
      setRestaurants([
        {
          id: 1,
          name: "Spice Garden",
          cuisine: "Indian",
          location: "Bengaluru",
          rating: 4.5
        },
        {
          id: 2,
          name: "Pasta House",
          cuisine: "Italian",
          location: "Bengaluru",
          rating: 4.3
        },
        {
          id: 3,
          name: "Wok Express",
          cuisine: "Chinese",
          location: "Bengaluru",
          rating: 4.4
        },
        {
          id: 4,
          name: "Sushi World",
          cuisine: "Japanese",
          location: "Bengaluru",
          rating: 4.6
        }
      ]);
    } else {
      setRestaurants(data);
    }
  }

  return (
    <div className="restaurants-page">
      <h1>🍴 Our Restaurants</h1>

      <p className="restaurant-subtitle">
        ✨ Discover delicious food from our selected restaurants
      </p>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;