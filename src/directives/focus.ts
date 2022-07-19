const focus = {
  mounted(el: HTMLElement, binding: any) {
    el.focus();
    console.log(binding);
  },
};

export default focus;
