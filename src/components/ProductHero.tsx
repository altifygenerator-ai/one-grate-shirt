import Image from "next/image";

const BUY_LINK = "https://1-grate-shirt.myshopify.com/products/unisex-garment-dyed-t-shirt?variant=59618531180625";

export default function ProductHero() {
  return (
    <section className="hero">
      <div className="heroImageWrap">
        <Image
          src="/images/grate-shirt-design.png"
          alt="1 Grate Shirt design"
          width={900}
          height={1080}
          priority
          className="heroImage"
        />
      </div>

      <div className="heroCopy">
        <p className="kicker">A dumb shirt with a dream</p>

        <h1>
          I tried to make <span>1 great shirt.</span>
          <br />
          I made <span>1 grate shirt</span> instead.
        </h1>

        <p className="heroText">
          Someone said if you make one great shirt, people will buy a million of
          them. Unfortunately, I heard “grate.”
        </p>

        <div className="buyBox">
          <p className="price">$27.92 + shipping</p>
          <a href={BUY_LINK} className="buyButton">
            Buy 1 Grate Shirt
          </a>
          <p className="buyNote">
            Printed on demand. Ships after production. No warehouse full of
            cheese grater shirts, yet.
          </p>
        </div>
      </div>
    </section>
  );
}