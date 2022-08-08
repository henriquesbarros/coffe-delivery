import React, { createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

interface CartContextProviderProps {
  children: React.ReactNode
}

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  handleAddToCart: (
    coffee: Coffee,
    quantity: number,
    resetCoffeeQuantity: () => void,
  ) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(
    coffee: Coffee,
    quantity: number,
    resetCoffeeQuantity: () => void,
  ) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (coffeeAlreadyExistsInCart < 0) {
      setCartItems((state) => [
        ...state,
        {
          ...coffee,
          quantity,
        },
      ])
    } else {
      cartItems[coffeeAlreadyExistsInCart].quantity += quantity
    }

    resetCoffeeQuantity()
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  )
}
