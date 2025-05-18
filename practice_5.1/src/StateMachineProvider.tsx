"use client"

import { ReactNode, createContext } from 'react';
import { useMachine } from '@xstate/react';
import { orderMachine } from '@/entities/OrdersStorage';
import { OrderContextType } from './types';

export const OrdersContext = createContext<OrderContextType | null>(null);

export const OrdersProvider = ({ children }: {children: ReactNode}) => {
  const [state, send] = useMachine(orderMachine);

  return (
    <OrdersContext.Provider value={{ state, send }}>
      {children}
    </OrdersContext.Provider>
  );
};