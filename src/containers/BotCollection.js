import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const {
      props: { bots, addBotToArmy }
    } = this;
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => (
            <BotCard key={bot.id} bot={bot} handleClick={addBotToArmy} />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
