import { ProductProps } from "../common";

const data: any = [
  {
    type: "11",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/1_e5c26f6d-4282-45ed-97b6-1ecb1720769d_large.jpg?v=1615356234",
    title: "The Little Book of Spells",
    amount: "39",
  },
  {
    type: "9",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/2_dd1cc310-afb7-4002-b6c5-e1aa68cfe580_large.jpg?v=1615356154",
    title: "Dummy Product name",
    amount: "79",
  },
  {
    type: "5",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/15_9d7230c8-f83f-42b0-b34f-9a9c20253a81_large.jpg?v=1615356026",
    title: "The Good Karma Tarot",
    amount: "50",
  },
  {
    type: "2",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/14_b7c76dce-46c9-40a6-b765-7d0d81585199_large.jpg?v=1615356016",
    title: "Create Your Own",
    amount: "80",
  },
  {
    type: "1",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/7_daae65e9-0df3-4c50-90f9-36699e2f6e64_large.jpg?v=1615356144",
    title: "The Green Spell Book",
    amount: "19",
  },
  {
    type: "7",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/8_29068a26-5f1a-4af8-b590-566d07420ed2_large.jpg?v=1615356186",
    title: "Dummy text for title",
    amount: "70",
  },
  {
    type: "22",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/9_0e1b5b15-f609-4bd2-8628-3a3eb6854d0f_large.jpg?v=1615356269",
    title: "Acheive my life Goal in 3years",
    amount: "1000",
  },
  {
    type: "2",
    image:
      "https://nokshi-2.myshopify.com/cdn/shop/products/8_29068a26-5f1a-4af8-b590-566d07420ed2_large.jpg?v=1615356186",
    title: "Dummy text For title",
    amount: "39",
  },
];

const Product = () => {
  return (
    <div className="w-full mt-24 mb-24 flex justify-center items-center flex-wrap">
      {data?.map((values: any) => (
        <ProductProps
          amount={values.amount}
          image={values.image}
          title={values.title}
          type={values.type}
        />
      ))}
    </div>
  );
};

export default Product;
