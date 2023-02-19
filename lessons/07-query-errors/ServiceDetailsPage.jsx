import { useParams } from "react-router";
import { Loader } from "../../components/Loader";
import { useGetServiceQuery } from "../../store/apiSlice";

export function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const { data: service, isLoading, error } = useGetServiceQuery(serviceId);
  return (
    <div className="page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <h1>
            ({error.status}) Could not find service: {serviceId}
          </h1>
          <p className="error">{error.data.message}</p>
        </>
      ) : (
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
      )}
    </div>
  );
}
