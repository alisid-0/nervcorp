import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import lunarisGIF from './assets/lunaris.gif';
import introImg from './assets/3.PNG';
import introImg2 from './assets/2.png';
import shedImg from './assets/5.png';
import img4 from './assets/4.png';
import img12 from './assets/12.png';
import menu from './assets/10.png';
import img6 from './assets/6.png';
import img9 from './assets/9.png';

function Games() {
  return (
    <>
      <h1 className="text-light mt-5">Lunaris</h1>
      <Container className="home-content text-light py-1">
        <Container className="mt-5">
          <p className="text-center">
            Journey through a strange world on a mission to save a mysterious scientist and their dying world. With only one ally by your side, you must unravel the circumstances behind the falling moon and fight to prevent its cataclysmic impact. But as you explore the different landscapes and uncover dark secrets, you begin to question your own reality and the true nature of your mission.
          </p>

          <Carousel interval={null} className="pt-5 my-5">
            <Carousel.Item>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/dgR0MFgXruo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/t1CT0Pp6K0g"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/BNFWTPsxbgA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          </Carousel>

          <p>
            Explore theoretical scientific concepts ranging from negative mass extractors to alcubierre drives to travel through time and space and harness the power of gravity in the palm of your hands, all to change the trajectory of the moon to save a dying planet from extinction.
          </p>

          <h1 className="py-5">Level Design</h1>
          <p>
            Explore multitudes of landscapes spanning across different time periods and dimensions as you choose your path along the way.
          </p>

          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={introImg} alt="Lunaris Screenshot 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={shedImg} alt="Lunaris Screenshot 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={introImg2} alt="Lunaris Screenshot 3" />
            </Carousel.Item>
          </Carousel>

          <h4 className="py-3">
            Every level, room, and pixel handcrafted with love, care, and precise attention to detail.
          </h4>
        </Container>

        <h1 className="py-5 my-5">Harnessing The Power of Unreal Engine</h1>
        <p>
          From creating complex macro function libraries to complex animation systems and game states, none of this would be possible without the powerhouse that is Unreal Engine 5.
        </p>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img12} alt="Lunaris Screenshot 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Lunaris Screenshot 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={menu} alt="Lunaris Screenshot 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img6} alt="Lunaris Screenshot 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img9} alt="Lunaris Screenshot 3" />
          </Carousel.Item>
        </Carousel>

        <p className="pt-5">
          For updates on this project, <a href="/blog"><i>Click Here!</i></a>
        </p>
        <p className="pt-5">Release Date: TBA</p>
      </Container>
    </>
  );
}

export default Games;
