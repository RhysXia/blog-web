import Vue from 'vue'
import CRow from '~/components/grid/row'
import CCol from '~/components/grid/col'
import Message from '~/components/common/message'

export default () => {
  Vue.component('CRow', CRow)
  Vue.component('CCol', CCol)

  Vue.prototype.$message = Message
}
