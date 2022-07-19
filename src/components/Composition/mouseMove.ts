/* eslint-disable import/prefer-default-export */
import { ref, onMounted, onUnmounted } from 'vue';

function subCurry(fn: Function, ...res: any[]) {
  return function f(this: any, ...params: any[]) {
    return fn.apply((this), res.concat(params));
  };
}
function curry(fn: Function, length = fn.length) {
  return function f(this: any, ...res: any[]) {
    if (length <= res.length) {
      return fn.apply(this, res);
    }
    const params: [f: Function, ...res2: any[]] = [fn, ...res];
    return curry.call(this, subCurry(...params), length - res.length);
  };
}
function eventListener(target: any, event: string, callback: Function) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
const cEventListener = curry(eventListener)(window);
function useMouseMove() {
  const x = ref(0);
  const y = ref(0);
  cEventListener('mousemove')((e: MouseEvent) => {
    x.value = e.x;
    y.value = e.y;
  });
  return {
    x,
    y,
  };
}
export default useMouseMove;
