import { ProductDemo } from "./interfaces";

async function getProductsDemo(
  urlApi: string
): Promise<string | ProductDemo[]> {
  const url = new URL(`${urlApi}`);
  try {
    const response = await fetch(url.href);

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      return "Error: Response not OK";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Error fetching data";
  }
}

export async function maperGetProductsDemo(
  urlApi: string
): Promise<ProductDemo[]> {
  const data = await getProductsDemo(urlApi);

  if (typeof data === "string") {
    console.error(data);
    return [];
  }

  const products = data.map((product: ProductDemo) => ({
    id: product.id,
    displayTitle: product.displayTitle,
    embeddingText: product.embeddingText,
    url: product.url,
    shopifyProductId: product.shopifyProductId,
    imageUrl: product.imageUrl,
    productType: product.productType,
    discount: product.discount,
    variants: product.variants,
  }));

  return products;
}
