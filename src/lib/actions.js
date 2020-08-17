// Creation des actions (valeurs: item ,quantity, product ) que l'on passe a reducers en payload
// Action (objet) est appelée par un  container dont la mission sera de mettre à jour l'interface en utilisant les actions et en récupérant les states
/*
 * action types
 * type est obligatoire pour chaque  action
 */
export const actions = {
   ADD_TO_CART: "ADD_TO_CART",
   UPDATE_CART: "UPDATE_CART",
   REMOVE_FROM_CART: "REMOVE_FROM_CART",
   SAVE_CART: "SAVE_CART",
   SAVE_PRODUCT: "SAVE_PRODUCT",
   RESET_CART: "RESET_CART",
   SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',

}

/*
 * Action creator
 */
const uid = () => Math.random().toString(34).slice(2)
export function addtoCart (item, quantity) {
   return {
      type: actions.ADD_TO_CART,
         // payload == action que l'on transfere
      payload: {id: uid(), quantity: quantity, details: item}
   }
}

export function updateCart (id, quantity) {
   return {
      type: actions.UPDATE_CART,
      payload: {id: id, quantity: quantity}
   }
}

export function removeFromCart (id) {
   return {
      type: actions.REMOVE_FROM_CART,
      payload: id
   }
}

// savegarde du panier dans le navigateur ( localStorage )
export function saveCart (items) {
   return {
      type: actions.SAVE_CART,
      payload: {items: items}
   }
}

export function resetCart () {
   return {
      type: actions.RESET_CART,
   }
}
// Save product => ./Shop_Product => recup product au refresh
export function saveProduct(product) {
   return {
      type: actions.SAVE_PRODUCT,
      payload: { product: product }
   }
}

export function openSidebar(visi) {
   return {
      type: actions.SET_VISIBILITY_FILTER,
      payload: {visi}
   }
}