import MainPicture from "./MainPicture";

export default function Impresum() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <MainPicture />
      </div>
      <div className="row">
        <div className="col-lg-8 col-9 mx-auto mb-4">
          <h1 className="headline-1 mb-3">IMPRESUM</h1>
          <article className="text-1 mb-3">
            AMATE je značka 3-Logy s.r.o. | 951 62 Nevidzany 187 | IČO: 50 776
            231, IČ DPH: SK2120460144 podľa §4
            <br />
            Zapísaná na Nitra, odd. Sro, vl.č.42737/N, dátum vzniku: 7. marca
            2017
            <br /> <br />
            Kontakt: www.amate.sk | info@amate.sk | Ing. Juraj Baláž | +421 (0)
            911 561 885
            <br /> <br />
            3-Logy – Made with love in Slovakia
            <br />
            <br />© All rights reserved.
          </article>
        </div>
      </div>
    </div>
  );
}
