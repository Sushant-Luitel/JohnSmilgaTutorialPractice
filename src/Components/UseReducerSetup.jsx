import { data } from "./data";
import { useReducer } from "react";

const UseReducerSetup = () => {
  const CLEAR_LIST = "CLEAR_LIST";
  const RESET_LIST = "RESET_LIST";
  const REMOVE_ITEM = "REMOVE_ITEM";
  const defaultState = {
    people: data,
  };
  const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [] };
    }
    if (action.type === RESET_LIST) {
      return { ...state, people: data };
    }
    if (action.type === REMOVE_ITEM) {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return {
        ...state,
        people: newPeople,
      };
    }
    throw new Error(`No matching ${action.type}- action`);
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetItems = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn btn-remove" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button className="btn" onClick={resetItems}>
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default UseReducerSetup;
