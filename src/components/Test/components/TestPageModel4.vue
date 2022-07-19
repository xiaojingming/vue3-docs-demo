<script lang='ts'>
import {
  defineComponent, h, reactive, ref, withModifiers,
} from 'vue';
import SubTestPageModel from './SubTestPageModel.vue';

export default defineComponent({
  components: {
    SubTestPageModel,
  },
  setup(props, context) {
    const { slots } = context;
    const ok = ref(true);
    const data = reactive(['backend', 'fontend']);
    return () => h(
      'div',
      {},
      [
        h(
          'span',
          {
            onClick() {
              ok.value = !ok.value;
            },
          },
          [ok.value ? 'xiaojingming' : 'xiao'],
        ),
        h(
          'div',
          [h(SubTestPageModel)],
        ),
        h(
          'div',
          (slots as any).title(),
        ),
        h(
          'ul',
          {},
          data.map((item) => h(
            'li',
            {
              onClick: withModifiers(() => {
                console.log('click');
              }, ['self']),
            },
            [
              h(
                'span',
                {
                  onClick: withModifiers(() => {
                    console.log('clicksssss');
                  }, ['stop']),
                },
                [item],
              ),
            ],
          )),
        ),
      ],
    );
  },
});
</script>
<style lang='scss' scoped>
</style>
