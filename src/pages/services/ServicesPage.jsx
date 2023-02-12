import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuckyDog } from "../dogs/LuckyDog";
import {
  servicesLoading,
  servicesReceived,
  getServicesForLuckyDog,
} from "./servicesSlice";
import { Loader } from "../../components/Loader";
import * as api from "../../api";

export function ServicesPage() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.loading);
  const hasServices = useSelector((state) => state.services.hasServices);
  const myDogs = useSelector((state) => state.dogs.myDogs);
  const luckyDog = useSelector((state) => state.dogs.luckyDog);
  const myServices = useSelector(getServicesForLuckyDog);

  console.log({ myDogs, luckyDog });

  useEffect(() => {
    if (hasServices) return;
    dispatch(servicesLoading());
    api.getServices().then((services) => {
      dispatch(servicesReceived(services));
    });
  }, [dispatch, hasServices]);

  return (
    <div className="page">
      <h1>Services</h1>
      {loading || !hasServices ? (
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
                We are currently showing all {services.length} of our services.
              </p>
              <p>To see a customized list please select a lucky dog below.</p>
              <LuckyDog />
            </>
          )}
          {myServices.map((service) => (
            <div className="card" key={service.id}>
              <img src={service.imageSrc} alt={service.imageAlt} />
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
