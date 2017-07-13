import MdButon from './mdButton'
import MdCard from './mdCard'
import MdFormGroupInput from './mdFormGroupInput'
import MdTab from './mdTab'
import MdStatsWidget from './mdStatsWidget'
import MdTable from './mdTable'
import MdBlockquote from './mdBlockquote'
import MdChartWidget from './mdChartWidget'

export default {
  install(Vue) {
    Vue.component(MdButon.name, MdButon)
    Vue.component(MdCard.name, MdCard)
    Vue.component(MdFormGroupInput.name, MdFormGroupInput)
    Vue.component(MdTab.name, MdTab)
    Vue.component(MdStatsWidget.name, MdStatsWidget)
    Vue.component(MdTable.name, MdTable)
    Vue.component(MdBlockquote.name, MdBlockquote)
    Vue.component(MdChartWidget.name, MdChartWidget)
  }
}
