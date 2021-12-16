import { Button } from "ui";
import dynamic from "next/dynamic"

const CountryFlagSvg = ({ countryCode }: {countryCode: string}) => {
  const Component = dynamic(
    () => import(`country-flag-icons/react/3x2/${countryCode}`),
    { loading: () => <span className="fallback" /> }
  );
  return <Component />;
};
export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <CountryFlagSvg countryCode="US" />
    </div>
  );
}
