import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";

import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../components/container";

interface CarProps {
  id: string;
  name: string;
  model: string;
  city: string;
  year: string;
  km: string;
  description: string;
  created: string;
  price: string | number;
  owner: string;
  uid: string;
  whatsapp: string;
  images: ImageCarProps[];
}

interface ImageCarProps {
  uid: string;
  name: string;
  url: string;
}

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState<CarProps>();
  const [sliderPreview, setSliderPreview] = useState<number>(2);

  useEffect(() => {
    async function loadCar() {
      if (!id) {
        return;
      }

      const docRef = doc(db, "cars", id);
      getDoc(docRef).then((snapshot) => {
        setCar({
          id: snapshot.id,
          name: snapshot.data()?.name,
          model: snapshot.data()?.model,
          city: snapshot.data()?.city,
          year: snapshot.data()?.year,
          km: snapshot.data()?.km,
          description: snapshot.data()?.description,
          created: snapshot.data()?.created,
          price: snapshot.data()?.price,
          owner: snapshot.data()?.owner,
          uid: snapshot.data()?.uid,
          whatsapp: snapshot.data()?.whatsapp,
          images: snapshot.data()?.images,
        });
      });
    }

    loadCar();
  }, [id]);

  useEffect(() => {
    function handleRezise() {
      if (window.innerWidth < 720) {
        setSliderPreview(1);
      } else {
        setSliderPreview(2);
      }
    }

    handleRezise();

    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  return (
    <Container>
      <Swiper
        slidesPerView={sliderPreview}
        pagination={{ clickable: true }}
        navigation
      >
        {car?.images.map((image) => (
          <SwiperSlide key={image.uid}>
            <img src={image.url} className="w-full h-96 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1>SLIDER</h1>

      {car && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col sm:flex-row mb-4 items-center justify-between">
            <h1 className="font-bold text-3xl text-black">{car?.name}</h1>
            <h1 className="font-bold text-3xl text-black">R$ {car?.price}</h1>
          </div>
          <p>{car?.model}</p>

          <div className="flex w-full gap-6 my-4">
            <div className="flex flex-col gap-4">
              <div>
                <p>Cidade</p>
                <strong>{car?.city}</strong>
              </div>
              <div>
                <p>Ano</p>
                <strong>{car?.year}</strong>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p>KM</p>
                <strong>{car?.km}</strong>
              </div>
            </div>
          </div>

          <strong>Descrição</strong>
          <p className="mb-4">{car?.description}</p>

          <strong>Telefone / Whatsapp</strong>
          <p className="mb-4">{car?.whatsapp}</p>

          <a className="bg-green-500 cursor-pointer w-full text-white flex items-center justify-center gap-2 my-6 h-11 text-xl rounded-lg font-medium">
            Conversar com o vendedor
            <FaWhatsapp size={26} color="#fff" />
          </a>
        </main>
      )}
    </Container>
  );
}
