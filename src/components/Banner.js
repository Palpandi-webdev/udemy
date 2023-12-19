import sale from "../assets/images/sale.png";

function Banner() {
  return (
    <div className="sale-image">
      <img src={sale} alt="Sales Banner" />
      <div className="sale-offer">
        <h2>Mega Flash Sale!!!</h2>
        <p>Mega sale: get all books for 499rs - Offer ends today</p>
      </div>
    </div>
  );
}

export default Banner;
