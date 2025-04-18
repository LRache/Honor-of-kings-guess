import './App.css';
import { useEffect, useState } from 'react';
import { AutoComplete, Button } from 'antd';

const DATABASE = [
    {name: "幻舞玲珑 公孙离", type: "射手"},
    {name: "肃归之戈 大司命", type: "战士"}
]

const NAMES = DATABASE.map(item => item.name);

function App() {
    useEffect(() => {
        document.title = "王者荣耀英雄猜猜猜"
    })
    const [guess, setGuess] = useState("");

    const handleGuess = () => {
        if (NAMES.find(name => name === guess) !== -1) {
            
        }
    }
    
    return (
        <div className="App">
            <div>
                <div className="title-text">王者荣耀英雄猜猜猜</div>
                <div className="guess-box">
                    <div className="tip-text">输入英雄中文名 / 中文称号(按回车进行猜测)：</div>
                    <AutoComplete
                        style={{
                            width: "100%",
                            fontSize: "20px",
                        }}
                        placeholder="请输入英雄中文名 / 中文称号，如幻舞玲珑公孙离"
                        options={NAMES.map(name => ({value: name}))}
                        filterOption={(inputValue, options) =>
                            options.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        onChange={(value) => {
                            setGuess(value);
                        }}
                    />
                    <Button 
                        style={{
                            marginTop: "15px",
                            fontSize: "20px",
                        }}
                        onClick={handleGuess}
                    >猜一猜试试看</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
