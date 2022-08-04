import React, { createContext, useState } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cartQuantity: number
  handleAddToCart: (quantity: number, resetCoffeeQuantity: () => void) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartQuantity, setCartQuantity] = useState<number>(0)

  function handleAddToCart(quantity: number, resetCoffeeQuantity: () => void) {
    setCartQuantity((state) => state + quantity)
    resetCoffeeQuantity()
  }

  return (
    <CartContext.Provider value={{ cartQuantity, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  )
}
