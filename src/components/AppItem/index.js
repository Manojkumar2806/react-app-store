import './index.css'

const AppItem = props => {
  const {eachApp} = props
  return (
    <li className="eachContaienr">
      <img src={eachApp.imageUrl} alt={eachApp.appName} />
      <p>{eachApp.appName}</p>
    </li>
  )
}

export default AppItem
