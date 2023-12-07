export const cutAddress = (address) => {
  // return address.split(',').slice(address.length-2, address.length-1).join(' ')
  const arr = address.split(',');
  const lastTwo = arr.slice(arr.length - 2, arr.length);
  return lastTwo;
};
