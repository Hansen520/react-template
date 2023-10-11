import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.module.less';

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.wrapper}>
          <h3>1</h3>
        </div>
        <div className={styles.wrapper}>
          <h3>2</h3>
        </div>
        <div className={styles.wrapper}>
          <h3>3</h3>
        </div>
        <div className={styles.wrapper}>
          <h3>4</h3>
        </div>
        <div className={styles.wrapper}>
          <h3>5</h3>
        </div>
        <div className={styles.wrapper}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
