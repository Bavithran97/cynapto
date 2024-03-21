import "../App.css"
function Watermark() {
  return (
    <div>
      <div className="water_contain">
        <div className="watermark">
          <h3>Unlimited video creation with no watermark</h3>
          <p>Clipchamp allows you to create as many videos as you want in high definition (1080p) for free, so you can focus on what matters most: your content. Whether youre creating videos for your business or just for fun, our free video editor is the perfect way to stay under budget while creating compelling content.</p>
          <button>Try For Free</button>
        </div>
        <div>
          <img className="water_image" src="https://images.ctfassets.net/b4k16c7lw5ut/01kk43Zc5lOQqZoEXs06yo/59db03b36b7eb15c3a78710d873273bb/Easy_video_editing_for_everyone.png?w=1920&h=1080&q=50&fm=webp" />
        </div>
      </div>
    </div>
  )
}

export default Watermark