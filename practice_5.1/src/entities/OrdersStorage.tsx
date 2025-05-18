import { CartItem, Order } from '@/types';
import { createMachine, assign } from 'xstate';

export const orderMachine = createMachine({
  types: {} as {
    context: {
      orders: Order[];
      currentOrder: Order | null;
    };
    events: {
      type: 'PLACE_ORDER';
      items: CartItem[];
      address?: string;
    };
  },
  id: 'order',
  initial: 'idle',
  context: {
    orders: [],
    currentOrder: null
  },
  states: {
    idle: {
      on: {
        PLACE_ORDER: {
          target: 'processing',
          actions: assign({
            currentOrder: ({ event }) => ({
              id: Date.now().toString(),
              items: event.items,
              date: new Date().toISOString(),
              total: event.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
              address: event.address
            })
          })
        }
      }
    },
    processing: {
      entry: assign({
        orders: ({ context }) => [...context.orders, context.currentOrder!],
        currentOrder: null
      }),
      after: {
        2000: 'success'
      }
    },
    success: {
      after: {
        2000: "idle",
      },
    }
  }
});