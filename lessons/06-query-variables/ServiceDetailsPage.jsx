import { useParams } from "react-router";
import { useGetServiceQuery } from "../../store/apiSlice";

export function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const { data: service } = useGetServiceQuery(serviceId);
  return (
    <div className="page">
      {!service ? (
        <>
          <h1>Service Details</h1>
          <p>Could not find service {serviceId}</p>{" "}
        </>
      ) : null}
      {service ? (
        <>
          <h1>{service.title} Service</h1>
          <div className="card">
            <img src={service.imageSrc} alt={service.imageAlt} />
            <div className="cardContents">
              <h3>${service.price}</h3>
              <p>{service.description}</p>
              <div className="restrictions">
                <h3>Restrictions:</h3>
                <dl>
                  {Object.entries(service.restrictions).map(
                    ([key, details]) => (
                      <>
                        <dt>{key}:</dt>
                        <dd>
                          {Array.isArray(details)
                            ? details.join(", ")
                            : details}
                        </dd>
                      </>
                    )
                  )}
                </dl>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
