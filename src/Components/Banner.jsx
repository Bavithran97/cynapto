import "../App.css";

const Banner = () => {
  return (
    <div className="image">
      <img className="image" src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
      <div className="text-1">
        <h3>
          Quick and easy video editor</h3>
        <h4>Everything you need to create show-stopping videos, no expertise required.</h4>
        <button>Try for free</button>
      </div>
    </div>
  );
};

export default Banner;
