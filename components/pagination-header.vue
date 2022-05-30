<template>
  <div class="pagination-header">
    <div class="cover">
      <h3 class="title">{{ $t(title) }}</h3>

      <h5>{{ subTitle }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subTitle"],
};
</script>