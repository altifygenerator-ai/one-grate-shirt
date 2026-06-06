const BUY_LINK = "https://1-grate-shirt.myshopify.com/products/unisex-garment-dyed-t-shirt?variant=59618531180625";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 1 Grate Shirt. A dumb shirt with a dream.</p>
      <a href={BUY_LINK}>Buy the shirt</a>
    </footer>
  );
}