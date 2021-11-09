export const addProduct = product => ({
  type: 'product/add',
  payload: product,
});

export const deleteProduct = id => ({
  type: 'product/delete',
  payload: { id },
});
