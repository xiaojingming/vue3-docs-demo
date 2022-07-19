import { ref, onMounted, onUnmounted } from 'vue';

function useMouse() {
  const x = ref(0);
  const y = ref(0);
  const mouseMove = (e: MouseEvent) => {
    x.value = e.x;
    y.value = e.y;
  };
  onMounted(() => {
    document.body.addEventListener('mousemove', mouseMove);
  });
  onUnmounted(() => {
    document.body.removeEventListener('mousemove', mouseMove);
  });
  return {
    x,
    y,
  };
}

export default useMouse;
