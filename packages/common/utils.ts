export function isEmptyObj(obj): boolean {
  return !obj || Object.keys(obj).length === 0;
}
