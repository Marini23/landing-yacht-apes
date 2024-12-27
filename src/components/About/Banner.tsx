import "./About.css";

export const Banner: React.FC = () => {
  return (
    <section className="banner-container">
      <p className="text-question">diD yOu seE iT ?</p>
      <h1 className="title">YACHT APES</h1>
      <p className="text-info">Apes aRe eveRywhere</p>
      {/* <button type="button">MEET APES</button> */}
      <p className="text-description">
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
};
