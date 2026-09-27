function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-icon">🍽️</div>

      <h3>{restaurant.name}</h3>

      <p>🍴 {restaurant.cuisine} Cuisine</p>

      <p>📍 {restaurant.location}</p>

      <p>⭐ {restaurant.rating} / 5</p>
    </div>
  );
}

export default RestaurantCard;