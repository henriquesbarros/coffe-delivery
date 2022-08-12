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
  removeCartItem: (cofeeeId: number) => void
  changeCartQuantity: (cofeeeId: number, type: 'add' | 'remove') => void
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

  function changeCartQuantity(coffeeId: number, type: 'add' | 'remove') {
    const newCart = cartItems.map((cartItem) => {
      if (cartItem.id === coffeeId) {
        return {
          ...cartItem,
          quantity:
            type === 'add' ? cartItem.quantity + 1 : cartItem.quantity - 1,
        }
      } else {
        return cartItem
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(coffeeId: number) {
    const coffeesFiltered = cartItems.filter((coffee) => coffee.id !== coffeeId)

    setCartItems(coffeesFiltered)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, removeCartItem, changeCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
