import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const SellingPoints = () => {
  const industries = [
    { name: "Food & Beverage", imageUrl: "/WestMichTagAndLabel/foodandbevlabels.jpg" },
    { name: "Pharmaceutical", imageUrl: "/WestMichTagAndLabel/pharmaceuticallabels.jpg" },
    { name: "Retail", imageUrl: "/WestMichTagAndLabel/retaillabel.jpg" },
    { name: "Manufacturing", imageUrl: "/WestMichTagAndLabel/industriallabels.jpg" },
    { name: "Logistics & Shipping", imageUrl: "/WestMichTagAndLabel/shippinglabels.jpg" },
  ];

  return (
      <div>
    <section className="bg-blue-200 p-12">
        <h1 className="text-6xl text-navy text-center font-bold m-7">Why Us?</h1>
        <div className="container m-auto">
            <div className="subtitle ml-24 mr-24 mx-10 my-10">
        <p className="text-2xl text-navy text-center m-7">West Michigan Tag & Label specializes in delivering custom label and tag solutions for businesses of all sizes. Our services range from high-quality, durable labels for branding and product identification to advanced options like barcode and RFID tags for efficient inventory management. With a commitment to excellence and customer satisfaction, we offer tailored solutions to meet the unique needs of each client, ensuring their products stand out in the market. Whether you&apos;re in retail, manufacturing, or any other industry, West Michigan Tag & Label is your trusted partner for all your labeling needs.</p>
        </div>
        </div>
    </section>
    <section className="bg-blue-200 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center m-12">
                    <Image src={industry.imageUrl} alt={industry.name} width={600} height={300} />
                    <h1 className="m-4 text-4xl font-semibold text-center text-navy">{industry.name}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
      </div>
  );
};

export default SellingPoints;
