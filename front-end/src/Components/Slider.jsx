import '../stylesheets/Slider.css'

function Slider(){
    return (
        <div className="slider">
        <div className="slider_container">
          <div className="slide">
            <div>
              <img src="images/windowbag.jpg" alt="Person holding bag out" />
              <div className="description">
              </div>
            </div>
          </div>

          <div className="slide">
            <div>
              <img src="images/IMG_1212.JPG" alt="Bag floating" />
              <div className="description">
              </div>
            </div>
          </div>

          <div className="slide">
            <div>
              <img src="images/stairbag.jpg" alt="Bags on stairs" />
              <div className="description">
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Slider;