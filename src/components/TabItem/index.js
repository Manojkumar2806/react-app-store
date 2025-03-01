import './index.css'

const TabItem = props => {
  const {eachTab, getcategory, isequal} = props

  const onclickpra = () => {
    getcategory(eachTab.tabId)
  }

  const specialclass = isequal ? 'btn-special' : ''

  return (
    <li className="margincontaienr">
      <button type="button" onClick={onclickpra} className={`${specialclass}`}>
        {eachTab.displayText}
      </button>
    </li>
  )
}

export default TabItem
