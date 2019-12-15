declare module 'group-array-by' {
  function groupBy <T>(predicate: (item: T) => string | number, arr: Array<T>): { [key: string]: T[] };
  export = groupBy;
}
