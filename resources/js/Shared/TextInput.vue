<template>
  <div class="col-span-6 sm:col-span-4 relative" :class="{ 'mb-2': size != 'small' }">
    <tec-label v-if="label" :for="id" :value="label" />
    <tec-input
      :id="id"
      ref="input"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      class="block w-full"
      @focus="$emit('focus')"
      :placeholder="placeholder || label"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{ 'border-red-500 input-error': errors, 'py-0 pr-0 h-8': size == 'small', 'mt-1': label }"
    />
    <tec-input-error v-if="errors" :message="Array.isArray(errors) ? errors.join(', ') : errors" class="absolute mt-0" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import TecLabel from '@/Jetstream/Label.vue';
import TecInput from '@/Jetstream/Input.vue';
import TecInputError from '@/Jetstream/InputError.vue';

export default {
  emits: ['update:modelValue'],
  components: { TecLabel, TecInput, TecInputError },
  props: {
    id: {
      type: String,
      default() {
        return uuidv4();
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    size: String,
    label: String,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    errors: [String, Array],
    modelValue: [String, Number],
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
  },
};
</script>
