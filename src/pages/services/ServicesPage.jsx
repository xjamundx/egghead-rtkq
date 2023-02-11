import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { servicesLoading, servicesReceived } from "./servicesSlice";
import { Loader } from "../../components/Loader";
import * as api from "../../api";

export function ServicesPage() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.loading);
  const hasServices = useSelector((state) => state.services.hasServices);

  useEffect(() => {
    if (hasServices) return;
    dispatch(servicesLoading());
    api.getServices().then((services) => {
      dispatch(servicesReceived(services));
    });
  }, [dispatch, hasServices]);

  return (
    <div className="page">
      {loading || !hasServices ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <>
          <p>
            We are currently showing all {services.length} of our services.
            <br />
            To see a customized list please <Link to="/dogs">add a dog</Link>.
          </p>
          {services.map((service) => (
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
