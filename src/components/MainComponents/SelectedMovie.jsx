const SelectedMovie = ({ selectedID, onCloseMovie }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        👈
      </button>
      {selectedID}
    </div>
  );
};

export default SelectedMovie;
