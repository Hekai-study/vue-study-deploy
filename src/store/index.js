import { createPinia, storeToRefs } from 'pinia'
import useMainStore from './main-store'
import useTestStore from './test-store'
import useUserStore from './user-store'

const store = createPinia()

export { store, useMainStore, useTestStore, useUserStore, storeToRefs }
