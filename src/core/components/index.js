import MdButon from './mdButton'
import MdCard from './mdCard'
import MdFormGroupInput from './mdFormGroupInput'
import MdTab from './mdTab'
import MdWidget from './mdWidget'
import MdTable from './mdTable'

export default {
  install(Vue) {
    Vue.component(MdButon.name, MdButon)
    Vue.component(MdCard.name, MdCard)
    Vue.component(MdFormGroupInput.name, MdFormGroupInput)
    Vue.component(MdTab.name, MdTab)
    Vue.component(MdWidget.name, MdWidget)
    Vue.component(MdTable.name, MdTable)
  }
}
