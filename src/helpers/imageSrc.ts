import { env } from "../env/client.mjs";

const assetsUrl = env.NEXT_PUBLIC_ASSETS_URL;

export const imageSrc = (product: Product, indexImage = 0) => {
  return `${assetsUrl}/${product.product_image[indexImage]?.directus_files_id.id}`;
};
