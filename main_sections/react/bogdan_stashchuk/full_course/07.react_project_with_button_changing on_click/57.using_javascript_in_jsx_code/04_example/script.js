const buttonText = 'Click me please'
const App = (
    <div className="app">
        <button onClick="">{buttonText}</button>
    </div>
)

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(App)