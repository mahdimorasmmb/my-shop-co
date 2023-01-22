import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Currency from "react-currency-formatter";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Button from "../widgets/Button";
import { CheckoutProduct } from "../widgets/CheckoutProduct";
import { useCheckoutStore } from "../store";


const Checkout = () => {
  const router = useRouter();
  const items = useCheckoutStore((state) => state.items);
  const basketTotal = useCheckoutStore((state) =>
    state.items.reduce((total, product) => (total += product.price * product.quantity), 0)
  );

  // const [loading, setLoading] = useState(false);

  // console.log(basketTotal);

  // useEffect(() => {
  //   const groupedItems = items.reduce((results, item) => {
  //     (results[item.id] = results[item.id] || []).push(item);
  //     return results;
  //   }, {} as { [key: string]: Product[] });

  //   setGroupedItemsInBasket(groupedItems);
  // }, [items]);

  // const createCheckoutSession = async () => {
  //   setLoading(true);

  //   const checkotSession: Strip.Checkout.Session = await fetchPostJSON(
  //     "/api/checkout_sessions",
  //     {
  //       items: items,
  //     }
  //   );

  //   if ((checkotSession as any).statusCode === 500) {
  //     console.error((checkotSession as any).message);
  //     return;
  //   }

  //   const stripe = await getStripe();

  //   const { error } = await stripe!.redirectToCheckout({
  //     sessionId: checkotSession.id,
  //   });

  //   console.warn(error.message);

  //   setLoading(false);
  // };

  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-[#E7ECEE]">
      <Head>
        <title>سبد خرید | فرش پدیده</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "سبد خرید شما" : "سبد خرید شما خالی است!"}
          </h1>
          {/* <p className="my-4">Free delivery and free returns</p> */}

          {items.length === 0 && (
            <Button
              title="  می‌توانید برای مشاهده محصولات بیشتر کلیک کنی"
              onClick={() => router.push("/")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
           {
            items.map((product) => {
              return  <CheckoutProduct key={product.id} product={product} id={product.id} />
            })
           }
            <div className="my-12 mt-6 ml-auto max-w-3xl ">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  {/* <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p><Currency currency="irr" quantity={basketTotal} /></p>
                  </div> */}
                  {/* <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>Free</p>
                  </div> */}
                  {/* <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:{" "}
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Enter zip code
                        <ChevronDownIcon className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$ - </p>
                  </div> */}
                  <div className="flex justify-between pt-4 text-xl font-semibold">
                    <h4>جمع کل </h4>
                    <h4>
                      <Currency currency="irr" quantity={basketTotal} />
                    </h4>
                  </div>
                </div>
                {/* <div className="my-14 space-y-4">
                  <h4 className="text-xl font-semibold mt-2">
                  انتخاب روش پرداخت
                  </h4>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center ">
                      <h4 className="mb-4 flex flex-col text-xl font-semibold">
                        <span>Pay Monthly</span>
                        <span>with Apple Card</span>
                        <span>
                          $283.16/mo. at 0% APR <sub className="-top-1"></sub>
                        </span>
                      </h4>
                      <Button title="Check Out with Apple Card Monthly Installmnts" />
                      <p className="mt-2 max-w-[240px] text-[13px]">
                        $0.00 due today, which includes applicable full-price
                        items, down payments, shipping, and taxes.
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2 ">
                      <h4 className="mb-4 flex flex-col text-xl font-semibold">
                        Pay in Full{" "}
                        <span><Currency quantity={basketTotal} /></span>
                      </h4>
                      <Button
                        loading={loading}
                        noIcon
                        title="Check Out"
                        width="w-full"
                        onClick={createCheckoutSession}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
