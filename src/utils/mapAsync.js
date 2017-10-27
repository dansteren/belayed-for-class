/**
 * Calls an asynchronous callback function on each element of an array,
 * and returns an array that contains the results.
 * @param thisArg the array to map over.
 * @param callbackfn A function that accepts up to three arguments.
 * The map method calls the callbackfn function one time for each element in the array.
 */
export async function mapAsync(array, callbackfn) {
  return await Promise.all(
    array.map((value, index, arr) => {
      return new Promise(async resolve => {
        resolve(await callbackfn(value, index, arr));
      });
    })
  );
}
