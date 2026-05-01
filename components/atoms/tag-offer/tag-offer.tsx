import "./tag-offer.css";

export function TagOffer({ discount }: any) {
  if (!discount) return <></>;
  return <span className="tag-offer">{discount} off</span>;
}
