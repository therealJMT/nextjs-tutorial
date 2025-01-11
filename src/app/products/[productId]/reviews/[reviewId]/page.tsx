import { notFound, redirect } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const productId = await params.productId;
  const reviewId = await params.reviewId;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <>
      <h1>
        Review {reviewId} for product {productId} 
        </h1>
      
    </>
  );
}
