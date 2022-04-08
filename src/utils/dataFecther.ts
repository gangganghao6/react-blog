import objectHash from 'object-hash';

let cache = {};

export function dataFecther(requestFn: Function, ...params: any[]): { read(): any } {
  // @ts-ignore
  const hash = objectHash.sha1(requestFn.name + params.toString());
  if (cache[hash]) {
    return {
      read() {
        return cache[hash];
      },
    };
  }
  let state = 'pending';
  let data = null;
  const promise = requestFn(...params).then(
    (res) => {
      state = 'resolved';
      data = res;
    },
    (err) => {
      state = 'rejected';
      data = err;
    },
  );
  return {
    read() {
      if (state === 'pending') {
        throw promise;
      } else if (state === 'rejected') {
        throw data;
      } else {

        // @ts-ignore
        if (requestFn.name !== 'getBlogDetail' && requestFn.name !== 'getAlbumDetail') {
          cache[hash] = data;
        }
        return data;
      }
    },
  };
}
