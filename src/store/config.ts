import { defineStore } from 'pinia'

export const useConfigStore = defineStore({
  id: 'config', // id必填，且需要唯一
  state: () => {
    return {
      tagsList: ['tag1', 'tag2'],
      collapse: false,
    }
  },
  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
    delTagsItem(data) {
      this.tagsList.splice(data.index, 1);
    },
    setTagsItem(data) {
      this.tagsList.push(data)
    },
  },
})
