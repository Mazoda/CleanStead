import { useEffect, useState } from "react";
import { ServicesTemplate } from "../../components/templates/ServicesTemplate";
import { getDocuments } from "../../Services/FirebaseService";
import { StatusHandler } from "../../components/atoms/StatusHandler";
import { ChooseUsTemplate } from "../../components/templates/ChooseUs";

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getServices = async () => {
      try {
        const rsns = await getDocuments("ChooseUs");
        setReasons(rsns as []);
      } catch (error) {
        setError(error as string);
      }
      setLoading(false);
    };
    getServices();
  }, []);

  useEffect(() => {
    setLoading(true);

    const getServices = async () => {
      try {
        const srvs = await getDocuments("Services");
        setServices(srvs as []);
      } catch (error) {
        setError(error as string);
      }
      setLoading(false);
    };
    getServices();
  }, []);

  return (
    <>
      {error ? (
        <StatusHandler content={error} height="20vh" />
      ) : loading ? (
        <StatusHandler content="Loading ..." height="20vh" />
      ) : services.length === 0 ? (
        <StatusHandler content={"No Products Found"} height="20vh" />
      ) : (
        <>
          <ServicesTemplate services={services} />
          <ChooseUsTemplate reasons={reasons} />
        </>
      )}
    </>
  );
}
