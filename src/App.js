import React, { useEffect, useState } from "react";
import "./styles/App.css";
import CardService from "./API/CardService";
import CardsList from "./components/CardsList";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/UI/Loader/hooks/useFetching";

function App() {
  const [cards, setCards] = useState([]);
  const [fetchCards, isCardsLoading, cardError] = useFetching(async () => {
    const cards = await CardService.getAll();
    setCards(cards.filter((a) => a.userId === 1 || a.userId === 2));
  });

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="App">
      {cardError && <h1>!!!ERROR!!!: {cardError}</h1>}
      {isCardsLoading ? (
        <Loader />
      ) : (
        <CardsList cards={cards} title="Cards List" />
      )}
    </div>
  );
}

export default App;
