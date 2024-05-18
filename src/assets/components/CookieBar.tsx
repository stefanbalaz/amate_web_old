import CookieConsent from "react-cookie-consent";

export default function CookieBar() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Rozumiem"
      cookieName="CookieConsent"
      containerClasses="cookie-container"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b" }}
      expires={150}
    >
      Ku prevádzkovaniu tohto webu a analýze návštevnosti používame súbory
      cookie. Používaním tohto webu s týmto vyjadrujete svoj súhlas.
    </CookieConsent>
  );
}
