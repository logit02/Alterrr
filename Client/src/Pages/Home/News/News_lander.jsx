import './news_lander.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from 'react-carousel-minimal';
export default function News_lander(){
    const images = [
        { url: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { url: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { url: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
      ];
      const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          caption: "Scotland"
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          caption: "San Francisco"
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          caption: "Darjeeling"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return(
        <div id='carousel'>
      <SimpleImageSlider
        width={'100%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        navStyle={2}
      />
      {/*<div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 0"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "0px auto 120px",
            }}
          />
        </div>
        </div>*/}
      </div>
    )
}