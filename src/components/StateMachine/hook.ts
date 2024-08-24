import { useContext } from "react";
import { StateMachineContext } from ".";

export default function useStateMachine () {
  return useContext(StateMachineContext)
}