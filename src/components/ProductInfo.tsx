const BUY_LINK = "https://your-shopify-product-link.com";

export default function ProductInfo() {
  return (
    <section className="productInfo">
      <div className="sectionIntro">
        <p className="kicker">The entire product line</p>
        <h2>This is 1 Grate Shirt.</h2>
        <p>
          It has a cheese grater on it. It has a dream. It may or may not be the
          foundation of the dumbest clothing empire on the internet.
        </p>
      </div>

      <div className="infoPanel">
        <div>
          <h3>What you get</h3>
          <ul>
            <li>A shirt</li>
            <li>A bad pun</li>
            <li>A conversation starter</li>
            <li>The satisfaction of supporting a terrible idea early</li>
          </ul>
        </div>

        <div>
          <h3>Common questions</h3>
          <div className="faqItem">
            <h4>Is this a real shirt?</h4>
            <p>Yes. Unfortunately.</p>
          </div>
          <div className="faqItem">
            <h4>Are you really trying to sell one million?</h4>
            <p>Yes, but emotionally we are prepared for seven.</p>
          </div>
          <div className="faqItem">
            <h4>Why?</h4>
            <p>Because the joke got this far and now we have a website.</p>
          </div>
        </div>
      </div>

      <div className="bottomBuy">
        <p>Ready to support the dumbest business plan on the internet?</p>
        <a href={BUY_LINK} className="buyButton">
          Buy 1 Grate Shirt
        </a>
      </div>
    </section>
  );
}