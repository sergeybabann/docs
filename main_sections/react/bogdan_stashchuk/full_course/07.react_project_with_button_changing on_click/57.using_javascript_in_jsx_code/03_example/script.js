const buttonText = 'Click me'
const App = (
    <div className="app">
        <button onClick="">{buttonText}</button>
    </div>
)

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(App)