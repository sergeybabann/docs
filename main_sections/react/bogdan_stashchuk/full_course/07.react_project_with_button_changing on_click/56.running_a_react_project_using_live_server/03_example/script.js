const App = (
    <div className="app">
        <button onClick="">
            Click me
        </button>
    </div>
)

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(App)