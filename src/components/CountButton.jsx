export const CountButton = (props) => {
  return (
    <div>
      <button
        className="px-4 py-2 border rounded-full border-white bg-gray-400 hover:bg-gray-50"
        onClick={props.handleClick}
      >
        {props.display}
      </button>
    </div>
  );
};
