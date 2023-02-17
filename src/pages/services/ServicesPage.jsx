import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuckyDog } from "../dogs/LuckyDog";
import { getServicesForLuckyDog } from "./servicesSlice";
import { Loader } from "../../components/Loader";
import { useGetServicesQuery, useGetDogsQuery } from "../../store/apiSlice";

export function ServicesPage() {
  const { data: services, isLoading: isLoadingServices } =
    useGetServicesQuery();
  const { data: myDogs, isLoading: isLoadingDogs } = useGetDogsQuery();
  const luckyDog = useSelector((state) => state.dogs.luckyDog);
  const myServices = useSelector((state) =>
    getServicesForLuckyDog(state, services, myDogs)
  );

  return (
    <div className="page">
      <h1>Services</h1>
      {isLoadingServices || isLoadingDogs ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <>
          {Object.values(myDogs).length === 0 ? (
            <p>
              We are currently showing all {services.length} of our services.
              <br />
              To see a customized list please <Link to="/dogs">add a dog</Link>.
            </p>
          ) : luckyDog ? (
            myServices.length > 0 ? (
              <>
                <p>
                  Showing{" "}
                  <b>
                    {myServices.length}/{services.length}
                  </b>{" "}
                  services available for <b>{myDogs[luckyDog].name}</b>
                </p>
                <LuckyDog />
              </>
            ) : (
              <>
                <p>
                  Unfortunately, <b>{myDogs[luckyDog].name}</b> doesn&apos;t
                  qualify for any of our services. Guess they&apos;re not such a
                  lucky dog after all. Please select another dog if you have
                  one.
                </p>
                <LuckyDog />
              </>
            )
          ) : (
            <>
              <p>
                We are currently showing all {services.length} of our services.
              </p>
              <p>To see a customized list please select a lucky dog below.</p>
              <LuckyDog />
            </>
          )}
          {myServices.map((service) => (
            <div className="card" key={service.id}>
              <Link to={`/services/${service.id}`}>
                <img src={service.imageSrc} alt={service.imageAlt} />
              </Link>
              <div className="cardContents">
                <h3>{service.title}</h3>
                <h4>${service.price}</h4>
                <p>{service.description}</p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
