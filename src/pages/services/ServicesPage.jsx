import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <h1>Services</h1>
      {loading || !hasServices ? (
        <>
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : (
        <>
          <p>We are currently showing {services.length} services</p>
          <ul>
            {services.map((service) => {
              return <li>{service}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}
