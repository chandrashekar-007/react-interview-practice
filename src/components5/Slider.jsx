// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.css";
// import required module
import { Navigation, Pagination, Scrollbar, Autoplay} from "swiper/modules";

const Slider = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                slidesPerView={3}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2000
                }}
                className="mySwiper"
                >
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea reiciendis ratione esse repudiandae ex animi dolorem quaerat obcaecati ut modi id earum tenetur tempora aspernatur voluptas, non, rem nostrum repellendus doloremque, ab laboriosam officia quis explicabo. Quasi ipsa magnam dolore quaerat repellat fugit aliquid sed dignissimos! Quae, molestias ipsa.
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider
