"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/globalRedux/store";
import { removeItem, updateItemQuantity } from "@/lib/slices/basketSlice";
import Link from "next/link";
import { MinusIcon, PlusIcon, ShoppingBagIcon, XIcon } from "lucide-react";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // Selectors for cart items and totals
  const items = useSelector((state: RootState) => state.basket.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.basket.totalQuantity
  );
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);

  // Handlers for item updates
  const handleRemoveItem = (id: number) => {
    dispatch(removeItem({ id }));
  };

  const handleUpdateItemQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    } else {
      handleRemoveItem(id);
    }
  };

  return (
    <div className="relative  cursor-pointer">
      {/* Cart Icon */}
      <div
        onClick={() => setOpen(true)}
        className="group -m-2 flex items-center p-2"
      >
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {totalQuantity}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </div>

      {/* Shopping Cart Drawer */}
      <Transition show={open}>
        <Dialog className="relative z-10" onClose={() => setOpen(false)}>
          {/* Overlay */}
          <Transition.Child
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Drawer Panel */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Cart Items */}
                        <div className="mt-8">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {items.map((item) => (
                              <li key={item.id} className="my-4">
                                <div className="flex justify-between gap-x-6 py-5">
                                  <div className="flex min-w-0 gap-x-4">
                                    <img
                                      alt={item.title}
                                      src={item.image}
                                      className="size-12 flex-none rounded-full bg-gray-50"
                                    />
                                    <div className="min-w-0 flex-auto">
                                      <p className="text-sm/6 font-semibold text-gray-900">
                                        {" "}
                                        {item.title}
                                      </p>
                                      <p className="mt-1 truncate text-xs/5 text-gray-500">
                                        Kes. {item.price}
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className="flex flex-1 items-end justify-between text-sm mx-6">
                                    <div className="flex items-center space-x-2">
                                      <button
                                        type="button"
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() =>
                                          handleUpdateItemQuantity(
                                            item.id,
                                            item.quantity - 1
                                          )
                                        }
                                      >
                                        <MinusIcon className="h-5 w-5" />
                                      </button>
                                      <p className="text-gray-500">
                                        Qty {item.quantity}
                                      </p>
                                      <button
                                        type="button"
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() =>
                                          handleUpdateItemQuantity(
                                            item.id,
                                            item.quantity + 1
                                          )
                                        }
                                      >
                                        <PlusIcon className="h-5 w-5" />
                                      </button>
                                    </div>
                                    <button
                                      type="button"
                                      className="font-medium text-red-600 hover:text-red-500"
                                      onClick={() => handleRemoveItem(item.id)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Cart Summary */}
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>Kes. {totalPrice.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Tax included.
                        </p>
                        <div className="mt-6">
                          <Link
                            href="/checkout"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or<span> </span>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping &rarr;
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ShoppingCart;
