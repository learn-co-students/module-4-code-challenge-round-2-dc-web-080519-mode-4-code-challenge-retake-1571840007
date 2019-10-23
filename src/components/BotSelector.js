import React from "react";

const BotSelector = props => {
  return (
    <div className="ui four column grid">
      <div className="row">
        <h3>Bot Bulk Importer:</h3>
      </div>

      <div className="row">
        <p>
          health: <strong>50</strong>
        </p>
        <input type="range" value="50" name="health" step="1" />
      </div>

      <div className="row">
        <p>
          armor: <strong>30</strong>
        </p>
        <input type="range" value="30" name="armor" step="1" />
      </div>

      <h3>Import bots meeting this criteria
        <button>Import</button>
      </h3>
    </div>
  );
};

export default BotSelector;
