/**
 * Created by Jaron Long on 2020/5/25
 */
import { Plugin } from '@nuxt/types'

const clientInitPlugin: Plugin = async ({ store }) => {
  store.dispatch('init')
}

export default clientInitPlugin
