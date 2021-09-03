import React from "react";
import "./Reaction.css";

type ReactionProps = {
  correct: boolean;
};

export const Reaction = ({ correct }: ReactionProps) => {
  return (
    <div>
      {correct ? (
        <div className="reaction_correct">Correct</div>
      ) : (
        <div className="reaction_wrong">Wrong!</div>
      )}
    </div>
  );
};
