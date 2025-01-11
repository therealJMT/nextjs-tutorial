import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if(random ===1) {
    throw new Error("Error loading review")
  }
  const productId = await params.productId;
  const reviewId = await params.reviewId;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewId} for product {productId} 
        </h1>
      
    </>
  );
}
